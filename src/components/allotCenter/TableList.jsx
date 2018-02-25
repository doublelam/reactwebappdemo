
import React from 'react';
import {
  Popconfirm,
  Radio,
  Table,
  message,
  Select,
  Icon,
  Button,
  Form
} from 'antd';
import { post } from '../../utils/ajax';
import { ConfigureInfo } from '../../configInfo/ConfigureInfo';
import { ObjOperate } from '../../utils/objOperate';
import { Link } from "dva/router";

export class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableSource: [],
      columns: [],
      pageSize: 30,
      current: 1,
      total: 0,
      tableLoading: false,
      selectedKeys: []
    }
  }


  render() {
    let columns = this.state.columns;
    let excelId = this.props.excelOpt.excelId;
    return (
      <section>
        <div style={{ overflow: 'auto', padding: 5 }}>
          <div style={{ float: 'right' }}>
            <Button style={{ marginRight: 5 }} onClick={e => {
              if (!this.excelIds || !this.excelIds.length) {
                message.warn('至少要选择一项 (｡・`ω´･)');
                return;
              }
              let url = this.props.excelOpt.excelPartUrl +
                '?' + 'ids=' + this.excelIds;
              window.open(url);
            }}>批量导出</Button>
            <Button onClick={e => {
              let url = this.props.excelOpt.excelAllUrl +
                '?' + ObjOperate.objToUrlQuery(this.rawParam);
              window.open(url);
            }}
            >全部导出</Button>
          </div>
        </div>
        <Table
          columns={this.props.resetColumn(columns)}
          dataSource={this.state.tableSource}
          scroll={{ x: 120 * columns.length, y: `calc(100vh - 200px)` }}
          bordered
          rowSelection={{
            selection: true,
            selectedRowKeys: this.state.selectedKeys,
            onChange: (selectedRowKeys, selectedRows) => {
              console.log('ids', excelId)
              this.excelIds = selectedRows.map(v => v[excelId]).join()
              this.setState({
                selectedKeys: selectedRowKeys
              });
            }
          }}
          loading={this.state.tableLoading}
          pagination={{
            current: this.state.current,
            total: this.state.total,
            size: 'small',
            pageSize: this.state.pageSize,
            showTotal: (total, range) => '共' + total + '条数据',
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOptions: ['30', '50', '100', '200']
          }}
          onChange={(pagination, filter, sorter) => {
            this.excelIds = '',
              this.setState({
                current: pagination.current,
                pageSize: pagination.pageSize,
                selectedKeys: [],
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
      if(this.props.getData){
        this.props.getData(data);
      }
      this.setState({
        tableSource: data.module.dataList,
        total: data.totalCount,
        columns: data.module.columnList,
        selectedKeys: []
      });
    })
  }
}



