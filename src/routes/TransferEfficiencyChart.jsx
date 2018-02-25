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
        pageSize: 0,
        current: 1,
        pageIndex: 1
      },//分页数据
      loading: false,//加载状态,
      dataFormat: {
        type: 'month',
        format: 'YYYY-MM-DD'
      },
      dataString: [moment().startOf('month'), moment().endOf('month')],//时间参数
      districtVal: [],//选择区域树组
      treeList: [],//区域check树组
      selectRegion: ['primary', '', '', ''],//tab状态
      tableTitle: [],//表头树组
      tableCheck: [],//table选中树组
      setOption: [],//柱状图组件option树组
      selectCarrier: [],//承运商下啦树组
      tabIndex: '0',//tab切换index
      regionValue: [],//区域选择结果
      carrierValue: ''//承运商选择结果
    };
    this.chartName = [];//动态创建的echart dom ref 名
    this.chartHeight = 0.3;//chart表与宽度的百分比
    this.firstRenderFlag = true;//判断是否第一次渲染echart
    this.postUrl = [
      'JobShippingStatusStats_TF_D',
      'JobShippingStatusStats_Region_D',
      'JobShippingStatusStats_Wayport_D',
      'JobShippingStatusStats_Party_D'
    ]//切换接口url
  }
  componentWillMount() {

    //首次加载
    this.langTime = [this.state.dataString[0].format('YYYY-MM-DD'), this.state.dataString[1].format('YYYY-MM-DD')];
    this.query();
  }
  componentDidMount() {
    //dom加载完成后第一次渲染echart
    this.chartWid = this.refs['antDetail'].offsetWidth;
    this.renderChar();

    post('salesmansView/queryRegionByAcl').then(data => {
      this.aclAuth = data;
    });
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
    if (index == 1) {
      if (list[0].unitLevel == 1) {
        list = list[0].children;

      }
      list.forEach((item, i) => {
        if (item.children) delete item.children;
      })
    }
    return list;
  }

  query(param) {
    window.clearTimeout(this.queryTimeout);
    this.queryTimeout = window.setTimeout(() => {
      this._query(param);
    }, 500);
  }

  _query(params) {
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
      value: this.state.dataString[0].format('YYYY-MM-DD')
    }, {
      field: 'dataTime',
      symbol: 'LTOEQ',
      relation: 'AND',
      value: this.state.dataString[1].format('YYYY-MM-DD')
    }]//必要参数

    if (parseInt(obj.tabMenu) > 0) {//选择非全部的tab
      delete obj.triggerValue;
      delete obj.areaConditions;//初始删除不用上传的参数

      let index = obj.tabMenu || '0';
      // if (obj.region && this.state.regionValue.length > 0) {
      //   var upText = [];
      //   obj.region.length > 1 ? upText.push(obj.region[obj.region.length - 1]) : upText.push(obj.region[0]);

      //   if (index === '3') {
      //     obj.triggerValue = upText[0];
      //   } else {
      //     obj.areaConditions = JSON.stringify(upText);
      //   }
      // }//特殊处理上传参数
      mustData.push(
        // { "field": "partyName", "symbol": "EQ", "relation": "AND", "value": obj.carrier }
        { "field": REGION_MAP[this.state.tabIndex], "symbol": "EQ", "relation": "AND", "value": this.state.districtVal }
      )
      if (this.state.tabIndex === '3') {
        mustData.push(
          // { "field": "partyName", "symbol": "EQ", "relation": "AND", "value": obj.carrier }
          { "field": "partyName", "symbol": "EQ", "relation": "AND", "value": this.state.carrierValue }
        )
      }
      // else {
      //   mustData.length = 2;
      // }//特殊处理上传参数
    }



    obj.timeFilterItems = JSON.stringify(mustData);

    this.fetch({
      pageSize: pageSize,
      pageNo: current,
      ...obj
    });
  }
  fetch(params = {}) {
    //发起请求
    var that = this;
    this.setState({ loading: true });//请求状态
    let param = {};
    this.upData = params;
    param.url = 'statistics/' + (this.postUrl[params.tabMenu] || 'JobShippingStatusStats_TF_D') + '/commonquery';
    param.data = params;
    param.ajaxType = 'post';
    param.callback = (data) => {
      if (!data.success) {
        message.warn(data.message);//异常提示
        this.setState({ loading: false });//关闭请求状态
        return;
      } else {
        if (data.module.queryInfoVO.authorityList != null) {
          var treeList = this.madeTreeList(data.module.queryInfoVO.authorityList, params.tabMenu);
        } else {
          var treeList = [];
        }//区域组件数据源


        this.madeTable(data.module.columnList)//表头处理


        this.setState({
          loading: false,//关闭请求状态
          data: data.module,//列表数据放入
          treeList: treeList,
        }, function () {
          that.madeChart();
        });
      }
    }
    this.getPost(param)
  }
  /***************查询相关 end***************/


  /***************其他 start***************/
  regionChange(value) {
    //选择承运商时先不更新数据 渲染承运商列表
    var that = this;
    var text = value;
    this.setState({
      regionValue: value,
      districtVal: value
    }, function () {
      if (that.state.tabIndex == '3') {
        that.getCarrier({
          wayport: text,
          field: 'JobShippingStatusStats_PartyName'
        })
      } else {
        that.query();
      }
    })
  }
  getCarrier(params = {}) {
    //承运商列表接口
    var that = this;
    this.setState({ loading: true });//请求状态
    let param = {};
    param.data = params;
    this.upData.areaConditions = [params.wayport];
    param.url = 'statistics/welcome/queryExtOptions';
    param.ajaxType = 'post';
    param.callback = (data) => {
      if (!data.success) {
        message.warn(data.message);//异常提示
        this.setState({ loading: false });//关闭请求状态
        return;
      }
      this.setState({
        carrierValue: data.module[0].partyName,
        loading: false,//关闭请求状态
        selectCarrier: data.module
      }, () => {
        this.query();
      });
    }
    this.getPost(param)
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
          title: name[1],
          columnName: item.columnName
        })

        this.tableLiLen++;
      } else {
        var obj = {
          title: item.displayName,
          columnName: item.columnName
        }
        tableList.push(obj);
        num++;
        this.tableLiLen++;
      }
    })
    this.setState({ tableTitle: tableList })
  }
  timeChange(data, dataString) {
    //时间切换 跟新数据
    var that = this;
    this.setState({ dataString: data }, function () {
      that.query();
    });
  }
  madeChart() {
    //echart对象创建
    var that = this;
    var nameList = [];
    var dataList = [];
    var timeList = [];
    var optionList = [];
    this.state.tableTitle.forEach((item, i) => {
      if (item.children) {
        var list = [];
        item.children.forEach((meti, x) => {
          if (x != 0) {
            list.push({
              columnName: meti.columnName,
              title: meti.title,
              data: []
            });
          }
        })
        nameList.push(list)
      }
    })
    this.state.data.dataList.forEach((item1, x) => {
      nameList.forEach((item2, y) => {
        item2.forEach((item3, z) => {
          item3.data.push(item1[item3.columnName]);
        })
      })
      timeList.push(item1['dataTime']);
    })
    nameList.forEach((item1, x) => {
      var series = [];
      var titleList = [];
      item1.forEach((item2, y) => {
        series.push({
          name: item2.title,
          type: 'bar',
          stack: 'one',
          data: item2.data
        })
        titleList.push(item2.title)
      })
      var option = {
        title: {
          text: NAME_LIST[x],
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: (params, ticket) => {
            console.log('params', params, 'tickets', ticket)
            return `
              ${params[0].name}<br>
              ${params[0].seriesName}: ${params[0].value}<br>
              ${params[1].seriesName}: ${params[1].value}<br>
              ${params[2].seriesName}: ${params[2].value}<br>
              ${params[3].seriesName}: ${params[3].value}<br>
              总转化率/%: ${params[0].value + params[1].value + params[2].value + params[3].value}
            `
          }
        },
        legend: {
          data: titleList
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: timeList,
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        dataZoom: {
          type: 'inside',
          xAxisIndex: 0
        },
        series: series
      };
      optionList.push(option)
    })
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
  tabChange(e) {
    //tab切换
    var that = this;
    var index = e.target.value;
    let initVal = '';
    let getDataTree = this.aclAuth.data[0].unitLevel === '1' ? this.aclAuth.data[0].childrenList : this.aclAuth.data;
    if (!getDataTree) {
      return;
    }
    console.log('this.auth', this.aclAuth)
    switch (Number(index)) {
      case 0:
        initVal = getDataTree[0].unitName
        break;
      case 1:
        initVal = getDataTree[0].unitName
        break;
      case 3:
        initVal = getDataTree[0].childrenList[0].unitName
        setTimeout(() => {
          this.getCarrier({
            wayport: this.state.districtVal,
            field: 'JobShippingStatusStats_PartyName'
          });
        }, 1);
        break;
      default:
        initVal = getDataTree[0].childrenList[0].unitName
        break;
    }
    this.setState({
      tabIndex: index,
      regionValue: '',
      carrierValue: '',
      selectCarrier: '',
      districtVal: initVal
    }, function () {
      if (index === '3') {
        return;
      }
      that.query();
    })
  }
  carrierChange(value) {
    //选择承运商 更新数据
    var that = this;
    this.setState({ carrierValue: value }, function () {
      that.query();
    })
  }
  /***************其他 end***************/

  render() {
    const { getFieldProps } = this.props.form;
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    const treeStyle = this.state.tabIndex == '0' ? { display: 'none' } : { display: 'inline-block' };
    const selectStyleCarrier = this.state.tabIndex == '3' ? { display: 'inline-block' } : { display: 'none' };
    const tProps = {
      treeData: this.state.treeList,

      showCheckedStrategy: TreeSelect.SHOW_CHILD,
      searchPlaceholder: '选择区域',
      showSearch: true,
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
    var selectCarrier = [];
    if (this.state.selectCarrier.length > 0) {
      this.state.selectCarrier.forEach((item, i) => {
        selectCarrier.push(
          <Option key={i} value={item.partyName}>{item.partyName}</Option>
        )
      })
    }

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
                format={this.state.dataFormat.format}
                onChange={this.timeChange.bind(this)}
                style={{ width: 180, marginRight: 10 }}
              />
            </FormItem>
            <div style={treeStyle}>
              <FormItem label="区域选择">
                <TreeSelect
                  {...tProps}
                  {...getFieldProps('region', { onChange: this.regionChange.bind(this) }) }
                  value={this.state.districtVal}
                />
              </FormItem>
            </div>
            <div style={selectStyleCarrier}>
              <FormItem label="承运商选择">
                <Select
                  style={{ width: 15 + 'rem' }}
                  placeholder="承运商选择" {...getFieldProps('carrier', { onChange: this.carrierChange.bind(this) }) }
                  value={this.state.carrierValue}>
                  {selectCarrier}
                </Select>
              </FormItem>
            </div>
          </QueryHeader>
          <div style={{ display: 'block', overflow: 'auto', padding: '15px' }}>
            <div style={{ float: 'right' }}>
              <Link className={publicStyles.linkTo} to="/TransferEfficiency"><Icon type="export" />切换为数据表</Link>
            </div>
            <Radio.Group value={this.state.tabIndex} {...getFieldProps('tabMenu', { onChange: this.tabChange.bind(this), initialValue: '0' }) }>
              <Radio.Button value="0">全部</Radio.Button>
              <Radio.Button value="1">大区</Radio.Button>
              <Radio.Button value="2">公路港</Radio.Button>
              <Radio.Button value="3">承运商</Radio.Button>
            </Radio.Group>
          </div>
          <div id="antDetail" style={{ marginTop: 20 }} ref={'antDetail'}>
            {chartsDom}
          </div>
        </Form>
      </div>
    );
  }
})

const REGION_MAP = {
  '0': 'all',
  '1': 'region',
  '2': 'wayport',
  '3': 'wayport'
}
const NAME_LIST = ['订单转化率分析', '配载率分析', '发车率分析', '到货率分析', '签收率分析']