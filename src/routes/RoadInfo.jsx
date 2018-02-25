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


class RoadInfo_ extends React.Component {
  constructor(props) {
    super(props);
    this.wayport = {};
    this.state = {
      region: [],
      regionVal: '',
      operateType: [],
      columns: [],
      dataSource: [],
      lineName: [],
      startCity: [],
      endCity: []
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
          dom: () => <Form.Item style={formItem} key="OpenDate" label="发生时间：" className={publicStyles.paddingWith}>
            {getFieldDecorator('OpenDate')(
              <DatePicker.RangePicker allowClear={true} size="normal" style={{ width: 200 }} />
              )}
          </Form.Item>
        },
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="startRegion" label="大区：" className={publicStyles.paddingWith}>
            {getFieldDecorator('startRegion')(
              <Select allowClear onChange={v => {
                this.setState({
                  regionVal: v
                })
                setFieldsValue({ startWayport: void 0 })
              }} size="normal" style={{ width: 150 }} >
                {this.state.region.map(v => <option value={v}>{v}</option>)}
              </Select>
            )}
          </Form.Item>
        },
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="startWayport" label="公路港：" className={publicStyles.paddingWith}>
            {getFieldDecorator('startWayport')(
              <Select allowClear size="normal" style={{ width: 150 }} >
                {(this.wayport[this.state.regionVal] || []).map(v => <option value={v}>{v}</option>)}
              </Select>
            )}
          </Form.Item>
        },
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="lineName" label="线路名称：" className={publicStyles.paddingWith}>
            {getFieldDecorator('lineName')(
              <Select allowClear size="normal" style={{ width: 150 }} >{
                this.state.lineName.map(v => <option value={v}>{v}</option>)
              }
              </Select>
            )}
          </Form.Item>
        },
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="startCity" label="出发城市：" className={publicStyles.paddingWith}>
            {getFieldDecorator('startCity')(
              <Select allowClear size="normal" style={{ width: 150 }} >{
                this.state.startCity.map(v => <option value={v}>{v}</option>)
              }
              </Select>
            )}
          </Form.Item>
        },
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="endCity" label="到达城市：" className={publicStyles.paddingWith}>
            {getFieldDecorator('endCity')(
              <Select allowClear size="normal" style={{ width: 150 }} >{
                this.state.endCity.map(v => <option value={v}>{v}</option>)
              }
              </Select>
            )}
          </Form.Item>
        },
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="lineStatus" label="线路状态：" className={publicStyles.paddingWith}>
            {getFieldDecorator('lineStatus')(
              <Select allowClear size="normal" style={{ width: 150 }} >{
                ['启用', '停用'].map(v => <option value={v}>{v}</option>)
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
              this.getData();
            }}>搜索</Button></div>
          </div>

        </Form>
        <div>
          <div style={{
            textAlign: 'right',
            color: 'red'
          }}></div>
          <Table
            columns={
              this.state.columns.concat([] || [{
              title: '操作',
              key: 'key-operate',
              render: (record) => {
                const ifAvailable = record.lineStatus === '启用';
                return <div>
                  <Button size="small"
                    disabled={ifAvailable}
                    onClick={() => { this.updateLine(record.transfarLineInfoId, '启用') }}>启用</Button>
                  <Button size="small"
                    disabled={!ifAvailable}
                    onClick={() => { this.updateLine(record.transfarLineInfoId, '暂停') }}
                  >停用</Button>
                  <Button size="small"
                    onClick={() => { this.deleteLine(record.transfarLineInfoId) }}
                  >删除</Button>
                </div>
              }
            }])}
            dataSource={this.state.dataSource}
            pagination={false}
            bordered
            scroll={{ x: this.state.columns.length * 100 }}
          />
        </div>


      </section>
    );
  }

  componentDidMount() {
    this.getRegionsAndWayport();
    [
      { field: 'TransfarLineInfo_lineName', stateField: 'lineName' },
      {field: 'TransfarLineInfo_startCity', stateField: 'startCity'},
      {field: 'TransfarLineInfo_endCity', stateField: 'endCity'}
    ].map(v => this.getOperateType(v.field, v.stateField))
  }


  deleteLine(id) {
    post('transfarLine/delete', { transfarLineInfoId: id }).then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.getData();
    })
  }

  updateLine(id, type) {
    post('transfarLine/update', { transfarLineInfoId: id, lineStatus: type }).then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.getData();
    })
  }

  getData() {
    let rawParams = this.props.form.getFieldsValue();
    let param = this.regetParam(rawParams, 'OpenDate');
    console.log(rawParams)
    post('transfarLine/lines/YES', param).then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.setState({
        columns: data.module.columnList.map(v => ({
          ...v,
          title: v.displayName,
          dataIndex: v.columnName
        })),
        dataSource: data.module.dataList
      })
    });
  }

  getRegionsAndWayport() {

    post('/tc/skynet/execute?transmission_998_url=sqView/getRegion').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.setState({
        region: data.module
      })
    })
    post('/tc/skynet/execute?transmission_998_url=sqView/getWayPort').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.wayport = data.module
    })

  }

  getOperateType(field, stateField) {
    post('/tc/skynet/execute?transmission_998_url=statistics/welcome/queryExtOptions', { field: field }).then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      let state = {};
      state[stateField] = data.module.map(v => v.type || v.partyName);
      this.setState(state)
    })
  }



  regetParam(value, rangeField, formats = ['YYYY-MM-DD', 'YYYY-MM-DD']) {
    let _param = {};
    for (let key in value) {
      if (value[key] === void 0 || !value[key].length) {
        continue;
      }
      if (rangeField.indexOf(key) !== -1) {
        _param['start' + key] = value[key][0].format(formats[0]);
        _param['end' + key] = value[key][1].format(formats[1]);
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







export const RoadInfo = Form.create()(RoadInfo_);

