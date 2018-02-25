import React from 'react';
import { BarGraph } from '../BussCircleAnalyse/structureAnalyses/BarGraph';
import { PieGraph } from '../BussCircleAnalyse/structureAnalyses/PieGraph';
import analyzStyle from './StructureAnalyz.less';
import { message } from 'antd';
export class StructureAnalyz extends React.Component {
  render() {
    const param = Object.assign({}, this.props.infos);
    delete param.SQClassType;delete param.favorableType;delete param.SQCouponType;delete param.moneyType;
    return (
      <div>
        <ul style={{
          overflow: 'auto'
        }}>
          {
            [{
              elementType: BarGraph,
              url: 'sqView/getRegionAnalysis',
              excelUrl: 'sqView/getExcelRegionAnalysis',
              param,
              title: '按组织维度类型分析'
            }, {
              elementType: PieGraph,
              url: 'sqView/getClassTypeAnalysis',
              excelUrl: 'sqView/getExcelClassTypeAnalysis',
              param,
              typeName: 'classType',
              ifRawName: true,
              title: '按业态维度类型分析'
            }, {
              elementType: PieGraph,
              url: 'sqView/getCouponTypeAnalysis',
              excelUrl: 'sqView/getExcelCouponTypeAnalysis',
              param,
              typeName: 'couponType',
              ifRawName: false,
              title: '按营销类型类型分析'
            }, {
              elementType: PieGraph,
              url: 'sqView/getFavorableTypeAnalysis',
              excelUrl: 'sqView/getExcelFavorableTypeAnalysis',
              param,
              typeName: 'favorableType',
              ifRawName: false,
              title: '按营销优惠额度类型分析'
            }, {
              elementType: PieGraph,
              url: 'sqView/getMoneyTypeAnalysis',
              excelUrl: 'sqView/getExcelMoneyTypeAnalysis',
              param,
              typeName: 'moneyType',
              ifRawName: false,
              title: '按消费金额范围分析'
            }].map(val => {
              return (
                <li className={analyzStyle['list-item']}>
                  {React.createElement(
                    val.elementType,
                    {
                      className: analyzStyle['graph-style'],
                      infos: val,
                    }
                  )}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}