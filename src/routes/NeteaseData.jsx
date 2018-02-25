import React from 'react';
import { get, post } from '../utils/ajax';
export class NeteaseData extends React.Component {
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

  componentWillMount() {
    console.log(this.props.location.query)
    post('microStrategyView/queryToken').then(data => {
      this.refs.iframe.src = String(this.props.location.query['url']) + '&token=' + String(data.data);
    });
  }

  componentWillReceiveProps(nextProps) {
    post('microStrategyView/queryToken').then(data => {
      this.refs.iframe.src = String(nextProps.location.query['url']) + '&token=' + String(data.data);
    });
  }
}
