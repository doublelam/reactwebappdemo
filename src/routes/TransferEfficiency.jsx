import React from 'react';
import {
  Input,
  Row,
  Col,
  Button,
  TreeSelect,
  Table,
  DatePicker,
  TimePicker,
  Pagination,
  Icon,
  message,
  Tooltip,
  Select,
  Tree,
  Form
} from "antd";
import { QueryHeader } from '../components/QueryHeader';
import classNames from "./SalesMan.less";
import publicStyles from '../publicStyles/contentStyles.less';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Link } from "dva/router";
import { ConfigureInfo, QUERY_INFO } from '../configInfo/ConfigureInfo';
// import { SimulateAjax } from '../simulateAjax/simulateAjax';
import { ObjOperate } from '../utils/objOperate';
import { get, post } from '../utils/ajax';
import { InfoCount } from '../components/InfoCount';
const { MonthPicker, RangePicker } = DatePicker;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const TreeNode = Tree.TreeNode;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
moment.locale('zh-cn');

export default Form.create()(class TransferEfficiency extends React.Component {
  constructor(props) {
    //构造函数
    super(props);//调用父类构造函数
    this.state = {
      data: [],//列表数据源
      pagination: {
        total: 0,
        pageSize: 10,
        current: 1,
        pageIndex: 1
      },//分页数据
      loading: false,//加载状态,
      dayMoon: ['', 'primary'],//年月按钮样式切换
      dataFormat: {
        type: 'month',
        format: 'YYYY-MM-DD'
      },
      dataString: [moment().date() === 1 
        ? moment().subtract(1,'months').startOf('month') 
        : moment().startOf('month'), moment().endOf('month')],//时间参数
      districtVal: [],//选择区域树组
      treeList: [],//区域check树组
      selectRegion: ['primary', '', '', ''],//tab状态
      tableTitle: [],//表头树组
      tableCheck: [],//table选中树组
      partyNameFilt: ''
    };
    this.tabObj = {
      url: 'JobShippingStatusStats_TF_D',
      text: '全部'
    }//记录tab选项 接口地址
    this.tableWid = 100;//table每列宽度
    this.tableLiLen = 0;//计算列数 用于横向滚动条宽度
    this.fixedName = 'region&wayport&partyName&dataTime';//那些字段需要固定左边不动
    this.upData = {};
    this.upData.orderBy = 'dataTime'
    this.upData.orderRule = 'DESC'
  }
  componentWillMount() {
    //首次加载
    this.langTime = [this.state.dataString[0].format('YYYY-MM-DD'), this.state.dataString[1].format('YYYY/MM/DD')];
    this.query();
  }
  /***************初始化及生命周期相关 end***************/

  /***************查询相关 start***************/
  getPost(obj) {
    //请求判断post get
    if (obj.ajaxType == 'get') {
      get(obj.url, obj.data).then(data => {
        obj.callback(data);
      })
    } else {
      post(obj.url, obj.data).then(data => {
        obj.callback(data);
      })
    }
  }
  madeTreeList(list) {
    //创建地区树状选择插件
    list.forEach((item, i) => {
      item.label = item.unitName;
      item.value = item.unitName;
      item.key = item.aclUnitId;
      if (item.childrenList) {
        item.children = item.childrenList;
        this.madeTreeList(item.children)
      }
    })
    if (this.upData.tabIndex < 2) {
      if (list[0].unitLevel == 1) {
        list = list[0].children;

      }
      list.forEach((item, i) => {
        if (item.children) delete item.children;
      })
    }
    return list;
  }


  query(params) {
    console.log('_query', params)
    //发起查询
    //areaConditions
    let obj = params || {};
    let current = (params && params.current) || 1;//页数，默认1，可传入指定（点击分页时会传入）
    this.state.pagination.current = current;//点击查询后 返回第一页
    let pageSize = (params && params.pageSize) || this.state.pagination.pageSize;//条数，一页
    obj.pageIndex = current;
    var upTime = [];
    var timeFormat = obj.tabObj && obj.tabObj.format || this.state.dataFormat.format;
    upTime[0] = this.state.dataString[0].format(timeFormat);
    upTime[1] = this.state.dataString[1].format(timeFormat);

    let timeFilterObj = [{
      field: 'dataTime',
      symbol: 'GTOEQ',
      relation: 'AND',
      value: upTime[0]
    }, {
      field: 'dataTime',
      symbol: 'LTOEQ',
      relation: 'AND',
      value: upTime[1]
    }];
    if (this.upData && this.upData.tabIndex === 3 && this.state.partyNameFilt !== '') {
      timeFilterObj.push({
        field: 'partyName',
        symbol: 'CT',
        relation: 'AND',
        value: this.state.partyNameFilt
      })
    }
    obj.timeFilterItems = JSON.stringify(timeFilterObj)

    if (params && params.out) {
      this.outData(obj.timeFilterItems, params.out);//导出exccal
    } else {
      this.fetch({
        pageSize: pageSize,
        pageNo: current,
        ...obj
      });
    }
  }
  fetch(params = {}) {
    //发起请求
    this.setState({ loading: true });//请求状态
    let param = {};
    param.url = 'statistics/' + (params.tabUrl || 'JobShippingStatusStats_TF_D') + '/commonquery';
    param.data = {
      orderRule: 'DESC',
      orderBy: 'dataTime',
      ...params
    };
    this.upData = params
    param.ajaxType = 'post';
    param.callback = (data) => {
      if (!data.success) {
        message.warn(data.message);//异常提示
        this.setState({ loading: false });//关闭请求状态
        return;
      } else {
        this.tabObj.url = params.tabUrl || 'JobShippingStatusStats_TF_D';
        //分页处理
        this.tableLiLen = 0;
        const pagination = this.state.pagination;
        pagination.total = data.module.dataCount / 1;
        // //对返回的数据处理
        // for (let i = 0; i < data.module.dataList.length; i++) {
        //   let item = data.module.dataList[i];
        //   //返回数据key处理（必须）
        //   item.key = item.jobShippingStatusStatsId / 1;
        // }

        if (data.module.queryInfoVO.authorityList != null) {
          var treeList = this.madeTreeList(data.module.queryInfoVO.authorityList);
        } else {
          var treeList = [];
        }//区域空间 数据源



        this.madeTable(data.module.columnList)//表头处理

        //tab选中状态处理
        var tabList = [];
        for (var i = 0; i < this.state.selectRegion.length; i++) {
          tabList.push(i == (params.tabIndex || 0) ? 'primary' : '');
        }

        var dataFormat = params.tabObj || { type: 'month', format: 'YYYY-MM-DD' };//记录时间格式

        this.setState({
          loading: false,//关闭请求状态
          data: data.module.dataList,//列表数据放入
          selectRegion: tabList,//记录选择样式
          treeList: treeList,//区域空间数据源
          dataFormat: dataFormat,//记录时间格式
          dayMoon: dataFormat.format == 'YYYY-MM-DD' ? ['primary', ''] : ['', 'primary'],//日选学则tab样式
          tableCheck: [],//清空选择数列
        });

        if (this.upData.orderRule) {
          this.upData.orderRule = 'DESC';
          this.upData.orderBy = 'dataTime';
        }
      }
    }
    this.getPost(param)
  }
  /***************查询相关 end***************/


  /***************其他 start***************/
  changeDayMoon(index) {
    //时间按钮切换样式以及时间格式切换
    var obj, dataFormat;
    if (index == 0) {
      obj = { day: 'primary', moon: '' };
      dataFormat = {
        type: 'day',
        format: 'YYYY-MM-DD'
      }
    } else {
      obj = { day: '', moon: 'primary' };
      dataFormat = {
        type: 'month',
        format: 'YYYY-MM'
      }
    }
    this.setState({
      dayMoon: obj,
      dataFormat: dataFormat
    })

  }
  treeOnChange(value, label, extra) {
    //区域选择请求
    var upValue = this.upData.tabIndex > 1 ? value : [extra.triggerValue];
    var that = this;
    this.upData.areaConditions = JSON.stringify(value);
    this.setState({ districtVal: value }, function () {
      that.query(this.upData);
    });
  }
  selectRegion(index, url, text) {
    //选择tab的操作改变url以及选项卡选中外观
    this.tabObj.url = url;
    this.query({
      index: index,
      text: text
    });
  }
  madeTable(list) {
    //创建表头
    var tableList = [];
    var text = '';
    var num = -1;
    list.forEach((item, i) => {
      if (item.displayName.indexOf('€') != -1) {
        var name = item.displayName.split('€');
        var childrenList = [];
        if (name[0] != text) {
          text = name[0];
          tableList.push({
            title: name[0],
            children: []
          })
          num++;
        }
        tableList[num].children.push({
          title: <Tooltip title={item.remark}>{name[1]}</Tooltip>,
          dataIndex: item.columnName,
          key: item.columnName,
          width: this.tableWid,
          sorter: true
        })

        this.tableLiLen++;
      } else {
        var obj = {
          title: <Tooltip title={item.remark}>{item.displayName}</Tooltip>,
          dataIndex: item.columnName,
          key: item.columnName,
          width: this.tableWid,
          sorter: true
        }
        if (this.fixedName.indexOf(item.columnName) != -1) {
          obj.fixed = 'left';
        }
        if (item.columnName == 'partyName') {
          obj.width = 3 * this.tableWid;
          this.tableLiLen += 2;
        }
        tableList.push(obj);
        num++;
        this.tableLiLen++;
      }
    })
    this.setState({ tableTitle: tableList })
  }
  tableSort(pagination, filters, sorter) {
    //排序请求
    this.upData.orderRule = sorter.order == 'ascend' ? 'ASC' : 'DESC';
    this.upData.orderBy = sorter.columnKey;
    this.upData.current = pagination.current;
    this.upData.pageSize = pagination.pageSize;
    // this.state.pagination.pageSize = pageSize;
    // this.query({ current: current, pageSize: pageSize })
    this.query(this.upData)
  }
  tableCheck(selectedRowKeys, selectedRows) {
    this.selectedRowKeys = selectedRows.map(val => val.jobShippingStatusStatsId)
    this.setState({ tableCheck: selectedRowKeys })
  }
  timeChange(data, dataString) {
    //选择时间
    var that = this;
    this.setState({ dataString: data }, function () { that.query(that.upData) });
    //this.langTime = [data[0].format('YYYY/MM/DD'),data[1].format('YYYY/MM/DD')];

  }
  outData(timeFilterItems, type) {
    //导出数据
    if (type != 'all' && this.state.tableCheck.length == 0) {
      message.warn('未选择任何数据，请选择数据后再导出');
      return;
    }
    var data = type == 'all' ? '/downloadAll?timeFilterItems=' + timeFilterItems : '/downloadPart?selectedList=' + JSON.stringify(this.selectedRowKeys);
    var url = '/skynet/statistics/' + this.tabObj.url + data;
    window.open(url)
  }
  btnChange(obj) {
    //tab切换更新数据
    var that = this;
    this.upData.tabIndex = obj.tabIndex;
    this.upData.tabUrl = obj.tabUrl;
    this.setState({
      districtVal: []
    }, function () {
      delete that.upData.areaConditions
      that.query(this.upData)
    })

    //
  }
  /***************其他 end***************/

  render() {
    const { getFieldProps } = this.props.form;
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    //分页
    const pagination = {
      total: parseInt(this.state.pagination.total),
      showTotal: total => `共 ${total} 条`,
      current: this.state.pagination.current,
      showSizeChanger: true,
      showQuickJumper: true,
      pageSizeOptions: ['10', '30', '50', '100', '200'],
      // onShowSizeChange: (current, pageSize) => {
      //   this.state.pagination.pageSize = pageSize;
      //   this.query({ current: current, pageSize: pageSize })
      // }
    };
    console.log('treedata', this.state.treeList);
    const tProps = {
      treeData: this.state.treeList,
      value: this.state.districtVal,
      onChange: this.treeOnChange.bind(this),
      multiple: true,
      showCheckedStrategy: TreeSelect.SHOW_CHILD,
      treeCheckable: true,
      searchPlaceholder: '选择区域',
      style: {
        minWidth: 160,
        maxWidth: 420
      }
    };
    const rowSelection = {
      onChange: this.tableCheck.bind(this),
      selectedRowKeys: this.state.tableCheck
    };
    return (
      <section className={publicStyles.section}>
        <QueryHeader style={{
          display: 'block',
          overflow: 'auto',
          padding: '15px'
        }}>
          <div className={publicStyles.paddingWith} style={{ 'float': 'left' }}>
            <span>时间范围：</span>
            <RangePicker
              ranges={{
                '本月': [moment().startOf('month'), moment().endOf('month')],
                '上月': [moment().month(moment().month() - 1).startOf('month'),
                moment().month(moment().month() - 1).endOf('month')],
                '本季度': [moment().startOf('quarter'), moment().endOf('quarter')],
                '本年度': [moment().startOf('year'), moment().endOf('year')],
                '上线至今': [moment('2016-9-1'), moment()]
              }}
              defaultValue={this.state.dataString}
              format={this.state.dataFormat.format}
              onChange={this.timeChange.bind(this)}
              style={{ width: 180, marginRight: 10 }}
            />
            <ButtonGroup style={{ display: 'none' }}>
              <Button
                type={this.state.dayMoon[0]}
                onClick={this.query.bind(this, { tabObj: { format: 'YYYY-MM-DD', type: 'day' } })}>日</Button>
              <Button
                type={this.state.dayMoon[1]}
                onClick={this.query.bind(this, { tabObj: { format: 'YYYY-MM', type: 'month' } })}>月</Button>
            </ButtonGroup>

          </div>
          <div className={publicStyles.paddingWith} hidden={!this.upData.tabIndex} style={{ float: 'left' }}>
            <span>选择区域：</span>
            <TreeSelect
              {...tProps}
            />
          </div>
          <div className={publicStyles.paddingWith} hidden={!(this.upData.tabIndex === 3)} style={{
            float: 'left',
            whiteSpace: 'nowrap'
          }}>
            <span>承运商名称：</span>
            <Input
              placeholder="承运商名称"
              value={this.state.partyNameFilt}
              onChange={e => {
                this.setState({
                  partyNameFilt: e.target.value
                });
                clearTimeout(this.clickTimeout);
                this.clickTimeout = setTimeout(() => {
                  this.query(this.upData);
                }, 500);
              }}
            />
          </div>

        </QueryHeader>
        <div style={{ display: 'block', overflow: 'auto', padding: '15px' }}>
          <Link className={publicStyles.linkTo} style={{ float: 'right', marginLeft: 10 }} to="/TransferEfficiencyChart"><Icon type="export" />切换为柱状图</Link>
          <div style={{ 'float': 'right' }}>
            <ButtonGroup style={{ 'float': 'right' }}>
              <Button onClick={this.query.bind(this, { out: 'list' })}><Icon type="export" />批量导出</Button>
              <Button onClick={this.query.bind(this, { out: 'all' })}><Icon type="export" />全部导出</Button>
            </ButtonGroup>
          </div>
          <ButtonGroup>
            <Button type={this.state.selectRegion[0]}
              onClick={this.btnChange.bind(this, { tabIndex: 0, tabUrl: 'JobShippingStatusStats_TF_D' })}
            >全部</Button>
            <Button type={this.state.selectRegion[1]}
              onClick={this.btnChange.bind(this, { tabIndex: 1, tabUrl: 'JobShippingStatusStats_Region_D' })}
            >大区</Button>
            <Button type={this.state.selectRegion[2]}
              onClick={this.btnChange.bind(this, { tabIndex: 2, tabUrl: 'JobShippingStatusStats_Wayport_D' })}
            >公路港</Button>
            <Button type={this.state.selectRegion[3]}
              onClick={this.btnChange.bind(this, { tabIndex: 3, tabUrl: 'JobShippingStatusStats_Party_D' })}
            >承运商</Button>
          </ButtonGroup>
        </div>
        <div id="antDetail"></div>
        <Table
          size="small"
          onChange={this.tableSort.bind(this)}
          rowSelection={rowSelection}
          bordered
          scroll={{ x: this.tableWid * (this.tableLiLen + 1) }}
          columns={this.state.tableTitle}
          dataSource={this.state.data}
          pagination={pagination}
          loading={this.state.loading}
        />
      </section>
    );
  }
})