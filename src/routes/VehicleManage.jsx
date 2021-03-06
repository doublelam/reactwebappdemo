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
  Tooltip,
  Form,
  Radio
} from "antd";
import { QueryHeader } from '../components/QueryHeader';
import classNames from "./SalesMan.less";
import publicStyles from '../publicStyles/contentStyles.less';
import moment from 'moment';
import { ConfigureInfo, QUERY_INFO, SELECT_TYPE } from '../configInfo/ConfigureInfo';
// import { SimulateAjax } from '../simulateAjax/simulateAjax';
import { ObjOperate } from '../utils/objOperate';
import { InfoCount } from '../components/InfoCount';
import { get, post } from '../utils/ajax';
import { ManageTable } from '../components/tms/ManageTable';

class VehicleManage_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [],
      carType: [],
    }
  }
  render() {
    const formInfo = this.props.form;
    let ifVague = true;
    const { getFieldDecorator, getFieldsValue, resetFields, validateFieldsAndScroll } = formInfo;
    const items = [
      {
        display: ifVague,
        dom: () => <Form.Item key="inputDate" label="添加车辆时间：" className={publicStyles.paddingWith}>
          {getFieldDecorator('inputDate', {
            initialValue: [moment().date() === 1
              ? moment().subtract(1, 'months').startOf('month')
              : moment().startOf('month'), moment()],
          })(
            <DatePicker.RangePicker
              size="small"
              style={{ width: 200 }}
              allowClear={true}
            ></DatePicker.RangePicker>
            )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="wayport" label="区域选择：" className={publicStyles.paddingWith}>
          {getFieldDecorator('wayport')(
            <TreeSelect
              allowClear
              size="normal"
              style={{ minWidth: 180, maxWidth: '50%' }}
              treeData={this.state.treeData}
              multiple
              treeCheckable
              showCheckedStrategy={TreeSelect.SHOW_CHILD}
            />
          )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="name" label="承运商名称：" className={publicStyles.paddingWith}>
          {getFieldDecorator('name')(
            <Input size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="warehouseName" label="网点搜索：" className={publicStyles.paddingWith}>
          {getFieldDecorator('warehouseName')(
            <Input size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="trailerPlateNumber" label="车牌号：" className={publicStyles.paddingWith}>
          {getFieldDecorator('trailerPlateNumber', {
            rules: [{ pattern: /^[\u4e00-\u9fa5]{1}[A-Z]{1}\w{5,}$/g, message: '确保车牌号格式正确哦' }],
          })(
            <Input size="normal" style={{ width: 150 }} />
            )}
        </Form.Item>
      },
      {
        display: ifVague,
        dom: () => <Form.Item key="carStruct" data-display={ifVague} label="车型：" className={publicStyles.paddingWith}>
          {getFieldDecorator('carStruct')(
            <Select size="normals" style={{ width: 150 }}
              allowClear
              multiple
            >
              {this.state.carType.map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
          )}
        </Form.Item>
      },


    ];
    let formItems = items.filter(v => v.display === true).map(v => v.dom());
    return (
      <section className={publicStyles.section}>
        <QueryHeader style={{ display: 'block' }}>
          <Form
            layout="inline"
            style={{ padding: '10px 0' }}
          >
            {formItems}
          </Form>
          <div style={{ textAlign: 'right' }}>
            <Button type="primary" style={{ marginRight: 5 }}
              onClick={e => {
                this.querySub();
              }}
            >查询</Button>
          </div>
        </QueryHeader>
        <div>
          <ManageTable info={{
            title: ' '
          }} ref="disTable" />
        </div>
      </section>
    )
  }

  componentDidMount() {
    this.setRegion();
    this.setCarType();
    this.querySub();
  }

  querySub() {
    this.props.form.validateFieldsAndScroll((err, val) => {
      if (err) {
        return;
      }
      let params = this.regetParam(val, ['inputDate']);
      this.refs.disTable.getTableInfo({
        url: 'carAndDriverInfo/getCarInfoLists',
        params,
        excelUrl: '/tmsBossAdmin/carAndDriverInfo/getCarInfoListExcel',
        excelId: 'tmiWarehouseRelaCarId'
      }, true)
    })
  }

  setCarType() {
    post('carAndDriverInfo/getCarStruct').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误！');
        return;
      }
      this.setState({
        carType: data.module
      })

    })
  }

  setRegion() {
    post('carAndDriverInfo/getWayports').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误！');
        return;
      }
      let treeData = this.resetRegion(data.module);
      this.setState({
        treeData,
      })
    })
  }

  resetRegion(data) {
    let _treeData = [];
    for (let key in data) {
      let children = data[key].map(v => ({
        label: v,
        value: v,
        key: v
      }))
      _treeData.push({
        label: key,
        value: key,
        key,
        children: children
      })
    }
    return _treeData;
  }

  regetParam(value, rangeField) {
    let _param = {};
    for (let key in value) {
      if (value[key] === void 0 || !value[key].length) {
        continue;
      }
      if (rangeField.indexOf(key) !== -1) {
        _param[key + 'Start'] = value[key][0].format('YYYY-MM-DD');
        _param[key + 'End'] = value[key][1].format('YYYY-MM-DD');
        continue;
      }
      _param[key] = typeof value[key] === 'string' ? value[key].trim() : value[key];
    }
    return _param;
  }

}


export const VehicleManage = Form.create()(VehicleManage_);
