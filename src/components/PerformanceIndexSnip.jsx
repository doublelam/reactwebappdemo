import React from 'react';
import { post, get } from '../utils/ajax';
import { ObjOperate } from '../utils/objOperate';
import { Spin, Tooltip } from 'antd';
import reportStyle from '../routes/PerformanceReport.less';
import { performanceIndexConfig } from '../configInfo/performanceIndexConfig';
const timeTypeConfig = {
  annualTrend: 'Year',
  annualAccumulation: 'Year',
  monthlyTrend: 'Month',
  monthlyCumulative: 'Month'
}
export class PerformanceIndexSnip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning: false,
      data: {}
    };
    this.old = {
      timeType: '',
      dataTime: ''
    }
  }
  render() {
    const cashType = {
      bit: performanceIndexConfig[this.props.params.thisColumnName].bit,
      fixed: performanceIndexConfig[this.props.params.thisColumnName].fixed,
      maintain: performanceIndexConfig[this.props.params.thisColumnName].maintain === undefined ?
       2 : performanceIndexConfig[this.props.params.thisColumnName].maintain
    }
    return (
      <div style={{
        display: 'inline-block',
        whiteSpace: 'nowrap',
        width: 150,
        ...this.props.style
      }} className={this.props.className}
        onClick={
          e => {
            this.props.onClick && this.props.onClick();
          }
        }
      >
        <Spin spinning={this.state.spinning}>
          <Tooltip title={performanceIndexConfig[this.props.params.thisColumnName].describe}>
          <ul>
            <li className={reportStyle.snipList}>{this.props.params.mandarin}</li>
            <li className={reportStyle.snipList}>{ObjOperate.addComma(ObjOperate.transformToDivition(this.state.data.targetValue, cashType.bit, cashType.maintain))}{cashType.fixed}</li>
            <li className={reportStyle.snipList}>{ObjOperate.addComma(ObjOperate.transformToDivition(this.state.data.realValue, cashType.bit, cashType.maintain))}{cashType.fixed}</li>
            <li className={reportStyle.snipList}>{ObjOperate.addComma(ObjOperate.transformToDivition(this.state.data.finishRate, 0, 2))}%</li>
          </ul>
          </Tooltip>
        </Spin>
      </div>
    );
  }

  getNewData(props = this.props) {
    if (props.params.dataTime === this.old.dataTime &&
      props.params.timeType === this.old.timeType) {
      return;
    }
    this.old = {
      dataTime: props.params.dataTime,
      timeType: props.params.timeType
    }

    this.setState({
      spinning: true
    });

    const postParam = {
      columen: props.params.thisColumnName,
      timeType: timeTypeConfig[props.params.timeType],
      dataTime: props.params.dataTime,
    };
    // console.log('props --->', postParam);
    post('yunYingJiXiaoView/queryFirstDate', postParam).then(data => {
      this.setState({
        data: data.data,
        spinning: false
      });
    });
  }

  componentWillReceiveProps(nextProps) {

    this.getNewData(nextProps);
  }

  componentWillMount() {
    this.getTempColumn = this.props.params.tempColumn;
    this.getNewData();
  }
}
