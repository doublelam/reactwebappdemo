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
  Radio,
  Cascader,
  Menu
} from "antd";
import { QueryHeader } from '../components/QueryHeader';
import classNames from "./SalesMan.less";
import publicStyles from '../publicStyles/contentStyles.less';
import moment from 'moment';
import { Link } from 'dva/router';
import { ConfigureInfo, QUERY_INFO, SELECT_TYPE } from '../configInfo/ConfigureInfo';
// import { SimulateAjax } from '../simulateAjax/simulateAjax';
import { ObjOperate, getMatches } from '../utils/objOperate';
import { InfoCount } from '../components/InfoCount';
import { get, post } from '../utils/ajax';
import { ManageTable } from '../components/tms/ManageTable';
import provinces from 'china-division/dist/provinces.json';
import { citiesData } from '../components/cascader-options';

const TAB_PARAM_MAP = {
  net: {
    url: 'carrier/queryWarehouseList',
    excelUrl: '/tmsBossAdmin/carrier/exportWarehouseListExcel',
    excelId: 'tmiWarehouseId',
    title: '网点信息列表'
  },
  employee: {
    url: 'carrier/queryEmployeeList',
    excelUrl: '/tmsBossAdmin/carrier/exportEmployeeListExcel',
    excelId: 'tmiUserRelaWarehouseId',
    title: '员工信息列表'
  }
}

