import React from 'react';
import { Table, message } from 'antd';
import { post } from '../utils/ajax';
export class ReportSnipTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableSource: [],
      loading: false
    };
  }

  render() {
    let newData = this.state.tableSource.map((val, index) => {
      for (let key in val) {
        if (/^(-?\d+)(\.\d+)?E?(\d+)$/.test(val[key])) {
          val[key] = String(Number(val[key]).toFixed(2));
          // console.log('changed num', val[key])
        }
      }
      return {
        ...val,
        key: index + 'innerTable'
      }
    });

    return (
      <Table
        columns={this.props.columns}
        dataSource={newData.sort((a, b) => {
          return new Date(b.dataTime) - new Date(a.dataTime)
        })}
        scroll={{ y: 400 }}
        loading={this.state.loading}
      />
    );
  }
  componentWillMount() {
    this.setState({
      loading: true
    });
    post('yunYingJiXiaoView/queryWayPortByRegion', {
      timeType: this.props.dateType,
      columen: this.props.columnName + (this.props.ifCount ? 'Count' : ''),
      dataTime: this.props.dataTime,
      region: this.props.region
    }).then(data => {
      if (data.result !== 'success') {
        message.warn(data.msg || '网络错误，请稍后再试');
        this.setState({
          loading: false
        });
        return;
      }
      this.setState({
        tableSource: data.data,
        loading: false
      });
    });
  }
}
