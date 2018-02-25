import React from 'react';
import {
  Input,
  Row,
  Col,
  Button,
  TreeSelect,
  Select,
  Table,
  DatePicker,
  TimePicker,
  Pagination,
  Icon,
  message,
  Tooltip,
  Modal,
  InputNumber
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
import ViperStyle from './ViperManage.less';
const { MonthPicker, RangePicker } = DatePicker;
export class ViperManage extends React.Component {

  constructor() {
    super();
    this.state = {
      tableInfo: {
        data: []
      },
      tableIsLoading: false,
      modalOkIsLoading: false,
      modalVisible: false,
      ifHideSearch: false,
      wayportType: [],
      ifNotAuthor: true,
      information: {
        salesmansAndPartyId: '',
        salesmansId: '',
        salesmanNumber: '',
        salesmanName: '',
        phoneNumber: '',
        role: undefined,
        partyId: '',
        partyName: '',
        realName: '',
        organization: '',
        inputDate: '',
        permissionStatus: '',
        wayPort: '',
        pageSize: 30,
        pageNum: 1,
        equalAndMoreThanInputDate: '',
        equalAndLessThanInputDate: '',
      },
      tempModalData: ObjOperate.copyObj(this.information),
      modalSureDisable: true,
    };
    this.wayportArr = ['平台用户'];
    this.columnList = [
      {
        title: '序号',
        dataIndex: 'indexNumber',
        width: 60,
      }, {
        title: '公路港',
        dataIndex: 'wayPort',
        width: 90
      }, {
        title: '工号',
        dataIndex: 'salesmanNumber',
        width: 100
      }, {
        title: '业务员姓名',
        dataIndex: 'salesmanName',
        width: 100
      }, {
        title: '手机号',
        dataIndex: 'phoneNumber',
        width: 100
      }, {
        title: '创建日期',
        dataIndex: 'inputDate',
        width: 200
      }, {
        title: '会员角色',
        dataIndex: 'role',
        width: 100
      }, {
        title: '会员类型',
        dataIndex: 'partyType',
        width: 100
      }, {
        title: '会员名',
        dataIndex: 'partyName',
        width: 200
      }, {
        title: '真实姓名',
        dataIndex: 'realName',
        width: 100
      }, {
        title: '企业名称',
        dataIndex: 'organization',
        width: 120
      }, {
        title: '认证状态',
        dataIndex: 'permissionStatus',
        width: 100
      }, {
        title: '信息录入人',
        dataIndex: 'updateMan',
        width: 110
      }, {
        title: '操作',
        dataIndex: 'operation',
        width: 130,
        render: (text, record) => {
          return (
            <Button.Group
              style={{
                zIndex: 0
              }}
              value="small">
              <Button type="primary" onClick={this.handleBindSalesman.bind(this, record)}>绑定</Button>
              <Button disabled={this.state.ifNotAuthor} onClick={this.handleDeleteSalesman.bind(this, record)}>删除</Button>
            </Button.Group>
          );
        }
      }];
  }

  render() {
    this.columnList[this.columnList.length - 1].fixed =
      (this.props && this.props.fatherHandleNav.navStatus === 'fold') ? null : 'right';
    let newData = ObjOperate.copyObj(this.state.tableInfo);
    newData.data.map((item, index) => {
      item.rowKey = Math.random();
      item['indexNumber'] = (this.state.information.pageNum - 1) * this.state.information.pageSize + index + 1;
    });
    let dateRange;
    if (this.state.information.equalAndMoreThanInputDate === '') {
      dateRange = null;
    } else {
      dateRange = [moment(this.state.information.equalAndMoreThanInputDate),
      moment(this.state.information.equalAndLessThanInputDate)
      ]
    }

    console.log('dataraande', dateRange)
    return (
      <section className={publicStyles.section}>
        <QueryHeader style={{
          display: 'block'
        }}>
          <div
            className={ViperStyle.searchDivHiddenable}
            style={{
              maxHeight: (this.state.ifHideSearch ? 0 : 200),
              opacity: (this.state.ifHideSearch ? 0 : 1)
            }}>
            <div style={{
              width: '30%',
              padding: 5
            }}>
              <span className={ViperStyle.inputTitle}>公路港名称：</span>
              <Input data-type="wayPort" style={{
                width: '60%'
              }}
                placeholder="请输入公路港名称"
                value={this.state.information.wayPort}
                onChange={(e) => {
                  this.changeSearchCondition(e.target.dataset.type, e.target.value);
                }}
              />
            </div>
            <div style={{
              width: '30%',
              padding: 5
            }}>
              <span className={ViperStyle.inputTitle}>业务员工号：</span>
              <InputNumber data-type="salesmanNumber" style={{
                width: '60%'
              }}
                value={this.state.information.salesmanNumber}
                placeholder="请输入业务员工号"
                onChange={(val) => {
                  this.changeSearchCondition('salesmanNumber', val);
                }}
              />
            </div>
            <div style={{
              width: '30%',
              padding: 5
            }}>
              <span className={ViperStyle.inputTitle}>业务员姓名：</span>
              <Input data-type="salesmanName" style={{
                width: '60%'
              }}
                value={this.state.information.salesmanName}
                placeholder="请输入业务员姓名"
                onChange={(e) => {
                  this.changeSearchCondition(e.target.dataset.type, e.target.value);
                }}
              />
            </div>
            <div style={{
              width: '30%',
              padding: 5
            }}>
              <span className={ViperStyle.inputTitle}>会员角色：</span>
              <Select data-type="role" style={{
                width: '60%'
              }}
                allowClear
                value={this.state.information.role}
                onChange={(val) => {
                  console.log('get select val', val, 'type val', typeof val);
                  this.changeSearchCondition('role', val);
                }}
                placeholder="请选择会员角色"
              >
                <Select.Option value="承运商">承运商</Select.Option>
                <Select.Option value="货主">货主</Select.Option>
              </Select>
            </div>
            <div style={{
              width: '30%',
              padding: 5
            }}>
              <span className={ViperStyle.inputTitle}>会员名：</span>
              <Input data-type="partyName" style={{
                width: '60%'
              }}
                value={this.state.information.partyName}
                placeholder="请输入会员名"
                onChange={(e) => {
                  this.changeSearchCondition(e.target.dataset.type, e.target.value);
                }}
              />
            </div>
            <div style={{
              width: '30%',
              padding: 5
            }}>
              <span className={ViperStyle.inputTitle}>真实姓名：</span>
              <Input data-type="realName" style={{
                width: '60%'
              }}
                value={this.state.information.realName}
                placeholder="请输入真实姓名"
                onChange={(e) => {
                  this.changeSearchCondition(e.target.dataset.type, e.target.value);
                }}
              />
            </div>
            <div style={{
              width: '30%',
              padding: 5
            }}>
              <span className={ViperStyle.inputTitle}>企业名称：</span>
              <Input data-type="organization" style={{
                width: '60%'
              }}
                value={this.state.information.organization}
                placeholder="请输入企业名称"
                onChange={(e) => {
                  this.changeSearchCondition(e.target.dataset.type, e.target.value);
                }}
              />
            </div>
            <div style={{
              width: '30%',
              padding: 5
            }}>
              <span className={ViperStyle.inputTitle}>
                创建日期：
              </span>
              <RangePicker
                style={{
                  width: '60%'
                }}
                format={QUERY_INFO['day'].format}
                value={dateRange}
                onChange={(data, dataString) => {
                  this.changeSearchCondition('equalAndMoreThanInputDate', dataString[0]);
                  this.changeSearchCondition('equalAndLessThanInputDate', dataString[1]);
                }}
              />
            </div>
          </div>
          <div style={{
            overflow: 'hidden'
          }}>
            <div style={{
              float: 'right'
            }}>
              <Button.Group>
                <Button
                  disabled={this.state.ifHideSearch}
                  onClick={(e) => {
                    this.setState({
                      information: {
                        ...this.state.information,
                        pageNum: 1
                      }
                    });
                    this.getInfoByPost();
                  }}
                  type="primary">搜索</Button>
                <Button
                  disabled={this.state.ifHideSearch}
                  onClick={this.clearAllSearchCondition.bind(this)}>清除</Button>
                <Button
                  onClick={(e) => {
                    this.setState({ ifHideSearch: (this.state.ifHideSearch ? false : true) });
                  }}
                ><Icon type={this.state.ifHideSearch ? 'down' : 'up'} />{this.state.ifHideSearch ? '显示' : '隐藏'}</Button>
              </Button.Group>
            </div>
          </div>
        </QueryHeader>
        <div>
          <Table
            loading={this.state.tableIsLoading}
            bordered
            size="small"
            scroll={{ x: this.columnList.length * 120, y: 'calc(100vh - 350px)' }}
            columns={this.columnList}
            dataSource={newData.data}
            pagination={{
              size: 'small',
              showSizeChanger: true,
              showQuickJumper: true,
              defaultCurrent: 1,
              total: Number(newData.count) || 0,
              pageSize: this.state.information.pageSize,
              current: this.state.information.pageNum,
              pageSizeOptions: ['10', '30', '50', '100']
            }}
            onChange={(pagination, filters, sorter) => {
              this.changeSearchCondition('pageNum', pagination.current);
              this.changeSearchCondition('pageSize', pagination.pageSize);
              this.getInfoByPost();
            }}
          />
        </div>
        <Modal title="绑定界面" visible={this.state.modalVisible}
          confirmLoading={this.state.modalOkIsLoading}
          onCancel={() => {
            this.setState({
              modalVisible: false
            });
          }}
          onOk={() => {

            if (this.state.modalSureDisable && this.state.tempModalData.salesmanNumber !== '') {
              message.warn('未找到业务员或已绑定该业务员');
              return;
            }
            this.setState({
              modalOkIsLoading: true
            });
            let { salesmansAndPartyId, salesmansId, wayPort, salesmanNumber } = this.state.tempModalData;
            {/*console.log('salesmansId,salesmanNumbers', salesmansId, salesmanNumber);*/}

            let bindData = (salesmansId !== '' && salesmanNumber !== '') ? {
              salesmansAndPartyId,
              salesmansId,
            } : {
                salesmansAndPartyId,
                wayPort,
              }
            post('salesmansAndPartyView/updateSalesmansAndParty', {
              salesmansAndPartyId,
              ...bindData
            }).then((data) => {
              if (data.result !== 'success') {
                message.warn(data.msg || '网络错误，请重新绑定');
                return;
              }
              this.getInfoByPost(() => {
                Modal.success({
                  title: '绑定成功！',
                });
              });
              {/*let copyTableInfo = ObjOperate.copyArr(this.state.tableInfo.data);
              for (let index in copyTableInfo) {
                if (copyTableInfo[index].salesmansAndPartyId ===
                  this.state.tempModalData.salesmansAndPartyId) {
                  copyTableInfo[index] = this.state.tempModalData;
                  break;
                }
              }*/}
              this.setState({
                modalVisible: false,
                modalOkIsLoading: false,
              });

            }).catch((err) => {
              message.warn(`网络错误，请重新提交：${err}`);
              this.setState({
                modalVisible: false,
                modalOkIsLoading: false,
                tableInfo: {
                  data: copyTableInfo,
                }
              });
            });
          }}
        >
          <div className={ViperStyle.inputDiv}>
            <span className={ViperStyle.inputTitle}>业务员工号：</span>
            <Input
              onChange={(e) => {
                this.setState({
                  tempModalData: {
                    ...this.state.tempModalData,
                    salesmanNumber: e.target.value
                  }
                });
                {/*console.log('datatemp', this.state.tempModalData)*/}
                if (e.target.value === '') {
                  window.clearTimeout(this.getSalesmanTimeout);
                  this.setState({
                    tempModalData: {
                      ...this.modalOld,
                      salesmanNumber: e.target.value
                    }
                  });
                  return;
                }
                this.getSalesmanInfo(e.target.value);
              }}

              value={this.state.tempModalData.salesmanNumber}
              style={{
                width: '60%'
              }}
            />
          </div>
          <div className={ViperStyle.inputDiv}>
            <span className={ViperStyle.inputTitle}>公路港：</span>
            <TreeSelect
              treeData={this.state.wayportType}
              showSearch
              showCheckedStrategy="SHOW_CHILD"
              onChange={(val) => {
                if (this.wayportArr.indexOf(val) === -1) {
                  message.warn('请选择公路港！');
                  return;
                }
                this.setState({
                  tempModalData: {
                    ...this.state.tempModalData,
                    wayPort: val
                  }
                });
              }}
              disabled={this.state.tempModalData.salesmanNumber !== ''}
              value={this.state.tempModalData.wayPort}
              style={{
                width: '60%'
              }}
            />
          </div>
          <div className={ViperStyle.inputDiv}>
            <span className={ViperStyle.inputTitle}>姓名：</span>
            <Input
              value={this.state.tempModalData.salesmanName}
              disabled
              style={{
                width: '60%'
              }}
            />
          </div>
          <div className={ViperStyle.inputDiv}>
            <span className={ViperStyle.inputTitle}>手机号：</span>
            <Input
              value={this.state.tempModalData.phoneNumber}
              disabled
              style={{
                width: '60%'
              }}
            />
          </div>
          <div className={ViperStyle.inputDiv}>
            <span className={ViperStyle.inputTitle}>会员角色：</span>
            <Input
              value={this.state.tempModalData.role}
              disabled
              style={{
                width: '60%'
              }}
            />
          </div>
          <div className={ViperStyle.inputDiv}>
            <span className={ViperStyle.inputTitle}>企业名称：</span>
            <Input
              value={this.state.tempModalData.organization}
              disabled
              style={{
                width: '60%'
              }}
            />
          </div>
          <div className={ViperStyle.inputDiv}>
            <span className={ViperStyle.inputTitle}>会员名：</span>
            <Input
              value={this.state.tempModalData.partyName}
              disabled
              style={{
                width: '60%'
              }}
            />
          </div>
          <div className={ViperStyle.inputDiv}>
            <span className={ViperStyle.inputTitle}>会员姓名：</span>
            <Input
              value={this.state.tempModalData.realName}
              disabled
              style={{
                width: '60%'
              }}
            />
          </div>
        </Modal>
      </section >
    );
  }

  handleBindSalesman(rowRecoder) {
    this.setState({
      modalVisible: true,
      tempModalData: rowRecoder
    });
    this.modalOld = ObjOperate.copyObj(rowRecoder);
    // console.log('rowrecoder', rowRecoder);
  }

  clearAllSearchCondition() {
    let initSearchCondition = {
      salesmansAndPartyId: '',
      salesmansId: '',
      salesmanNumber: '',
      salesmanName: '',
      phoneNumber: '',
      role: '',
      partyId: '',
      partyName: '',
      realName: '',
      organization: '',
      permissionStatus: '',
      wayPort: '',
      equalAndMoreThanInputDate: '',
      equalAndLessThanInputDate: '',
    }
    this.setState({
      information: {
        ...this.state.information,
        ...initSearchCondition
      }
    });
  }

  getSalesmanInfo(salesmanNumber) {
    window.clearTimeout(this.getSalesmanTimeout);
    this.getSalesmanTimeout = window.setTimeout(() => {
      post('salesmansView/querySalesmanList', {
        salesmanNumber,
      }).then((data) => {
        if (!data.count || data.count <= 0) {
          this.setState({
            modalSureDisable: true
          });
          // console.log('getSalesmanInfo, 未查到信息');
          return;
        }
        // console.log('get data[0]', data.data[0]);
        this.setState({
          modalSureDisable: false,
          tempModalData: {
            ...this.state.tempModalData,
            ...data.data[0]
          }
          // {
          //   ...this.state.tempModalData,
          //   wayPort: data.data[0].wayPort,
          //   phoneNumber: data.data[0].phoneNumber,
          //   salesmanName: data.data[0].salesmanName
          // }
        });
        // console.log('getSalesmanInfo', data);
      }).catch((err) => {
        // console.log('error:', err);
      });
    }, 500);
  }

  handleDeleteSalesman(rowRecoder) {
    const _this = this;
    this.setState({
      tempModalData: rowRecoder
    });
    Modal.confirm({
      title: '确定删除？',
      onOk() {
        post('salesmansAndPartyView/updateSalesmansAndParty', {
          salesmansAndPartyId: rowRecoder.salesmansAndPartyId,
          isDelete: 'YES'
        }).then((data) => {
          if (data.result !== 'success') {
            message.warn(data.msg || '网络错误，请重新绑定');
            return;
          }
          _this.setState({
            tableInfo: {
              data: _this.state.tableInfo.data.filter((val, index) => {
                return val.salesmansAndPartyId !== _this.state.tempModalData.salesmansAndPartyId
              })
            }
          });
          Modal.success({
            title: '删除成功！',
          });
        }).catch((err) => {
          // console.log(err)
          message.warn(`网络错误，请重新提交：${err}`);
        });
      },
      onCancel() {
        // console.log('Cancel');
      },
    });
  }

  changeSearchCondition(key, val) {
    this.setState((state) => ({
      information: {
        ...state.information,
        [key]: val
      }
    }));
  }

  getWayportType() {
    post('salesmansView/queryRegionByAcl').then((chunk) => {
      // console.log('get wayporttype', chunk);
      let data = ObjOperate.copyArr(chunk);
      const _this = this;
      if (data.data &&
        data.data[0].unitLevel === '1') {
          this.setState({
            ifNotAuthor: false
          });
        data.data = ObjOperate.copyArr(data.data[0].childrenList);
        // console.log('get data', data);
        data.data.push({
          unitLevel: '3',
          aclUnitId: 'userplatform',
          unitName: '平台用户',
        });
      }

      function resetKey(arrayData) {
        let newArr = ObjOperate.copyArr(arrayData);

        for (let item of newArr) {
          // console.log('level', item);
          if (item.unitLevel === '3') {
            _this.wayportArr.push(item.unitName);
          }
          item.key = item.aclUnitId;
          item.value = item.unitName;
          item.label = item.unitName;
          if (item.childrenList) {
            item.children = resetKey(item.childrenList);
          }
        }
        return newArr;
      }

      this.setState({
        wayportType: resetKey(data.data)
      });
    }).catch((err) => {
      message.warn('网络错误！无法获取公路港权限');
    });
  }

  getInfoByPost(callback) {
    this.setState({
      tableIsLoading: true
    });
    clearTimeout(this.postTimeout);
    this.postTimeout = window.setTimeout(() => {
      let postData = ObjOperate.copyObj(this.state.information);
      postData.role = postData.role || '';
      // console.log('post data', postData);
      post(
        'salesmansAndPartyView/querysalesmansAndPartyList',
        postData
      ).then((data) => {
        if (data.result !== 'success' || data.data === '') {
          let newData = ObjOperate.copyObj(data);
          newData.data = [];
          this.setState({
            tableInfo: newData,
            tableIsLoading: false
          });
          return;
        }
        this.setState({
          tableInfo: data,
          tableIsLoading: false
        });
        // console.log(callback, 'call')
        if (callback) {
          callback.call(this);
        }
      }).catch((err) => {
        message.warn('网络错误，请重新提交');
        this.setState({
          tableIsLoading: false
        });
        return false;
      });
    }, 500);
  }
  componentWillMount() {
    this.getInfoByPost();
    this.getWayportType();
  }
}