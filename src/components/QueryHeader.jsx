import React from 'react';

import queryHeaderStyle from '../publicStyles/queryHeader.less';
export class QueryHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={queryHeaderStyle.search} style={{
        display: 'flex',
        padding: '10px 10px',
        ...this.props.style
      }}>
        {this.props.children}
      </div>
    );
  }
}