import React from 'react';
import { Icon, Radio, DatePicker, Table, message, Tooltip, Button } from 'antd';
import { PerformanceIndexSnip } from '../components/PerformanceIndexSnip';
import reportStyle from './PerformanceReport.less';
import { post, get } from '../utils/ajax';
import { ObjOperate } from '../utils/objOperate';
import { ReportSnipTable } from '../components/ReportSnipTable';
import { performanceIndexRegionTableConfig, performanceIndexConfig, radiosDescribe } from '../configInfo/performanceIndexConfig';
import moment from 'moment';
moment.locale('zh-cn');
export class PerformanceReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftMoveIndex: 0,
      leftIconShow: false,
      rightIconShow: true,
      dateType: 'monthlyTrend',
      dataTime: moment().format(this.dateType === 'annualTrend' ||
        this.dateType === 'annualAccumulation'
        ? 'YYYY' : 'YYYY-MM'),
      columnName: 'totalCount',
      tableSource: [],
      tableLoading: false,
      ifCount: false
    };
    this.oldFirstSnip = this.state.columnName;
    this.tableCulumn = [
      'organizationName', 'dataTime', 'realValue',
      'targetValue', 'finishedRate', 'realValueLastYear',
      'lastYearRate', 'beforeRealValue', 'beforeRate'
    ].map((val) => {
      return {
        title: <Tooltip title={performanceIndexRegionTableConfig[val]['describe']}>{performanceIndexRegionTableConfig[val]['han']}</Tooltip>,
        dataIndex: val,
        key: val,
        width: 100,
        sorter: val === 'dataTime' ? (a, b) => new Date(a.dataTime) - new Date(b.dataTime) : false
      };
    });
  }
  render() {
    // console.log('rerender', this.state);
    const newDataSource = this.state.tableSource.map((val, index) => {
      for (let key in val) {
        if (/^(-?\d+)(\.\d+)?E?(\d+)$/.test(val[key])) {
          val[key] = String(Number(val[key]).toFixed(2));
          // console.log('changed num', val[key])
        }
      }
      return {
        ...val,
        key: index,
      };
    });
    return (
      <div>
        <div className={reportStyle.headContainer}>
          <div className={reportStyle.headLeftSide} style={{
            boxShadow: `1px 0px 9px rgba(0,0,0,${this.state.leftIconShow ? '.3' : '0'})`,
          }}>
            <div className={reportStyle.forFillBlank}>&nbsp;</div>
            <ul>
              <li className={reportStyle.headLabelName}>指标名称：</li>
              <li className={reportStyle.headLabelName}>目标值：</li>
              <li className={reportStyle.headLabelName}>实际值：</li>
              <li className={reportStyle.headLabelName}>完成比：</li>
            </ul>
          </div>
          <div className={reportStyle.headRightSide} ref={dom => {
            this.outsideContainer = dom;
          }}>
            <Icon type="left-circle" className={`${reportStyle.directIcon} ${reportStyle['icon-left']} ${this.state.leftIconShow ?
              reportStyle.directIconShow : ''}`}
              onClick={e => {
                const gap = this.insideMoveDom.clientWidth - this.outsideContainer.clientWidth;
                if (this.state.leftMoveIndex > 0) {
                  this.setState({
                    leftMoveIndex: this.state.leftMoveIndex - 1,
                  }, () => {
                    if (this.state.leftMoveIndex <= 0) {
                      this.setState({
                        leftIconShow: false,
                        rightIconShow: true
                      });
                    } else if (150 * this.state.leftMoveIndex >= gap) {
                      this.setState({
                        leftIconShow: true,
                        rightIconShow: false
                      });
                    } else {
                      this.setState({
                        leftIconShow: true,
                        rightIconShow: true
                      });
                    }
                  });
                }

              }}
            />
            <Icon type="right-circle" className={`${reportStyle.directIcon} ${reportStyle['icon-right']} ${this.state.rightIconShow ?
              reportStyle.directIconShow : ''}`}
              onClick={e => {
                const gap = this.insideMoveDom.clientWidth - this.outsideContainer.clientWidth;
                if (150 * this.state.leftMoveIndex < gap) {
                  this.setState({
                    leftMoveIndex: this.state.leftMoveIndex + 1,
                  }, () => {
                    if (this.state.leftMoveIndex <= 0) {
                      this.setState({
                        leftIconShow: false,
                        rightIconShow: true
                      });
                    } else if (150 * this.state.leftMoveIndex >= gap) {
                      this.setState({
                        leftIconShow: true,
                        rightIconShow: false
                      });
                    } else {
                      this.setState({
                        leftIconShow: true,
                        rightIconShow: true
                      });
                    }
                  });
                }
              }} />
            <div className={reportStyle.rightSideContainer} ref={dom => {
              this.insideMoveDom = dom;
            }}
              style={{
                transform: `translateX(-${150 * this.state.leftMoveIndex}px)`
              }}
            >
              <div className={reportStyle.mainIncome}>
                <div style={{
                  textAlign: 'center',
                  boxShadow: '0px 1px 4px rgba(0,0,0,.2)',
                  padding: 5,
                  position: 'relative'
                }}>主营收入</div>
                <div style={{
                  whiteSpace: 'nowrap',
                }}>
                  {['totalCount', 'parkingRevenue', 'hotelRevenue', 'mainBusiness', 'mainSupplyChain', 'afterCar', 'refuelingIncome',].map(val => (
                    <PerformanceIndexSnip
                      className={`${reportStyle.firstSnip} ${this.state.columnName === val ? reportStyle.firstSnipActived : ''}`}
                      onClick={(e) => { this.handleSnipClick(val, e); }}
                      params={{
                        ifCount: this.state.ifCount,
                        mandarin: performanceIndexConfig[val]['han'],
                        thisColumnName: val,
                        timeType: this.state.dateType,
                        dataTime: this.state.dataTime
                      }} />
                  ))}
                </div>
              </div>
              <div className={reportStyle.mainIncome}>
                <div style={{
                  textAlign: 'center',
                  boxShadow: '0px 1px 4px rgba(0,0,0,.2)',
                  padding: 5,
                  position: 'relative'
                }}>平台营业额</div>
                <div style={{
                  whiteSpace: 'nowrap',
                }}>
                  {['platformTurnover'].map(val => (
                    <PerformanceIndexSnip
                      className={`${reportStyle.firstSnip} ${this.state.columnName === val ? reportStyle.firstSnipActived : ''}`}
                      onClick={(e) => { this.handleSnipClick(val, e); }}
                      params={{
                        ifCount: this.state.ifCount,
                        mandarin: performanceIndexConfig[val]['han'],
                        thisColumnName: val,
                        timeType: this.state.dateType,
                        dataTime: this.state.dataTime
                      }} />
                  ))}
                </div>
              </div>
              <div className={reportStyle.netBussiness}>
                <div style={{
                  textAlign: 'center',
                  boxShadow: '0px 1px 4px rgba(0,0,0,.2)',
                  padding: 5,
                  position: 'relative'
                }}>织网业务</div>
                {['userCount', 'waybillQuantity', 'transactionFlow'].map(val => (
                  <PerformanceIndexSnip
                    className={`${reportStyle.firstSnip} ${this.state.columnName === val ? reportStyle.firstSnipActived : ''}`}
                    onClick={(e) => { this.handleSnipClick(val, e); }}
                    params={{
                      ifCount: this.state.ifCount,
                      mandarin: performanceIndexConfig[val]['han'],
                      thisColumnName: val,
                      timeType: this.state.dateType,
                      dataTime: this.state.dataTime,
                    }} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={reportStyle.radioSelectSection}>
          <Radio.Group value={this.state.dateType} onChange={e => {
            this.setState({
              dateType: e.target.value,
              dataTime: moment(this.state.dataTime).format((e.target.value === 'annualTrend' ||
                e.target.value === 'annualAccumulation')
                ? 'YYYY' : 'YYYY-MM'),
              ifCount: (e.target.value === 'annualTrend' ||
                e.target.value === 'monthlyTrend') ? false : true
            });
            this.getInfos();
          }}
            className={reportStyle.selectItem}
          >
            <Radio value={'annualTrend'}><Tooltip title={radiosDescribe['annualTrend']}>年趋势</Tooltip></Radio>
            <Radio value={'annualAccumulation'}><Tooltip title={radiosDescribe['annualAccumulation']}>年累计</Tooltip></Radio>
            <Radio value={'monthlyTrend'}><Tooltip title={radiosDescribe['monthlyTrend']}>月趋势</Tooltip></Radio>
            <Radio value={'monthlyCumulative'}><Tooltip title={radiosDescribe['monthlyCumulative']}>月累计</Tooltip></Radio>
          </Radio.Group>
          <div className={reportStyle.selectItem}>
            <DatePicker.MonthPicker
              value={moment(this.state.dataTime)}
              onChange={(val, textVal) => {
                if (textVal === '') { return; }
                this.setState({
                  dataTime: textVal
                });
                this.getInfos();
              }}
              format={(this.state.dateType === 'annualTrend' || this.state.dateType === 'annualAccumulation')
                ? 'YYYY' : 'YYYY-MM'}
            />
          </div>
        </div>
        <div className={reportStyle.tablesArea}>
          <div className={reportStyle.tablesItem}>
            <div ref="echartErea" style={{
              backgroundColor: '#ccc',
              height: 200
            }}>
            </div>
          </div>
          <div hidden={this.state.dateType === 'annualAccumulation' || this.state.dateType === 'monthlyCumulative'} style={{
            padding: 5
          }}>
            <Button onClick={e => {
              const param = {
                timeType: this.state.dateType,
                dataTime: this.state.dataTime
              }
              window.open('/skynet/yunYingJiXiaoView/downloadAllByExcel?' + ObjOperate.objToUrlQuery(param));
            }}>
              EXCEL导出
            </Button>
          </div>

          <div className={reportStyle.tablesItem}>
            <Table
              loading={this.state.tableLoading}
              columns={this.tableCulumn}
              bordered={true}
              dataSource={newDataSource.sort((a, b) => {
                return new Date(b.dataTime) - new Date(a.dataTime)
              })}
              size="small"
              scroll={{ y: 400 }}
              pagination={{
                showQuickJumper: true,
                showSizeChanger: true,
                defaultCurrent: 1,
                pageSizeOptions: ['10', '30', '50', '100', '200'],
              }}
              expandedRowRender={(record) => {
                if (record.region === '') {
                  return <div></div>
                }
                return <ReportSnipTable
                  columns={this.tableCulumn}
                  columnName={this.state.columnName + (this.state.ifCount ? 'Count' : '')}
                  dataTime={record.dataTime}
                  dateType={this.state.dateType}
                  region={record.region}
                />
              }}
            />
          </div>
        </div>

      </div>
    );
  }

  componentWillMount() {
    // console.log(this.refs.insideContent)
    this.getInfos();
  }

  componentDidMount() {
    this.echartObj = echarts.init(this.refs.echartErea);
  }

  componentWillUnmount() {
    // console.log('refs', this.refs.echartErea);
  }

  getSecondInfo(param) {
    this.echartObj.showLoading('default', { text: '正在努力加载中，请稍等( ´◔ ‸◔\')' });

    post('yunYingJiXiaoView/querySecondDate', param).then(data => {

      if (data.result !== 'success') {
        message.warn(data.msg || '网络错误，请稍后再试');
        this.echartObj.hideLoading();
        return;
      }
      this.echartObj.hideLoading();
      const echartOptionData = echartOption(data, this, this.state.dateType);
      // console.log('echarts data', echartOptionData);
      this.echartObj.setOption(echartOptionData);
    });
  }

  getThirdInfo(param) {
    // console.log('get third param', param);
    this.setState({
      tableLoading: true
    });
    post('yunYingJiXiaoView/queryThridDate', param).then(data => {
      // console.log('get third data', data);
      if (data.result !== 'success') {
        message.warn(data.msg || '网络错误，请稍后再试');
        this.setState({
          tableLoading: false,
        });
        return;
      }
      this.setState({
        tableLoading: false,
        tableSource: data.data
      });
    });
  }

  handleSnipClick(val, e) {
    // console.log(this);
    this.setState({
      columnName: val
    }, () => {
      if (this.oldFirstSnip === this.state.columnName) {
        return;
      }
      this.oldFirstSnip = val;
      this.getInfos();
    });
  }

  getInfos() {
    window.clearTimeout(this.get23InfosTimeout);
    this.get23InfosTimeout = window.setTimeout(() => {
      this.getSecondInfo({
        columen: this.state.columnName + (this.state.ifCount ? 'Count' : ''),
        timeType: this.state.dateType,
        dataTime: this.state.dataTime
      });
      this.getThirdInfo({
        columen: this.state.columnName + (this.state.ifCount ? 'Count' : ''),
        timeType: this.state.dateType,
        dataTime: this.state.dataTime
      });
    }, 500);

  }
}

const echartOption = (data, _this, dateType) => {
  const dateArr = [];
  const realVal = [];
  const targetVal = [];
  const newData = data.data.sort((a, b) => {
    return new Date(a.dataTime) - new Date(b.dataTime);
  });
  newData.map(val => {
    dateArr.push(val.dataTime);
    realVal.push(Number(val.realValue).toFixed(2));
    targetVal.push(Number(val.targetValue).toFixed(2));
  });
  const colors = ['#2E76B9', '#CF5A4C'];
  const afFixed = performanceIndexConfig[_this.state.columnName].fixed;


  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: dateType === 'monthlyTrend' ? ['实际值'] : ['目标值', '实际值'],
      selected: {
        '目标值': dateType !== 'monthlyTrend',
        '实际值': true
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: dateArr
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: `单位：(${afFixed[afFixed.length - 1]})`
      }
    ],
    series: [
      {
        name: '目标值',
        type: 'line',
        itemStyle: {
          normal: {
            color: colors[0]
          }
        },
        areaStyle: {
          normal: {
            color: colors[0]
          }
        },
        data: targetVal
      },
      {
        name: '实际值',
        type: 'line',
        itemStyle: {
          normal: {
            color: colors[1]
          }
        },
        areaStyle: {
          normal: {
            color: colors[1]
          }
        },
        data: realVal
      },
    ]
  };
};

