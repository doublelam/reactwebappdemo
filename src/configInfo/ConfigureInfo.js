export const QUERY_INFO = {
  day: { symbolChar: 'D', format: 'YYYY-MM-DD' },
  month: { symbolChar: 'M', format: 'YYYY-MM' },
  time: {symbolChar: 'H', format:'YYYY-MM-DD'},
  region: '_Region',
  wayport: '_Wayport',
  netdots: '_Warehouse',
  middleman: '_Party',
  getNullStr: '',
};
export class ConfigureInfo {
  static getQueryUrl(portType, dateType, tableName, prefix = 'statistics', suffix = 'commonquery') {
    return `${prefix}/${tableName}${QUERY_INFO[portType]}_${QUERY_INFO[dateType].symbolChar}/${suffix}`;
  }
}

export const ajaxQuery = {

};

export const SELECT_TYPE = [
  '全部', '业务受理', '停车', '一卡通充值',
  'ETC新办卡',
  '合同交款',
  '一卡通办卡',
  '地磅',
  '停车场小票',
  '租赁合同',
  '临时摊位',
  '酒店',
  '故障维修',
  '水电',
  '履约保证金',
  '提交财务',
  '停车收款'
];

export const PAYMENT_TYPE = ['全部', '现金', 'APP', '刷卡', '一卡通', '停车付款'];

export const CONTRACT_SIGN_SYSTEM = ['全部', '小二系统', '园区通系统'];

export const CASH_TYPE = ['全部', '代收货款', '到付运费', '中转费', '现付运费'];

export const RADIOS_MAP = {
  Flow: {name:'商圈总交易流量',units: '元', fixed: 2},
  Order: {name:'商圈交易订单数',units: '单', fixed: 0},
  User: {name:'商圈交易用户数',units: '个', fixed: 0}
};

export const ANALYZ_SELECT = {
  favorableType: {
    'all': '全部',
    '未知': '未知', 
    '0': '无',
    '1': '优惠0~5元',
    '2': '优惠5~20元',
    '3': '优惠20~50元',
    '4': '优惠50元以上'
  },
  couponType: {
    'all': '全部',
    '未知': '未知', 
    '0': '无',
    COUPON: '优惠券',
    CACHE_COUPON: '消费券',
    FULL_CUT_COUPON: '满减券'
  },
  // couponType: {
  //   'all': '全部',
  //   '0': '无',
  //   '1': '随机立减',
  //   '2': '满额立减',
  //   '3': '打折促销',
  //   '4': '使用优惠券'
  // },

  moneyType: {
    'all': '全部',
    '未知': '未知', 
    '0': '消费0-10元',
    '1': '消费10-50元',
    '2': '消费50-100元',
    '3': '消费100元以上',
  }
};

export const specielDateType = {
  day: 0,
  month: 1
};

