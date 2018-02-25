export const performanceIndexConfig = {
  totalCount: {
    han: '总计', fixed: '万元', bit: 4, describe: `包含停车场收入、旅馆收入、供应链业务主营、物流业务主营、车后、加油收入;
  =停车场收入+旅馆收入+供应链业务主营+物流业务主营+车后+加油收入` },
  totalCountCount: { han: '总计累计', fixed: '万元', bit: 4, describe: `` },
  parkingRevenue: { han: '停车场收入', fixed: '万元', bit: 4, describe: `每日停车系统内实际收到的停车主向公路港缴的停车费总额；` },
  parkingRevenueCount: { han: '停车场收入累计', fixed: '万元', bit: 4, describe: `` },
  hotelRevenue: { han: '旅馆收入', fixed: '万元', bit: 4, describe: `在旅馆住宿系统中，每日系统内实际收到的住宿客户人员向自营旅馆缴纳的所有费用（包含住宿费、旅馆内的增值服务费包含餐饮、食品等）、目前只有成都公路港旅馆为自营，以后会增加；` },
  hotelRevenueCount: { han: '旅馆收入累计', fixed: '万元', bit: 4, describe: `` },
  mainBusiness: { han: '供应链业务主营', fixed: '万元', bit: 4, describe: `为客户商品提供仓、运输储服务的同时，参与上游下游买卖的商品主营收入` },
  mainBusinessCount: { han: '供应链业务主营累计', fixed: '万元', bit: 4, describe: `` },
  mainSupplyChain: { han: '物流业务主营', fixed: '万元', bit: 4, describe: `为客户提供仓储、运输业务的主营收入；` },
  mainSupplyChainCount: { han: '物流业务主营累计', fixed: '万元', bit: 4, describe: `` },
  afterCar: { han: '车后', fixed: '万元', bit: 4, describe: `包含车辆贸易、车后业务等产生的主营收入；` },
  afterCarCount: { han: '车后累计', fixed: '万元', bit: 4, describe: `` },
  refuelingIncome: { han: '加油收入', fixed: '万元', bit: 4, describe: `传化自营的加油站每日的加油的收入；` },
  refuelingIncomeCount: { han: '加油收入累计', fixed: '万元', bit: 4, describe: `` },
  platformTurnover: { han: '平台营业额', fixed: '万元', bit: 4, describe: `是指上缴税收可纳入平台税返基数的合法经营主体的营收总和` },
  platformTurnoverCount: { han: '平台营业额累计', fixed: '万元', bit: 4, describe: `` },
  userCount: { han: '系统新增客户数', fixed: '个', bit: 0, maintain: 0, describe: `在智慧物流系统上注册的承运商及货主个数（去重）` },
  userCountCount: { han: '系统新增客户数累计', fixed: '个', bit: 0, maintain: 0, describe: `` },
  waybillQuantity: { han: '有效运单量', fixed: '单', bit: 0, maintain: 0, describe: `导入的运单状态为待配载（7天及以上）*10%+（导入的运单状态为已发车、已签收+非导入的运单状态为已发车、已签收）*100%+非导入运单状态为待配载（7天及以上）*80%的运单个数` },
  waybillQuantityCount: { han: '有效运单量累计', fixed: '单', bit: 0, maintain: 0, describe: `` },
  transactionFlow: { han: '有效交易流量', fixed: '亿元', bit: 8, describe: `导入的运单状态为待配载（7天及以上）*10%+（导入的运单状态为已发车、已签收+非导入的运单状态为已发车、已签收）*100%+非导入运单状态为待配载（7天及以上）*80%的运单的交易金额` },
  transactionFlowCount: { han: '有效交易流量累计', fixed: '亿元', bit: 8, describe: `` }
};

export const performanceIndexRegionTableConfig = {
  beforeRate: { han: '环比', describe: '（实际值-上期实际值）/上期实际值' },
  beforeRealValue: { han: '上期实际值', describe: '1、年数据的上期实际值为去年的年数据；\n2、月数据的上期实际值为上月的月数据；\n3、日数据的上期实际值为上月相应日的日数据' },
  columen: { han: '查询指标列', describe: '' },
  dataTime: { han: '日期', describe: '' },
  finishedRate: { han: '完成比', describe: '实际值/目标值，如无目标值则为“0”' },
  lastYearRate: { han: '同比', describe: '（实际值-去年同期值)/去年同期值' },
  organizationName: { han: '组织', describe: '' },
  realValue: { han: '实际值', describe: '用户所选择日期的实际完成值' },
  realValueLastYear: { han: '去年同期实际值', describe: '1、年数据的去年同期值为去年的年数据；\n2、月数据的去年同期值为去年相应月的数据；\n3、日数据的去年同期值为去年相应日的日数据' },
  region: { han: '大区', describe: '' },
  targetValue: { han: '目标值', describe: '由集团总部审核制定的相关指标的目标值' },
  wayPort: { han: '公路港', describe: '' }
};

export const radiosDescribe = {
  annualAccumulation: `所选择年度的截止当前日期的每月累加完成值，例：1月为1月完成值，2月为1月+2月完成值、3月为1月+2月+3月的完成值；目标值的累加关系与实际值相同；`,
  annualTrend: `所选年度截止当前日期内每个月的完成值`,
  monthlyTrend: `所选月份的截止当前日期内每日的完成值，目标值为每月的目标值；`,
  monthlyCumulative: `所选月份的截止当前日期内每日的累加完成值，例如：1日为1日的完成值，2日为1日+2日的完成值，3日为1日+2日+3日的完成值，目标值为当月的目标值；`
};




