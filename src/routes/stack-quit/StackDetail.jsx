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
  Form,
  Upload,
  Modal
} from "antd";
import { QueryHeader } from '../../components/QueryHeader';
import classNames from "../SalesMan.less";
import { Link } from "dva/router";
import publicStyles from '../../publicStyles/contentStyles.less';
import moment from 'moment';
import { ConfigureInfo, QUERY_INFO } from '../../configInfo/ConfigureInfo';
// import { SimulateAjax } from '../simulateAjax/simulateAjax';
import { ObjOperate } from '../../utils/objOperate';
import { get, post } from '../../utils/ajax';
import { InfoCount } from '../../components/InfoCount';
import { NoticeDetail } from '../../components/notice/NoticeDetail';
import { CensorshipTable } from '../../components/censorship/CensorshipTable';
import provinces from 'china-division/dist/provinces.json';
import { citiesData } from '../../components/cascader-options';


class StackDetail_ extends React.Component {
  constructor(props) {
    super(props);
    this.rejectRemark = '';
    this.state = {
      data: {},
      fileList: [],
      oldFileList: [],
      stepFold: true,
      btnD: false
    }
  }

  render() {
    let formItem = {
      width: '25%',
      marginRight: 0
    }
    let editable = STATUS_MAP[this.state.data.status] ?
      STATUS_MAP[this.state.data.status].editable : false;
    if (this.props.location.query && this.props.location.query.editable) {
      editable = this.props.location.query.editable === 'false' ? false : true;
    }
    let { getFieldDecorator } = this.props.form
    let formInfo = {
      handleInfo: [
        // {
        //   display: true,
        //   dom: () => <Form.Item style={formItem} key="handleManName" label="经办人姓名：" className={publicStyles.paddingWith}>
        //     {getFieldDecorator('handleManName')(
        //       <Input disabled={true} size="normal" style={{ width: 150 }} />
        //     )}
        //   </Form.Item>
        // },
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="handleManDepartment" label="所属部门：" className={publicStyles.paddingWith}>
            {getFieldDecorator('handleManDepartment')(
              <Input disabled={!editable} size="normal" style={{ width: 150 }} />
            )}
          </Form.Item>
        }, {
          display: true,
          dom: () => <Form.Item style={formItem} key="handleManPhone" label="经办人电话：" className={publicStyles.paddingWith}>
            {getFieldDecorator('handleManPhone')(
              <Input disabled={!editable} size="normal" style={{ width: 150 }} />
            )}
          </Form.Item>
        },
        // {
        //   display: true,
        //   dom: () => <Form.Item style={formItem} key="handleManOwner" label="负责人：" className={publicStyles.paddingWith}>
        //     {getFieldDecorator('handleManOwner')(
        //       <Input disabled={true} size="normal" style={{ width: 150 }} />
        //     )}
        //   </Form.Item>
        // }
      ],
      mediaMan: [
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="handleManOwner" label="处理人姓名：" className={publicStyles.paddingWith}>
            {getFieldDecorator('handleManOwner')(
              <Input disabled={true} size="normal" />
            )}
          </Form.Item>
        },
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="handleManOwnerId" label="工号：" className={publicStyles.paddingWith}>
            {getFieldDecorator('handleManOwnerId')(
              <Input disabled={true} size="normal" />
            )}
          </Form.Item>
        }
      ],
      allianceInfo: [{
        display: true,
        dom: () => <Form.Item style={formItem} key="region" label="大区：" className={publicStyles.paddingWith}>
          {getFieldDecorator('region')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="wayport" label="所属公路港：" className={publicStyles.paddingWith}>
          {getFieldDecorator('wayport')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="cooperation" label="合作方式：" className={publicStyles.paddingWith}>
          {getFieldDecorator('cooperation')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="warehouseName" label="网点名称：" className={publicStyles.paddingWith}>
          {getFieldDecorator('warehouseName')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="warehouseCode" label="网点编号：" className={publicStyles.paddingWith}>
          {getFieldDecorator('warehouseCode')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="partyName" label="加盟方名称：" className={publicStyles.paddingWith}>
          {getFieldDecorator('partyName')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="partyPhone" label="联系方式：" className={publicStyles.paddingWith}>
          {getFieldDecorator('partyPhone')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="owner" label="驿站负责人：" className={publicStyles.paddingWith}>
          {getFieldDecorator('owner')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="ownerPhone" label="驿站负责人联系方式：" className={publicStyles.paddingWith}>
          {getFieldDecorator('ownerPhone')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="address" label="地址：" className={publicStyles.paddingWith}>
          {getFieldDecorator('address')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="stageAddress" label="驿站地址：" className={publicStyles.paddingWith}>
          {getFieldDecorator('stageAddress')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="stageDesc" label="驿站功能：" className={publicStyles.paddingWith}>
          {getFieldDecorator('stageDesc')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="warehouseNum" label="网点人数：" className={publicStyles.paddingWith}>
          {getFieldDecorator('warehouseNum')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="car" label="自备车辆：" className={publicStyles.paddingWith}>
          {getFieldDecorator('car')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="isCollection" label="是否代收：" className={publicStyles.paddingWith}>
          {getFieldDecorator('isCollection')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item style={formItem} key="areaCode" label="电话区号：" className={publicStyles.paddingWith}>
          {getFieldDecorator('areaCode')(
            <Input disabled={true} size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      }],
      // mediaMan: [
      //   {
      //     display: true,
      //     dom: () => <Form.Item style={formItem} key="handleManOwner" label="处理人姓名：" className={publicStyles.paddingWith}>
      //       {getFieldDecorator('handleManOwner')(
      //         <Input disabled={true} size="normal" />
      //       )}
      //     </Form.Item>
      //   },
      //   {
      //     display: true,
      //     dom: () => <Form.Item style={formItem} key="handleManOwnerId" label="工号：" className={publicStyles.paddingWith}>
      //       {getFieldDecorator('handleManOwnerId')(
      //         <Input disabled={true} size="normal" />
      //       )}
      //     </Form.Item>
      //   }
      // ],
      reason: [
        {
          display: true,
          dom: () => <Form.Item style={formItem} key="backNetworkRemark" label="退网理由：" className={publicStyles.paddingWith}>
            {getFieldDecorator('backNetworkRemark')(
              <Input type="textarea" autosize={true} disabled={!editable} size="normal" style={{ minWidth: '50vw' }} />
            )}
          </Form.Item>
        }
      ],
      remark: [{
        display: true,
        dom: () => <Form.Item style={formItem} key="remark" label="备注：" className={publicStyles.paddingWith}>
          {getFieldDecorator('remark')(
            <Input type="textarea" autosize={true} disabled={true} size="normal" style={{ minWidth: '50vw' }} />
          )}
        </Form.Item>
      }],
    }
    let listyle = {
      width: '25%',
    }
    let btnStyle = {
      padding: 5,
      float: 'left'
    }
    let divSnip = {
      padding: 10,
      marginBottom: 10,
      boxShadow: '0 1px 1px rgba(0,0,0,.2)'
    }
    return (
      <section className={publicStyles.section}>
        <div style={{ overflow: 'auto' }}>
          {this.state.data.status && STATUS_MAP[this.state.data.status].btns.map(v => {
            if (this.state.data.status === '完成' &&
              this.props.location.query.editable === 'false' &&
              v.title !== '关闭'
            ) {
              return <span></span>
            }
            if (v.url) {
              return <div style={btnStyle}><Button onClick={e => {
                v.action && v.action.call(this, e)
              }}><Link to={v.url}>{v.title}</Link></Button></div>
            }
            return <div style={btnStyle}><Button disabled={this.state.btnD} onClick={e => {
              v.action && v.action.call(this, e)
            }}>{v.title}</Button></div>
          })}
        </div>
        <Form
          layout="inline"
        >
          <div style={{ fontSize: 16, padding: 10 }}>主题：{this.state.data.title}</div>
          <div style={divSnip}>
            <h3>经办人信息</h3>
            {formInfo.handleInfo.map(v => v.dom())}
          </div>
          <div style={divSnip}>
            <h3>下一环节处理人</h3>
            {formInfo.mediaMan.map(v => v.dom())}
          </div>
          <div style={divSnip}>
            <h3>路港驿站审核信息</h3>
            {formInfo.allianceInfo.map(v => v.dom())}
          </div>
          <div style={divSnip}>
            <h3>退网原因</h3>
            {formInfo.reason.map(v => v.dom())}
          </div>
          <div style={divSnip}>
            <h3>{editable ? '退网审核材料上传' : '退网审核已上传的材料'}</h3>
            <Upload
              disabled={!editable}
              action={window.dominPrefix[0] + 'file/upload'}
              withCredentials={true}
              showUploadList={{
                showRemoveIcon: editable
              }}
              fileList={this.state.fileList.filter(v => v.response ? v.response.success : true)}
              onChange={data => {
                if (!editable) {
                  return;
                }
                console.log('file', data)
                this.setState({
                  fileList: data.fileList
                })
              }}
            >
              <Button style={{ display: editable ? 'inline-block' : 'none' }}><Icon type="upload" />选择材料上传</Button>
            </Upload>
          </div>
          <div style={divSnip}>
            <h3>{'加盟审核已上传的材料'}</h3>
            <Upload
              disabled={true}
              action={window.dominPrefix[0] + 'file/upload'}
              withCredentials={true}
              showUploadList={{
                showRemoveIcon: false
              }}
              fileList={this.state.oldFileList.filter(v => v.response ? v.response.success : true)}
            >
            </Upload>
          </div>
          <div>
            {formInfo.remark.map(v => v.dom())}
          </div>
        </Form>
        <div style={divSnip}>
          <h3>退网审核工单流转环节</h3>
          {
            JSON.parse(this.state.data.backNetworkOaAccount || '[]').map(v => {
              return <div style={{ padding: 8, marginBottom: 5 }}><span style={{ color: '#578CEE' }}>{v.auditTime} {v.auditorNodeName} {v.auditor}</span>
                <div><strong>审核状态: </strong>{v.actionInfo}</div>
                <div><strong>处理意见: </strong>{v.advice || '无'}</div>
              </div>
            })
          }
        </div>
        <div style={divSnip}>
          <h3>加盟审核工单流转环节<Icon style={{
            backgroundColor: 'rgba(0,0,0,.3)',
            padding: 5,
            borderRadius: 3,
            cursor: 'pointer',
            color: '#fff'
          }} onClick={e => {
            this.setState({
              stepFold: !this.state.stepFold
            })
          }} type={this.state.stepFold ? 'ellipsis' : 'down'} /></h3>
          <div style={{ maxHeight: this.state.stepFold ? '0px' : 'none', overflow: 'hidden', transition: 'all .2s' }}>
            {
              JSON.parse(this.state.data.oaAccount || '[]').map(v => {
                return <div style={{ padding: 8, marginBottom: 5 }}><span style={{ color: '#578CEE' }}>{v.auditTime} {v.auditorNodeName} {v.auditor}</span>
                  <div><strong>审核状态: </strong>{v.actionInfo}</div>
                  <div><strong>处理意见: </strong>{v.advice || '无'}</div>
                </div>
              })
            }
          </div>
        </div>
      </section>
    );
  }

  componentDidMount() {
    this.getDetailInfo(() => {
      this.state.data.backNetworkAttachmentId.split(',').map(v => {
        if (String(v).length <= 0) {
          return
        }
        this.getPicList(v)
      })
      this.state.data.attachmentId.split(',').map(v => {
        if (String(v).length <= 0) {
          return
        }
        this.getPicList(v, 'oldFileList')
      })
    });
  }



  getPicList(picId, fieldName = 'fileList') {
    post('file/' + picId).then(data => {
      console.log('pic id ', picId)
      if (!data.success) {
        message.warn(data.message || '网络错误！');
        return;
      }
      let fileObj = {};
      fileObj[fieldName] = this.state[fieldName].concat([{
        uid: picId,
        name: data.module.fileName + data.module.ext,
        status: 'done',
        response: {
          'success': true,
          'module': picId
        },  // custom error message to show
        url: data.module.dfsUrl,
      }])
      this.setState(fileObj)
    })
  }

  getDetailInfo(callback) {
    post('verify/query', { pendingId: this.props.location.query.pendingId, isbacknet: 1 }).then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误！');
        return;
      }
      let newData = {
        ...data.module.metadataVO,
        ...data.module.pendingVO
      }
      let fieldsV = [];
      for (let key in newData) {
        let _obj = {};
        let temVal = newData[key];
        // if (/city|province/g.test(key)) {
        //   if (temVal === '') {
        //     temVal = [];
        //     continue;
        //   }
        //   temVal = temVal.split(',');
        // }
        _obj[key] = temVal
        fieldsV.push(_obj);
      }
      fieldsV.map(v => {
        this.props.form.setFieldsValue(v)
      })
      this.setState({
        data: newData
      }, () => {
        callback && callback.call(this);
      })
    })
  }
}

function submitInfo(url) {
  console.log(this, url)
  this.props.form.validateFieldsAndScroll((err, val) => {
    if (err) {
      return;
    }
    let pendingIds = this.state.fileList.map(v => v.response.module);
    let param = {
      ...this.state.data,
      ...val,
      backNetworkAttachmentId: pendingIds.join()
    }
    this.setState({
      btnD: true
    })
    post(url, param).then(data => {
      if (!data.success) {
        this.setState({
          btnD: false
        })
        message.warn(data.message || '网络错误！');
        return;
      }
      window.location.hash = 'stackquitnetlist';
    })
  })
}
function rejectInfo(url) {
  this.props.form.validateFieldsAndScroll((err, val) => {
    if (err) {
      return;
    }
    let pendingIds = this.state.fileList.map(v => v.response.module);
    let param = {
      ...this.state.data,
      ...val,
      backNetworkAttachmentId: pendingIds.join()
    }
    let _this = this;
    Modal.confirm({
      title: '请填写退回备注',
      content: <Input onChange={e => {
        if (e.target.value.length >= 30) {
          message.warn('备注字符30个字以内！');
          e.target.value = e.target.value.slice(0, 30)
        }
        _this.rejectRemark = e.target.value
      }} type="textarea" />,
      okText: '确定',
      cancelText: '取消',
      onOk() {
        let nParam = {
          ...param,
          rejectRemark: _this.rejectRemark
        }
        post(url, nParam).then(data => {
          if (!data.success) {
            message.warn(data.message || '网络错误！');
            return;
          }
          window.location.hash = 'stackquitnetlist';
        })
      },
      onCancel() {

      }
    })

  })
}


export const STATUS_MAP = {
  '退网完成': {
    editable: false,
    btns: [
      // {
      //   title: '暂存',
      //   action: function () { submitInfo.call(this, 'allot/verify/save') },
      // }, {
      //   title: '提交',
      //   action: function () { submitInfo.call(this, 'allot/verify/submit') },
      // },
      // {
      //   title: '退回',
      //   action: function () { rejectInfo.call(this, 'allot/verify/refused') },
      // },
      {
        title: '关闭',
        action: function () {
          window.location.hash = 'stackquitnetlist'
        },
        url: 'stackquitnetlist'
      },
    ]
  },
  '退网草稿': {
    editable: true,
    btns: [
      {
        title: '暂存',
        action: function () { submitInfo.call(this, 'lugang/logout/save') },
      }, {
        title: '提交',
        action: function () { submitInfo.call(this, 'lugang/logout/submit') },
      },
      {
        title: '关闭',
        action: function () {
          window.location.hash = 'stackquitnetlist'
        },
        url: 'stackquitnetlist'
      },
    ]
  },
  '退网已提交': {
    editable: false,
    btns: [
      {
        title: '关闭',
        action: function () {
          window.location.hash = 'stackquitnetlist'
        },
        url: 'stackquitnetlist'
      }
    ]
  },
  '完成': {
    editable: true,
    btns: [
      {
        title: '暂存',
        action: function () { submitInfo.call(this, 'lugang/logout/save') },
      }, {
        title: '提交',
        action: function () { submitInfo.call(this, 'lugang/logout/submit') },
      },
      {
        title: '关闭',
        action: function () {
          window.location.hash = 'stackquitnetlist'
        },
        url: 'stackquitnetlist'
      },
      //  {
      //   title: '归档',
      //   action: function () { submitInfo.call(this, 'verify/solved') },
      // }
    ]
  },
  'OA退网退回': {
    editable: true,
    btns: [
      {
        title: '暂存',
        action: function () { submitInfo.call(this, 'lugang/logout/save') },
      }, {
        title: '提交',
        action: function () { submitInfo.call(this, 'lugang/logout/submit') },
      },
      {
        title: '关闭',
        action: function () {
          window.location.hash = 'stackquitnetlist'
        },
        url: 'stackquitnetlist'
      },
      //  {
      //   title: '归档',
      //   action: function () { submitInfo.call(this, 'verify/solved') },
      // },
    ]
  },
}

export const StackDetail = Form.create()(StackDetail_);

