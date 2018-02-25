import React from 'react';
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
  Tooltip
} from "antd";
import { QueryHeader } from '../components/QueryHeader';
import classNames from "./SalesMan.less";
import publicStyles from '../publicStyles/contentStyles.less';
import moment from 'moment';
import { GraphBubble, REGION_MAPPING } from '../components/GraphBubble';
import { ConfigureInfo, QUERY_INFO, SELECT_TYPE } from '../configInfo/ConfigureInfo';
// import { SimulateAjax } from '../simulateAjax/simulateAjax';
import { ObjOperate } from '../utils/objOperate';
import { InfoCount } from '../components/InfoCount';
import { get, post } from '../utils/ajax';

const { MonthPicker, RangePicker } = DatePicker;

export class AssetMovable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateType: 'month',
      portType: 'region',
      timeRange: {
        from: moment().date() === 1
          ? moment().subtract(1, 'months').startOf('month')
          : moment().startOf('month'),
        to: moment().endOf('month')
      },
      tablesInfo: {},
      pageSize: 30,
      pageIndex: 1,
      pageLoading: false,
      districtVal: [],
      ifNetDots: false,
      netDots: '',
      selectedKeys: []
    };
    this.timeRange = {
      dateString: [
        this.state.timeRange.from.format(QUERY_INFO[this.state.dateType].format),
        this.state.timeRange.to.format(QUERY_INFO[this.state.dateType].format)
      ],
      rawDate: [this.state.timeRange.from, this.state.timeRange.to]
    };
    this.getBussnessType = '';
    this.districtSelect = {
      region: [],
      wayPort: []
    };
  }

  render() {
    if (this.state.tablesInfo.module &&
      this.state.tablesInfo.module.queryInfoVO.authorityList[0].unitLevel === 1) {
      this.state.tablesInfo.module.queryInfoVO.authorityList
        = ObjOperate.copyArr(this.state.tablesInfo.module.queryInfoVO.authorityList[0].childrenList);
      // console.log('this.modulelist', this.state.tablesInfo.module.queryInfoVO.authorityList)
    }
    let treeData = this.state.tablesInfo.module &&
      ObjOperate.copyArr(this.state.tablesInfo.module.queryInfoVO.authorityList)
      || [];
    let regionData = this.state.tablesInfo.module &&
      ObjOperate.copyArr(this.state.tablesInfo.module.queryInfoVO.authorityList)
      || [];
    function resetKey(arrayData) {
      for (let item of arrayData) {
        item.key = item.aclUnitId;
        item.value = item.unitName;
        item.label = item.unitName;
        if (item.childrenList) {
          item.children = item.childrenList;
          resetKey(item.childrenList);
        }
      }
    }
    function resetRegionKey(arrayData) {
      for (let item of arrayData) {
        item.key = item.aclUnitId;
        item.value = item.unitName;
        item.label = item.unitName;
      }
    }
    resetKey(treeData);
    resetRegionKey(regionData);

    let columns = this.state.tablesInfo.module &&
      ObjOperate.copyArr(this.state.tablesInfo.module.columnList) || [];
    columns.unshift({
      displayName: '序号',
      tableColumnName: 'indexNumber',
      remark: '序号',
      reWidth: 40,
      isSorter: 'false'
    });
    columns.map((item, index) => {
      item.title = <Tooltip title={item.remark}>{item.displayName}</Tooltip>;
      item.dataIndex = item.tableColumnName;
      item.width = item.reWidth || 100;
      item.sorter = item.isSorter === undefined ? true : false;
      // if (item.columnName === this.state.portType ||
      //   (item.columnName === 'warehouse' &&
      //     this.state.portType === 'netDots')) {
      //   for (let i = 0; i <= index; i++) {
      //     columns[i].fixed = 'left';
      //   }
      // }
    });
    let dataOfTree;
    switch (this.state.portType) {
      case 'region':
        dataOfTree = regionData;
        break;
      default: dataOfTree = treeData;
        break;
    }
    // for (let item of treeData) {
    //   this.state.districtVal.push(item.value);
    // }
    let treeDataProps = {
      treeData: dataOfTree,
      showSearch: true,
      allowClear: true,
      multiple: true,
      treeCheckable: true,
      showCheckedStrategy: TreeSelect.SHOW_CHILD,
      searchPlaceholder: '选择区域',
    };

    let tableSource = this.state.tablesInfo.module &&
      ObjOperate.copyArr(this.state.tablesInfo.module.dataList) || [];
    tableSource.map((item, index) => {
      item['indexNumber'] = (this.state.pageIndex - 1) * this.state.pageSize + index + 1;
      for (let key in item) {
        if (key === this.state.tablesInfo.module.pageKey) {
          continue;
        }
        if (key === REGION_MAPPING(this.state.portType)) {
          let newItem = Object.assign({}, item);
          let comp = <GraphBubble infos={{
            newItem,
            key,
            tempPostData: this.tempPostData,
            dateType: this.state.dateType,
            portType: this.state.portType,
            tableType: 'AssetMovable'
          }}></GraphBubble>;
          item[key] = comp;
        }
        if (/^(-?\d+)(\.\d+)?$/.test(item[key])) {
          item[key] = <div style={{
            textAlign: 'right'
          }}>{ObjOperate.addComma(item[key])}</div>;
        }
      }
    });
    let pagination = {
      showQuickJumper: true,
      showSizeChanger: true,
      defaultCurrent: 1,
      total: this.state.tablesInfo.module &&
      this.state.tablesInfo.module.dataCount || 0,
      pageSize: this.state.pageSize,
      current: this.state.pageIndex,
      pageSizeOptions: ['10', '30', '50', '100', '200']
    };
    this.timeRange.dateString = [
      this.timeRange.rawDate[0].format(QUERY_INFO[this.state.dateType].format),
      this.timeRange.rawDate[1].format(QUERY_INFO[this.state.dateType].format)
    ];

    return (
      <section className={publicStyles.section}>
        <QueryHeader>
          <div className={publicStyles.rightGap}>
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
                this.getStateInfo();
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
              style={
                {
                  width: 200,
                }
              }
            />
            <Button.Group>
              <Button type={this.state.dateType === 'day' ?
                'primary' : ''} onClick={() => {
                  this.changeDateType('day');
                  this.getStateInfo();
                }}>
                日
              </Button>
              <Button type={this.state.dateType === 'month' ?
                'primary' : ''} onClick={() => {
                  this.changeDateType('month');
                  this.getStateInfo();
                }}>
                月
              </Button>
            </Button.Group>
          </div>

          <div className={publicStyles.rightGap}>
            <span>选择区域：</span>
            <TreeSelect
              {...treeDataProps}
              value={this.state.districtVal}
              onChange={(val) => {
                this.setState({ districtVal: val });
                this.setRegionByWayport(val);
                this.getStateInfo();
              }}
              style={{
                minWidth: 210,
                maxWidth: 420
              }}
            />
          </div>
          <div className={publicStyles.rightGap}>
            <span>动产类型：</span>
            <Input
              placeholder="选择类型"
              defaultValue={this.getBussnessType}
              onChange={e => {
                this.getBussnessType = e.target.value;
                ObjOperate.trimExtra(this.getBussnessType) !== '' && this.getStateInfo();
              }}
              style={
                {
                  width: 100,
                }
              }
            />
          </div>
        </QueryHeader>
        <div style={{
          padding: '15px 10px'
        }}>
          <Button.Group size="large">
            <Button
              type={this.state.portType === 'region' ? 'primary' : 'default'}
              onClick={() => {
                this.changePortType('region');
                this.orderOpt = {
                  orderby: '',
                  order: ''
                };
                this.setState({ districtVal: this.districtSelect.region });
                this.setState({
                  ifNetDots: false
                });
                this.getStateInfo();
              }}
            >
              大区
            </Button>
            <Button type={this.state.portType === 'wayport' ? 'primary' : 'default'}
              onClick={() => {
                this.changePortType('wayport');
                this.orderOpt = {
                  orderby: '',
                  order: ''
                };
                this.setState({ districtVal: this.districtSelect.wayPort });
                this.setState({
                  ifNetDots: false,
                });
                this.getStateInfo();
              }}
            >
              公路港
              </Button>
          </Button.Group>
          <div style={
            {
              float: 'right'
            }
          }>
            <Button.Group>
              <Button
                onClick={() => {
                  if (!this.selectedAreas || this.selectedAreas.length <= 0) {
                    message.warn('未选择任何数据，请选择数据后再导出');
                    return;
                  }
                  let openUrl = `/skynet/${ConfigureInfo.getQueryUrl(
                    this.state.portType,
                    this.state.dateType,
                    'AssetMovable',
                    undefined,
                    'downloadPart')}?selectedList=${ObjOperate.arrayTransformToStr(this.selectedAreas)}`;
                  if (this.tempPostData['conditionFilterItems'] &&
                    this.tempPostData['conditionFilterItems'].length > 0) {
                    openUrl += `&conditionFilterItems=${this.tempPostData['conditionFilterItems']}`;
                  }
                  {/*console.log('part', openUrl);*/ }
                  window.open(openUrl);
                }}>
                <Icon type="export" />批量导出
              </Button>
              <Button
                onClick={() => {
                  let openUrl = `/skynet/${ConfigureInfo.getQueryUrl(
                    this.state.portType,
                    this.state.dateType,
                    'AssetMovable',
                    undefined,
                    'downloadAll'
                  )}?areaConditions=${ObjOperate.
                    arrayTransformToStr(this.state.districtVal)}&timeFilterItems=${ObjOperate
                      .arrayTransformToStr([
                        {
                          'field': "inputdate",
                          'symbol': "GTOEQ",
                          'value': this.timeRange.dateString[0],
                          'relation': 'AND'
                        },
                        {
                          'field': 'inputdate',
                          'symbol': 'LTOEQ',
                          'value': this.timeRange.dateString[1],
                          'relation': 'AND'
                        }
                      ])}`;
                  if (this.tempPostData['conditionFilterItems'] &&
                    this.tempPostData['conditionFilterItems'].length > 0) {
                    openUrl += `&conditionFilterItems=${this.tempPostData['conditionFilterItems']}`;
                  }
                  window.open(openUrl);
                }}
              >
                <Icon type="export" />全部导出
              </Button>
            </Button.Group>
          </div>
        </div>
        <div>
          {/*<InfoCount countData={this.state.tablesInfo} />*/}
        </div>
        <Table
          columns={columns}
          dataSource={tableSource}
          rowKey={record => record.registered}
          pagination={pagination}
          loading={this.state.pageLoading}
          scroll={{ x: columns.length * 130, y: 'calc(100vh - 320px)' }}
          size="small"
          bordered
          onChange={(pagination, filters, sorter) => {
            this.orderOpt = {
              orderby: sorter.column && sorter.column.columnName || '',
              order: sorter.order === 'ascend' ? 'ASC' : 'DESC'
            };
            this.setState({ pageIndex: pagination.current });
            this.setState({ pageSize: pagination.pageSize });
            this.getStateInfo(false, true);

          }}
          rowSelection={
            {
              selections: false,
              selectedRowKeys: this.state.selectedKeys,
              onChange: (selectedRowKeys) => {
                this.setState({
                  selectedKeys: selectedRowKeys,
                });
              },
              onSelect: (record, selected, selectedRows) => {
                this.selectedAreas = this.reOutputArea(this.tempSelectPrimaryKey, selectedRows);
              },
              onSelectAll: (selected, selectedRows, changeRows) => {
                this.selectedAreas = this.reOutputArea(this.tempSelectPrimaryKey, selectedRows);

              }
            }
          }
        >
        </Table>
      </section>
    );
  }

  reOutputArea(pageKey, selectedData) {
    let selectedArea = [];
    for (let item of selectedData) {
      selectedArea.push(item[pageKey]);
    }
    return selectedArea;
  }

  changeTreeRegion(treeData) {
    this.setState({
      regionTreeArr: treeData
    });
    return true;
  }

  changeDateType(dateType) {
    this.setState({ dateType: dateType });
    return true;
  }

  changePortType(portType) {
    this.setState({ portType: portType });
    return true;
  }

  getInfosByQuering(queryUrl, queryData, cb, delay = 2000) {
    window.clearTimeout(this.delayAjax);
    this.setState({
      pageLoading: true
    });
    this.delayAjax = window.setTimeout(() => {
      post(queryUrl, queryData).then((data) => {
        // console.log('data', data);
        if (!data || !data.success) {
          message.warn(data.message || '网络错误，请重新提交');
          this.setState({
            pageLoading: false
          });
          return false;
        }
        this.setState({
          pageLoading: false
        });
        this.setState({
          tablesInfo: data
        });
        cb(data);
      }).catch((err) => {
        message.warn('网络错误，请重新提交');
        this.setState({
          pageLoading: false
        });
        return false;
      });
    }, delay);

  }

  getStateInfo(ifInit, ifPageChange) {
    if (!ifPageChange) {
      this.setState({
        pageIndex: 1,
      });
    }
    clearTimeout(this.getStateInfoTimeout);
    this.getStateInfoTimeout = setTimeout(() => {
      this.tempPostData = {
        'pageSize': this.state.pageSize,
        'pageIndex': this.state.pageIndex,
        'timeFilterItems': ObjOperate.arrayTransformToStr([
          {
            'field': "inputdate",
            'symbol': "GTOEQ",
            'value': this.timeRange.dateString[0],
            'relation': 'AND'
          },
          {
            'field': 'inputdate',
            'symbol': 'LTOEQ',
            'value': this.timeRange.dateString[1],
            'relation': 'AND'
          }
        ]),
        "orderBy": this.orderOpt && this.orderOpt.orderby || "inputdate",
        "orderRule": this.orderOpt && this.orderOpt.order || "DESC"
      };
      if (ifInit === 'init') {
        delete this.tempPostData['areaConditions'];
      }
      if (this.state.districtVal && this.state.districtVal.length > 0) {
        this.tempPostData["areaConditions"] = ObjOperate.arrayTransformToStr(this.state.districtVal);
      }
      if (this.getBussnessType !== '全部' && this.getBussnessType !== '') {
        // console.log(this.getBussnessType);
        this.tempPostData['conditionFilterItems'] = ObjOperate.arrayTransformToStr([
          {
            "field": "type",
            "symbol": "CT",
            "value": ObjOperate.trimExtra(this.getBussnessType),
            "relation": "AND"
          }
        ]);
      }
      let postUrl = ConfigureInfo.getQueryUrl(this.state.portType, this.state.dateType, 'AssetMovable');
      // console.log('get will post data: ', this.tempPostData, 'post url', postUrl);
      this.getInfosByQuering(postUrl, this.tempPostData, data => {
        this.tempSelectPrimaryKey = data.module.pageKey;
        if (ifInit === 'init') {
          let initRegion = [];
          for (let item of data.module.queryInfoVO.authorityList) {
            initRegion.push(item.unitName);
          }
          // this.setState({
          //   districtVal: initRegion
          // });
          // this.setRegionByWayport(initRegion);
        }
        this.setState({
          selectedKeys: [],
        });
      }, 0);
    }, 500);
  }

  setRegionByWayport(infoArr = []) {
    let authorityData = this.state.tablesInfo.module &&
      ObjOperate.copyArr(this.state.tablesInfo.module.queryInfoVO.authorityList)
      || [];

    let ifRegion = false;
    fatherFor:
    for (let item of authorityData) {
      for (let innerItem of infoArr) {
        if (item.unitName === innerItem) {
          ifRegion = true;
          break fatherFor;
        }
      }
    }
    if (ifRegion) {
      let wayPortsArr = [];
      for (let item of authorityData) {
        for (let innerItem of infoArr) {
          if (item.unitName === innerItem) {
            for (let children of item.childrenList) {
              wayPortsArr.push(children.unitName);
            }
          }
        }
      }
      this.districtSelect.region = infoArr;
      this.districtSelect.wayPort = wayPortsArr;
    } else {
      let regionArr = [];
      for (let innerItem of authorityData) {
        if (innerItem.childrenList) {
          childrenList:
          for (let childItem of innerItem.childrenList) {
            for (let item of infoArr) {
              if (childItem.unitName === item) {
                regionArr.push(innerItem.unitName);
                break childrenList;
              }
            }
          }
        }
      }
      this.districtSelect.region = regionArr;
      this.districtSelect.wayPort = infoArr;
    }
  }

  componentWillMount() {
    // console.log(this.state.pageSize, this.state.pageIndex, this.timeRange);
    this.getStateInfo('init');
    // this.getInfosByQuering(queryUrl, queryData, (data) => {
    //   console.log('first data', data);
    //   let initRegion = [];
    //   for (let item of data.module.queryInfoVO.authorityList) {
    //     initRegion.push(item.unitName);
    //   }
    //   this.setState({
    //     districtVal: initRegion
    //   });
    //   this.setRegionByWayport(initRegion);
    // }, 0);
  }
}