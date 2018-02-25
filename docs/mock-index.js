'use strict';
const URL = "";

module.exports = {

  // params:
  // salesmansId	业务员ID	否
  // region	大区	否
  // wayPort	公路港	否
  // salesmanName	业务员姓名	否
  // salesmanNumber	业务员编号	否
  // phoneNumber	手机号	否
  // salesmanType	业务员类型	否
  // description	描述	否
  // updateTime	更新时间	否
  // inputDate	输入时间	否
  'POST /skynet/salesmansView/queryRegionByAcl': (req, res) => {
    setTimeout(() => {
      res.json({
        "result":"success",
        "msg":"查询成功",
        "count":"1",
        "data":[
          {
            "description":"大多数",
            "inputDate": {
              "date":"20",
              "day":"1",
              "hours":"17",
              "minutes":"58",
              "month":"1",
              "seconds":"51",
              "time":"1487584731000",
              "timezoneOffset":"-480",
              "year":"117"
            },
            "isDelete":"NO",
            "phoneNumber":"123456",
            "region":"浙江大区",
            "salesmanName":"业务员二",
            "salesmanNumber":"15562",
            "salesmanType":"业务员",
            "salesmansId":"1",
            "stampDate": {
              "date":"20",
              "day":"1",
              "hours":"18",
              "minutes":"31",
              "month":"1",
              "seconds":"32",
              "time":"1487586692000",
              "timezoneOffset":"-480",
              "year":"117"
            },
            "updateTime": {
              "date":"20",
              "day":"1",
              "hours":"17",
              "minutes":"58",
              "month":"1",
              "seconds":"51",
              "time":"1487584731000",
              "timezoneOffset":"-480",
              "year":"117"
            },
            "wayPort":"杭州公路港"
          }
        ]
      });
    }, 500);
  },

};
