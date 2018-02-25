import React from 'react';
import { get, post } from '../utils/ajax';
export class FromOutside extends React.Component {
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
    post('microStrategyView/querySessionByMicroStrategy').then(data => {
      this.refs.iframe.src = String(data.data);
    });
  }
}
