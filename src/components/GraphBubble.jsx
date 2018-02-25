import React from 'react';
import {
  Popconfirm,
  Radio
} from 'antd';
import { ConfigureInfo } from '../configInfo/ConfigureInfo';
import { ObjOperate } from '../utils/objOperate';

export class GraphBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioSelect: 'histogram'
    };
  }
  render() {
    let { key, newItem, tempPostData, portType, dateType, tableType } = this.props.infos;
    let postData = Object.assign({}, tempPostData);
    postData['conditionFilterItems'] = eval(postData['conditionFilterItems'] || '[]');
    postData['conditionFilterItems'].push({
      field: key,
      symbol: 'EQ',
      value: newItem[key],
      relation: 'AND'
    });
    postData['conditionFilterItems'] = JSON.stringify(postData['conditionFilterItems']);
    this.frameSrc = graphType => `/skynet/${ConfigureInfo.getQueryUrl(
      this.changeUrl(portType, (graphType !== 'histogram' || portType === 'region')),
      dateType,
      tableType,
      'graph',
      graphType
    )}?${
      encodeURI(ObjOperate.objToUrlQuery(postData))
        .replace(/inputdate/g, 'dataTime')
      }`;

    return <Popconfirm title={<div style={{
      width: '50vw',
      height: '50vh'
    }}>
      <Radio.Group size="small" defaultValue="histogram" value={this.state.radioSelect} onChange={e => {
        this.setState({
          radioSelect: e.target.value
        }, () => {
          this.refs.frame.src = this.frameSrc(this.state.radioSelect);
        });
      }}>
        <Radio.Button value="histogram">趋势图</Radio.Button>
        <Radio.Button value="ranking">排名图</Radio.Button>
      </Radio.Group>
      <iframe ref="frame" style={{
        width: '100%',
        height: '100%',
        border: 'none'
      }} src={this.frameSrc(this.state.radioSelect)}>
      </iframe></div>} placement="right"><span style={{
        color: '#2E76B9',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>{newItem[key]}</span></Popconfirm>;
  }

  changeUrl(type, ifChange) {
    return ifChange ? regionMap[type] : rawMap[type];
  }
}

const regionMap = {
  region: 'wayport',
  wayport: 'middleman',
  middleman: 'netdots',
  netdots: 'netdots'
};

const rawMap = {
  region: 'region',
  wayport: 'wayport',
  middleman: 'middleman',
  netdots: 'middleman'
};

export const REGION_MAPPING = type => {
  const map = {
    region: 'region',
    wayport: 'wayport',
    netdots: 'partyName',
    middleman: 'partyName'
  };
  return map[type];
};