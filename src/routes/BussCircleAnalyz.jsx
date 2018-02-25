import React from 'react';
import { Link } from "dva/router";
import { get, post } from '../utils/ajax';
import { ObjOperate } from '../utils/objOperate';
import { QueryHeader } from '../components/QueryHeader';
import { ConfigureInfo, QUERY_INFO, SELECT_TYPE, ANALYZ_SELECT, specielDateType, RADIOS_MAP } from '../configInfo/ConfigureInfo';
import classNames from "./SalesMan.less";
import moment from 'moment';
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
  Select,
  message,
  Tooltip,
  Radio,
  Tag,
  Menu
} from "antd";
import publicStyles from '../publicStyles/contentStyles.less';
import bussStyle from './BussCircleAnalyz.less';
const { MonthPicker, RangePicker } = DatePicker;


const RADIOS_ITEM = {
  standardSelect: ['Flow', 'Order', 'User'],
};

export class BussCircleAnalyz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRange: {
        from: moment().startOf('year'),
        to: moment()
      },
      dataTime: moment().add(-1, 'days'),
      dateType: 'month',
      areaType: 'all',
      areaValue: '',
      standardSelect: RADIOS_ITEM.standardSelect[0],
      basementSelect: '',
      favorableType: 'all',
      SQCouponType: 'all',
      moneyType: 'all',
      basementRadios: []
    };
    this.timeRange = {
      dateString: [
        this.state.timeRange.from.format(QUERY_INFO[this.state.dateType].format),
        this.state.timeRange.to.format(QUERY_INFO[this.state.dateType].format)
      ],
      rawDate: [this.state.timeRange.from, this.state.timeRange.to]
    };
  }
  render() {
    this.timeRange.dateString = [
      this.state.timeRange.from.format(QUERY_INFO[this.state.dateType].format),
      this.state.timeRange.to.format(QUERY_INFO[this.state.dateType].format)
    ];

    const props = {
      infos: {
        timeType: specielDateType[this.state.dateType],
        SQType: this.state.standardSelect,
        SQStartDate: this.timeRange.dateString[0],
        SQEndDate: this.timeRange.dateString[1],
        dataTime: this.state.dataTime.format(QUERY_INFO[this.state.dateType].format),
        SQClassType: this.state.basementSelect === '业态维度' ? '' : this.state.basementSelect,
        area: this.state.areaType,
      }
    };
    props.infos[this.state.areaType] = this.state.areaValue || 'NOT FOUND';
    const getParams = typeName => {
      if (this.state[typeName] === 'all') {
        return;
      }
      props.infos[typeName] = this.state[typeName];
    };
    ['favorableType', 'SQCouponType', 'moneyType'].map(val => {
      getParams(val);
    });

    let basementSelect = ObjOperate.copyArr(this.state.basementRadios);
    return (
      <section className={publicStyles.section} >
        <QueryHeader style={{
          display: 'block',
          padding: 0
        }}>
          <div style={{
            display: 'inline-block',
            width: '15%',
            textAlign: 'center',
            padding: '15px 0',
            background: 'rgba(0,0,0,.1)'
          }}>维度列表</div>
          <div style={{
            display: 'inline-block',
            width: '85%',
            padding: '0 10px'
          }}>
            <div className={publicStyles.paddingWidth} style={{
              display: 'inline-block'
            }}>
              <span>时间范围：</span>
              <RangePicker
                format={QUERY_INFO[this.state.dateType].format}
                defaultValue={[this.state.timeRange.from, this.state.timeRange.to]}
                value={[this.state.timeRange.from, this.state.timeRange.to]}
                onChange={(data, dataString) => {
                  if (!data || data.length === 0) {
                    return;
                  }
                  this.timeRange.rawDate = data;
                  this.timeRange.dateString = dataString;
                  this.setState({
                    timeRange: {
                      from: data[0],
                      to: data[1]
                    },
                  });
                }}
                ranges={
                  {
                    '本月': [moment().startOf('month'), moment().endOf('month')],
                    '上月': [moment().month(moment().month() - 1).startOf('month'),
                    moment().month(moment().month() - 1).endOf('month')],
                    '本季度': [moment().startOf('quarter'), moment().endOf('quarter')],
                    '本年度': [moment().startOf('year'), moment().endOf('year')],
                    '上线至今': [moment('2016-9-1'), moment()]
                  }
                }
                style={{
                  width: 200,
                  display: !this.ifThisUrl(this.props.location.pathname, 'BasementAnalyz') ?
                    'none' : 'inline-block'
                }}
              />
              <DatePicker style={{
                display: this.ifThisUrl(this.props.location.pathname, 'BasementAnalyz') ?
                  'none' : 'inline-block'
              }}
                format={QUERY_INFO[this.state.dateType].format}
                value={this.state.dataTime}
                onChange={val => {
                  this.setState({
                    dataTime: val
                  });
                }}
              />
              <Button.Group>
                <Button type={this.state.dateType === 'day' ?
                  'primary' : ''} onClick={() => {
                    this.changeDateType('day');
                    this.setState({
                      timeRange: {
                        from: moment().startOf('month'),
                        to: moment().endOf('month')
                      },
                    });
                  }}>
                  日
              </Button>
                <Button type={this.state.dateType === 'month' ?
                  'primary' : ''} onClick={() => {
                    this.changeDateType('month');
                    this.setState({
                      timeRange: {
                        from: moment().startOf('year'),
                        to: moment()
                      },
                    });
                  }}>
                  月
              </Button>
              </Button.Group>
            </div>
            <div className={publicStyles.paddingWith} style={{
              display: 'inline-block'
            }}>
              <span>区域选择：</span>
              <Radio.Group onChange={(e) => {
                this.setState({
                  areaType: e.target.value,
                  areaValue: this[e.target.value] && this[e.target.value][0]
                });
              }} value={this.state.areaType}>
                <Radio value="all">全部</Radio>
                <Radio value="region">大区</Radio>
                <Radio value="wayport">公路港</Radio>
                <Radio value="merchant">商户</Radio>
              </Radio.Group>
            </div>
            <div className={publicStyles.paddingWith} style={{
              display: this.state.areaType === 'all' ? 'none' : 'inline-block'
            }}>
              <Select
                showSearch
                optionFilterProp="children"
                style={{
                  minWidth: 120
                }}
                onChange={val => {
                  this.setState({
                    areaValue: val
                  });
                }}
                value={this.state.areaValue}
              >
                {
                  this[this.state.areaType] && this[this.state.areaType].map((val, index) => {
                    let nameHan = val;
                    if (this.state.areaType === 'merchant') {
                      nameHan = this.rawMerchant[val];
                    }
                    return (<Select.Option key={val} value={val}>{nameHan}</Select.Option>);
                  })
                }
              </Select>
            </div>
          </div>
        </QueryHeader>
        <div style={{
          overflow: 'auto'
        }}>
          <div style={{
            float: 'left',
            width: '15%',
            backgroundColor: 'rgba(0,0,0,.1)',
            boxShadow: '1px 0px 6px rgba(0,0,0,.1)',
            height: 'calc(100vh - 140px)',
            paddingBottom: 20,
            overflow: 'auto'
          }}>
            <div className={bussStyle['left-side-item']}>
              <div className={bussStyle['left-side-head']}>指标选择</div>
              <div className={bussStyle['left-side-body']}>
                <Radio.Group value={this.state.standardSelect} onChange={e => {
                  this.setState({
                    standardSelect: e.target.value
                  });
                }}>
                  {
                    RADIOS_ITEM.standardSelect.map(val =>
                      <Radio value={val} className={bussStyle['left-side-radio']}>{RADIOS_MAP[val].name}</Radio>)
                  }
                </Radio.Group>
              </div>
            </div>
            <div className={bussStyle['left-side-item']} hidden={this.ifStructorRoute()}>
              <div className={bussStyle['left-side-head']}>基础维度选择</div>
              <div className={bussStyle['left-side-body']}>
                {/*<div>业务维度</div>*/}
                <Radio.Group value={this.state.basementSelect} onChange={e => {
                  this.setState({
                    basementSelect: e.target.value
                  });
                }}>
                  <Radio value="业态维度" className={bussStyle['left-side-radio']} style={{
                    marginLeft: -15
                  }}>业态维度</Radio>
                  {
                    basementSelect.map(val =>
                      <Radio value={val} className={bussStyle['left-side-radio']}>{val}</Radio>)
                  }
                </Radio.Group>
              </div>
            </div>
            <div className={bussStyle['left-side-item']} hidden={this.ifStructorRoute()}>
              <div className={bussStyle['left-side-head']}>分析维度选择</div>
              <div className={bussStyle['left-side-body']}>
                <div style={{
                  margin: '5px 2px'
                }}>优惠金额</div>
                <Radio.Group value={this.state.favorableType} onChange={e => {
                  this.setState({
                    favorableType: e.target.value
                  });
                }}>
                  {
                    ['all', '0', '1', '2', '3', '4'].map(val => {
                      return <Radio value={val} className={bussStyle['left-side-radio']}>{ANALYZ_SELECT['favorableType'][val]}</Radio>;
                    })
                  }
                  {/*<Radio value={'all'}>全部</Radio>
                  <Radio value={'0'}>无</Radio>
                  <Radio value={'1'}>0~5元</Radio>
                  <Radio value={'2'}>5~20元</Radio>
                  <Radio value={'3'}>20~50元</Radio>
                  <Radio value={'4'}>50+元</Radio>*/}
                </Radio.Group>
                <div style={{
                  margin: '5px 2px'
                }}>券类型</div>
                <Radio.Group value={this.state.SQCouponType} onChange={e => {
                  this.setState({
                    SQCouponType: e.target.value
                  });
                }}>
                  {
                    ['all', '0', 'COUPON', 'CACHE_COUPON', 'FULL_CUT_COUPON'].map(val => {
                      return <Radio value={val} className={bussStyle['left-side-radio']}>{ANALYZ_SELECT['couponType'][val]}</Radio>;
                    })
                  }
                  {/*<Radio value={'all'}>全部</Radio>
                  <Radio value={'COUPON'}>优惠券</Radio>
                  <Radio value={'CACHE_COUPON'}>消费券</Radio>
                  <Radio value={'FULL_CUT_COUPON'}>满减券</Radio>*/}
                </Radio.Group>
                <div style={{
                  margin: '5px 2px'
                }}>消费金额范围</div>
                <Radio.Group value={this.state.moneyType} onChange={e => {
                  this.setState({
                    moneyType: e.target.value
                  });
                }}>
                  {
                    ['all', '0', '1', '2', '3'].map(val => {
                      return <Radio value={val} className={bussStyle['left-side-radio']}>{ANALYZ_SELECT['moneyType'][val]}</Radio>;
                    })
                  }
                  {/*<Radio value={'all'}>全部</Radio>
                  <Radio value={'0'}>0-10元</Radio>
                  <Radio value={'1'}>10-50元</Radio>
                  <Radio value={'2'}>50-100元</Radio>
                  <Radio value={'3'}>100元以上</Radio>*/}
                </Radio.Group>
              </div>
            </div>
            <div className={bussStyle['left-side-item']} hidden={!this.ifStructorRoute()}>
              <div className={bussStyle['left-side-head']}>维度选择</div>
              <div className={bussStyle['left-side-body']}>
                <div style={{ padding: 5 }}><Icon style={{ color: '#0091EC', paddingRight: 3 }} type="check-circle" />组织维度</div>
                <div style={{ padding: 5 }}><Icon style={{ color: '#0091EC', paddingRight: 3 }} type="check-circle" />业态维度</div>
                <div style={{ padding: 5 }}><Icon style={{ color: '#0091EC', paddingRight: 3 }} type="check-circle" />营销类型</div>
                <div style={{ padding: 5 }}><Icon style={{ color: '#0091EC', paddingRight: 3 }} type="check-circle" />营销优惠额度</div>
                <div style={{ padding: 5 }}><Icon style={{ color: '#0091EC', paddingRight: 3 }} type="check-circle" />消费金额范围</div>
              </div>
            </div>
          </div>
          <div style={{
            float: 'left',
            width: '85%',
            height: 'calc(100vh - 140px)',
            overflow: 'auto'
          }}>
            <div style={{
              padding: 5
            }}>
              <span>指标选择：</span>
              {
                <div style={{
                  display: 'inline-block'
                }}>
                  <Tag color="#2db7f5">{RADIOS_MAP[this.state.standardSelect].name}</Tag>
                </div>
              }
              <span>维度选择：</span>
              {
                <div style={{
                  display: 'inline-block'
                }}>
                  <div hidden={this.ifStructorRoute()}>
                    <Tag color="#2db7f5">{this.state.basementSelect}</Tag>
                    <Tag
                      style={{ display: ANALYZ_SELECT['favorableType'][this.state.favorableType] === "全部" ? 'none' : 'inline-block' }}
                      color="#2db7f5">优惠金额／{ANALYZ_SELECT['favorableType'][this.state.favorableType]}</Tag>
                    <Tag
                      style={{ display: ANALYZ_SELECT['couponType'][this.state.SQCouponType] === "全部" ? 'none' : 'inline-block' }}
                      color="#2db7f5">券类型／{ANALYZ_SELECT['couponType'][this.state.SQCouponType]}</Tag>
                    <Tag
                      style={{ display: ANALYZ_SELECT['moneyType'][this.state.moneyType] === "全部" ? 'none' : 'inline-block' }}
                      color="#2db7f5">消费金融范围／{ANALYZ_SELECT['moneyType'][this.state.moneyType]}</Tag>
                  </div>
                  <div hidden={!this.ifStructorRoute()}>
                    <Tag color="#2db7f5">组织维度</Tag>
                    <Tag color="#2db7f5">业态维度</Tag>
                    <Tag color="#2db7f5">营销类型</Tag>
                    <Tag color="#2db7f5">营销优惠额度</Tag>
                    <Tag color="#2db7f5">消费金额范围</Tag>
                  </div>
                </div>

              }
            </div>
            <div style={{
              backgroundColor: 'rgba(0,0,0,.1)',
              padding: 20
            }}>
              <Menu
                mode="horizontal"
                selectedKeys={this.props.location.pathname}
              >{
                  [{ url: 'BasementAnalyz', name: '基础分析' },
                  { url: 'StructureAnalyz', name: '结构分析' },
                  { url: 'RankingAnalyz', name: '排名分析' }].map(val => {
                    return (
                      <Menu.Item key={`BussCircleAnalyz/${val.url}`}>
                        <Link to={`BussCircleAnalyz/${val.url}`}>{val.name}</Link>
                      </Menu.Item>
                    );
                  })
                }
              </Menu>
            </div>
            <div>
              {this.props.children && React.cloneElement(this.props.children, props)}
            </div>
          </div>
        </div>
      </section>
    );
  }

  ifStructorRoute() {
    if (this.props.location.pathname.indexOf('StructureAnalyz') !== -1) {
      return true;
    }
    return false;
  }

  componentWillMount() {
    this.getAll();
  }

  outputType(url, thisUrl) {
    if (String(url).indexOf(thisUrl) !== -1) {
      return 'primary';
    }
    return 'default';
  }

  ifThisUrl(url, thisUrl) {
    if (String(url).indexOf(thisUrl) !== -1) {
      return true;
    }
    return false;
  }

  changeDateType(dateType) {
    this.setState({ dateType: dateType });
    return true;
  }

  getRegion() {
    if (this.region) { return; }
    post('sqView/getRegion').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      let newData = data.module;
      this.region = newData;
    });
  }

  getWayPort() {
    if (this.wayport) { return; }
    post('sqView/getWayPort').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      data = data.module;
      let newData = [];
      for (let item in data) {
        newData = newData.concat(data[item]);
      }
      this.wayport = newData;
    });
  }

  getMerchants() {
    if (this.merchant) { return; }
    post('sqView/getMerchants').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      data = data.module;
      let newData = [];
      let rawMerchant = {};
      for (let key in data) {
        for (let inKey in data[key]) {
          for (let item of data[key][inKey]) {
            for (let innerKey in item) {
              newData.push(innerKey);
              rawMerchant[innerKey] = item[innerKey];
            }
          }
        }
      }
      this.merchant = newData;
      this.rawMerchant = rawMerchant;
    });
  }
  getBasementSelect() {
    post('sqView/getClassType').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.setState({
        basementRadios: data.module,
        basementSelect: data.module[0]
      });
    });
  }
  getAll() {
    this.getWayPort();
    this.getRegion();
    this.getMerchants();
    this.getBasementSelect();
  }
}

