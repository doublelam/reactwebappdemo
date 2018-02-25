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

let divClass = {
  backgroundColor: '#fff',
  padding: 10,
  boxShadow: '1px 1px 3px rgba(0,0,0,.1)',
  marginBottom: 10
}
export class NoticeCentre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInfos: [],
      msgType: 'type::1'
    }
  }

  render() {
    return (
      <section>
        <div style={divClass}>
          <div style={{ padding: 10 }}>新消息<Icon style={{ marginLeft: 10, color: '#CE594B', transform: 'rotateY(180deg)' }} type="notification" /></div>
          <ul style={{
            overflow: 'auto'
          }}>
            {this.state.newInfos.map(v => <li style={{
              float: 'left',
              padding: '5px 10px'
            }}>{v.title}: <span style={{
              color: '#2E76B9',
            }}>{v.count}</span>条</li>)}
          </ul>
        </div>
        <div style={divClass}>
          <div style={{ padding: 10 }}>消息列表</div>
          <Menu
            mode="horizontal"
            selectedKeys={this.state.msgType}
            onClick={e => {
              this.setState({
                msgType: e.key
              });
            }}
          >
            {
              [{ title: '预警', msgType: 'type::1' },
              { title: '通知', msgType: 'type::2' },
              { title: '审核', msgType: 'type::3' },
              { title: '私信', msgType: 'type::4' },
              ].map(v => <Menu.Item key={v.msgType}>{v.title}</Menu.Item>)
            }
          </Menu>
        </div>
        <div>
          <NoticeDetail
            msgType={this.state.msgType.split('::')[1]}
          />
        </div>
      </section>
    );
  }

  componentDidMount() {
    this.getNewInfos();
  }

  getNewInfos() {
    post('userMessage/unreadMessageCount').then(data => {
      console.log(data)
      if (!data.success) {
        message.warn(data.message || '网络错误！');
        return;
      }
      this.setState({
        newInfos: data.module.info
      });
    })
  }
}
