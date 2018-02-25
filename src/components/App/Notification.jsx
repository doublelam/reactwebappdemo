import React from 'react';
import { post } from '../../utils/ajax';
import { ObjOperate } from '../../utils/objOperate';
import { Link } from "dva/router";
import { RADIOS_MAP } from '../../configInfo/ConfigureInfo';
import { message, Button, Icon, Badge, Tooltip } from 'antd';

export class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dots: 0
    }
  }

  render() {
    return (
      <div style={{
        cursor: 'pointer',
        ...this.props.style
      }}>
        <Tooltip overlayStyle={{
          minWidth: 80
        }} title={() => this.state.data.map(v => <div>{v.title}: {v.count}</div>)}>
          <Link style={{ color: 'inherit' }} to={this.getNoticeUrl()}>
            <Badge count={this.state.dots}>
              <Icon style={{
                fontSize: 16,
                padding: '0 5px',
                transform: 'rotateY(180deg)'
              }} type="bell" />
            </Badge>
          </Link>
        </Tooltip>
      </div>
    );
  }

  componentDidMount() {
    this.getNotification();
    this.watchUrlChange();
  }

  watchUrlChange() {
    window.onhashchange = e => {
      this.getNotification();
    }
  }

  getNoticeUrl() {
    console.log('url', this.props.rawMenu)
    if (!this.props.rawMenu) {
      return;
    }
    for (let v of this.props.rawMenu) {
      if (/noticentre/i.test(v.menuUrl)) {
        return v.url
      }
    }
  }

  getNotification() {
    post('userMessage/unreadMessageCount').then(data => {
      if (!data.success) {
        message.warn(data.messsage || '网络错误');
        return;
      }
      this.setState({
        data: data.module.info,
        dots: data.totalCount
      });
    }).catch(err => {
      console.log(err);
    })
  }
}
