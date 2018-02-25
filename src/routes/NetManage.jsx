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

class NetManage_ extends React.Component {
  constructor(props) {
    super(props);
    this.tempId = void 0;
    this.state = {
      treeData: [],
      driverType: [],
      tabInfo: 'net',
      warehouseId: void 0,
      provinceSelect: void 0,
      tableInfo: { success: false }
    }
  }

  render() {
    const formInfo = this.props.form;
    let ifVague = true;
    let ifNetManage = this.state.tabInfo !== 'net';
    const { getFieldDecorator, getFieldsValue, resetFields, validateFieldsAndScroll } = formInfo;
    const items = [
      {
        display: ifVague,
        dom: () => <Form.Item key="inputDate" label="网点创建时间：" className={publicStyles.paddingWith}>
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
        display: ifVague,
        dom: () => <Form.Item key="warehouseType" data-display={ifVague} label="网点类型：" className={publicStyles.paddingWith}>
          {getFieldDecorator('warehouseType')(
            <Select size="normals" style={{ width: 150 }}
              allowClear
              multiple
            >
              {['普通网点', '发货网点', '到货网点'].map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
          )}
        </Form.Item>
      },
      {
        display: ifVague,
        dom: () => <Form.Item key="warehouseSubType" data-display={ifVague} label="网点子类型：" className={publicStyles.paddingWith}>
          {getFieldDecorator('warehouseSubType')(
            <Select size="normals" style={{ width: 150 }}
              allowClear
              multiple
            >
              {['自营', '合作', '加盟'].map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
          )}
        </Form.Item>
      },
      {
        display: ifVague,
        dom: () => <Form.Item key="status" data-display={ifVague} label="网点状态：" className={publicStyles.paddingWith}>
          {getFieldDecorator('status')(
            <Select size="normals" style={{ width: 150 }}
              allowClear
              multiple
            >
              {['启用', '停用'].map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
          )}
        </Form.Item>
      }, {
        display: true,
        dom: () => <Form.Item key="harborPost" data-display={ifVague} label="网点属性：" className={publicStyles.paddingWith}>
          {getFieldDecorator('harborPost')(
            <Select size="normals" style={{ width: 150 }}
              allowClear
            >
              {['路港驿站', '分拨中心', '承运商网点'].map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
          )}
        </Form.Item>
      }, {
        display: !ifNetManage,
        dom: () => <Form.Item key="province" label="省：" className={publicStyles.paddingWith}>
          {getFieldDecorator('province')(
            <Select
              style={{ width: 150 }}
              allowClear
              onChange={v => {
                this.props.form.setFieldsValue({ city: void 0 });
                this.setState({
                  provinceSelect: v
                })
              }}
            >
              {provinces.map(v => <option key={v.name}>{v.name}</option>)}
            </Select>
          )}
        </Form.Item>
      }, {
        display: !ifNetManage,
        dom: () => <Form.Item key="city" label="市：" className={publicStyles.paddingWith}>
          {getFieldDecorator('city')(
            <Select
              style={{ width: 180 }}
              allowClear
            >
              {citiesData[this.state.provinceSelect] && citiesData[this.state.provinceSelect].map(v => <option key={v.name}>{v.name}</option>)}
            </Select>
          )}
        </Form.Item>
      }, {
        display: !ifNetManage,
        dom: () => <Form.Item key="stageDesc" data-display={ifVague} label="驿站功能：" className={publicStyles.paddingWith}>
          {getFieldDecorator('stageDesc')(
            <Select size="normals" style={{ width: 150 }}
              allowClear
            >
              {['配货', '集资', '增值服务'].map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
          )}
        </Form.Item>
      }, {
        display: !ifNetManage,
        dom: () => <Form.Item key="isCollection" data-display={ifVague} label="是否代收：" className={publicStyles.paddingWith}>
          {getFieldDecorator('isCollection')(
            <Select size="normals" style={{ width: 150 }}
              allowClear
            >
              {['是', '否'].map(v => <option key={v} val={v}>{v}</option>)}
            </Select>
          )}
        </Form.Item>
      },
    ];
    let formItems = items.filter(v => v.display === true).map(v => v.dom());
    const RESET_COLUMN = {
      net: column => {
        for (let val of column) {
          if (val.dataIndex === 'attribute') {
            val.render = (text, record) => {
              if (record.tmiWarehouseId === this.state.warehouseId) {
                return <Select
                  onChange={v => {
                    this.tempId = v;
                  }}
                  defaultValue={text}
                  style={{ width: 80 }}>
                  {['承运商', '公路港', '分拨中心'].map(v => <option key={v}>{v}</option>)}
                </Select>
              }
              return text
            };
          }
        }
        return column.concat([{
          title: '操作',
          width: 120,
          fixed: 'right',
          render: (text, record) => {
            if (record.harborPost === '否') {
              return <Tooltip title="不是路港驿站不能编辑哦 (ง •̀_•́)ง"><span style={{
                cursor: 'not-allowed',
                color: '#aaa'
              }}>编辑</span></Tooltip>
            }
            if (record.tmiWarehouseId === this.state.warehouseId) {
              return <Button.Group style={{ zIndex: 0 }} size="small">
                <Button type="primary" onClick={e => {
                  this.modifyAttribute(this.state.warehouseId, this.tempId);
                }}>保存</Button>
                <Button onClick={e => {
                  this.setState({
                    warehouseId: void 0
                  })
                }}>取消</Button>
              </Button.Group>
            }
            return <Button onClick={e => {
              this.tempId = record.attribute;
              this.setState({
                warehouseId: record.tmiWarehouseId,
              })
            }}>编辑</Button>
          }
        }])
      },
      employee: column => column
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
                this.querySub()
              }}
            >查询</Button>
          </div>
        </QueryHeader>
        <div style={{ padding: 5 }}>
          <Radio.Group size="small" value={this.state.tabInfo} size="large" onChange={e => {
            this.setState({
              tabInfo: e.target.value
            }, () => {
              this.querySub()
            })
          }}>
            <Radio.Button value="net">网点信息</Radio.Button>
            <Radio.Button value="employee">员工信息</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ display: this.state.tabInfo === 'net' ? 'block' : 'none' }}>
          <InfoCount countData={this.state.tableInfo} />
        </div>
        <div>
          <ManageTable info={{
            title: ' '
          }} ref="disTable"
            resetColumn={RESET_COLUMN[this.state.tabInfo]}
            getTableInfo={this.getTableInfo.bind(this)}
          />
        </div>
      </section>
    )
  }

  componentDidMount() {
    this.setRegion();
    this.querySub();
  }

  getTableInfo(data) {
    this.setState({
      tableInfo: data
    })
  }

  modifyAttribute(id, val) {
    let param = {
      warehouseId: id,
      attribute: val
    }
    post('carrier/updateHarborPostInfo', param).then(data => {
      if (!data.success) {
        if (data.code === '9999') {
          message.warn('暂无权限！');
          return;
        }
        message.warn(data.message || '网络错误！');
        return;
      }
      this.querySub();
      this.setState({
        warehouseId: void 0
      })
    })
  }
  querySub() {
    this.props.form.validateFieldsAndScroll((err, val) => {
      if (err) {
        return;
      }
      let params = this.regetParam(val, ['inputDate']);
      this.refs.disTable.getTableInfo({
        url: TAB_PARAM_MAP[this.state.tabInfo].url,
        params,
        excelUrl: TAB_PARAM_MAP[this.state.tabInfo].excelUrl,
        excelId: TAB_PARAM_MAP[this.state.tabInfo].excelId
      }, true)
    })
  }

  setRegion() {
    post('carAndDriverInfo/getWayports').then(data => {
      if (!data.success) {
        if (data.code === '9999') {
          message.warn('暂无权限！');
          return;
        }
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
      if (Array.isArray(value[key])) {
        _param[key] = value[key].join();
        continue;
      }
      if (value.province || value.city) {
        _param.address = (value.province || '') + (value.city || '')
      }
      _param[key] = typeof value[key] === 'string' ? value[key].trim() : value[key];
    }
    return _param;
  }

}


export const NetManage = Form.create()(NetManage_);
