
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
  Modal
} from 'antd';
import { post } from '../../utils/ajax';
import { ConfigureInfo } from '../../configInfo/ConfigureInfo';
import { ObjOperate } from '../../utils/objOperate';
import { Link } from "dva/router";
import { TableList } from './TableList';
import provinces from 'china-division/dist/provinces.json';
import { citiesData } from '../cascader-options';
import { InfoCount } from '../../components/InfoCount';

class BasicInfo_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableSource: [],
      pageSize: 30,
      current: 1,
      total: 0,
      tableLoading: false,
      modalVisible: false,
      // select types
      cooperate: [],
      operationSituation: [],
      modalFormal: 'add',
      data: {},
    }
    this.getColumns = [];
    this.modalPostId = void 0;
  }


  render() {
    let columns = [];
    let countInfo = {
      success: true,
      module: {
        dataCount: this.state.data.totalCount,
        sumData: {
          total: this.state.data.totalCount,
          ...this.state.data.module && this.state.data.module.sumData
        },
        columnList: [
          { displayName: '分拨中心/个', tableColumnName: 'total' },
          { displayName: '一级分拨中心/个', tableColumnName: 'firstLevel' },
          { displayName: '二级分拨中心/个', tableColumnName: 'secondLevel' },
          { displayName: '三级分拨中心/个', tableColumnName: 'thirdLevel' },
          { displayName: '路港驿站个数/个', tableColumnName: 'wareHouses' },
        ]
      }
    }
    console.log('count info', countInfo)
    return (
      <section>
        <div style={{ padding: 10, display: 'none' }}><Button
          type="primary"
          onClick={e => {
            this.setState({
              modalVisible: true,
              modalFormal: 'add'
            }, () => {
              this.props.form.resetFields()
            });
          }}>新增</Button></div>
        <div>
          <InfoCount countData={countInfo} />
        </div>
        <TableList
          ref="table"
          url="allotCenterController/getAllotCenterList"
          getData={this.getData.bind(this)}
          excelOpt={{
            excelId: 'allotCenterId',
            excelPartUrl: '/tmsBossAdmin/allotCenterController/getAllotCenterExcel',
            excelAllUrl: '/tmsBossAdmin/allotCenterController/getAllotCenterExcel'
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
                return <Button
                  type="primary"
                  onClick={e => {
                    this.setState({
                      modalVisible: true,
                      modalFormal: 'edit'
                    }, () => {
                      this.setModalValue(record);
                    })
                  }}
                >编辑</Button>
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
          <Form
            layout="horizontal"
            style={{ height: '60vh', overflow: 'auto' }}>
            {this.getColumns.map(v => {
              return <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                label={v.displayName}
              >
                {this.props.form.getFieldDecorator(v.columnName)(
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
  }

  getData(data) {
    console.log('setDATA', data)
    this.setState({
      data: data
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
        dom: () => false
      },
      partyCode: {
        disable: () => this.state.modalFormal === 'edit',
        dom: () => false
      },
      warehouseCode: {
        disable: () => this.state.modalFormal === 'edit',
        dom: () => false
      },
      applyDate: {
        disable: () => this.state.modalFormal === 'edit',
        dom: () => false
      },
      operateDate: {
        pattern: /[0-9]{4}-[0-9]{2}/g,
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
        dom: () => <Select
          allowClear
        >{(this.props.selectTypes.allotType || []).map(v => <option key={v}>{v}</option>)}</Select>
      },
      allotLevel: {
        dom: () => <Select allowClear>{(this.props.selectTypes.allotLevel || []).map(v => <option key={v}>{v}</option>)}</Select>
      },
      companyNature: {
        dom: () => <Select allowClear>{(this.props.selectTypes.companyNature || []).map(v => <option key={v}>{v}</option>)}</Select>
      },
      operationType: {
        dom: () => <Select allowClear>{(this.props.selectTypes.operationType || []).map(v => <option key={v}>{v}</option>)}</Select>
      },
      operationSituation: {
        dom: () => <Select allowClear>{(this.props.selectTypes.operateStatus || []).map(v => <option key={v}>{v}</option>)}</Select>
      }


    }
  }

  handleEdit() {
    this.props.form.validateFieldsAndScroll((err, val) => {
      if (err) {
        return;
      }
      let params = val;
      const URL_MAP = {
        add: 'allotCenterController/modifyAllotCenter',
        edit: 'allotCenterController/modifyAllotCenter'
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
          message.warn(data.message || '网络错误'); return;
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
    this.modalPostId = val.allotCenterId
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('received props', this.props)
  // }

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

  evokeChild(props) {
    console.log('evok props', props, this.props)
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

export const BasicInfo = Form.create()(BasicInfo_);

