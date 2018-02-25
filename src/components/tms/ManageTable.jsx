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
export class ManageTable extends React.Component {
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
      selectedId: []
    }
  }

  render() {
    let columns = this.props.resetColumn ?
      this.props.resetColumn(this.state.columns) :
      this.state.columns;
    return (
      <div ref="startDiv" style={{ padding: 5 }}>
        <div style={{ padding: 10, overflow: 'auto' }}>
          <div style={{ float: 'left' }}>{this.props.info.title || '标题'}</div>
          <div style={{ float: 'right' }}>
            <Button style={{ marginRight: 10 }} onClick={e => {
              if (!this.selectedIds || !this.selectedIds.length) {
                message.warn('请查询，并选择至少一条数据');
                return;
              }
              let ids = { ids: this.selectedIds }
              window.open(this.getParamSet.excelUrl + '?' + ObjOperate.objToUrlQuery(ids))
            }}>批量导出</Button>
            <Button
              onClick={e => {
                if (!this.getParamSet || !this.getParamSet.excelUrl) {
                  message.warn('请先查询后再进行导出操作');
                  return;
                }
                window.open(this.getParamSet.excelUrl + '?' + ObjOperate.objToUrlQuery(this.queryParams))
              }}
            >全部导出</Button>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={this.state.tableSource}
          scroll={{ x: 120 * columns.length, y: `calc(100vh - 430px)` }}
          bordered
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: this.state.selectedId,
            onChange: (selectedRowKeys, selectedRows) => {
              this.setState({
                selectedId: selectedRowKeys
              })
              this.selectedIds = selectedRows.map(v => v[this.getParamSet.excelId])
            }
          }}
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
              selectedId: [],
              current: pagination.current
            });
            this.selectedIds = [];
            const extra = {
              pageSize: pagination.pageSize,
              pageNum: pagination.current
            }
            if (sorter.field) {
              extra.orderBy = sorter.field + ' ' + (sorter.order === 'descend' ? 'desc' : 'asc');
              extra.orderByClause = sorter.field;
              extra.orderRole = sorter.order === 'descend' ? 'desc' : 'asc'
            }
            let newParam = { ...this.getParamSet, params: { ...this.getParamSet.params, ...extra } };
            this.newParam = newParam;
            this.getTableInfo(newParam, false)
          }}
        ></Table>
      </div>
    );
  }

  getTableInfo(opt, ifOut) {
    let unm = window.username;
    const { url, params, excelUrl, excelId } = opt;
    console.log('get update lists', url, params, 'ifout', ifOut);
    if (ifOut) {
      this.setState({
        current: 1,
        selectedId: []
      });
      this.selectedIds = [];
      console.log('call from out')
      this.getParamSet = {
        url,
        params,
        excelUrl,
        excelId
      }
    }
    this.setState({
      tableLoading: true
    });
    let finParam = { pageSize: 30, pageNum: 1, ...params };
    this.queryParams = finParam;
    post(url, finParam).then(data => {
      this.setState({
        tableLoading: false
      });
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      if (this.props.getTableInfo) {
        this.props.getTableInfo({
          success: true,
          totalCount: data.totalCount,
          module: {
            dataCount: data.totalCount,
            columnList: [{ tableColumnName: 'totalCarNum', displayName: '自备车辆/辆' },
            { tableColumnName: 'totalUserNum', displayName: '网点人数/人' },
            { tableColumnName: 'totalCarrierNum', displayName: '承运商/个' },
            { tableColumnName: 'totalHarborPostNum', displayName: '路港驿站/个' },
            { tableColumnName: 'totalNotHarborPostNum', displayName: '非路港驿站/个' },
            { tableColumnName: 'totalWarehouseNum', displayName: '网点总个数/个' }
          ],
            sumData: data.module.sumData
          }
        });
      }
      this.setState({
        columns: data.module.columnList.map(v => ({
          title: v.displayName,
          dataIndex: v.columnName,
          key: data.columnName,
          width: 100,
        })),
        tableSource: data.module.dataList,
        total: data.totalCount
      })
    })
  }
}
