import React from 'react';
import {
  Popconfirm,
  Radio,
  Table,
  message,
  Select,
  Icon,
  Button,
  Input,
  Upload
} from 'antd';
import { post } from '../../utils/ajax';
import { ConfigureInfo } from '../../configInfo/ConfigureInfo';
import { ObjOperate } from '../../utils/objOperate';
import { Link } from "dva/router";

export class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      fileList: []
    }
  }
  render() {
    let divSt = {
      padding: 10
    }
    let inlineB = {
      display: 'inline-block',
      verticalAlign: 'top'
    }
    return <div>
      <div style={{
        margin: 10,
        padding: 10,
        borderRadius: 3,
        boxShadow: '1px 1px 3px rgba(0,0,0,.2)'
      }}>
        <div><Link to="noticentre"><Icon type="left" />返回</Link></div>
        <div style={divSt}><h3>标题：{this.state.detail.title}</h3></div>
        <div style={divSt}>
          <div style={inlineB}>内容：</div>
          <div style={inlineB}>
            <Input autosize style={{minWidth: '50vw'}} type="textarea" value={this.state.detail.content}></Input>
          </div>
        </div>
        <div style={divSt}>
          <div style={{ ...inlineB, verticalAlign: 'middle' }}>附件：</div>
          <div style={{ ...inlineB, verticalAlign: 'middle' }}><Upload
            showUploadList={{
              showRemoveIcon: false
            }}
            disabled={true}
            action={window.dominPrefix[0] + 'file/upload'}
            withCredentials={true}
            fileList={this.state.fileList.filter(v => v.response ? v.response.success : true)}
          >
          </Upload></div>
        </div>

      </div>

    </div>
  }

  componentDidMount() {
    this.getDetail();
  }

  getDetail() {
    let userMessageId = this.props.location.query.userMessageId;
    post('userMessage/message', { userMessageId }).then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      (data.module.messageSourceId || '').split(',').map(v => {
        this.getPicList(v)
      })
      this.setState({
        detail: data.module
      })
    })
  }

  getPicList(picId) {
    post('file/' + picId).then(data => {
      console.log('pic id ', picId)
      if (!data.success) {
        message.warn(data.message || '网络错误！');
        return;
      }
      this.setState({
        fileList: this.state.fileList.concat([{
          uid: picId,
          name: data.module.fileName + data.module.ext,
          status: 'done',
          response: {
            'success': true,
            'module': picId
          },  // custom error message to show
          url: data.module.dfsUrl,
        }])
      })

    })
  }
}