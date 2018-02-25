import React from 'react';
import { get, post } from '../../utils/ajax';
import { ObjOperate } from '../../utils/objOperate';
import { message, Button } from 'antd';
import { RADIOS_MAP } from '../../configInfo/ConfigureInfo';
export class BasementAnalyz extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div style={{ padding: 5 }}>
          <Button onClick={this.exportToExcel.bind(this)}>EXCEL导出</Button>
        </div>
        <div ref="chatDiv" style={{
          height: 'calc(100vh - 300px)'
        }}></div>
      </div>
    );
  }


  componentDidUpdate() {
    console.log('uodated', this.props);
    this.getInfo();
  }

  componentDidMount() {
    console.log('didmount');
    this.echartDiv = echarts.init(this.refs.chatDiv);
    console.log('this echart', this.echartDiv);
    this.getInfo();
  }

  componentWillUnmount() {
    console.log('unmounted', this);
    this.echartDiv = null;
  }

  getInfo() {
    this.echartDiv.showLoading();
    window.clearTimeout(this.postTimeout);
    let param = Object.assign({}, this.props.infos);
    delete param.dataTime;
    this.postTimeout = window.setTimeout(() => {
      post('sqView/getBaseAnalysis', param).then(data => {
        if (!data.success) {
          this.echartDiv.hideLoading();
          message.warn(data.message || '网络错误');
          return;
        }
        this.echartDiv.hideLoading();
        this.echartDiv.setOption(returnData(data.module, this));
      });
    }, 500);
  }

  exportToExcel() {
    window.clearTimeout(this.excelTimeout);
    let param = Object.assign({}, this.props.infos);
    delete param.dataTime;
    this.excelTimeout = window.setTimeout(() => {
      window.open('sqView/getExcelBaseAnalysis?' + ObjOperate.objToUrlQuery(param));
    }, 500);
  }

}

const returnData = (rawData, thisIndex) => {
  const dataSets = {
    dataTimes: [],
    rings: [],
    totals: []

  };

  for (let item of rawData) {
    dataSets.dataTimes.push(item.dataTime);
    dataSets.rings.push((Number(String(item.ring || '0').replace(',', '')) * 100).toFixed(2));
    dataSets.totals.push(Number(String(item.totalData || '0').
    replace(',', '')).toFixed(RADIOS_MAP[thisIndex.props.infos.SQType].fixed) || '0');
  }
  return {
    tooltip: {
      trigger: 'axis',
      formatter: '<span style="color: #FFFF00">{b}</span><br />{a}: {c}<br />{a1}: {c1}',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#ccc'
        }
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
    legend: {
      data: [`${RADIOS_MAP[thisIndex.props.infos.SQType].name}(${RADIOS_MAP[thisIndex.props.infos.SQType].units})`, '环比（%）'],
      selectedMode: false
    },
    xAxis: [
      {
        name: '日期',
        nameLocation: 'middle',
        nameGap: 25,
        type: 'category',
        data: dataSets.dataTimes,
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: `${RADIOS_MAP[thisIndex.props.infos.SQType].name}(${RADIOS_MAP[thisIndex.props.infos.SQType].units})`,
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: '环比（%）',
        axisLabel: {
          formatter: '{value} %'
        }
      }
    ],
    series: [
      {
        name: `${RADIOS_MAP[thisIndex.props.infos.SQType].name}(${RADIOS_MAP[thisIndex.props.infos.SQType].units})`,
        type: 'bar',
        itemStyle: {
          normal: {
            color: '#588DEE',
          }
        },
        data: dataSets.totals
      },
      {
        name: '环比（%）',
        type: 'line',
        itemStyle: {
          normal: {
            color: '#CF5C4E',
          }
        },
        yAxisIndex: 1,
        data: dataSets.rings
      }
    ]
  };
};

