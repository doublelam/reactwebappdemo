import React from 'react';
export class InfoCount extends React.Component {
  render() {
    let data = this.props.countData;
    let displayArr = [];
    if (!data.success) {
      return <div></div>;
    }
    for (let item of data.module.columnList) {
      for (let innerItem in data.module.sumData) {
        if (item['tableColumnName'] === innerItem) {
          if (item['displayName'].split('/')[1] === '%') {
            continue;
          }
          displayArr.push(<span>{item['displayName'].split('/')[0]}<span style={{
            color: '#2F7AC6'
          }}>{data.module.sumData[innerItem]}</span>{item['unit'] || item['displayName'].split('/')[1] || ''}，&nbsp;</span>);
          break;
        }
      }
    }

    return (
      <div style={{
        marginBottom: 10
      }}>
        <span>当前查询条件下，共查询到<span style={{
          color: '#2F7AC6'
        }}>{data.module && data.module.dataCount || '0'}</span>条数据，总计</span>{displayArr}供参考。
        {this.props.children}
      </div>
    );
  }
}