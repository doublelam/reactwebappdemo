import React from 'react';
import { Icon } from 'antd';
import { post, get } from '../utils/ajax';
export class IndexPager extends React.Component {
  render() {
    let domPre = window.dominPrefix[1] === 'tmsadmin' ? '.' : window.dominPrefix[1]
    return (
      <div style={{
        height: '90%'
      }}>
        <iframe
          width="100%"
          height="100%"
          src={domPre + "/static/pages/indexPage/src/html/index.html"} frameBorder="0" style={{
            border: 0
          }}></iframe>
      </div>
    );
  }


}

