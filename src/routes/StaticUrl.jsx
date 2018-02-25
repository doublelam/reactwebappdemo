import React from 'react';
import { get, post } from '../utils/ajax';
export class StaticUrl extends React.Component {
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

  componentDidMount() {
    this.refs.iframe.src = String(this.props.location.query['staticurl']).replace('HHASHH', '#');
    this.postClickInfo(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.refs.iframe.src = String(nextProps.location.query['staticurl'].replace('HHASHH', '#'));
    this.postClickInfo(nextProps);
  }

  postClickInfo(props) {
    let qury = props.location.query && props.location.query.query;
    if (!qury) {
      return;
    }
    post(qury).then(data => null)
  }
}
