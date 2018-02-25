import React from 'react';
import { post } from '../../../utils/ajax';
import { ANALYZ_SELECT, RADIOS_MAP } from '../../../configInfo/ConfigureInfo';
import { ObjOperate } from '../../../utils/objOperate';
import { message, Button } from 'antd';
export class PieGraph extends React.Component {

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
        <div ref="echart" className={
          this.props.className
        } style={{
          ...this.props.style
        }}></div>
      </div>

    );
  }

  componentDidUpdate() {
    this.getInfo();
  }

  componentDidMount() {
    this.echartDiv = echarts.init(this.refs.echart);
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

const returnData = (rawData, thisIndex) => {
  const data = rawData;
  let xAxisNames = [];
  let datas = [];
  for (let item of data) {
    if (thisIndex.props.infos.ifRawName) {
      let name = item[thisIndex.props.infos.typeName];
      xAxisNames.push(name);
      datas.push({
        value: Number(String(item.data || '0').
        replace(',', '')).toFixed(RADIOS_MAP[thisIndex.props.infos.param.SQType].fixed),
        name,
      });
    } else {
      let name = ANALYZ_SELECT[thisIndex.props.infos.typeName][item[thisIndex.props.infos.typeName]];
      xAxisNames.push(name);
      datas.push({
        value: Number(String(item.data || '0').
        replace(',', '')).toFixed(RADIOS_MAP[thisIndex.props.infos.param.SQType].fixed),
        name,
      });
    }
  }
  return {
    title: {
      text: thisIndex.props.infos.title,
      left: 'center'
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        saveAsImage: { show: true }
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: xAxisNames
    },
    series: [
      {
        name: `${RADIOS_MAP[thisIndex.props.infos.param.SQType].name}(${RADIOS_MAP[thisIndex.props.infos.param.SQType].units})`,
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: datas,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
};