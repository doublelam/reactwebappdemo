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

class TMSWaybill_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: 'vague',
      partyNamesList: [],
      waybillStatus: []
    }
  }
  render() {
    const formInfo = this.props.form;
    const { getFieldDecorator, getFieldsValue, resetFields, validateFieldsAndScroll } = formInfo;
    let ifVague = this.state.searchType === 'vague';
    const childCom = this.props.children && React.cloneElement(this.props.children, {
      ref: 'child',
      info: {
        title: '符合条件的运单信息',
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
            rules: [{
              required: true, message: '必填项，请输入查询条件'
            }],
          })(
            <Select showSearch={true} optionFilterProp="children" size="normals" style={{ width: 150 }}>
              {this.state.partyNamesList.map(v => <option value={v[0]}>{v[1]}</option>)}
            </Select>
            )}
        </Form.Item>
      },
      {
        display: ifVague,
        dom: () => <Form.Item key="inputDate" label="创建运单时间：" className={publicStyles.paddingWith}>
          {getFieldDecorator('inputDate', {
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
        dom: () => <Form.Item key="wayBillNo" label="运单号：" className={publicStyles.paddingWith}>
          {getFieldDecorator('wayBillNo', {
            rules: [{ message: '必填项，请输入查询条件' }],
          })(
            <Input size="normal" style={{ width: 150 }} />
            )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="orderNo" label="订单号：" className={publicStyles.paddingWith}>
          {getFieldDecorator('orderNo', {
            rules: [{ message: '必填项，请输入查询条件' }],
          })(
            <Input size="normal" style={{ width: 150 }} />
            )}
        </Form.Item>
      },
      {
        display: ifVague,
        dom: () => <Form.Item key="signDate" data-display={ifVague} label="签收时间：" className={publicStyles.paddingWith}>
          {
            range()
          }
        </Form.Item>
      },
      {
        display: ifVague,
        dom: () => <Form.Item key="wayBillStatus" data-display={ifVague} label="运单状态：" className={publicStyles.paddingWith}>
          {getFieldDecorator('wayBillStatus', {
            rules: [{ message: '必填项，请输入查询条件' }],
          })(
            <Select size="normals" style={{ width: 150 }}
              allowClear
            >
              {this.state.waybillStatus.map(v => <option value={v}>{v}</option>)}
            </Select>
            )}
        </Form.Item>
      },
      {
        display: ifVague,
        dom: () => <Form.Item key="senderName" data-display={ifVague} label="发货人：" className={publicStyles.paddingWith}>
          {getFieldDecorator('senderName', {
            rules: [{ message: '必填项，请输入查询条件' }],
          })(
            <Input size="normal" style={{ width: 150 }} />
            )}
        </Form.Item>
      },
      {
        display: ifVague,
        dom: () => <Form.Item key="receiverName" data-display={ifVague} label="收货人：" className={publicStyles.paddingWith}>
          {getFieldDecorator('receiverName', {
            rules: [{ message: '必填项，请输入查询条件' }],
          })(
            <Input size="normal" style={{ width: 150 }} />
            )}
        </Form.Item>
      }
    ];
    let formItems = items.filter(v => v.display === true).map(v => v.dom());
    return (
      <section className={publicStyles.section}>
        <QueryHeader style={{ display: 'block' }}>
          <div style={{
            padding: '10px 0',
            borderBottom: '1px solid #ddd'
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
                    this.refs.child.getTableInfo({
                      url: 'wayBill/getWayBillLists',
                      params: { ...this.regetParam(val, ['signDate', 'inputDate']), isFuzzyQuery: this.state.searchType === 'vague' ? 1 : 0 },
                      linkColumn: {
                        name: 'tmiBizWaybillNum',
                        link: (text) => `tmswaybill/tmsdetail?wayno=${text}`
                      }
                    }, true);
                  }
                  if (this.props.location.pathname !== '/tmswaybill/tmslists') {
                    console.log('need relink');
                    window.location.hash = '/tmswaybill/tmslists';
                    setTimeout(getInfo, 100);
                    return;
                  }
                  getInfo();
                })
              }}
            >查询</Button>
            <Button type="primary" style={{ marginRight: 5 }}
              onClick={() => {
                let queryNum = this.props.location.query.wayno;
                if (queryNum) {
                  window.open('/tmsBossAdmin/wayBill/getWayBillInfoExcel?'
                    + ObjOperate.objToUrlQuery({ tmiBizWaybillNum: queryNum }));
                  return;
                }
                validateFieldsAndScroll((err, val) => {
                  if (err) {
                    return;
                  }
                  let param = this.regetParam(val, ['signDate', 'inputDate']);
                  console.log('outport param',param);
                  window.open('/tmsBossAdmin/wayBill/getWayBillListExcel?'
                    + ObjOperate.objToUrlQuery(param));
                })
              }}
            >运单导出</Button>
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
  }

  regetParam(value, rangeField) {
    let _param = {};
    for (let key in value) {
      console.log('reget', key, value[key])
      if (value[key] === void 0 || !value[key].length) {
        continue;
      }
      if (rangeField.indexOf(key) !== -1) {
        _param[key + 'Start'] = value[key][0].format('YYYY-MM-DD');
        _param[key + 'End'] = value[key][1].format('YYYY-MM-DD');
        continue;
      }
      _param[key] = typeof value[key] === 'string' ? value[key].trim() : value[key];
    }
    return _param;
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


export const TMSWaybill = Form.create()(TMSWaybill_);
