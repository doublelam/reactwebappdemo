import React from 'react';
import { get, post } from '../utils/ajax';
export class FromOutside1 extends React.Component {
  render() {
    return (
      <div>
        <iframe ref="iframe" style={{
          width: '100%',
          height: 'calc(100vh - 55px)',
          border: 'none',
          frameborder: "none"
        }} frameborder="none" src="http://myportaltest.tf56.com/riskControlWeb/report/tmsReport1.html"></iframe>
      </div>
    );
  }
}