class DispenseCentre_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [],
      driverType: [],
      tabInfo: 'net',
      provinceSelect: '',
      cooperations: [],
      operationType: [],
      allotType: [],
      allotLevel: [],
      companyNature: [],
      operateStatus: []
    }
  }
  render() {
    const formInfo = this.props.form;
    let ifBase = this.props.location.pathname.indexOf('basicinfo') !== -1;
    let defaultDate = [];
    const { getFieldDecorator, getFieldsValue, resetFields, validateFieldsAndScroll } = formInfo;

    const items = [
      {
        display: ifBase,
        dom: () => <Form.Item key="applyDate" label="申请时间：" className={publicStyles.paddingWith}>
          {getFieldDecorator('applyDate', {
            initialValue: defaultDate,
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
        display: !ifBase,
        dom: () => <Form.Item key="operateDate" label="日期：" className={publicStyles.paddingWith}>
          {getFieldDecorator('operateDate', {
            initialValue: [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
          })(
            <DatePicker.RangePicker
              size="small"
              style={{ width: 200 }}
              allowClear={true}
              format="YYYY-MM"
            ></DatePicker.RangePicker>
            )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="wayports" label="区域选择：" className={publicStyles.paddingWith}>
          {getFieldDecorator('wayports')(
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
        dom: () => <Form.Item key="fuzzyPartyName" label="分拨中心名称：" className={publicStyles.paddingWith}>
          {getFieldDecorator('fuzzyPartyName')(
            <Input size="normal" style={{ width: 150 }} />
          )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="provinces" label="省：" className={publicStyles.paddingWith}>
          {getFieldDecorator('provinces')(
            <Select
              style={{ width: 150 }}
              allowClear
              onChange={v => {
                this.props.form.setFieldsValue({ cities: void 0 });
                this.setState({
                  provinceSelect: v
                })
              }}
            >
              {provinces.map(v => <option key={v.name}>{v.name}</option>)}
            </Select>
          )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="cities" label="市：" className={publicStyles.paddingWith}>
          {getFieldDecorator('cities')(
            <Select
              multiple
              style={{ width: 180 }}
              allowClear
            >
              {citiesData[this.state.provinceSelect] && citiesData[this.state.provinceSelect].map(v => <option key={v.name}>{v.name}</option>)}
            </Select>
          )}
        </Form.Item>
      },
      {
        display: ifBase,
        dom: () => <Form.Item key="cooperations" label="合作方式：" className={publicStyles.paddingWith}>
          {getFieldDecorator('cooperations')(
            <Select size="normals" style={{ width: 150 }}
              allowClear
              multiple
            >
              {this.state.cooperations.map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
          )}
        </Form.Item>
      },
      {
        display: ifBase,
        dom: () => <Form.Item key="operationSituations" label="运作情况：" className={publicStyles.paddingWith}>
          {getFieldDecorator('operationSituations')(
            <Select size="normals" style={{ width: 150 }}
              allowClear
              multiple
            >
              {this.state.operateStatus.map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
          )}
        </Form.Item>
      },
      {
        display: true,
        dom: () => <Form.Item key="allotTypes" label="分拨中心类别：" className={publicStyles.paddingWith}>
          {getFieldDecorator('allotTypes')(
            <Select size="normals" style={{ width: 150 }}
              allowClear
              multiple
            >
              {this.state.allotType.map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
          )}
        </Form.Item>
      },
      {
        display: ifBase,
        dom: () => <Form.Item key="allotLevels" label="分拨中心级别：" className={publicStyles.paddingWith}>
          {getFieldDecorator('allotLevels')(
            <Select size="normals" style={{ width: 150 }}
              allowClear
              multiple
            >
              {this.state.allotLevel.map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
          )}
        </Form.Item>
      },
    ];
    let formItems = items.filter(v => v.display === true).map(v => v.dom());
    const returnChildren = () => {
      let newParam = this.regetParam(this.props.form.getFieldsValue(), ['applyDate', 'operateDate'], ['YYYY-MM-DD', 'YYYY-MM']);
      let newChildren = this.props.children && React.cloneElement(this.props.children, {
        queryParam: newParam,
        evokeMethod: this.getChildQuery.bind(this),
        selectTypes: {
          cooperations: this.state.cooperations,
          operationType: this.state.operationType,
          allotType: this.state.allotType,
          allotLevel: this.state.allotLevel,
          companyNature: this.state.companyNature,
          operateStatus: this.state.operateStatus,
          wayports: this.state.treeData,
        }
      });
      return newChildren;
    }
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
                this.evokeChild()
              }}
            >查询</Button>
          </div>
        </QueryHeader>
        <div style={{ padding: 5 }}>
          <Menu
            mode="horizontal"
            selectedKeys={getMatches(['basic', 'business', 'operate'], this.props.location.pathname)}
          >
            <Menu.Item key="basic"><Link to="dispensecentre/basicinfo">基础信息</Link></Menu.Item>
            <Menu.Item key="business"><Link to="dispensecentre/businessinfo">经营信息</Link></Menu.Item>
            <Menu.Item key="operate"><Link to="dispensecentre/operateinfo">运营信息</Link></Menu.Item>
          </Menu>
        </div>
        <div>
          {/* <ManageTable info={{
            title: ' '
          }} ref="disTable" /> */}
          {returnChildren()}
        </div>
      </section>
    )
  }

  componentDidMount() {
    this.setRegion();
    this.getAndSetSelectType();
  }

  evokeChild() {
    this.childQueryMethod && this.childQueryMethod()
  }



  getChildQuery(childMethod) {
    this.childQueryMethod = childMethod;
  }

  getAndSetSelectType() {
    [{ field: 'cooperations', url: 'allotCenterController/getCooperationEnum' },
    { field: 'operationType', url: 'allotCenterController/getOperationTypeEnum' },
    { field: 'allotType', url: 'allotCenterController/getAllotTypeEnum' },
    { field: 'allotLevel', url: 'allotCenterController/getAllotLevelEnum' },
    { field: 'operateStatus', url: 'allotCenterController/getOperateStatusEnum' },
    { field: 'companyNature', url: 'allotCenterController/getCompanyNatureEnum' },].map(v => {
      post(v.url).then(data => {
        if (!data.success) {
          message.warn(data.message || '网络错误')
          return;
        }
        let state = {};
        state[v.field] = data.module;
        this.setState(state)
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

  regetParam(value, rangeField, formats) {
    let _param = {};
    for (let key in value) {
      if (value[key] === void 0 || !value[key].length) {
        continue;
      }
      if (rangeField.indexOf(key) !== -1) {
        _param[key + 'Start'] = value[key][0].format(formats[rangeField.indexOf(key)]);
        _param[key + 'End'] = value[key][1].format(formats[rangeField.indexOf(key)]);
        continue;
      }
      if (Array.isArray(value[key])) {
        _param[key] = value[key].join();
        continue;
      }
      _param[key] = typeof value[key] === 'string' ? value[key].trim() : value[key];
    }
    return _param;
  }
}

export const DispenseCentre = Form.create()(DispenseCentre_);
