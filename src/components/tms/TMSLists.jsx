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
export class TMSLists extends React.Component {
  constructor(props) {
    super(props);
    this.startDivTop = 0;
    this.state = {
      ifFiltDis: false,
      title: '',
      columns: [],
      tableSource: [],
      tableLoading: false,
      filterSelect: [],
      startDivTop: 0,
      total: 0,
      current: 1,
    }
  }

  render() {
    console.log('get useranme', window.username)
    let unm = window.username;
    let columns = this.state.columns.filter(v => {
      let selects = localStorage.getItem(unm + this.props.info.title) || this.state.filterSelect;
      return selects.indexOf(v.title) !== -1
    })
    return (
      <div ref="startDiv" style={{ padding: 5 }}>
        <div style={{ padding: 10 }}>
          <div style={{ float: 'right', position: 'relative' }}>
            <Button
              onClick={() => {
                this.setState({
                  ifFiltDis: !this.state.ifFiltDis
                })
              }}
            ><Icon type="filter" /></Button>
            <Select
              multiple
              style={{
                width: '40vw', display: this.state.ifFiltDis ? 'inline-block' : 'none',
                position: 'absolute', right: 50, top: 0, zIndex: 1, maxHeight: 300, overflow: 'auto'
              }}
              value={(this.state.filterSelect.length || localStorage.getItem(unm + this.props.info.title) === null)
                ? this.state.filterSelect
                : JSON.parse(localStorage.getItem(unm + this.props.info.title))}
              onChange={(v) => {
                this.setState({
                  filterSelect: v
                }, () => {
                  localStorage.setItem(unm + this.props.info.title, JSON.stringify(v));
                })
              }}
            >
              {this.state.columns.map(v => <option key={v.title} value={v.title}>{v.title}</option>)}
            </Select>
          </div>
          <div>{this.props.info.title || '标题'}</div>
        </div>
        <Table
          columns={columns}
          dataSource={this.state.tableSource}
          scroll={{ x: 100 * columns.length, y: `calc(100vh - ${this.state.startDivTop + 180}px)` }}
          bordered
          loading={this.state.tableLoading}
          pagination={{
            current: this.state.current,
            total: this.state.total,
            size: 'small',
            showTotal: total => `共${total}条数据`,
            defaultPageSize: 30,
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOptions: ['30', '50', '100', '200']
          }}
          onChange={(pagination, filter, sorter) => {
            this.setState({
              current: pagination.current
            });
            const extra = {
              pageSize: pagination.pageSize,
              pageNum: pagination.current
            }
            if (sorter.field) {
              extra.orderBy = sorter.field + ' ' + (sorter.order === 'descend' ? 'desc' : 'asc');
              extra.orderByClause = sorter.field;
              extra.orderRole = sorter.order === 'descend' ? 'desc' : 'asc'
            }
            let newParam = { ...this.getParamSet, params: { ...this.getParamSet.params, ...extra } }
            console.log('getparam', newParam)
            this.getTableInfo(newParam, false)
          }}
        ></Table>
      </div>
    );
  }

  componentDidMount() {
    this.resetHeight();
  }


  componentWillReceiveProps() {
    this.resetHeight();
  }

  resetHeight() {
    if (this.startDivTop === this.refs.startDiv.offsetTop) {
      return;
    }
    this.setState({
      startDivTop: this.refs.startDiv.offsetTop
    }, () => {
      this.startDivTop = this.refs.startDiv.offsetTop
    });
    return;
  }

  getTableInfo(opt, ifOut) {
    let unm = window.username;
    const { url, params, linkColumn, } = opt;
    console.log('get update lists', url, params, 'ifout', ifOut);
    if (ifOut) {
      this.setState({
        current: 1
      });
      console.log('call from out')
      this.getParamSet = {
        url,
        params,
        linkColumn,
      }
    }
    this.setState({
      tableLoading: true
    });
    post(url, { pageSize: 30, pageNum: 1, ...params }).then(data => {

      this.setState({
        tableLoading: false
      });
      if (data.failure) {
        message.warn(data.message || '网络错误');
        return;
      }

      if (data.module.dataList.length === 1 && window.location.href.indexOf('tmswaybill') !== -1) {
        window.location.hash = '/tmswaybill/tmsdetail?wayno=' + data.module.dataList[0].tmiBizWaybillNum
      }
      let storage = localStorage.getItem(unm + this.props.info.title);
      this.setState({
        filterSelect: storage ? JSON.parse(storage) : data.module.columnList.map(v => v.displayName),
        columns: data.module.columnList.map(v => ({
          title: v.displayName,
          dataIndex: v.columnName,
          key: data.columnName,
          width: 100,
          sorter: true,
          render: (text, record) => v.columnName === linkColumn.name ?
            <Link target="_blank" to={linkColumn.link(text, record)} >{text}</Link> : text
        })),
        tableSource: data.module.dataList,
        total: data.totalCount
      })
    })
  }
}
