import React from 'react';
import {
  Input,
  Row,
  Col,
  Button,
  Select,
  TreeSelect,
  Table,
  DatePicker,
  TimePicker,
  Pagination,
  Icon,
  Menu,
  message,
  Tooltip,
  Modal
} from "antd";
import { QueryHeader } from '../components/QueryHeader';
import classNames from "./SalesMan.less";
import { Link } from "dva/router";
import publicStyles from '../publicStyles/contentStyles.less';
import moment from 'moment';
import { ConfigureInfo, QUERY_INFO } from '../configInfo/ConfigureInfo';
// import { SimulateAjax } from '../simulateAjax/simulateAjax';
import { ObjOperate } from '../utils/objOperate';
import { get, post } from '../utils/ajax';
import { InfoCount } from '../components/InfoCount';
import { NoticeDetail } from '../components/notice/NoticeDetail';
import { CensorshipTable } from '../components/censorship/CensorshipTable';
import ViperStyle from './ViperManage.less';
import { generateUrl } from './AllianCensorship';

export class CensorshipList extends React.Component {
  constructor(props) {
    super(props);
    this.wayportArr = ['平台用户'];
    this.state = {
      modalOkIsLoading: false,
      modalVisible: false,
      modalSureDisable: true,
      tempModalData: {
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
      }
    }
  }

  render() {
    return (
      <section className={publicStyles.section}>
        <div>
          <CensorshipTable
            ref="censorTable"
            url={generateUrl(this, 'getUnknownListUrl')}
            columns={[
              { title: '日期', dataIndex: 'inputDate', width: 180 },
              { title: '加盟方名称', dataIndex: 'title', width: 180 },
              { title: '审核状态', dataIndex: 'status', width: 100 },
              { title: '会员ID', dataIndex: 'partyId', width: 100 },
              { title: '会员名', dataIndex: 'partyName', width: 100 },
              { title: '驿站地址', dataIndex: 'stageAddress', width: 180 },
              {
                title: '操作', width: 140, render: (row) => {
                  let ifEdit = row.status === '组织未知';
                  return <Button.Group size="small">
                    <Button
                      onClick={e => {
                        post(this.resetUrl(window.dominPrefix[1], 'salesmansAndPartyView/querysalesmansAndPartyList'), { partyId: row.partyId })
                          .then(data => {
                            if (data.result !== 'success') {
                              message.warn(data.msg || '网络错误！');
                              return;
                            }
                            this.handleBindSalesman(data.data[0]);
                          })
                      }}
                    >绑定</Button>
                    <Button onClick={() => {
                      post(generateUrl(this, 'syncUrl'), { pendingId: row.pendingId }).then(data => {
                        if (!data.success) {
                          message.warn(data.message || '网络错误！');
                          return;
                        }
                        message.success('同步成功');
                        this.getInfos();
                      })
                    }}>同步</Button></Button.Group>
                },
              },
            ]}
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
            {/*console.log('salesmansId,salesmanNumbers', salesmansId, salesmanNumber);*/ }

            let bindData = (salesmansId !== '' && salesmanNumber !== '') ? {
              salesmansAndPartyId,
              salesmansId,
            } : {
                salesmansAndPartyId,
                wayPort,
              }
            post(this.resetUrl(window.dominPrefix[1], 'salesmansAndPartyView/updateSalesmansAndParty'), {
              salesmansAndPartyId,
              ...bindData
            }).then((data) => {
              if (data.result !== 'success') {
                message.warn(data.msg || '网络错误，请重新绑定');
                return;
              }
              Modal.success({
                title: '绑定成功！',
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
                {/*console.log('datatemp', this.state.tempModalData)*/ }
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
      </section>
    );
  }

  componentDidMount() {
    this.getInfos();
    this.getWayportType();
  }

  getWayportType() {
    post(this.resetUrl(window.dominPrefix[1], 'salesmansView/queryRegionByAcl')).then((chunk) => {
      // console.log('get wayporttype', chunk);
      let data = ObjOperate.copyArr(chunk);
      const _this = this;
      if (data.data &&
        data.data[0].unitLevel === '1') {
        this.setState({
          ifNotAuthor: false
        });
        data.data = ObjOperate.copyArr(data.data[0].childrenList);
        console.log('get data', data);
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

  componentWillReceiveProps(){
    this.getInfos();
  }

  getSalesmanInfo(salesmanNumber) {
    window.clearTimeout(this.getSalesmanTimeout);
    this.getSalesmanTimeout = window.setTimeout(() => {
      post(this.resetUrl(window.dominPrefix[1], 'salesmansView/querySalesmanList'), {
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

  resetUrl(env, url) {
    if (/tmsadmin/i.test(env)) {
      if (/querysalesmansAndPartyList/i.test(url)) {
        return 'tc/skynet/execute?transmission_998_url=' + url + 'All';
      }
      return 'tc/skynet/execute?transmission_998_url=' + url;
    }
    return url;
  }

  handleBindSalesman(rowRecoder) {
    this.setState({
      modalVisible: true,
      tempModalData: rowRecoder
    });
    this.modalOld = ObjOperate.copyObj(rowRecoder);
    // console.log('rowrecoder', rowRecoder);
  }

  getInfos() {
    this.refs.censorTable.fetchData({}, true)
  }
}
