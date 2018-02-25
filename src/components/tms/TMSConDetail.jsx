import React from 'react';
import {
  Popconfirm,
  Radio,
  Table,
  message,
  Button
} from 'antd';
import { post } from '../../utils/ajax';
import { ConfigureInfo } from '../../configInfo/ConfigureInfo';
import { ObjOperate } from '../../utils/objOperate';
import { Link } from "dva/router";
import { TMSLists } from './TMSLists';
export class TMSConDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      tableSource: [],
      tableLoading: false
    }
  }

  render() {
    let arrs = JSON.parse(this.props.location.query.extract);

    return (
      <div>
        <div>
          <ul style={{ overflow: 'auto' }}>
            {arrs.map(v => <li style={{ float: 'left', padding: 5 }}><strong>{HAN_MAP[decodeURI(atob(v[0]))]}:</strong> <span style={{ color: '#CE584A' }}>{decodeURI(atob(v[1]))}</span></li>)}
          </ul>
        </div>
        <div style={{ padding: 20, textAlign: 'right' }}>
          <Button type="primary"
            onClick={() => {
              let param = { tmiBizTransportNum: this.props.location.query.wayno };
              window.open('/tmsBossAdmin/wayBill/getWayBillListExcel?' + ObjOperate.objToUrlQuery(param));
            }}
          >
            运单导出
          </Button>
        </div>
        <TMSLists
          info={{ title: '配载单明细' }}
          ref="child"
        ></TMSLists>
      </div>
    );
  }

  componentDidMount() {
    this.refs.child.getTableInfo({
      url: 'wayBill/getWayBillLists',
      params: { isFuzzyQuery: 0, tmiBizTransportNum: this.props.location.query.wayno },
      linkColumn: {
        name: 'waybillNum(void)',
        link: (text, record) => `tmswaybill/tmsdetail?wayno=${text}`
      }
    }, true);
  }


}

const HAN_MAP = {
  'tmiBizTransportNo': '配载单号',
  'carNum': '车牌号',
  'driverName': '司机姓名',
  'driverPhone': '司机联系电话',
  'waybillCount': '总运单数量',
  'totalGoodsNumber': '总件数',
  'totalGoodsVolume': '总体积',
  'totalGoodsWeight': '总重量'
}
