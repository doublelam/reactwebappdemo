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
  Tooltip
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
const { MonthPicker, RangePicker } = DatePicker;

export class MyJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateType: 'month',
      timeRange: {
        from: moment().startOf('month'),
        to: moment().endOf('month')
      },
      tablesInfo: {},
      pageSize: 30,
      pageIndex: 1,
      pageLoading: false,
    };
    this.timeRange = {
      dateString: [
        this.state.timeRange.from.format(QUERY_INFO[this.state.dateType].format),
        this.state.timeRange.to.format(QUERY_INFO[this.state.dateType].format)
      ],
      rawDate: [this.state.timeRange.from, this.state.timeRange.to]
    };
  }
  render() {
    let columns = [];
    let tableSource=[];
    let pagination = {};
    return (
      <section className={publicStyles.section}>
        <QueryHeader>
          <div className={publicStyles.rightGap}>
            <span>时间范围：</span>
            <RangePicker
              format={QUERY_INFO[this.state.dateType].format}
              defaultValue={[this.state.timeRange.from, this.state.timeRange.to]}
              onChange={(data, dataString) => {
                if (!data || data.length === 0) {
                  return;
                }
                this.timeRange.rawDate = data;
                this.timeRange.dateString = dataString;
                this.getStateInfo();
              }}
              ranges={
                {
                  '本月': [moment().startOf('month'), moment().endOf('month')],
                  '上月': [moment().month(moment().month() - 1).startOf('month'),
                  moment().month(moment().month() - 1).endOf('month')],
                  '本季度': [moment().startOf('quarter'), moment().endOf('quarter')],
                  '本年度': [moment().startOf('year'), moment().endOf('year')],
                  '上线至今': [moment('2016-9-1'), moment()]
                }
              }
              style={
                {
                  width: 200,
                  marginRight: 5
                }
              }
            />
            <Button.Group>
              <Button type={this.state.dateType === 'day' ?
                'primary' : ''} onClick={() => {
                  this.changeDateType('day');
                  this.getStateInfo();
                }}>
                日
              </Button>
              <Button type={this.state.dateType === 'month' ?
                'primary' : ''} onClick={() => {
                  this.changeDateType('month');
                  this.getStateInfo();
                }}>
                月
              </Button>
            </Button.Group>
          </div>
        </QueryHeader>
        <div style={{
          padding: '15px 10px'
        }}>
          
          <div style={
            {
              float: 'right'
            }
          }>
            <Button.Group>
              <Button
                onClick={() => {
                  
                }}>
                <Icon type="export" />批量导出
              </Button>
              <Button
                onClick={() => {
                  
                }}
              >
                <Icon type="export" />全部导出
              </Button>
            </Button.Group>
          </div>
        </div>
        <div>
          <InfoCount countData={this.state.tablesInfo} />
        </div>
        <Table
          columns={columns}
          dataSource={tableSource}
          rowKey={record => record.registered}
          pagination={pagination}
          loading={this.state.pageLoading}
          scroll={{ x: columns.length * 130, y: 460 }}
          size="small"
          bordered
          onChange={(pagination, filters, sorter) => {
          }}
        >
        </Table>
      </section>
    );
  }

  changeDateType(dateType) {
    this.setState({ dateType: dateType });
    return true;
  }

  getStateInfo(){
    this.setState({
      pageLoading: true
    });
    let getInfoTimeout = window.setTimeout(() => {
      post('/skynet/statistics/Mg_Job/commonQuery').then(() => {

      }).catch((err) => {

      });
    }, 500);
  }

  componentWillMount(){
    this.getStateInfo();
  }

}