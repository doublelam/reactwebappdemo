import React from 'react';
import { post } from '../../utils/ajax';
import { ObjOperate } from '../../utils/objOperate';
import { message, Button } from 'antd';
import { RADIOS_MAP } from '../../configInfo/ConfigureInfo';
export class RankingAnalyz extends React.Component {
  render() {
    return (
      <div>
        <div style={{ padding: 5 }}>
          <Button onClick={this.exportToExcel.bind(this)}>
            EXCEL导出
          </Button>
        </div>
        <div ref="chatDiv" style={{
          height: 'calc(100vh - 300px)'
        }}></div>
      </div>
    );
  }

  componentDidMount() {
    this.echartDiv = echarts.init(this.refs.chatDiv);
    this.getInfo();
  }

  componentDidUpdate() {
    this.getInfo();
  }

  getInfo() {
    let params = Object.assign({}, this.props.infos);
    delete params.SQStartDate; delete params.SQEndDate;
    this.echartDiv.showLoading();
    window.clearTimeout(this.postTimeout);
    this.postTimeout = window.setTimeout(() => {
      post('sqView/getRankingAnalysis', params).then(data => {
        if (!data.success) {
          message.warn(data.message || '网络错误');
          this.echartDiv.hideLoading();
          return;
        }
        this.echartDiv.hideLoading();
        this.echartDiv.setOption(returnData(data.module || [], this));
      });
    }, 500);
  }

  exportToExcel() {
    window.clearTimeout(this.excelTimeout);
    let params = Object.assign({}, this.props.infos);
    delete params.SQStartDate; delete params.SQEndDate;
    this.excelTimeout = window.setTimeout(() => {
      window.open('sqView/getExcelRankingAnalysis?' + ObjOperate.objToUrlQuery(params));
    }, 500);
  }
}

const returnData = (rawData, thisIndex)=> {
  const datas = {
    yAxisData: [],
    datas: []
  };
  for (let item of (rawData).sort((a, b) => {
    return Number(String(a.totalData || '0').replace(',', '')) - Number(String(b.totalData || '0').replace(',', ''));
  })) {
    datas.yAxisData.push(item.merchantName || item.wayPort || item.region);
    datas.datas.push(Number(String(item.totalData || '0').
    replace(',', '')).toFixed(RADIOS_MAP[thisIndex.props.infos.SQType].fixed) || '0');
  }
  return {
    dataZoom: {
      type: 'inside',
      yAxisIndex: [0],
    },
    tooltip: {
      trigger: 'axis',
      formatter: '<span style="color: #FFFF00">{b}</span><br />{a}: {c}',
      axisPointer: {
        type: 'shadow'
      }
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
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: `(${RADIOS_MAP[thisIndex.props.infos.SQType].units})`
    },
    yAxis: {
      type: 'category',
      data: datas.yAxisData
    },
    series: [
      {
        name: `${RADIOS_MAP[thisIndex.props.infos.SQType].name}(${RADIOS_MAP[thisIndex.props.infos.SQType].units})`,
        type: 'bar',
        itemStyle: {
          normal: {
            color: '#2E76B9',
          }
        },
        data: datas.datas
      },

    ]
  };
};