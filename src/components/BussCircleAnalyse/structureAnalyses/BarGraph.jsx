import React from 'react';
import { post } from '../../../utils/ajax';
import { ObjOperate } from '../../../utils/objOperate';
import { RADIOS_MAP } from '../../../configInfo/ConfigureInfo';
import { message, Button } from 'antd';
export class BarGraph extends React.Component {

  render() {
    return (
      <div>
        <div style={{
          position: 'relative',
          zIndex: 1,
          float: 'right',
          marginRight: '6%',
          marginTop: 44
        }}>
          <Button size="small" onClick={this.exportToExcel.bind(this)}>
            EXCEL导出
          </Button>
        </div>
        <div ref="echart" className={this.props.className} style={{
          ...this.props.style
        }}></div>
      </div>

    );
  }

  componentDidUpdate() {
    this.getInfo();
  }

  componentDidMount() {
    console.log('didmount');
    this.echartDiv = echarts.init(this.refs.echart);
    console.log('this echart', this.echartDiv);
    this.getInfo();
  }

  getInfo() {
    let params = Object.assign({}, this.props.infos.param);
    delete params.SQStartDate; delete params.SQEndDate;
    this.echartDiv.showLoading();
    window.clearTimeout(this.postTimeout);
    this.postTimeout = window.setTimeout(() => {
      post(this.props.infos.url, params).then(data => {
        if (!data.success) {
          message.warn(data.message || '网络错误');
          this.echartDiv.hideLoading();
          return;
        }
        this.echartDiv.hideLoading();
        this.echartDiv.setOption(returnData(data.module, this));
      });
    }, 500);
  }

  exportToExcel() {
    window.clearTimeout(this.excelTimeout);
    let params = Object.assign({}, this.props.infos.param);
    delete params.SQStartDate; delete params.SQEndDate;
    this.excelTimeout = window.setTimeout(() => {
      window.open(`${this.props.infos.excelUrl}?` + ObjOperate.objToUrlQuery(params));
    }, 500);
  }
}

const returnData = (rawData, indexThis) => {
  const datas = {
    xAxisData: [],
    datas: []
  };

  for (let item of rawData) {
    datas.xAxisData.push(item.merchantName || item.wayPort || item.region);
    datas.datas.push(item.totalData && Number(String(item.totalData || '0').
    replace(',', '')).toFixed(RADIOS_MAP[indexThis.props.infos.param.SQType].fixed) || '0');
  }

  return {
    title: {
      text: indexThis.props.infos.title,
      left: 'center'
    },
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      formatter: '{b} : {c}',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    dataZoom: {
      type: 'inside',
       xAxisIndex: 0
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    grid: {
      left: '0',
      right: '0',
      bottom: '0',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: datas.xAxisData,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: `${RADIOS_MAP[indexThis.props.infos.param.SQType].name}(${RADIOS_MAP[indexThis.props.infos.param.SQType].units})`,
      }
    ],
    series: [
      {
        name: `${RADIOS_MAP[indexThis.props.infos.param.SQType].name}(${RADIOS_MAP[indexThis.props.infos.param.SQType].units})`,
        type: 'bar',
        barWidth: '60%',
        data: datas.datas
      }
    ]
  };
};