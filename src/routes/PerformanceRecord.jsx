import React from 'react';
import {
  Input,
  InputNumber,
  Row,
  Col,
  Button,
  TreeSelect,
  Table,
  DatePicker,
  TimePicker,
  Pagination,
  Icon,
  message,
  Tooltip,
  Select,
  Modal,
} from "antd";
import { QueryHeader } from '../components/QueryHeader';
import classNames from "./SalesMan.less";
import publicStyles from '../publicStyles/contentStyles.less';
import moment from 'moment';
import { ConfigureInfo, QUERY_INFO } from '../configInfo/ConfigureInfo';
// import { SimulateAjax } from '../simulateAjax/simulateAjax';
import { ObjOperate } from '../utils/objOperate';
import { get, post } from '../utils/ajax';
import { InfoCount } from '../components/InfoCount';
import performanceStyle from './PerformanceRecord.less';
const { MonthPicker, RangePicker } = DatePicker;

export class PerformanceRecord extends React.Component {
  constructor(props) {
    super(props);
    this.initModalInfo = {
      dataTime: moment().subtract(1, 'day').format(QUERY_INFO.day.format),
      mainBusiness: '',
      mainSupplyChain: '',
      afterCar: '',
      refuelingIncome: '',
      businessIncome: ''
    };
    this.state = {
      modalVisible: false,
      modalTitle: '新增记录',
      tableInfo: {},
      isLoading: false,
      modalInfos: {
        ...this.initModalInfos
      },
      modalOkLoading: false,
      pageInfo: {
        pageSize: 30,
        pageNum: 1,
        equalAndMoreThanDataTime: '',
        equalAndLessThanDataTime: ''
      },
      treeData: [],
      wayports: '',
    };

    this.tableColumns = [
      {
        title: '大区',
        dataIndex: 'region',
        width: 100
      }, {
        title: '公路港',
        dataIndex: 'wayPort',
        width: 100
      }, {
        title: '日期',
        dataIndex: 'dataTime',
        width: 200
      }, {
        title: '商物流收入（元）',
        dataIndex: 'mainBusiness',
        width: 150
      }, {
        title: '商贸收入（元）',
        dataIndex: 'businessIncome',
        width: 150
      }, {
        title: '合同物流收入（元）',
        dataIndex: 'mainSupplyChain',
        width: 150
      }, {
        title: '车后（元）',
        dataIndex: 'afterCar',
        width: 150
      }, {
        title: '加油收入（元）',
        dataIndex: 'refuelingIncome',
        width: 150
      }, {
        title: '录入人（元）',
        dataIndex: 'inputMan',
        width: 200
      }, {
        title: '录入时间',
        dataIndex: 'inputDate',
        width: 200
      }, {
        title: '操作',
        width: 200,
        render: (text, record) => {
          return (
            <Button.Group
              style={{
                zIndex: 0
              }}
              value="small">
              <Button type="primary" onClick={() => { this.handleBand(text, record) }}>修改</Button>
              <Button onClick={() => {
                const _this = this;
                Modal.confirm({
                  title: '是否确认删除？',
                  onOk() {
                    _this.deleteInfo(text.operationalDataId);
                  }
                });
              }}>删除</Button>
            </Button.Group>
          );
        }
      }
    ];
  }

