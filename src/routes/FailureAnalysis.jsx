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
  Form,
  Cascader,
  Radio
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
const { Option, OptGroup } = Select;
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
      setOption: [],//柱状图组件option树组
      selectCarrier: [],//承运商下啦树组
      regionValue: [],//选择区域值
      carrierValue: '',//承运商选择值
      timeType: 'YYYY-MM-DD',//日期格式
      lineLoad: [],//路线select树组
      lienLoadValue: []//路线选择的value值
    };
    this.chartName = [];//echart 所要渲染的dom ref
    this.chartHeight = 0.3;//chart表与宽度的百分比
    this.firstRenderFlag = true;//是否初次需渲染
    this.tableWid = 100;//表格列宽
    this.tableLiLen = 0;//表格列数累加
    this.orderBy = {}
  }
  componentWillMount() {

    //首次加载
    this.langTime = [this.state.dataString[0].format('YYYY-MM-DD'), this.state.dataString[1].format('YYYY-MM-DD')];
    this.query();
  }
  componentDidMount() {
    this.chartWid = this.refs['antDetail'].offsetWidth;
    this.renderChar();
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
  madeTreeList(list, index) {
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
    return list;
  }
  query(params) {
    //发起查询
    let obj = this.props.form.getFieldsValue();
    let current = (params && params.current) || 1;//页数，默认1，可传入指定（点击分页时会传入）
    this.state.pagination.current = current;//点击查询后 返回第一页
    let pageSize = (params && params.pageSize) || this.state.pagination.pageSize;//条数，一页
    obj.pageIndex = current;

    var mustData = [{
      field: 'dataTime',
      symbol: 'GTOEQ',
      relation: 'AND',
      value: this.state.dataString[0].format(this.state.timeType)
    }, {
      field: 'dataTime',
      symbol: 'LTOEQ',
      relation: 'AND',
      value: this.state.dataString[1].format(this.state.timeType)
    }]//必要参数

    if (obj.lineLoad >= 0) {
      var data = this.state.lineLoad[obj.lineLoad];
      mustData[2] = { "field": "startCity", "symbol": "EQ", "relation": "AND", "value": data.startCity }
      mustData[3] = { "field": "endCity", "symbol": "EQ", "relation": "AND", "value": data.endCity }
      mustData[4] = { "field": "partyName", "symbol": "EQ", "relation": "AND", "value": data.partyName }
    } else {
      mustData.length = 2;
    }//线路选择时多传的参数

    obj.timeFilterItems = JSON.stringify(mustData);

    if (this.orderBy) {
      obj.orderRule = this.orderBy.orderRule;
      obj.orderBy = this.orderBy.orderBy;
    }//排列所需要传的参数

    if (params && params.out) {
      this.outData(obj.timeFilterItems, params.out);//导出exccal
    } else if (params && params.selectObj) {
      var value = params.selectObj.value.toString();
      var lineType = params.selectObj.name;
      switch (lineType) {
        case 'region':
          obj.field = 'JobTMSTimeAnalysis_Wayport_LineType';
          obj.wayport = value;
          break;
        case 'carrier':
          obj.field = 'JobTMSTimeAnalysis_LineType';
          obj.partyName = value;
      }
      this.getLine({
        pageSize: pageSize,
        pageNo: current,
        lineType: lineType,
        ...obj
      })
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
    var that = this;
    this.setState({ loading: true });//请求状态
    let param = {};
    this.upData = params;
    param.url = 'statistics/' + (this.state.timeType == 'YYYY-MM' ? 'TMSTimeAnalysis_Party_M' : 'TMSTimeAnalysis_Party_D') + '/commonquery';
    param.data = {
      ...params,
      orderRule: this.orderBy.orderRule || 'DESC',
      orderBy: this.orderBy.orderBy || 'dataTime',
    };
    param.ajaxType = 'post';
    param.callback = (data) => {
      if (!data.success) {
        message.warn(data.message);//异常提示
        this.setState({ loading: false });//关闭请求状态
        return;
      } else {
        //分页处理
        this.tableLiLen = 0;
        const pagination = this.state.pagination;
        pagination.total = data.module.dataCount / 1;
        //对返回的数据处理
        for (let i = 0; i < data.module.dataList.length; i++) {
          let item = data.module.dataList[i];
          //返回数据key处理（必须）
          item.key = item.jobTMSTimeAnalysisId / 1;
        }

        if (data.module.queryInfoVO.authorityList != null) {
          var treeList = this.madeTreeList(data.module.queryInfoVO.authorityList);
        } else {
          var treeList = [];
        }


        this.madeTable(data.module.columnList)//表头处理

        this.setState({
          loading: false,//关闭请求状态
          data: data.module.dataList,//列表数据放入
          treeList: treeList,
          pagination
        }, function () {
          that.madeChart();
        });
      }
    }
    this.getPost(param)
  }
  /***************查询相关 end***************/


  /***************其他 start***************/
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
          columnName: item.columnName,
          dataIndex: item.columnName,
          key: item.columnName,
          width: this.tableWid,
          sorter: true
        })
        this.tableLiLen++;
      } else {
        var obj = {
          title: <Tooltip title={item.remark}>{item.displayName}</Tooltip>,
          columnName: item.columnName,
          dataIndex: item.columnName,
          key: item.columnName,
          width: this.tableWid,
          sorter: true
        }
        tableList.push(obj);
        num++;
        this.tableLiLen++;
      }
    })
    this.setState({ tableTitle: tableList })
  }
  timeChange(data, dataString) {
    //改变时间
    var that = this;
    this.setState({ dataString: data }, function () {
      that.query();
    });
  }
  madeChart() {
    //创建echart对象
    var that = this;
    var nameList = [];
    var dataList = [];
    var timeList = [];
    var optionList = [];
    var titleList = [];
    var seriesList = [];
    var textList = [];

    this.state.tableTitle.forEach((item, i) => {
      if (item.children) {
        titleList.push({
          columnName: item.children[0].columnName,
          title: item.children[0].title,
          data: []
        })
        textList.push(item.children[0].title)
      }
    })
    this.state.data.forEach((item1, x) => {
      titleList.forEach((item2, y) => {
        item2.data.push(item1[item2.columnName])
      })
      timeList.push(item1['dataTime'] + ' ');
    })
    titleList.forEach((item, i) => {
      seriesList.push({
        name: item.title.props.children,
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: false,
            position: 'insideRight'
          }
        },
        data: item.data
      })
    })
    var option = {
      title: {
        text: '运单时效分析',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params, ticket) => {
          console.log(params, this.state.data)
          let thisList = this.state.data[params[0].dataIndex];
          return `
            ${params[0].name}<br>
            ${thisList.region},${thisList.wayport},${thisList.partyName},${thisList.startCity} -> ${thisList.endCity}<br>            
            ${params[0].seriesName}: ${params[0].value}<br>
            ${params[1].seriesName}: ${params[1].value}
          `
        },
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: textList
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      yAxis: [
        {
          type: 'category',
          data: timeList
        }
      ],
      xAxis: [
        {
          type: 'value'
        }
      ],
      dataZoom: {
        type: 'inside',
        yAxisIndex: 0
      },
      series: seriesList
    };
    console.log('series', seriesList)
    optionList.push(option);
    this.setState({ setOption: optionList }, function () {
      if (that.firstRenderFlag == false) {
        that.myChartInit();
      }
    })
  }
  renderChar() {
    //第一次渲染echart
    var that = this;
    if (this.state.setOption.length > 0) {
      this.firstRenderFlag = false;
      this.state.setOption.forEach((item, i) => {
        var dom = this.refs[this.chartName[i]];
        dom.style.width = this.chartWid + 'px';
        dom.style.height = this.chartWid * this.chartHeight + 'px';
        var myChart = echarts.init(dom);
        myChart.setOption(item);
      })
    } else {
      setTimeout(function () {
        that.renderChar();
      }, 500)
    }
  }
  tableCheck(selectedRowKeys, selectedRows) {
    this.setState({ tableCheck: selectedRowKeys })
  }
  myChartInit() {
    //二次渲染echart
    this.state.setOption.forEach((item, i) => {
      var dom = this.refs[this.chartName[i]];
      dom.style.width = this.chartWid + 'px';
      dom.style.height = this.chartWid * this.chartHeight + 'px';
      var myChart = echarts.init(dom);
      myChart.setOption(item);
    })
  }
  carrierChange(value) {
    //选择承运商更新数据
    var that = this;
    this.setState({ carrierValue: value }, function () {
      that.query({
        selectObj: {
          name: 'carrier',
          value: value
        }
      })
    })
  }
  tableSort(pagination, filters, sorter) {
    //排序请求
    if (sorter) {
      this.orderBy = {
        orderRule: sorter.order == 'ascend' ? 'ASC' : 'DESC',
        orderBy: sorter.columnKey
      };
    }
    this.state.pagination.pageSize = pagination.pageSize;
    this.query({ current: pagination.current, pageSize: pagination.pageSize })
  }
  timeTypeChange(e) {
    //切换日月
    var that = this;
    this.setState({ timeType: e.target.value }, function () {
      this.query();
    })
  }
  outData(timeFilterItems, type) {
    //导出数据
    if (type != 'all' && this.state.tableCheck.length == 0) {
      message.warn('未选择任何数据，请选择数据后再导出');
      return;
    }
    var data = type == 'all' ? '/downloadAll?timeFilterItems=' + timeFilterItems : '/downloadPart?selectedList=' + JSON.stringify(this.state.tableCheck);
    var url = '/skynet/statistics/' + 'TMSTimeAnalysis_Party_' +
      this.state.timeType[this.state.timeType.length - 1] + data;
    window.open(url)
  }
  treeOnChange(value, label, extra) {
    //选择承运商时先不更新数据 渲染承运商列表
    var that = this;
    this.setState({ districtVal: value }, function () {
      that.query({
        selectObj: {
          name: 'region',
          value: value
        }
      })
    })
  }
  getLine(params = {}) {
    //发起请求
    var that = this;
    this.setState({ loading: true });//请求状态
    let param = {};
    param.data = params;
    param.url = 'statistics/110/queryExtOptions';
    param.ajaxType = 'post';
    param.callback = (data) => {
      if (!data.success) {
        message.warn(data.message);//异常提示
        this.setState({ loading: false });//关闭请求状态
        return;
      } else {
        this.setState({
          loading: false,//关闭请求状态
        });
        if (params.lineType == 'region') {

          this.setState({ selectCarrier: data.module })
        } else {
          this.setState({ lineLoad: data.module, lienLoadValue: undefined })
        }
      }
    }
    this.getPost(param)
  }
  lineLoadChange(value) {
    var that = this;
    this.setState({ lienLoadValue: value }, function () {
      this.query()
    })
  }
  madeSelect(arr, type) {
    console.log('arr', arr)
    var list = [];
    arr.forEach((item, i) => {
      if (type == 'name') {
        var value = item.partyName;
        text = item.partyName;
      } else {
        var value = i;
        var text = item.startCity + '-' + item.endCity;
      }
      list.push(
        <Option key={i + value} value={value}>{text}</Option>
      )
    })
    return list;
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
      onShowSizeChange: (current, pageSize) => {
        this.state.pagination.pageSize = pageSize;
        this.query({ current: current, pageSize: pageSize })
      }
    };

    const rowSelection = {
      onChange: this.tableCheck.bind(this),
      selectedRowKeys: this.state.tableCheck
    };

    const tProps = {
      treeData: this.state.treeList,
      value: this.state.districtVal,
      multiple: true,
      showCheckedStrategy: TreeSelect.SHOW_CHILD,
      treeCheckable: true,
      searchPlaceholder: '选择区域',
      onChange: this.treeOnChange.bind(this),
      style: {
        minWidth: 160,
        maxWidth: 420
      }
    };

    //柱状图div
    var chartsDom = [];
    for (var i = 0; i < this.state.setOption.length; i++) {
      chartsDom.push(
        <div id={'chart' + i} ref={'chart' + i} style={{ width: 400, height: 100 }}></div>
      )
      this.chartName.push('chart' + i);
    }

    //承运商下啦菜单
    var selectCarrier = this.madeSelect(this.state.selectCarrier, 'name');

    //线路下啦菜单
    var lineLoad = this.madeSelect(this.state.lineLoad, 'key');


    //区域下啦菜单
    var selectRegion = [];
    if (this.state.treeList.length > 0) {
      this.state.treeList.forEach((item, i) => {
        var list = [];
        if (item.children) {
          item.children.forEach((meti, x) => {
            list.push(
              <Option key={meti.key} value={meti.value}>{meti.value}</Option>
            )
          })
          selectRegion.push(
            <OptGroup key={item.key} label={item.value}>
              {list}
            </OptGroup>
          )
        } else {
          selectRegion.push(
            <Option key={item.key} value={item.value}>{item.value}</Option>
          )
        }
      })
    }


    return (
      <div className={publicStyles.section}>
        <Form inline onSubmit={this.query.bind(this)} form={this.props.form}>
          <QueryHeader style={{
            display: 'block',
            overflow: 'auto',
            padding: '15px'
          }}>
            <div>
              <FormItem label="时间选择">
                <RangePicker
                  ranges={{
                    '本月': [moment().startOf('month'), moment().endOf('month')],
                    '上月': [moment().month(moment().month() - 1).startOf('month'),
                    moment().month(moment().month() - 1).endOf('month')],
                    '本季度': [moment().startOf('quarter'), moment().endOf('quarter')],
                    '本年度': [moment().startOf('year'), moment().endOf('year')],
                    '上线至今': [moment('2016-9-1'), moment()]
                  }}
                  value={this.state.dataString}
                  format={this.state.timeType}
                  onChange={this.timeChange.bind(this)}
                  style={{ width: 180 }}
                />
              </FormItem>
              <FormItem label="">
                <Radio.Group value={this.state.timeType} onChange={this.timeTypeChange.bind(this)}>
                  <Radio.Button value="YYYY-MM-DD">日</Radio.Button>
                  <Radio.Button value="YYYY-MM">月</Radio.Button>
                </Radio.Group>
              </FormItem>
              <div style={{ display: 'inline-block' }}>
                <FormItem label="区域选择">
                  <TreeSelect
                    {...tProps}
                  />
                </FormItem>
              </div>
              <div style={{ display: 'inline-block' }}>
                <FormItem label="承运商选择">
                  <Select
                    showSearch
                    style={{ width: 15 + 'rem' }} placeholder="承运商选择" onChange={this.carrierChange.bind(this)} value={this.state.carrierValue}>
                    {selectCarrier}
                  </Select>
                </FormItem>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <FormItem label="线路选择">
                <Select style={{ width: 20 + 'rem' }} placeholder="请选择线路"
                  {...getFieldProps('lineLoad', { onChange: this.lineLoadChange.bind(this) }) }
                  value={this.state.lienLoadValue}
                >
                  {lineLoad}
                </Select>
              </FormItem>
            </div>
          </QueryHeader>

        </Form>

        <div style={{
          marginTop: 20,
          maxHeight: 'calc(100vh - 200px)',
          overflow: 'auto'
        }}>
          <div style={{ overflow: 'hidden', marginTop: 20 }}>
            <ButtonGroup style={{ 'float': 'right' }}>
              <Button onClick={this.query.bind(this, { out: 'list' })}><Icon type="export" />批量导出</Button>
              <Button onClick={this.query.bind(this, { out: 'all' })}><Icon type="export" />全部导出</Button>
            </ButtonGroup>
          </div>
          <div id="antDetail" style={{
            marginTop: 20,
          }} ref={'antDetail'}>
            {chartsDom}
          </div>
          <Table size="small" onChange={this.tableSort.bind(this)} rowSelection={rowSelection} bordered scroll={{ x: this.tableWid * (this.tableLiLen + 1) }} columns={this.state.tableTitle} dataSource={this.state.data} pagination={pagination} loading={this.state.loading} />
        </div>
      </div>
    );
  }
})