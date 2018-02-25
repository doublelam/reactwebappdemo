import React from 'react';
import { Link } from "dva/router";
import { get, post } from '../utils/ajax';
import { deduplication, filter, ObjOperate } from '../utils/objOperate';
import { QueryHeader } from '../components/QueryHeader';
import { ConfigureInfo, QUERY_INFO, SELECT_TYPE, ANALYZ_SELECT, specielDateType, RADIOS_MAP } from '../configInfo/ConfigureInfo';
import classNames from "./SalesMan.less";
import moment from 'moment';
import {
  Input,
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
  Tag,
  Menu
} from "antd";
import publicStyles from '../publicStyles/contentStyles.less';
const { MonthPicker, RangePicker } = DatePicker;

export class BusinessDiary extends React.Component {
  constructor(props) {
    super(props);
    this.cacheArea = {};

    this.state = {
      dataTime: moment().add(-1, 'days'),
      tableData: {
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": {
          "dataList": []
        }
      },
      categorySeries: [],
      categorySelect: void (0),
      areaList: [],
      areaSelect: void (0),
      tableLoading: false,
      categoryFilt: void (0)
    };
    this.tableData = ObjOperate.copyObj(this.state.tableData);
  }
  render() {
    const categoryList = this.state.tableData.module.dataList.map(val => val.category);
    const indiciesList = this.state.tableData.module.dataList.map(val => val.fieldName);
    const countDuplicateList = countDuplication(categoryList);
    const mapCate = {};
    for (let i = categoryList.length - 1; i >= 0; i--) {
      mapCate[categoryList[i]] = countDuplicateList[i] + 1
    }

    const columList = [
      {
        title: '类别',
        dataIndex: 'category',
        key: 'category',
        width: 150,
        render: (val, row, index) => {
          return {
            children: val,
            props: {
              rowSpan: (countDuplicateList[index] + 1) === mapCate[val]
                ? mapCate[val] : 0
            }
          }
        }
      },
      {
        title: '指标名称',
        dataIndex: 'fieldName',
        key: 'fieldName',
        width: 150
      },
      {
        title: this.state.dataTime.format('YYYY年MM月DD日') + '完成值',
        dataIndex: 'day',
        key: 'day',
        width: 150
      },
      {
        title: this.state.dataTime.format('YYYY年MM月') + '累计完成值',
        dataIndex: 'month',
        key: 'month',
        width: 150
      },
      {
        title: `${this.state.dataTime.format('YYYY年')}第${this
          .state.dataTime.quarter()}季度完成值`,
        dataIndex: 'quarter',
        key: 'quarter',
        width: 150
      },
      {
        title: `${this.state.dataTime.format('YYYY年')}完成值`,
        dataIndex: 'year',
        key: 'year',
        width: 150
      }
    ];

    const tableSource = this.state.tableData.module.dataList.map(val => {
      const snip = {};
      for (let key in val) {
        snip[key] = setComma(val[key]);
      }
      return snip;
    });


    return (
      <section className={publicStyles.section} >
        <QueryHeader style={{
          display: 'block',
          overflow: 'auto'
        }}>
          <div className={publicStyles.paddingWith} style={{
            float: 'left'
          }}>
            <span>时间范围：</span>
            <DatePicker
              format="YYYY-MM-DD"
              value={this.state.dataTime}
              allowClear={false}
              onChange={
                v => {
                  this.setState({ dataTime: v }, () => {
                    this.getTableData();
                  });
                }
              }
            />
          </div>
          <div className={publicStyles.paddingWith} style={{
            float: 'left'
          }}>
            <span>类别：</span>
            <TreeSelect
              showSearch
              treeData={this.state.categorySeries}
              value={this.state.categorySelect}
              onChange={val => {
                this.setState({
                  categorySelect: val,
                  areaSelect: void (0)
                }, () => {
                  this.getAreaList()
                  this.getTableData();
                })
              }}
              style={{
                minWidth: 150
              }}
            >
            </TreeSelect>
          </div>
          <div hidden={/all|lujing/g.test(String(this.state.categorySelect))} className={publicStyles.paddingWith} style={{
            float: 'left'
          }}>
            <span>选择区域：</span>
            <TreeSelect
              showSearch
              allowClear
              placeholder="选择区域"
              multiple={String(this.state.categorySelect).indexOf('ehuodi') !== -1}
              treeCheckable={String(this.state.categorySelect).indexOf('ehuodi') !== -1}
              showCheckedStrategy={TreeSelect.SHOW_CHILD}
              treeData={this.state.areaList}
              value={this.state.areaSelect}
              onChange={(val, label, extra) => {
                this.setState({
                  areaSelect: val
                }, () => {
                  this.getTableData();
                })
              }}
              style={{
                minWidth: 150
              }}
            />
          </div>
          <div className={publicStyles.paddingWith} style={{
            float: 'left'
          }}>
            <span>类别快速查询：</span>
            <Select
              showSearch
              allowClear
              placeholder="类别快速查询"
              value={this.state.categoryFilt}
              onChange={(val, label, extra) => {
                this.setState({
                  categoryFilt: val,
                  indiciesFilt: void (0)
                }, () => {
                  if (!val) {
                    this.setState({
                      tableData: this.tableData
                    })
                    return;
                  }
                  const newData = ObjOperate.copyObj(this.tableData);
                  newData.module.dataList = filter(val => val.category === this.state.categoryFilt
                    , this.tableData.module.dataList);
                  this.setState({
                    tableData: newData
                  })
                })
              }}
              style={{
                minWidth: 150
              }}
            >
              {
                deduplication(this.tableData.module.dataList.map(val => val.category)).map(val => {
                  return <Option value={val}>{val}</Option>
                })
              }
            </Select>
          </div>
          <div className={publicStyles.paddingWith} style={{
            float: 'left'
          }}>
            <span>指标快速查询：</span>
            <Select
              showSearch
              allowClear
              placeholder="指标快速查询"
              value={this.state.indiciesFilt}
              onChange={(val, label, extra) => {
                this.setState({
                  indiciesFilt: val,
                  categoryFilt: void (0)
                }, () => {
                  if (!val) {
                    this.setState({
                      tableData: this.tableData
                    })
                    return;
                  }
                  const newData = ObjOperate.copyObj(this.tableData);
                  newData.module.dataList = filter(val => val.fieldName === this.state.indiciesFilt
                    , this.tableData.module.dataList);
                  this.setState({
                    tableData: newData
                  })
                })
              }}
              style={{
                minWidth: 150
              }}
            >
              {
                deduplication(this.tableData.module.dataList.map(val => val.fieldName)).map(val => {
                  return <Option value={val}>{val}</Option>
                })
              }
            </Select>
          </div>
        </QueryHeader>
        <section>
          <div style={{
            padding: 10,
            overflow: 'auto'
          }}>
            <Button style={{ float: 'right' }} onClick={
              (e) => {
                let paramStr = ObjOperate.objToUrlQuery(this.param);
                window.open(`/skynet/statistics/operatequery/download?${paramStr}`)
              }
            }><Icon type="export" />导出</Button>
          </div>
          <div>
            <Table
              columns={columList}
              bordered
              size="small"
              dataSource={tableSource.map(val => {
                for (let key in val) {
                  val[key] = val[key] || '-'
                }
                return {
                  ...val,
                  fieldName: <Tooltip title={(val.remark || '').replace(/万元|亿元/g, '元')}>{val.fieldName.replace(/万元|亿元/g, '元')}</Tooltip>
                }
              })}
              pagination={false}
              loading={this.state.tableLoading}
              scroll={{ x: 150 * columList.length, y: 'calc(100vh - 240px)' }}
            />
          </div>
        </section>
      </section>
    );
  }

  getCategorySeries() {
    post('cityView/queryOrganizationalRelationshipByAcl', { "projectType": "skynet_daily" })
      .then(data => {
        if (data.result !== 'success') {
          message.warn(data.msg || '网络错误，请重新提交');
          return;
        }
        const series = duplicate(data.data)
        this.setState({
          categorySeries: series,
          categorySelect: series[0].value,
        }, () => {
          this.getAreaList();
          this.getTableData();
        });
      });
  }

  getAreaList() {
    const param = {
      projectType: String(this.state.categorySelect).indexOf('ehuodi') !== -1
        ? 'skynet_city' : 'IntelLogistics',
      aclType: String(this.state.categorySelect).split('&&')[0]
    }
    if (this.cacheArea[param.aclType]) {
      this.setState({
        areaList: this.cacheArea[param.aclType],
      });
      return;
    }
    post('cityView/queryOrganizationalRelationshipByAcl', param)
      .then(data => {
        if (data.result !== 'success') {
          this.setState({
            areaList: [],
          });
          message.warn(data.msg || '网络错误，请重新提交');
          return;
        }
        const series = duplicate(data.data, 'unitName', 'unitName')
        this.cacheArea[param.aclType] = series;
        this.setState({
          areaList: series,
        });
      });
  }

  componentDidMount() {
    this.getCategorySeries();
  }

  getTableData() {
    window.clearTimeout(this.tableTimeout);

    this.param = {
      view: `['${String(this.state.categorySelect || '').split('&&')[0]}']`,
      date: this.state.dataTime.format('YYYY-MM-DD'),
    }
    if (this.state.areaSelect) {
      let filterCon = String(this.param.view).indexOf('ehuodi') !== -1 ?
        (this.state.areaSelect).map((val, index) => ({
          field: 'city',
          symbol: 'EQ',
          relation: index === 0 ? 'AND' : 'OR',
          value: val.split('&&')[0]
        }))
        : [{
          // field: String(param.view).indexOf('ehuodi') !== -1 ? ehuodiMap[this.state.areaSelect.split('&&')[1]] : MAP_LEVEL[this.state.areaSelect.split('&&')[1]],
          field: MAP_LEVEL[this.state.areaSelect.split('&&')[1]],
          symbol: 'EQ',
          relation: 'AND',
          value: this.state.areaSelect.split('&&')[0]
        }];
      this.param.filterItems = ObjOperate.arrayTransformToStr(filterCon)
    }

    this.tableTimeout = setTimeout(() => {
      this.setState({
        tableLoading: true
      });
      post('statistics/operatequery', this.param).then(data => {
        if (!data.success) {
          message.warn(data.msg || '网络错误，请重新提交');
          this.setState({
            tableLoading: false
          })
          return;
        }
        this.tableData = data;
        this.setState({
          tableData: data,
          tableLoading: false
        });
      });

    }, 500);
  }
}