  handleBand(text, record) {
    // console.log('record',record)
    this.setState({
      modalTitle: '修改',
      modalVisible: true,
      modalInfos: {
        ...this.modalInfos,
        ...record
      }
    });
  }
  render() {
    let tableInfo = ObjOperate.copyArr(this.state.tableInfo);
    /*tableInfo.data && tableInfo.data.map((item, index) => {
      for (let key in item) {
        if (/^(-?\d+)(\.\d+)?$/.test(item[key])) {
          item[key] = <div style={{
            textAlign: 'right'
          }}>{ObjOperate.addComma(item[key])}</div>;
        }
      }
    });*/

    return (
      <section className={publicStyles.section}>
        <QueryHeader>
          <div className={publicStyles.rightGap}>
            <Button type="primary" onClick={() => {
              this.setState({
                modalTitle: '新增记录',
                modalVisible: true,
                modalInfos: {
                  ...this.initModalInfo
                }
              });
            }}>新增记录</Button>
          </div>
          <div>
            <span>区域查询：</span>
            <TreeSelect
              multiple
              treeCheckable
              value={this.state.wayports}
              onChange={v => {
                this.setState({
                  wayports: v
                }, () => {
                  this.getTableInfo()
                })
              }}
              style={{
                verticalAlign: 'middle',
                overflowY: 'auto',
                minWidth: 150,
                maxWidth: 250,
                maxHeight: 100
              }}
              treeData={this.state.treeData}
            />
          </div>
          <div>
            <span>日期查询：</span>
            <RangePicker
              onChange={(val, text) => {
                {/*console.log('rannge', val, text);*/ }
                this.setState({
                  pageInfo: {
                    ...this.state.pageInfo,
                    equalAndMoreThanDataTime: text[0],
                    equalAndLessThanDataTime: text[1]
                  }
                });
                this.getTableInfo();
              }}
            />
          </div>
          <div style={{
            marginLeft: 'auto'
          }}>
            <Button onClick={e => {
              const queryUrl = ObjOperate.objToUrlQuery(this.getParams({
                ...this.state.pageInfo,
                wayPortList: String(this.state.wayports)
              }));
              const url = `/skynet/operationalDataView/downLoadOperationalData?${queryUrl}`;
              window.open(url);
            }} >导出</Button>
          </div>
        </QueryHeader>
        <div style={{
          marginTop: 10
        }}>
          <Table
            columns={this.tableColumns}
            size="small"
            bordered
            dataSource={tableInfo.data || []}
            pagination={{
              showQuickJumper: true,
              showSizeChanger: true,
              defaultCurrent: 1,
              total: this.state.tableInfo.count || 0,
              pageSize: this.state.pageInfo.pageSize,
              current: this.state.pageInfo.pageNum,
              pageSizeOptions: ['10', '30', '50', '100', '200'],
            }}
            scroll={{
              x: this.tableColumns.reduce((a, b) => Number(b.width) + (a.width || a)),
              y: 'calc(100vh - 280px)'
            }}
            loading={this.state.isLoading}
            onChange={pagination => {
              this.setState({
                pageInfo: {
                  ...this.state.pageInfo,
                  pageSize: pagination.pageSize,
                  pageNum: pagination.current,
                }
              });
              this.getTableInfo();
            }}
          />
        </div>
        <div>
          <Modal
            visible={this.state.modalVisible}
            title={this.state.modalTitle}
            onCancel={() => {
              this.setState({
                modalVisible: false
              });
            }}
            onOk={() => {
              if (this.ifAllNull()) {
                return;
              }
              switch (this.state.modalTitle) {
                case '修改':
                  this.updateInfo();
                  break;
                case '新增记录':
                  this.addNew();
                  break;
              }
            }}
            confirmLoading={this.state.modalOkLoading}
          >
            <div className={performanceStyle.modalLists}><span className={performanceStyle.modalSpan}>日期：</span>
              <DatePicker style={{ width: '50%' }}
                value={this.state.modalInfos.dataTime === '' ? null : moment(this.state.modalInfos.dataTime)}
                onChange={(val, text) => {
                  {/*console.log(text);*/ }
                  this.setState({
                    modalInfos: {
                      ...this.state.modalInfos,
                      dataTime: text
                    }
                  });
                }}
              />
            </div>
            <div className={performanceStyle.modalLists}><span className={performanceStyle.modalSpan}>商物流（元）：</span>
              <InputNumber step={0.01} min={0} style={{ width: '50%' }} value={this.state.modalInfos.mainBusiness}
                onChange={
                  val => {
                    this.setState({
                      modalInfos: {
                        ...this.state.modalInfos,
                        mainBusiness: val
                      }
                    });
                  }
                }
              />
            </div>
            <div className={performanceStyle.modalLists}><span className={performanceStyle.modalSpan}>商贸收入（元）：</span>
              <InputNumber step={0.01} min={0} style={{ width: '50%' }} value={this.state.modalInfos.businessIncome}
                onChange={
                  val => {
                    this.setState({
                      modalInfos: {
                        ...this.state.modalInfos,
                        businessIncome: val
                      }
                    });
                  }
                }
              />
            </div>
            <div className={performanceStyle.modalLists}><span className={performanceStyle.modalSpan}>合同物流收入（元）：</span>
              <InputNumber step={0.01} min={0} style={{ width: '50%' }} value={this.state.modalInfos.mainSupplyChain}
                onChange={
                  val => {
                    this.setState({
                      modalInfos: {
                        ...this.state.modalInfos,
                        mainSupplyChain: val
                      }
                    });
                  }
                }
              />
            </div>
            <div className={performanceStyle.modalLists}><span className={performanceStyle.modalSpan}>车后（元）：</span>
              <InputNumber step={0.01} min={0} style={{ width: '50%' }} value={this.state.modalInfos.afterCar}
                onChange={
                  val => {
                    this.setState({
                      modalInfos: {
                        ...this.state.modalInfos,
                        afterCar: val
                      }
                    });
                  }
                }
              />
            </div>
            <div className={performanceStyle.modalLists}><span className={performanceStyle.modalSpan}>加油收入（元）：</span>
              <InputNumber step={0.01} min={0} style={{ width: '50%' }} value={this.state.modalInfos.refuelingIncome}
                onChange={
                  val => {
                    this.setState({
                      modalInfos: {
                        ...this.state.modalInfos,
                        refuelingIncome: val
                      }
                    });
                  }
                }
              />
            </div>
          </Modal>
        </div>
      </section>
    );
  }

