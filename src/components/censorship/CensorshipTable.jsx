import React from 'react';
import {
  Popconfirm,
  Radio,
  Table,
  message,
  Select,
  Icon,
  Button
} from 'antd';
import { post } from '../../utils/ajax';
import { ConfigureInfo } from '../../configInfo/ConfigureInfo';
import { ObjOperate } from '../../utils/objOperate';
import { Link } from "dva/router";

export class CensorshipTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableSource: [],
      pageSize: 30,
      current: 1,
      total: 0,
      tableLoading: false
    }
  }


  render() {
    let columns = this.props.columns
    return (
      <section>
        <Table
          columns={columns}
          dataSource={this.state.tableSource}
          scroll={{ x: 100 * columns.length, y: `calc(100vh - 200px)` }}
          bordered
          loading={this.state.tableLoading}
          pagination={{
            current: this.state.current,
            total: this.state.total,
            size: 'small',
            pageSize: this.state.pageSize,
            showQuickJumper: true,
            showSizeChanger: true,
            showTotal: (total, range) => '共' + total + '条数据',
            pageSizeOptions: ['30', '50', '100', '200']
          }}
          onChange={(pagination, filter, sorter) => {
            this.setState({
              current: pagination.current,
              pageSize: pagination.pageSize
            }, () => {
              this.fetchData(this.rawParam)
            });
          }}
        />
      </section>
    )
  }

  componentDidMount() {

  }


  fetchData(param, ifOut) {
    if (ifOut) {
      this.setState({
        current: 1
      }, () => {
        this.getInfo(param)
      })
      this.rawParam = param;
      return;
    }
    this.getInfo(param);
  }

  getInfo(rawParam) {
    this.setState({
      tableLoading: true
    })
    let param = {
      ...rawParam,
      pageNum: this.state.current,
      pageSize: this.state.pageSize
    };
    post(this.props.url, param).then(data => {
      this.setState({
        tableLoading: false
      })
      if (!data.success) {
        message.warn(data.message || '网络错误！');
        return;
      }
      this.setState({
        tableSource: data.module,
        total: data.totalCount
      });
    })
  }




}