const setComma = str => /^(-?\d+)(\.\d+)?$/.test(str) ?
  <div style={{
    textAlign: 'right'
  }}>{ObjOperate.addComma(str)}</div>
  : str;


const duplicate = (arr, valType = 'type', labelName = 'unitName') => {
  if (!arr.length || arr === '') {
    return [];
  }
  return arr.map(val => {
    return {
      ...val,
      label: val[labelName],
      value: val[valType] + '&&' + val.unitLevel,
      key: val[valType],
      children: duplicate(val.childrenList, valType, labelName),
    }
  });
};

const countDuplicationOneNum = (num, arr) => {
  if (!arr.length) { return 0 }
  if (arr.length === 1) {
    if (num === arr[0]) { return 1 }
    return 0
  }
  return countDuplicationOneNum(num, [arr[0]])
    + countDuplicationOneNum(num, arr.slice(1, arr.length));
}

const countDuplication = arr => {
  if (arr.length <= 1) { return [0] }
  return [countDuplicationOneNum(arr[0], arr.slice(1, arr.length))]
    .concat(countDuplication(arr.slice(1, arr.length)));
}

const MAP_LEVEL = {
  '1': '',
  '2': 'region',
  '3': 'wayport'
}

const ehuodiMap = {
  '1': '',
  '2': 'city'
}



