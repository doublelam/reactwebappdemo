import React from 'react';
import { get, post } from '../utils/ajax';
export class FromInterface extends React.Component {
  render() {

    return (
      <div>
        <iframe ref="iframe" style={{
          width: '100%',
          height: 'calc(100vh - 55px)',
          border: 'none',
          frameborder: "none"
        }} frameborder="none"></iframe>
      </div>
    );
  }

  componentWillReceiveProps() {
    this.setSrc()
  }
  componentDidMount() {
    this.setSrc()
  }

  setSrc() {
    let url = this.props.location.query.interface;
    post(url).then(data => {
      if (data.result !== 'success') {
        message.warn(data.message || '网络错误！');
        return;
      }
      this.refs.iframe.src = data.data.replace(/\\/g, '')
    })
  }

}
