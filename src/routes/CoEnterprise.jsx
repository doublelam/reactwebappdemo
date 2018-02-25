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

class CoEnterprise_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [],
      driverType: []
    }
  }
  render() {
    const formInfo = this.props.form;
    let ifVague = true;
    const { getFieldDecorator, getFieldsValue, resetFields, validateFieldsAndScroll } = formInfo;
    const items = [
      {
        display: ifVague,
        dom: () => <Form.Item key="inputDate" label="添加合作企业时间：" className={publicStyles.paddingWith}>
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
        dom: () => <Form.Item key="indistinctName" label="承运商名称：" className={publicStyles.paddingWith}>
          {getFieldDecorator('indistinctName')(
            <Input size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="indistinctWarehouseName" label="网点搜索：" className={publicStyles.paddingWith}>
          {getFieldDecorator('indistinctWarehouseName')(
            <Input size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="indistinctToName" label="合作企业名称：" className={publicStyles.paddingWith}>
          {getFieldDecorator('indistinctToName')(
            <Input size="normal" style={{ width: 150 }} />
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
                this.querySub()
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
    this.querySub();
  }

  querySub() {
    this.props.form.validateFieldsAndScroll((err, val) => {
      if (err) {
        return;
      }
      let params = this.regetParam(val, ['inputDate']);
      this.refs.disTable.getTableInfo({
        url: 'bossCooperateInfo/getBossCooperateInfoList',
        params,
        excelUrl: '/tmsBossAdmin/bossCooperateInfo/getBossCooperateInfoListExcel',
        excelId: 'tmiMailListId'
      }, true)
    })
  }

  setRegion() {
    post('carAndDriverInfo/getWayports').then(data => {
      if (!data.success) {
        message.warn(data.message || '网络错误！');
        return;
      }
      let treeData = this.resetRegion(data.module);
      console.log('treedata', treeData)
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

export const CoEnterprise = Form.create()(CoEnterprise_);
