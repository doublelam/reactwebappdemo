import React from 'react';
import {
  Input,
  Row,
  Col,
  Button,
  Select,
  TreeSelect,
  Table,
  DatePicker,
  TimePicker,
  Pagination,
  Icon,
  Menu,
  message,
  Tooltip,
  Form,
  Upload,
  Modal
} from "antd";
import { QueryHeader } from '../components/QueryHeader';
import classNames from "./SalesMan.less";
import { Link } from "dva/router";
import publicStyles from '../publicStyles/contentStyles.less';
import moment from 'moment';
import { ConfigureInfo, QUERY_INFO } from '../configInfo/ConfigureInfo';
// import { SimulateAjax } from '../simulateAjax/simulateAjax';
import { ObjOperate } from '../utils/objOperate';
import { get, post } from '../utils/ajax';
import { InfoCount } from '../components/InfoCount';
import { NoticeDetail } from '../components/notice/NoticeDetail';
import { CensorshipTable } from '../components/censorship/CensorshipTable';
import { TableList } from '../components/allotCenter/TableList';


class LogManage_ extends React.Component {
  constructor(props) {
    super(props);
    this.wayport = {};
    this.state = {
      region: [],
      regionVal: '',
      operateType: []
    }
  }

  render() {
    let formItem = {

    }

    let { getFieldDecorator, setFieldsValue, getFieldsValue } = this.props.form
    let formInfo = {
      handleInfo: [
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="DataTime" label="发生时间：" className={publicStyles.paddingWith}>
            {getFieldDecorator('DataTime', {
              initialValue: [moment().startOf('month'), moment()]
            })(
              <DatePicker.RangePicker allowClear={false} size="normal" style={{ width: 200 }} />
              )}
          </Form.Item>
        }, {
          display: true,
          dom: () => <Form.Item style={formItem} key="userName" label="用户名称：" className={publicStyles.paddingWith}>
            {getFieldDecorator('userName')(
              <Input size="normal" style={{ width: 150 }} />
            )}
          </Form.Item>
        },
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="region" label="大区：" className={publicStyles.paddingWith}>
            {getFieldDecorator('region')(
              <Select allowClear onChange={v => {
                this.setState({
                  regionVal: v
                })
                setFieldsValue({ wayport: void 0 })
              }} size="normal" style={{ width: 150 }} >
                {this.state.region.map(v => <option value={v}>{v}</option>)}
              </Select>
            )}
          </Form.Item>
        },
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="wayPort" label="公路港：" className={publicStyles.paddingWith}>
            {getFieldDecorator('wayPort')(
              <Select allowClear size="normal" style={{ width: 150 }} >
                {(this.wayport[this.state.regionVal] || []).map(v => <option value={v}>{v}</option>)}
              </Select>
            )}
          </Form.Item>
        },
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="ip" label="IP地址：" className={publicStyles.paddingWith}>
            {getFieldDecorator('ip')(
              <Input size="normal" style={{ width: 150 }} />
            )}
          </Form.Item>
        },
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="action" label="操作类型：" className={publicStyles.paddingWith}>
            {getFieldDecorator('action')(
              <Select allowClear size="normal" style={{ width: 150 }} >{
                this.state.operateType.map(v => <option value={v}>{v}</option>)
              }
              </Select>
            )}
          </Form.Item>
        },
      ],

    }

    let divSnip = {
      padding: 10,
      marginBottom: 10,
      boxShadow: '0 1px 1px rgba(0,0,0,.2)'
    }
    return (
      <section className={publicStyles.section}>
        <Form
          layout="inline"
        >
          <div style={divSnip}>
            {formInfo.handleInfo.map(v => v.dom())}
            <div style={{ overflow: 'hidden' }}><Button type="primary" style={{ float: 'right' }} onClick={e => {
              this.queryData();
            }}>搜索</Button></div>
          </div>

        </Form>
        <div>
          <div style={{
            textAlign: 'right',
            color: 'red'
          }}>*全部导出条数最多为50000条</div>
          <TableList
            ref="table"
            url="monitorAppLog/queryList"
            excelOpt={{
              excelId: 'skynetMonitorAppLogId',
              excelPartUrl: '/skynet/monitorAppLog/download',
              excelAllUrl: '/skynet/monitorAppLog/downloadAll'
            }}
            resetColumn={columns => columns.map(v => ({
              ...v,
              title: v.displayName,
              dataIndex: v.columnName,
              width: 100
            }))}
          />
        </div>


      </section>
    );
  }

  componentDidMount() {
    this.getRegionsAndWayport();
    this.getOperateType();
    this.queryData();
  }

  getRegionsAndWayport() {

    post('sqView/getRegion').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.setState({
        region: data.module
      })
    })
    post('sqView/getWayPort').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.wayport = data.module
    })

  }

  getOperateType() {
    post('statistics/welcome/queryExtOptions', { field: 'SkynetUrlMenu_action' }).then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.setState({
        operateType: data.module.map(v => v.type || v.partyName)
      })
    })
  }

  queryData() {
    let params = this.props.form.getFieldsValue();
    let par = this.regetParam(params, 'DataTime', ['YYYY-MM-DD','YYYY-MM-DD']);
    console.log('params', par);
    this.refs.table.fetchData(par, true)
  }

  regetParam(value, rangeField, formats) {
    let _param = {};
    for (let key in value) {
      if (value[key] === void 0 || !value[key].length) {
        continue;
      }
      if (rangeField.indexOf(key) !== -1) {
        _param['begin' + key] = value[key][0].format(formats[rangeField.indexOf(key)]);
        _param['end' + key] = value[key][1].format(formats[rangeField.indexOf(key)]);
        continue;
      }
      if (Array.isArray(value[key])) {
        _param[key] = value[key].join();
        continue;
      }
      _param[key] = typeof value[key] === 'string' ? value[key].trim() : value[key];
    }
    return _param;
  }

}







export const LogManage = Form.create()(LogManage_);

