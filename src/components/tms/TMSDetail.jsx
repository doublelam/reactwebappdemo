import React from 'react';
import {
  Popconfirm,
  Radio,
  Table,
  message
} from 'antd';
import { post } from '../../utils/ajax';
import { Link } from "dva/router";
import { ConfigureInfo } from '../../configInfo/ConfigureInfo';
import { ObjOperate } from '../../utils/objOperate';

const listsItem = {
  width: '25%',
  float: 'left',
  padding: 5
}
export class TMSDetail extends React.Component {
  constructor(props) {
    super(props);
    this.cache = {};
    this.state = {
      title: '',
      data: {},
      infoSelect: 'getTrack',
      infoColumn: [],
      infoDataSource: [],
      infoTableLoading: false
    }
  }

  render() {
    let unm = window.username;
    let getSto = localStorage.getItem(unm + 'waybillLinkLists');
    let lists = getSto && JSON.parse(getSto) || [];
    return (
      <div>
        <div>
          <ul style={{ overflow: 'auto' }}>
            {['orderNo', 'tmiBizOrderNum', 'waybillNo', 'tmiBizWaybillNum'].map(
              v => <li style={{ float: 'left', padding: 5 }}>{MANDARIN_MAP[v]}: {this.state.data[v]}</li>
            )}
          </ul>
        </div>
        <div style={{
          width: '20%',
          float: 'right',
          backgroundColor: '#eee',
          minHeight: 300,
          boxShadow: '1px 1px 4px rgba(0,0,0,.1)',
          marginTop: 10
        }}>
          <div style={{
            padding: '5px 10px'
          }}>订单编号查询记录</div>
          <ul
            style={{
              padding: 10
            }}
          >
            {lists.map((v, i) => <li><Link to={'tmswaybill/tmsdetail?wayno=' + v} target="_blank">{i + 1}: {v}</Link></li>)}
          </ul>
        </div>

        <div style={{ borderBottom: '1px solid #ddd', padding: 10 }}>
          <strong>运单走货信息</strong>
          <ul style={{ overflow: 'auto' }}>
            {[
              'inputDate',
              'orderDate',
              'startShortAddress',
              'transferWarehouseName',
              'endShortAddress',
              'currentCity',
              'waybillStatus',
              'nextStatus',
            ].map(v => (
              console.log(this.state.data[v]) || <li style={listsItem}>{MANDARIN_MAP[v]}: {this.state.data[v] || ''}</li>
            ))}
          </ul>
        </div>
        <div style={{ borderBottom: '1px solid #ddd', padding: 10 }}>
          <strong>运单信息</strong>
          <ul style={{ overflow: 'auto' }}>
            {[
              'carrierName',
              'startWarehouseName',
              'endWarehouseName',
              'toOrganizationName',
              'senderName',
              'senderPhone',
              'senderAddress',
              'senderFullAddress',
              'receiverName',
              'receiverPhone',
              'receiverAddress',
              'receiverFullAddress',
              'goodsName',
              'goodsPackage',
              'goodsType',
              'wayFee',
              'goodsValue',
              'goodsCustomValue',
              'totalShippingFee',
              'packingFee',
              'deliveryPayFee',
              'deliveryMethod',
              'pickMethod',
              'receiptMethod',
              'payMethod',
              'predictTransitFee',
              'takePayFee',
              'returnFee',
              'agentFee',
              'agentExtractFee',
              'sendPayFee',
              'receivePayFee',
              'returnPayFee',
              'monthClearing',
              'remake',
              'totalGoodsNumber',
              'totalGoodsVolume',
              'totalGoodsWeight',
              'wayPort',
              'waybillSource',
              'tmiBizPickNo',
              'tmiBizTransportNo',
              'tmiBizTransferNo',
              'tmiBizDeliveryNo',
              'deliveryMethod',
            ].map(v => (
              <li style={listsItem}><strong>{MANDARIN_MAP[v]}: </strong>{this.state.data[v] || ''}</li>
            ))}
          </ul>
        </div>

        <div>
          <Radio.Group value={this.state.infoSelect} onChange={e => {
            this.setState({
              infoSelect: e.target.value
            }, () => {
              this.getInfosSelect(this.state.infoSelect)
            })
          }}>
            <Radio.Button value="getTrack">跟踪记录</Radio.Button>
            <Radio.Button value="getReceiptInfo">回单信息</Radio.Button>
            <Radio.Button value="getFinAccounts">费用信息</Radio.Button>
          </Radio.Group>
          <Table
            columns={this.state.infoColumn}
            dataSource={this.state.infoDataSource}
            scroll={{ x: 100 * (this.state.infoColumn.length - 1) + 200 }}
            bordered
            loading={this.state.infoTableLoading}
          ></Table>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setLocalLists();
    this.getInfo(() => {
      this.getInfosSelect(this.state.infoSelect)
    });
  }

  setLocalLists() {
    let unm = window.username;
    let localLists = localStorage.getItem(unm + 'waybillLinkLists');
    let lists = localLists && JSON.parse(localLists) || [];
    let thisWayno = this.props.location.query.wayno;
    if (lists.indexOf(thisWayno) !== -1) {
      lists = lists.filter(v => v !== thisWayno);
    }
    lists.unshift(thisWayno);
    localStorage.setItem(unm + 'waybillLinkLists', JSON.stringify(lists))
  }

  getInfosSelect(infoType) {
    this.setState({
      infoTableLoading: true
    });
    if (this.cache[infoType]) {
      this.setState({
        infoColumn: this.cache[infoType]['column'],
        infoDataSource: this.cache[infoType]['infoDataSource']
      }, () => {
        this.setState({
          infoTableLoading: false
        });
      })
      return;
    }
    const infoMap = {
      getFinAccounts: 'tmiBizOrderNum',
      getReceiptInfo: 'tmiBizWaybillNum',
      getTrack: 'tmiBizOrderNum'
    }
    let param = {};
    param[infoMap[infoType]] = this.state.data[infoMap[infoType]]
    post('wayBill/' + infoType, param).then(data => {
      this.setState({
        infoTableLoading: false
      });
      if (data.failure) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.setState({
        infoColumn: data.module.columnList.map(v =>
          ({
            dataIndex: v.columnName,
            title: v.displayName,
            key: v.displayName,
            width: v.columnName === 'acceptStation' ? 200 : 80
          })
        ),
        infoDataSource: data.module.dataList
      }, () => {
        this.cache[infoType] = {};
        this.cache[infoType]['column'] = this.state.infoColumn
        this.cache[infoType]['infoDataSource'] = this.state.infoDataSource
      });
    })
  }

  getInfo(callback) {
    if (!this.props.location.query.wayno) {
      message.warn('unvalid waybill number!');
      return;
    }
    let wayno = this.props.location.query.wayno;
    post('wayBill/getWayBillInfo', {
      tmiBizWaybillNum: wayno
    }).then(data => {
      if (data.failure) {
        message.warn(data.message || '网络错误');
        return;
      }
      this.setState({
        data: data.module
      }, () => {
        callback()
      });
    })
  }
}
const MANDARIN_MAP = {
  startShortAddress: '始发地',
  endShortAddress: '目的地',
  waybillStatus: '运单状态',
  transferWarehouseName: '中转地',
  nextStatus: '下一状态',
  currentCity: '当前位置',
  carrierName: '收货承运商',
  startWarehouseName: '发货网点',
  endWarehouseName: '到站网点',
  toOrganizationName: '中转承运商',
  senderName: '发货人',
  senderPhone: '发货人电话',
  senderAddress: '发货地址',
  senderFullAddress: '发货地址',
  receiverName: '收货人',
  receiverPhone: '收货人电话',
  receiverAddress: '收货地址',
  receiverFullAddress: '收货地址',
  goodsName: '货物名称',
  goodsPackage: '货物包装',
  goodsType: '货物类型',
  wayFee: '运费(元)',
  goodsValue: '货物价值(元)',
  goodsCustomValue: '保价费(元)',
  totalShippingFee: '运费合计(元)',
  packingFee: '包装费(元)',
  deliveryPayFee: '送货费(元)',
  deliveryMethod: '发货方式',
  pickMethod: '提货方式',
  receiptMethod: '回单要求',
  payMethod: '付款方式',
  predictTransitFee: '预计中转费(元)',
  takePayFee: '接货费(元)',
  returnFee: '返款(元)',
  agentFee: '代收货款(元)',
  agentExtractFee: '代收货款手续费(元)',
  sendPayFee: '现付(元)',
  receivePayFee: '到付(元)',
  returnPayFee: '回单付(元)',
  monthClearing: '月结(元)',
  remake: '备注',
  totalGoodsNumber: '货物数量(件)',
  totalGoodsVolume: <span>货物体积 (m<sup>3</sup>)</span>,
  totalGoodsWeight: '货物重量(kg)',
  tmiBizWaybillNum: '运单编码',
  tmiBizOrderNum: '订单编码',
  waybillNo: '运单号',
  orderNo: '订单号',
  inputDate: '运单创建时间',
  orderDate: '订单创建时间',
  wayPort: '公路港',
  waybillSource: '运单来源',
  tmiBizPickNo: '提货单号',
  tmiBizTransportNo: '配载单号',
  tmiBizTransferNo: '中转单号',
  tmiBizDeliveryNo: '配送单号',
  deliveryMethod: '配送方式',
  currentCity: '当前城市'
}