  getParams(info) {
    const newParam = {};
    for (let key in info) {
      if (String(info[key]).trim() !== '' && String(info[key]).trim() !== null) {
        newParam[key] = info[key];
      }
    }
    return newParam;
  }

  updateInfo() {
    const param = this.getParams(this.state.modalInfos);
    // console.log('updater', param);
    this.setState({
      modalOkLoading: true
    });
    post('operationalDataView/updataOperationalData', param).
      then(data => {
        if (data.result !== 'success') {
          message.warn(data.msg || '网络错误，请重新提交');
          this.setState({
            modalOkLoading: false,
            modalVisible: false
          })
          return;
        }
        this.setState({
          modalOkLoading: false,
          modalVisible: false
        })
        this.getTableInfo();
      })
  }

  addNew() {
    const param = this.getParams(this.state.modalInfos);
    // console.log('add new', param);
    this.setState({
      modalOkLoading: true
    });
    post('operationalDataView/insertOperationalData', param).
      then(data => {
        if (data.result !== 'success') {
          message.warn(data.msg || '网络错误，请重新提交');
          this.setState({
            modalOkLoading: false,
          })
          return;
        }
        this.setState({
          modalOkLoading: false,
          modalVisible: false
        })
        this.getTableInfo();
      })
  }

  deleteInfo(rowId) {
    const param = {};
    param.isDelete = 'yes';
    param.operationalDataId = rowId;
    // console.log('deleting, param=', param);
    post('operationalDataView/updataOperationalData', param).then(data => {
      if (data.result !== 'success') {
        message.warn(data.msg || '网络错误，请重新提交');
        return;
      };
      this.getTableInfo();
    });
  }

  getRegions() {
    post('salesmansView/queryRegionByAcl').then(data => {
      if (data.result !== 'success') {
        return;
      }
      const newTreeData = this.resetRegions(data.data);
      this.setState({
        treeData: newTreeData
      });
    })
  }

  resetRegions(list) {
    return list.map(v => {
      return {
        label: v.unitName,
        value: v.unitName,
        key: v.unitName,
        children: this.resetRegions(v.childrenList || []),
      }
    })
  }

  ifAllNull() {
    const {
       mainBusiness,
      mainSupplyChain,
      afterCar,
      refuelingIncome,
      businessIncome,
    } = this.state.modalInfos;
    if (
      mainBusiness === '' &&
      mainSupplyChain === '' &&
      afterCar === '' &&
      refuelingIncome === '' &&
      businessIncome === ''
    ) {
      message.warn('输入框不能全部为空！');
      return true;
    }
    return false;
  }
  getTableInfo() {
    clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => {
      this.setState({
        isLoading: true
      });
      let params = this.getParams(this.state.pageInfo);
      // console.log('get params', params);
      post('operationalDataView/queryOperationalData', this.getParams({ ...params, wayPortList: String(this.state.wayports) })).
        then((data) => {
          if (data.result !== 'success') {
            message.warn(data.msg || '网络错误，请重新提交');
            this.setState({
              isLoading: false,
            });
            return;
          }
          this.setState({
            isLoading: false,
            tableInfo: data
          });
        });
    }, 500);
  }

  componentWillMount() {
    this.getTableInfo();
    this.getRegions();
  }
};



