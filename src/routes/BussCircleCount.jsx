import React from 'react';
import { Link } from "dva/router";
import { get, post } from '../utils/ajax';
import { ObjOperate } from '../utils/objOperate';
import { QueryHeader } from '../components/QueryHeader';
import { ConfigureInfo, QUERY_INFO, SELECT_TYPE, ANALYZ_SELECT, specielDateType } from '../configInfo/ConfigureInfo';
import { TABLE_DESCRIBE_MAP } from '../configInfo/bussCircleConfig';
import classNames from "./SalesMan.less";
import { InfoCount } from '../components/InfoCount';
import moment from 'moment';
import {
  Input,
  Row,
  Col,
  Button,
  TreeSelect,
  Table,
  DatePicker,
  TimePicker,
  Pagination,
  Icon,
  Select,
  message,
  Tooltip,
  Radio,
  Tag
} from "antd";
import publicStyles from '../publicStyles/contentStyles.less';
import bussStyle from './BussCircleAnalyz.less';
const { MonthPicker, RangePicker } = DatePicker;

export class BussCircleCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRange: {
        from: moment().date() === 1
          ? moment().subtract(1, 'months').startOf('month')
          : moment().startOf('month'),
        to: moment().endOf('month')
      },
      dateType: 'month',
      areaType: 'region',
      areaValue: [],
      basementRadios: [],
      basementSelect: undefined,
      tableLoading: false,
      tableColumn: [],
      tableSource: [],
      pageIndex: 1,
      pageNum: 30,
      tableSelected: [],
      rawData: {}
    };
    this.timeRange = {
      dateString: [
        this.state.timeRange.from.format(QUERY_INFO[this.state.dateType].format),
        this.state.timeRange.to.format(QUERY_INFO[this.state.dateType].format)
      ],
      rawDate: [this.state.timeRange.from, this.state.timeRange.to]
    };
    this.tableSelectIds = [];
  }
  render() {
    this.timeRange.dateString = [
      this.state.timeRange.from.format(QUERY_INFO[this.state.dateType].format),
      this.state.timeRange.to.format(QUERY_INFO[this.state.dateType].format)
    ];

    this.props = {
      infos: {
        timeType: specielDateType[this.state.dateType],
        SQStartDate: this.timeRange.dateString[0],
        SQEndDate: this.timeRange.dateString[1],
        area: this.state.areaType,
        SQClassType: this.state.basementSelect || '',
        pageSize: this.state.pageNum,
        offset: this.state.pageIndex - 1,
        orderby: 'dataTime',
        order: 'DESC'
      }
    };
    this.props.infos[this.state.areaType] = String(this.state.areaValue) || '';
    const pagination = {
      size: "small",
      total: this.state.rawData.totalCount || 0,
      showSizeChanger: true,
      showQuickJumper: true,
      current: this.state.pageIndex,
      pageSize: this.state.pageNum,
      onChange: (pageIndex, pageNum) => {
        this.setState({
          pageIndex,
          tableSelected: []
        });
        this.getStaticLists();
      },
      onShowSizeChange: (pageIndex, pageNum) => {
        this.setState({
          pageNum,
          tableSelected: []
        });
        this.getStaticLists();
      }
    };

    const rowSelection = {
      selectedRowKeys: this.state.tableSelected,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          tableSelected: selectedRowKeys
        }, () => {
          this.tableSelectIds = selectedRows.map(val => val.id);
        });
      }
    };

    return (
      <section className={publicStyles.section} >
        <QueryHeader style={{
          display: 'block',
        }}>
          <div style={{
            display: 'inline-block',
            width: '85%',
            padding: '0 10px'
          }}>
            <div className={publicStyles.paddingWidth} style={{
              display: 'inline-block'
            }}>
              <span>时间范围：</span>
              <RangePicker
                format={QUERY_INFO[this.state.dateType].format}
                defaultValue={[this.state.timeRange.from, this.state.timeRange.to]}
                onChange={(data, dataString) => {
                  if (!data || data.length === 0) {
                    return;
                  }
                  this.timeRange.rawDate = data;
                  this.timeRange.dateString = dataString;
                  this.setState({
                    timeRange: {
                      from: data[0],
                      to: data[1]
                    },
                  });
                  this.getStaticLists();
                }}
                ranges={
                  {
                    '本月': [moment().startOf('month'), moment().endOf('month')],
                    '上月': [moment().month(moment().month() - 1).startOf('month'),
                    moment().month(moment().month() - 1).endOf('month')],
                    '本季度': [moment().startOf('quarter'), moment().endOf('quarter')],
                    '本年度': [moment().startOf('year'), moment().endOf('year')],
                    '上线至今': [moment('2016-9-1'), moment()]
                  }
                }
                style={{
                  width: 200,
                }}
              />
              <Button.Group>
                <Button type={this.state.dateType === 'day' ?
                  'primary' : ''} onClick={() => {
                    this.changeDateType('day');
                    this.getStaticLists();
                  }}>
                  日
              </Button>
                <Button type={this.state.dateType === 'month' ?
                  'primary' : ''} onClick={() => {
                    this.changeDateType('month');
                    this.getStaticLists();
                  }}>
                  月
              </Button>
              </Button.Group>
            </div>

            <div className={publicStyles.paddingWith} style={{
              display: this.state.areaType === 'all' ? 'none' : 'inline-block'
            }}>
              <span>区域选择：</span>
              <TreeSelect
                treeCheckable={true}
                placeholder="选择区域"
                treeData={this[this.state.areaType]}
                style={{
                  minWidth: 200,
                  maxWidth: 300,
                }}
                onChange={val => {
                  this.setState({
                    areaValue: val
                  });
                  this.getStaticLists();
                }}
                value={this.state.areaValue}
              >
              </TreeSelect>
            </div>
            <div className={publicStyles.paddingWith} style={{
              display: this.state.areaType === 'all' ? 'none' : 'inline-block'
            }}>
              <span>业态选择：</span>
              <Select
                placeholder="业态选择"
                allowClear
                style={{
                  minWidth: 150,
                  maxWidth: 300,
                }}
                onChange={val => {
                  this.setState({
                    basementSelect: val
                  });
                  this.getStaticLists();
                }}
                value={this.state.basementSelect}
              >
                {
                  this.state.basementRadios.map((val, index) => {
                    return (<Select.Option key={val} value={val}>{val}</Select.Option>);
                  })
                }
              </Select>
            </div>
          </div>
        </QueryHeader>
        <div>
          <div className={publicStyles.paddingWith} style={{
            display: 'inline-block'
          }}>

            <Radio.Group onChange={(e) => {
              this.setState({
                areaType: e.target.value,
                areaValue: []
              });
              this.getStaticLists();
            }} value={this.state.areaType}>
              <Radio.Button value="region">大区</Radio.Button>
              <Radio.Button value="wayport">公路港</Radio.Button>
              <Radio.Button value="merchant">商户</Radio.Button>
            </Radio.Group>
          </div>
          <div className={publicStyles.paddingWith} style={{
            float: 'right'
          }}>
            <Button.Group>
              <Button
                onClick={e => {
                  console.log('this.t', this.tableSelectIds);
                  if (!this.tableSelectIds.length) {
                    message.warn('未选择任何数据，请选择数据后再导出');
                    return;
                  }
                  window.open(`/skynet/sqView/getExcelStatisticsByIds?${ObjOperate.
                    objToUrlQuery(this.props.infos)}&${ObjOperate.arrayToUrl(this.tableSelectIds, 'ids')}`);
                }}
              ><Icon type="export" />批量导出</Button>
              <Button onClick={e => {
                window.open(`/skynet/sqView/getExcelStatistics?${ObjOperate.
                  objToUrlQuery(this.props.infos)}`);
              }}><Icon type="export" />全部导出</Button>
            </Button.Group>
          </div>
        </div>
        <div>
          <InfoCount countData={{
            ...this.state.rawData,
            module: {
              ...this.state.rawData.module,
              columnList: this.state.tableColumn
            }
          }}><span>（商圈交易用户数指标，合计值为按照查询条件的日期、组织去重）</span></InfoCount>
        </div>
        <div>
          <Table
            size="small"
            bordered
            loading={this.state.tableLoading}
            dataSource={this.state.tableSource}
            pagination={pagination}
            columns={this.state.tableColumn}
            rowSelection={rowSelection}
            scroll={{ x: this.state.tableColumn.length * 165, y: 'calc(100vh - 300px)' }}
          />
        </div>
      </section >
    );
  }


  componentWillMount() {
    this.getAll();
  }

  outputType(url, thisUrl) {
    if (String(url).indexOf(thisUrl) !== -1) {
      return 'primary';
    }
    return 'default';
  }

  changeDateType(dateType) {
    this.setState({ dateType: dateType });
    return true;
  }

  getRegion() {
    if (this.region) { return; }
    post('sqView/getRegion').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      // let newData = data.module;
      // this.region = newData;
      this.region = this.executeRawSelect(data.module);
    });
  }

  getWayPort() {
    if (this.wayport) { return; }
    post('sqView/getWayPort').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      // data = data.module;
      // let newData = [];
      // for (let item in data) {
      //   newData = newData.concat(data[item]);
      // }
      // this.wayport = newData;
      this.wayport = this.executeRawSelect(data.module);
      this.getStaticLists();
    });
  }

  getMerchants() {
    if (this.merchant) { return; }
    post('sqView/getMerchants').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.merchant = this.executeRawSelect(data.module);
      // data = data.module;
      // let newData = [];
      // let rawMerchant = {};
      // for (let key in data) {
      //   for (let inKey in data[key]) {
      //     for (let item of data[key][inKey]) {
      //       for (let innerKey in item) {
      //         newData.push(innerKey);
      //         rawMerchant[innerKey] = item[innerKey];
      //       }
      //     }
      //   }
      // }
      // tttest------------------------------------------
      // console.log('execute',this.executeRawSelect(data))
      // test------------------------------------------------
      // this.merchant = newData;
      // this.rawMerchant = rawMerchant;
    });
  }

  getBasementSelect() {
    post('sqView/getClassType').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.setState({
        basementRadios: data.module,
      });
    });
  }


  getStaticLists() {
    window.clearTimeout(this.getListsTimeout);
    this.setState({
      tableLoading: true
    });

    this.getListsTimeout = window.setTimeout(() => {
      post('sqView/getStatisticsList', this.props.infos).then(data => {
        if (!data.success) {
          message.warn(data.message || '网络错误');
          this.setState({
            tableLoading: false
          });
          return;
        }
        this.setState({
          tableLoading: false
        });
        let columns = [];
        let fixedColum = ['region', 'wayPort', 'merchantName', 'dataTime'];
        for (let key in data.others) {
          console.log('key:', key, fixedColum.indexOf(key) !== -1)
          columns.push({
            title: <Tooltip title={TABLE_DESCRIBE_MAP[key]}>{data.others[key]}</Tooltip>,
            dataIndex: key,
            displayName: data.others[key],
            key: key,
            tableColumnName: key,
            width: 160,
            fixed: (fixedColum.indexOf(key) !== -1)
          });
        }

        this.setState({
          rawData: data,
          tableColumn: columns,
          tableSource: data.module.dataList,
        });
      });
    }, 500);
  }

  executeRawSelect(treeData) {
    if (typeof treeData !== 'object') {
      return false;
    }
    if (Array.isArray(treeData)) {
      return treeData.map(val => {
        if (typeof val === 'string') {
          return {
            label: val,
            value: val,
            key: val
          };
        }
        for (let key in val) {
          return {
            label: val[key],
            value: key,
            key: key
          };
        }
      });
    }
    let jsonArr = [];
    for (let key in treeData) {
      jsonArr.push({
        label: key,
        value: key,
        key,
        children: this.executeRawSelect(treeData[key])
      });
    }
    return jsonArr;
  }

  getAll() {
    this.getWayPort();
    this.getRegion();
    this.getMerchants();
    this.getBasementSelect();
  }
}