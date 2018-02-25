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
  Select,
  message,
  Tooltip,
  Form,
  Radio
} from "antd";
import { QueryHeader } from '../components/QueryHeader';
import classNames from "./SalesMan.less";
import publicStyles from '../publicStyles/contentStyles.less';
import moment from 'moment';
import { GraphBubble, REGION_MAPPING } from '../components/GraphBubble';
import { ConfigureInfo, QUERY_INFO, SELECT_TYPE } from '../configInfo/ConfigureInfo';
// import { SimulateAjax } from '../simulateAjax/simulateAjax';
import { ObjOperate } from '../utils/objOperate';
import { InfoCount } from '../components/InfoCount';
import { get, post } from '../utils/ajax';

class TMSConfigure_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: 'vague',
      partyNamesList: [],
      waybillStatus: [],
      configureStatus: []
    }
  }
  render() {
    const formInfo = this.props.form;
    const { getFieldDecorator, getFieldsValue, resetFields, validateFieldsAndScroll } = formInfo;
    let ifVague = this.state.searchType === 'vague';
    const childCom = this.props.children && React.cloneElement(this.props.children, {
      ref: 'child',
      info: {
        title: '符合条件的配载单信息',
      }
    })
    let range = () => {
      try {
        return getFieldDecorator('signDate', {
        })(
          <DatePicker.RangePicker
            size="small"
            style={{ width: 200 }}
          ></DatePicker.RangePicker>
          )
      } catch (e) {
        console.log('error:', e)
      }
    }
    const items = [
      {
        display: ifVague,
        dom: () => <Form.Item key="partyId" label="收货承运商：" className={publicStyles.paddingWith}>
          {getFieldDecorator('partyId', {
            rules: [{ required: true, message: '必填项，请输入查询条件' }],
          })(
            <Select showSearch={true} optionFilterProp="children" size="normals" style={{ width: 150 }}>
              {this.state.partyNamesList.map(v => <option value={v[0]}>{v[1]}</option>)}
            </Select>
            )}
        </Form.Item>
      },
      {
        display: ifVague,
        dom: () => <Form.Item key="InputDate" label="配载单创建时间：" className={publicStyles.paddingWith}>
          {getFieldDecorator('InputDate', {
            initialValue: [moment().subtract(1, 'month'), moment()],
            rules: [{
              required: true,
              message: '必填项，请输入查询条件',
            }, {
              validator: (rl, val, cb) => {
                if (moment(val[0].format('YYYY-MM-DD')).add(1, 'months').isBefore(moment(val[1].format('YYYY-MM-DD')))) {
                  cb('时间段不要超过一个月哦');
                }
                cb();
              },
            }],
          })(
            <DatePicker.RangePicker
              size="small"
              style={{ width: 200 }}
              allowClear={false}
            ></DatePicker.RangePicker>
            )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="tmiBizTransportNo" label="配载单号：" className={publicStyles.paddingWith}>
          {getFieldDecorator('tmiBizTransportNo', {
            rules: [{ message: '必填项，请输入查询条件' }],
          })(
            <Input size="normal" style={{ width: 150 }} />
            )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="carNum" label="车牌号：" className={publicStyles.paddingWith}>
          {getFieldDecorator('carNum', {
            rules: [{ pattern: /^[\u4e00-\u9fa5]{1}[A-Z]{1}\w{5,}$/g, message: '确保车牌号格式正确哦' }],
          })(
            <Input size="normal" style={{ width: 150 }} />
            )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="driverName" label="司机姓名：" className={publicStyles.paddingWith}>
          {getFieldDecorator('driverName', {
            rules: [{ message: '必填项，请输入查询条件' }],
          })(
            <Input size="normal" style={{ width: 150 }} />
            )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="driverPhone" label="司机电话：" className={publicStyles.paddingWith}>
          {getFieldDecorator('driverPhone', {
            rules: [{ pattern: /(^1[0-9]{10}$)|(^(?!1)[0-9]*$)/g, message: '请输入正确的电话号码格式！' }],
          })(
            <Input size="normal" style={{ width: 150 }} />
            )}
        </Form.Item>
      },
      {
        display: ifVague,
        dom: () => <Form.Item key="transportStatus" data-display={ifVague} label="配载单状态：" className={publicStyles.paddingWith}>
          {getFieldDecorator('transportStatus', {
            rules: [{ message: '必填项，请输入查询条件' }],
          })(
            <Select size="normals" style={{ width: 150 }}
              allowClear
            >
              {this.state.configureStatus.map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
            )}
        </Form.Item>
      },
      {
        display: ifVague,
        dom: () => <Form.Item key="type" data-display={ifVague} label="配载类型：" className={publicStyles.paddingWith}>
          {getFieldDecorator('type', {
            rules: [{ message: '必填项，请输入查询条件' }],
          })(
            <Select size="normals" style={{ width: 150 }}
              allowClear
            >
              {['直送', '非直送'].map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
            )}
        </Form.Item>
      },


    ];
    let formItems = items.filter(v => v.display === true).map(v => v.dom());
    return (
      <section className={publicStyles.section}>
        <QueryHeader style={{ display: 'block' }}>
          <div style={{
            padding: '10px 0',
            borderBottom: '1px solid #ddd',
            display: 'none'
          }}>
            <Radio.Group
              value={this.state.searchType}
              onChange={e => { this.setState({ searchType: e.target.value }) }}
            >
              <Radio value="vague">模糊查询</Radio>
              <Radio value="exact">精确查询</Radio>
            </Radio.Group>
          </div>
          <Form
            layout="inline"
            style={{ padding: '10px 0' }}
          >
            {formItems}
          </Form>
          <div style={{ textAlign: 'right' }}>
            <Button type="primary" style={{ marginRight: 5 }}
              onClick={() => resetFields()}
            >清除查询条件</Button>
            <Button type="primary" style={{ marginRight: 5 }}
              onClick={e => {
                validateFieldsAndScroll((err, val) => {
                  if (err) {
                    return;
                  }
                  const getInfo = () => {
                    let params = { ...this.regetParam(val, ['signDate', 'InputDate']), isFuzzyQuery: this.state.searchType === 'vague' ? 1 : 0 }
                    console.log('params', params)
                    this.refs.child.getTableInfo({
                      url: 'tmiBizTransportController/getTmiBizTransportListByParty',
                      params,
                      linkColumn: {
                        name: 'tmiBizTransportNum',
                        link: (text, record) => {
                          let extract = [
                            'tmiBizTransportNo',
                            'carNum',
                            'driverName',
                            'driverPhone',
                            'waybillCount',
                            'totalGoodsNumber',
                            'totalGoodsVolume',
                            'totalGoodsWeight'
                          ].map(v => [btoa(encodeURIComponent(v)), btoa(encodeURIComponent(record[v]))]);
                          let strInfo = JSON.stringify(extract);
                          console.log('strInfo', strInfo)
                          return `tmscondetail?wayno=${text}&extract=${strInfo}`
                        }
                      }
                    }, true);
                  }
                  if (this.props.location.pathname !== '/tmsconfigure/tmslists') {
                    console.log('need relink');
                    window.location.hash = '/tmsconfigure/tmslists';
                    setTimeout(getInfo, 100);
                    return;
                  }
                  getInfo();
                })
              }}
            >查询</Button>
            <Button type="primary" style={{ marginRight: 5 }}
              onClick={() => {
                validateFieldsAndScroll((err, val) => {
                  if (err) {
                    return;
                  }
                  let param = this.regetParam(val, ['signDate', 'InputDate']);
                  window.open('/tmsBossAdmin/tmiBizTransportController/uploadTmiBizTransport?'
                    + ObjOperate.objToUrlQuery(param));
                })
              }}
            >配载单导出</Button>
          </div>
        </QueryHeader>
        <div>
          {childCom}
        </div>
      </section>
    )
  }

  componentDidMount() {
    this.getPartyWayportList();
    this.getWaybillStatus();
    this.getConfigureStatus();
  }

  getWaybillStatus() {
    post('wayBill/getWayBillStatus').then(data => {
      if (data.failure) {
        message.warn(data.message || '网络错误，请重新提交');
        return;
      }
      this.setState({
        waybillStatus: data.module
      })
    })
  }

  getConfigureStatus() {
    post('tmiBizTransportController/getTransportStatus').then(data => {
      if (data.failure) {
        message.warn(data.message || '网络错误，请重新提交');
        return;
      }
      this.setState({
        configureStatus: data.module
      })
    })
  }

  regetParam(value, rangeField) {
    let _param = {};
    for (let key in value) {
      if (value[key] === void 0 || !value[key].length) {
        continue;
      }
      if (rangeField.indexOf(key) !== -1) {
        _param['moreThan' + key] = value[key][0].format('YYYY-MM-DD');
        _param['lessThen' + key] = value[key][1].format('YYYY-MM-DD');
        continue;
      }
      _param[key] = typeof value[key] === 'string' ? value[key].trim() : value[key];
    }
    return _param;
  }

  getPartyWayportList() {
    post('tmiBizTransportController/getPartyByUser').then(data => {
      if (data.result !== 'success') {
        message.warn(data.msg || '网络错误，请重新提交');
        return;
      }
      let list = data.data;
      let datas = {
        partyNames: [],
      }
      for (let v of list) {
        datas.partyNames.push([v.partyId, v.partyName]);
      }
      this.setState({
        partyNamesList: datas.partyNames,
      })
    })
  }
}


export const TMSConfigure = Form.create()(TMSConfigure_);
