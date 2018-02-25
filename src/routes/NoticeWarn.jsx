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


export class NoticeWarn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      source: [],
      title: ''
    }
  }

  render() {
    let columns = this.state.columns.map(v => ({
      dataIndex: v.tableColumnName,
      title: v.displayName,
      key: v.tableColumnName
    }));
    return (
      <section>
        <div style={{ padding: 10 }}><Link style={{marginRight: 10}} to="noticentre"><Icon type="left" />返回</Link>{this.state.title || '消息详情'}</div>
        <Table
          bordered
          columns={columns}
          dataSource={this.state.source.map(v => {
            let num = v.percentage;
            v.percentage = <span style={{color: Number(num) >= 0 ? '#CE594B' : '#4C9F66'}}>{num}</span>
            return v;
          })}
        />
      </section>
    )
  }
  componentDidMount() {
    this.getInfos(this.props.location.query.messageId);
  }

  getInfos(messageId) {
    post('earlyWarningResult', { userMessageId: messageId }).then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.setState({
        columns: data.module.columnList,
        source: data.module.dataList,
        title: data.module.pageName
      }, () => {
        this.setRead(messageId)
      })

    })
  }

  setRead(messageId) {
    post('userMessage/read',{messageIdsStr: JSON.stringify([messageId])}).then(data => {
      if(!data.success){
        console.log('read status error:' + data.message)
        return;
      }
      console.log('read status setted')
      return;
    })
  }


}
