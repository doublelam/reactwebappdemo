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
  Tooltip
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


let divClass = {
  backgroundColor: '#fff',
  padding: 10,
  boxShadow: '1px 1px 3px rgba(0,0,0,.1)',
  marginBottom: 10
}
export class AllianCensorshiop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verifyStatus: [],
      statusSelect: void 0,
      timeRange: [],
      searchTitle: void 0
    }
  }

  render() {
    return (
      <section className={publicStyles.section}>
        <QueryHeader>
          <div><span>选择日期：</span>
            <DatePicker.RangePicker
              value={this.state.timeRange}
              format="YYYY-MM-DD"
              onChange={v => {
                this.setState({
                  timeRange: v
                }, () => {
                  this.getInfos()
                })
              }}
            /></div>
          <div><span>审核状态：</span>
            <Select style={{ minWidth: 100 }}
              value={this.state.statusSelect}
              allowClear
              onChange={v => {
                this.setState({
                  statusSelect: v
                }, () => {
                  this.getInfos()
                })
              }}
            >
              {this.state.verifyStatus.map(v => <option key={v} value={v}>{v}</option>)}
            </Select>
          </div>
          <div style={{ marginLeft: 10 }}>
            <Input
              value={this.state.searchTitle}
              onChange={e => {
                this.setState({
                  searchTitle: e.target.value
                })
              }} placeholder="请输入标题" addonAfter={<div style={{
                cursor: 'pointer'
              }} onClick={e => {
                this.getInfos()
              }}><Icon type="search" /></div>} />
          </div>
        </QueryHeader>
        <div>
          <CensorshipTable
            ref="censorTable"
            url={generateUrl(this, 'getListUrl')}
            columns={[
              { title: '日期', dataIndex: 'inputDate', width: 200 },
              { title: '标题', dataIndex: 'title', width: 300 },
              { title: '审核状态', dataIndex: 'status', width: 100 },
              {
                title: '操作', width: 100, render: (row) => {
                  return <Link to={'censorshipdetail' + this.appendAllot() + '?pendingId=' + row.pendingId}>查看详情</Link>
                },
              },
            ]}
          />
        </div>
      </section>
    );
  }

  appendAllot() {
    if (this.props.location.query.censorshipType === 'allocateCensorship') {
      return 'allot';
    }
    return '';
  }

  componentDidMount() {
    this.getVerifyStatus();
    this.getInfos();
  }

  componentWillReceiveProps() {
    this.getInfos();
  }

  getVerifyStatus() {
    post(generateUrl(this, 'getVerifyUrl')).then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误！');
        return;
      }
      this.setState({
        verifyStatus: data.module
      })
    })
  }

  getInfos() {
    let param = {};
    if (this.state.timeRange.length) {
      param.beginDate = this.state.timeRange[0].format('YYYY-MM-DD');
      param.endDate = this.state.timeRange[1].format('YYYY-MM-DD');
    }
    if (this.state.statusSelect) {
      param.status = this.state.statusSelect
    }
    if (this.state.searchTitle) {
      param.title = this.state.searchTitle
    }
    this.refs.censorTable.fetchData(param, true)
  }
}

const CENSORSHIP_MAP = {
  stackCensorship: {
    getListUrl: 'verify/queryList',
    getVerifyUrl: 'verify/getVerifyStatus',
    getUnknownListUrl: 'verify/queryUnknownList',
    syncUrl: 'verify/sync',
  },
  allocateCensorship: {
    getListUrl: 'allot/verify/queryList',
    getVerifyUrl: 'allot/verify/getVerifyStatus',
    getUnknownListUrl: 'allot/verify/queryUnknownList',
    syncUrl: 'allot/verify/sync'
  }
}



export const generateUrl = (_this, urlForm) => {
  let queryType = _this.props.location.query.censorshipType;
  return CENSORSHIP_MAP[queryType || 'stackCensorship'][urlForm];
}