
import React from 'react';
import {
  Popconfirm,
  Radio,
  Table,
  message,
  Select,
  Icon,
  Input,
  Button,
  Form,
  Modal,
  DatePicker
} from 'antd';
import { post } from '../../utils/ajax';
import { ConfigureInfo } from '../../configInfo/ConfigureInfo';
import { ObjOperate } from '../../utils/objOperate';
import { Link } from "dva/router";
import { TableList } from './TableList';
import provinces from 'china-division/dist/provinces.json';
import { citiesData } from '../cascader-options';

class BusinessInfo_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableSource: [],
      pageSize: 30,
      current: 1,
      total: 0,
      tableLoading: false,
      modalVisible: false,
      modalProvince: '',
      // select types
      cooperate: [],
      operationSituation: [],
      modalFormal: 'add',
      modalRegion: '',
      modalPartyNames: [],
    }
    this.getColumns = [];
    this.modalPostId = void 0;
    this.useId = 'allotCenterManageId';
  }


  render() {
    let columns = [];
    return (
      <section>
        <div style={{ padding: 10 }}><Button
          type="primary"
          onClick={e => {
            this.setState({
              modalVisible: true,
              modalFormal: 'add'
            }, () => {
              this.props.form.resetFields()
            });
          }}>新增</Button></div>
        <TableList
          ref="table"
          url="allotCenterManage/getAllotCenterManageList"
          excelOpt={{
            excelId: this.useId,
            excelPartUrl: '/tmsBossAdmin/allotCenterManage/getAllotCenterManageListExcel',
            excelAllUrl: '/tmsBossAdmin/allotCenterManage/getAllotCenterManageListExcel'
          }}
          resetColumn={(columns) => {
            this.getColumns = columns;
            return columns.map(v => ({
              title: v.displayName,
              dataIndex: v.columnName,
              width: 100
            })).concat([{
              title: '操作',
              width: 120,
              render: (text, record) => {
                return <Button.Group><Button
                  type="primary"
                  onClick={e => {
                    this.setState({
                      modalVisible: true,
                      modalFormal: 'edit',
                    }, () => {
                      this.setModalValue(record);
                    })
                  }}
                >编辑</Button>
                  <Button onClick={e => {
                    let _this = this;
                    Modal.confirm({
                      title: '确定删除?',
                      content: '点击确定将会删除此条记录',
                      onOk() {
                        _this.deleteOperate(record[_this.useId]);
                      },
                      onCancel() {
                        console.log('Cancel');
                      },
                    });

                  }}>删除</Button>
                </Button.Group>
              }
            }]);
          }}
        />
        <Modal
          title={modalForm[this.state.modalFormal].title}
          visible={this.state.modalVisible}
          onOk={() => { this.handleEdit() }}
          onCancel={() => {
            this.setState({
              modalVisible: false
            })
          }}
        >
          <Form style={{ height: '60vh', overflow: 'auto' }}>
            {this.getColumns.map(v => {
              return <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={v.displayName}
              >
                {this.props.form.getFieldDecorator(v.columnName,
                  (this.fieldMap[v.columnName] || {}).pattern ? {
                    rules: [{
                      message: (this.fieldMap[v.columnName] || {}).message,
                      pattern: (this.fieldMap[v.columnName] || {}).pattern
                    }]
                  } : {})(
                  this.fieldMap[v.columnName] && this.fieldMap[v.columnName].dom() ||
                  <Input
                    disabled={this.fieldMap[v.columnName] &&
                      this.fieldMap[v.columnName].disable &&
                      this.fieldMap[v.columnName].disable()} />
                  )}
              </Form.Item>
            })}
          </Form>
        </Modal>
      </section>
    )
  }

  componentDidMount() {
    this.postQueryMethod();
    this.setFieldMap();
    this.delayEvoke();
    this.setPartyName();
  }

  deleteOperate(id) {
    post('allotCenterManage/deleteAllotCenterManage', { id: id }).then(data => {
      if (!data.success) {
        if (data.code === '9999') {
          message.warn('暂无权限！');
          return;
        }
        message.warn(data.message || '网络错误');
        return;
      }
      this.evokeChild();
    })
  }

  resetParam(obj) {
    let _param = {};
    for (let key in obj) {
      if (!obj[key] || obj[key].length <= 0) {
        continue;
      }
      _param[key] = obj[key];
    }
    return _param;
  }

  setPartyName() {
    post('allotCenterController/findAllotCenters').then(data => {
      if (!data.success) {
        if (data.code === '9999') {
          message.warn('暂无权限！');
          return;
        }
        message.warn(data.message || '网络错误');
        return;
      }
      this.setState({
        modalPartyNames: data.module
      })

    })
  }

  postQueryMethod() {
    this.props.evokeMethod(this.evokeChild.bind(this));
  }

  setFieldMap() {
    this.fieldMap = {
      region: {
        dom: () => <Select
          disabled={true}
          onChange={v => {
            this.props.form.setFieldsValue({ wayport: void 0 });
          }} allowClear>{this.props.selectTypes.wayports.map(v => <option key={v.label}>{v.label}</option>)}</Select>
      },
      wayport: {
        dom: () => <Select allowClear
          disabled={true}
        >{(this.props.selectTypes.wayports
          .filter(v => v.label === this.props.form.getFieldValue('region'))[0] || { children: [] })
          .children.map(v => <option key={v.label}>{v.label}</option>)}</Select>
      },
      warehouseName: {
        disable: () => this.state.modalFormal === 'edit',
        dom: () => <Select
          disabled={this.state.modalFormal === 'edit'}
          onChange={v => {
            let item = this.state.modalPartyNames.filter(val => val.warehouseName === v)[0] || {};
            this.props.form.setFieldsValue({
              region: item.region,
              wayport: item.wayport,
              allotType: item.allotType,
            });
          }} allowClear>{this.state.modalPartyNames.map(val => <option key={val.warehouseName}>{val.warehouseName}</option>)}</Select>
      },
      partyCode: {
        disable: () => this.state.modalFormal === 'edit',
        dom: () => false
      },
      operateDate: {
        pattern: /^[0-9]{4}-[0-1][0-9]$/g,
        message: '时间格式为YYYY-MM,如2017-09',
        dom: () => false
      },
      applyDate: {
        disable: () => this.state.modalFormal === 'edit',
        dom: () => false
      },
      province: {
        dom: () => <Select onChange={v => {
          this.props.form.setFieldsValue({ city: void 0 });
        }} allowClear>{provinces.map(v => <option key={v.name}>{v.name}</option>)}</Select>
      },
      city: {
        dom: () => <Select allowClear>{(citiesData[this.props.form.getFieldValue('province')] || [])
          .map(v => <option key={v.name}>{v.name}</option>)}</Select>
      },
      cooperation: {
        dom: () => <Select allowClear>{(this.props.selectTypes.cooperations || []).map(v => <option key={v}>{v}</option>)}</Select>
      },
      allotType: {
        disable: () => this.state.modalFormal === 'edit',
        dom: () => <Select allowClear
          disabled={true}
        >{(this.props.selectTypes.allotType || []).map(v => <option key={v}>{v}</option>)}</Select>
      },
      allotLevel: {
        dom: () => <Select allowClear>{(this.props.selectTypes.allotLevel || []).map(v => <option key={v}>{v}</option>)}</Select>
      },
      companyNature: {
        dom: () => <Select allowClear>{(this.props.selectTypes.companyNature || []).map(v => <option key={v}>{v}</option>)}</Select>
      },
      operateType: {
        dom: () => <Select allowClear>{(this.props.selectTypes.operationType || []).map(v => <option key={v}>{v}</option>)}</Select>
      },

    }
  }

  handleEdit() {
    this.props.form.validateFieldsAndScroll((err, val) => {
      if (err) {
        return;
      }
      let params = val;
      const URL_MAP = {
        add: 'allotCenterManage/addAllotCenterManage',
        edit: 'allotCenterManage/updateAllotCenterManage'
      };
      let url = URL_MAP[this.state.modalFormal];
      if (this.state.modalFormal === 'edit') {
        params.id = this.modalPostId;
      }
      post(url, this.resetParam(params)).then(data => {
        if (!data.success) {
          if (data.code === '9999') {
            message.warn('暂无权限！');
            return;
          }
          message.warn(data.message || '网络错误');
          return;
        }
        this.setState({
          modalVisible: false
        }, () => {
          this.evokeChild();
        })
      })
    })
  }

  setModalValue(val) {
    this.props.form.setFieldsValue(val);
    this.modalPostId = val[this.useId];
  }

  // componentWillReceiveProps(nextProps) {
  //   clearTimeout(this.evokeTimeout);
  //   this.evokeTimeout = setTimeout(() => {
  //     this.evokeChild(nextProps)
  //   }, 200)
  // }

  evokeChild(props) {
    this.refs.table.fetchData((props || this.props).queryParam, true);
  }

  delayEvoke() {
    clearTimeout(this.delayTimeout);
    this.delayTimeout = setTimeout(() => {
      this.evokeChild();
    }, 200)
  }


}
const modalForm = {
  add: { title: '新增' },
  edit: { title: '编辑' }
}

export const BusinessInfo = Form.create()(BusinessInfo_);

