// import {
//   settings
// } from 'cluster';

'use strict';
const fs = require('fs');
const URL = "http://10.51.34.65:8080/";

const LOGIN_URL = "http://sitetest.tf56.com";
const http = require('http');
let noPD = require('./acldatawithoutpermission');
let pD = require('./acldata');
// 'POST /openssoWeb/opensso/login/openssoWeb/opensso/action': LOGIN_URL,

function done() {
  return (req, res) => {
    setTimeout(() => {
      res.json({
        result: "success",
        data: "",
        msg: "",
        code: "0"
      });
    }, 500);
  };
}

function tableListMockData() {
  var obj = {
    "description": "大多数",
    "inputDate": {
      "date": "20",
      "day": "1",
      "hours": "17",
      "minutes": "58",
      "month": "1",
      "seconds": "51",
      "time": "1487584731000",
      "timezoneOffset": "-480",
      "year": "117"
    },
    "isDelete": "NO",
    "phoneNumber": "453453465456456",
    "region": "浙江大区",
    "salesmanName": "业务员123123123",
    "salesmanNumber": "asdasdasd",
    "salesmanType": "业务员",
    "salesmansId": "2",
    "stampDate": {
      "date": "20",
      "day": "1",
      "hours": "18",
      "minutes": "31",
      "month": "1",
      "seconds": "32",
      "time": "1487586692000",
      "timezoneOffset": "-480",
      "year": "117"
    },
    "updateTime": {
      "date": "20",
      "day": "1",
      "hours": "17",
      "minutes": "58",
      "month": "1",
      "seconds": "51",
      "time": "1487584731000",
      "timezoneOffset": "-480",
      "year": "117"
    },
    "wayPort": "杭州公路港14234"
  };
  var arr = new Array(50);
  var len = arr.length;
  while (len-- > 0) {
    arr[len] = obj;
  }
  return arr;
}

module.exports = {

  "POST /skynet/salesmansView/updateSalesmans": done(),

  "POST /skynet/salesmansView/querySalesmanList": (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "查询成功",
        "count": "52",
        "data": [{
            "description": "大多数",
            "inputDate": {
              "date": "20",
              "day": "1",
              "hours": "17",
              "minutes": "58",
              "month": "1",
              "seconds": "51",
              "time": "1487584731000",
              "timezoneOffset": "-480",
              "year": "117"
            },
            "isDelete": "NO",
            "phoneNumber": "123456",
            "region": "浙江大区",
            "salesmanName": "业务员二",
            "salesmanNumber": "15562",
            "salesmanType": "业务员",
            "salesmansId": "1",
            "stampDate": {
              "date": "20",
              "day": "1",
              "hours": "18",
              "minutes": "31",
              "month": "1",
              "seconds": "32",
              "time": "1487586692000",
              "timezoneOffset": "-480",
              "year": "117"
            },
            "updateTime": {
              "date": "20",
              "day": "1",
              "hours": "17",
              "minutes": "58",
              "month": "1",
              "seconds": "51",
              "time": "1487584731000",
              "timezoneOffset": "-480",
              "year": "117"
            },
            "wayPort": "杭州公路港"
          },
          {
            "description": "大多数",
            "inputDate": {
              "date": "20",
              "day": "1",
              "hours": "17",
              "minutes": "58",
              "month": "1",
              "seconds": "51",
              "time": "1487584731000",
              "timezoneOffset": "-480",
              "year": "117"
            },
            "isDelete": "NO",
            "phoneNumber": "453453465456456",
            "region": "浙江大区",
            "salesmanName": "业务员123123123",
            "salesmanNumber": "asdasdasd",
            "salesmanType": "业务员",
            "salesmansId": "2",
            "stampDate": {
              "date": "20",
              "day": "1",
              "hours": "18",
              "minutes": "31",
              "month": "1",
              "seconds": "32",
              "time": "1487586692000",
              "timezoneOffset": "-480",
              "year": "117"
            },
            "updateTime": {
              "date": "20",
              "day": "1",
              "hours": "17",
              "minutes": "58",
              "month": "1",
              "seconds": "51",
              "time": "1487584731000",
              "timezoneOffset": "-480",
              "year": "117"
            },
            "wayPort": "杭州公路港14234"
          },
          ...tableListMockData()
        ]
      });
    }, 500);
  },

  "POST /skynet/salesmansView/queryRegionByAcl": (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "查询成功",
        "count": "",
        "data": [{
          "aclUnitId": "411",
          "childrenList": [{
            "aclUnitId": "973",
            "childrenList": [{
              "aclUnitId": "983",
              "childrenList": "",
              "createDate": "2017-06-06 17:39:22.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "973",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:39:22.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061739015JAEMDC",
              "unitLevel": "3",
              "unitName": "临沂公路港",
              "updateDate": "2017-06-06 17:39:22.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "981",
              "childrenList": "",
              "createDate": "2017-06-06 17:39:12.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "973",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:39:12.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061739004R2IDUN",
              "unitLevel": "3",
              "unitName": "淄博公路港",
              "updateDate": "2017-06-06 17:39:12.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "979",
              "childrenList": "",
              "createDate": "2017-06-06 17:39:01.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "973",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:39:01.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061738048VIPGA5",
              "unitLevel": "3",
              "unitName": "菏泽公路港",
              "updateDate": "2017-06-06 17:39:01.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "975",
              "childrenList": "",
              "createDate": "2017-06-06 17:38:32.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "973",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:38:32.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061738024PUQMUH",
              "unitLevel": "3",
              "unitName": "青岛公路港",
              "updateDate": "2017-06-06 17:38:32.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "977",
              "childrenList": "",
              "createDate": "2017-06-06 17:38:44.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "973",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:38:44.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061738037ATFG24",
              "unitLevel": "3",
              "unitName": "济南公路港",
              "updateDate": "2017-06-06 17:38:44.0",
              "updateMan": "15562\/冯佳佳"
            }],
            "createDate": "2017-06-06 17:38:21.0",
            "createMan": "15562\/冯佳佳",
            "description": "",
            "parentNode": "411",
            "productId": "myportal",
            "productType": "skynet",
            "rank": "",
            "stampDate": "2017-06-06 17:38:21.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "",
            "unitCode": "U1706061738019ZLYLZY",
            "unitLevel": "2",
            "unitName": "山东大区",
            "updateDate": "2017-06-06 17:38:21.0",
            "updateMan": "15562\/冯佳佳"
          }, {
            "aclUnitId": "415",
            "childrenList": [{
              "aclUnitId": "949",
              "childrenList": "",
              "createDate": "2017-06-06 17:10:04.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "415",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:10:04.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061710002TFD2IB",
              "unitLevel": "3",
              "unitName": "沧州公路港",
              "updateDate": "2017-06-06 17:10:04.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "945",
              "childrenList": "",
              "createDate": "2017-06-06 17:09:43.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "415",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:09:43.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061709041WUHKS0",
              "unitLevel": "3",
              "unitName": "包头公路港",
              "updateDate": "2017-06-06 17:09:43.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "941",
              "childrenList": "",
              "createDate": "2017-06-06 17:09:19.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "415",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:09:19.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U17060617090169RTHHF",
              "unitLevel": "3",
              "unitName": "北京公路港",
              "updateDate": "2017-06-06 17:09:19.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "943",
              "childrenList": "",
              "createDate": "2017-06-06 17:09:31.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "415",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:09:31.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061709028DZS8F6",
              "unitLevel": "3",
              "unitName": "石家庄项目组",
              "updateDate": "2017-06-06 17:09:31.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "951",
              "childrenList": "",
              "createDate": "2017-06-06 17:10:14.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "415",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:10:14.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061710012KMX5EQ",
              "unitLevel": "3",
              "unitName": "太原公路港",
              "updateDate": "2017-06-06 17:10:14.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "953",
              "childrenList": "",
              "createDate": "2017-06-06 17:10:24.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "415",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:10:24.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061710022DFNSIQ",
              "unitLevel": "3",
              "unitName": "天津港公路港",
              "updateDate": "2017-06-06 17:10:24.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "783",
              "childrenList": "",
              "createDate": "2017-03-01 10:32:56.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "415",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-03-01 10:32:56.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1703011032048gjg5H0",
              "unitLevel": "3",
              "unitName": "华北公路港",
              "updateDate": "2017-03-01 10:32:56.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "947",
              "childrenList": "",
              "createDate": "2017-06-06 17:09:54.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "415",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:09:54.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061709051S1WV64",
              "unitLevel": "3",
              "unitName": "天津公路港",
              "updateDate": "2017-06-06 17:09:54.0",
              "updateMan": "15562\/冯佳佳"
            }],
            "createDate": "2017-02-23 09:21:07.0",
            "createMan": "13006\/张臣",
            "description": "",
            "parentNode": "411",
            "productId": "myportal",
            "productType": "skynet",
            "rank": "",
            "stampDate": "2017-02-23 09:21:07.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "",
            "unitCode": "U1702230920030tx7pHk",
            "unitLevel": "2",
            "unitName": "华北大区",
            "updateDate": "2017-02-23 09:21:07.0",
            "updateMan": "13006\/张臣"
          }, {
            "aclUnitId": "413",
            "childrenList": [{
              "aclUnitId": "937",
              "childrenList": "",
              "createDate": "2017-06-06 17:08:23.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "413",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:08:23.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061708014XZEV4Y",
              "unitLevel": "3",
              "unitName": "宁波公路港",
              "updateDate": "2017-06-06 17:08:23.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "939",
              "childrenList": "",
              "createDate": "2017-06-06 17:08:37.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "413",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:08:37.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061708034AF58CV",
              "unitLevel": "3",
              "unitName": "温州公路港",
              "updateDate": "2017-06-06 17:08:37.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "933",
              "childrenList": "",
              "createDate": "2017-06-06 17:07:56.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "413",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:07:56.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061707053ZRRQQH",
              "unitLevel": "3",
              "unitName": "汇通公路港",
              "updateDate": "2017-06-06 17:07:56.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "781",
              "childrenList": "",
              "createDate": "2017-03-01 10:32:44.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "413",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-03-01 10:32:44.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1703011032035BE0o0q",
              "unitLevel": "3",
              "unitName": "杭州公路港",
              "updateDate": "2017-03-01 10:32:44.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "785",
              "childrenList": "",
              "createDate": "2017-03-01 15:27:00.0",
              "createMan": "15832\/张园庆",
              "description": "",
              "parentNode": "413",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-03-01 15:27:00.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1703011526037pB23he",
              "unitLevel": "3",
              "unitName": "金华公路港",
              "updateDate": "2017-03-01 15:27:00.0",
              "updateMan": "15832\/张园庆"
            }, {
              "aclUnitId": "787",
              "childrenList": "",
              "createDate": "2017-03-01 15:27:14.0",
              "createMan": "15832\/张园庆",
              "description": "",
              "parentNode": "413",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-03-01 15:27:14.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U170301152700635RIet",
              "unitLevel": "3",
              "unitName": "衢州公路港",
              "updateDate": "2017-03-01 15:27:14.0",
              "updateMan": "15832\/张园庆"
            }, {
              "aclUnitId": "935",
              "childrenList": "",
              "createDate": "2017-06-06 17:08:09.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "413",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:08:09.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U17060617080015GWITA",
              "unitLevel": "3",
              "unitName": "富阳公路港",
              "updateDate": "2017-06-06 17:08:09.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "931",
              "childrenList": "",
              "createDate": "2017-06-06 17:07:45.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "413",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:07:45.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061707039ADYGDW",
              "unitLevel": "3",
              "unitName": "台州公路港",
              "updateDate": "2017-06-06 17:07:45.0",
              "updateMan": "15562\/冯佳佳"
            }],
            "createDate": "2017-02-23 09:20:24.0",
            "createMan": "13006\/张臣",
            "description": "",
            "parentNode": "411",
            "productId": "myportal",
            "productType": "skynet",
            "rank": "",
            "stampDate": "2017-02-23 09:20:24.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "",
            "unitCode": "U1702230920007H3fmP2",
            "unitLevel": "2",
            "unitName": "浙江大区",
            "updateDate": "2017-02-23 09:20:24.0",
            "updateMan": "13006\/张臣"
          }, {
            "aclUnitId": "1218",
            "childrenList": [{
              "aclUnitId": "1220",
              "childrenList": "",
              "createDate": "2017-07-31 16:03:51.0",
              "createMan": "15585\/邱俊强",
              "description": "",
              "parentNode": "1218",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-07-31 16:03:51.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1707311603041XP61KQ",
              "unitLevel": "3",
              "unitName": "遵义公路港",
              "updateDate": "2017-07-31 16:03:51.0",
              "updateMan": "15585\/邱俊强"
            }, {
              "aclUnitId": "1222",
              "childrenList": "",
              "createDate": "2017-07-31 16:04:09.0",
              "createMan": "15585\/邱俊强",
              "description": "",
              "parentNode": "1218",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-07-31 16:04:09.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1707311603055METL15",
              "unitLevel": "3",
              "unitName": "贵阳公路港",
              "updateDate": "2017-07-31 16:04:09.0",
              "updateMan": "15585\/邱俊强"
            }],
            "createDate": "2017-07-31 16:03:37.0",
            "createMan": "15585\/邱俊强",
            "description": "",
            "parentNode": "411",
            "productId": "myportal",
            "productType": "skynet",
            "rank": "",
            "stampDate": "2017-07-31 16:03:37.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "",
            "unitCode": "U17073116030333LVSZ3",
            "unitLevel": "2",
            "unitName": "西南大区",
            "updateDate": "2017-07-31 16:03:37.0",
            "updateMan": "15585\/邱俊强"
          }, {
            "aclUnitId": "955",
            "childrenList": [{
              "aclUnitId": "965",
              "childrenList": "",
              "createDate": "2017-06-06 17:37:04.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "955",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:37:04.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061736055MDJRAF",
              "unitLevel": "3",
              "unitName": "无锡公路港",
              "updateDate": "2017-06-06 17:37:04.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "959",
              "childrenList": "",
              "createDate": "2017-06-06 17:36:27.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "955",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:36:27.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061736019GDAFMA",
              "unitLevel": "3",
              "unitName": "宿迁公路港",
              "updateDate": "2017-06-06 17:36:27.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "969",
              "childrenList": "",
              "createDate": "2017-06-06 17:37:28.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "955",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:37:28.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061737019AJOSSW",
              "unitLevel": "3",
              "unitName": "合肥公路港",
              "updateDate": "2017-06-06 17:37:28.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "967",
              "childrenList": "",
              "createDate": "2017-06-06 17:37:15.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "955",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:37:15.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061737007DL7ME4",
              "unitLevel": "3",
              "unitName": "淮安公路港",
              "updateDate": "2017-06-06 17:37:15.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "957",
              "childrenList": "",
              "createDate": "2017-06-06 17:36:15.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "955",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:36:15.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061736006YBMZL8",
              "unitLevel": "3",
              "unitName": "淮北公路港",
              "updateDate": "2017-06-06 17:36:15.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "971",
              "childrenList": "",
              "createDate": "2017-06-06 17:37:40.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "955",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:37:40.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061737033LKZ06M",
              "unitLevel": "3",
              "unitName": "六安公路港",
              "updateDate": "2017-06-06 17:37:40.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "961",
              "childrenList": "",
              "createDate": "2017-06-06 17:36:40.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "955",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:36:40.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061736032TCEAAB",
              "unitLevel": "3",
              "unitName": "苏州公路港",
              "updateDate": "2017-06-06 17:36:40.0",
              "updateMan": "15562\/冯佳佳"
            }, {
              "aclUnitId": "963",
              "childrenList": "",
              "createDate": "2017-06-06 17:36:51.0",
              "createMan": "15562\/冯佳佳",
              "description": "",
              "parentNode": "955",
              "productId": "myportal",
              "productType": "skynet",
              "rank": "",
              "stampDate": "2017-06-06 17:36:51.0",
              "status": "Effective",
              "statusEnumCn": "有效",
              "statusEnumName": "Effective",
              "type": "",
              "unitCode": "U1706061736044MDN1K6",
              "unitLevel": "3",
              "unitName": "上海公路港",
              "updateDate": "2017-06-06 17:36:51.0",
              "updateMan": "15562\/冯佳佳"
            }],
            "createDate": "2017-06-06 17:36:03.0",
            "createMan": "15562\/冯佳佳",
            "description": "",
            "parentNode": "411",
            "productId": "myportal",
            "productType": "skynet",
            "rank": "",
            "stampDate": "2017-06-06 17:36:03.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "",
            "unitCode": "U1706061735035N5J7O6",
            "unitLevel": "2",
            "unitName": "华东大区",
            "updateDate": "2017-06-06 17:36:03.0",
            "updateMan": "15562\/冯佳佳"
          }],
          "createDate": "2017-02-23 09:20:01.0",
          "createMan": "13006\/张臣",
          "description": "",
          "parentNode": "185",
          "productId": "myportal",
          "productType": "skynet",
          "rank": "",
          "stampDate": "2017-02-23 09:20:01.0",
          "status": "Effective",
          "statusEnumCn": "有效",
          "statusEnumName": "Effective",
          "type": "",
          "unitCode": "U1702230919038tXh4pJ",
          "unitLevel": "1",
          "unitName": "传化集团",
          "updateDate": "2017-02-23 09:20:01.0",
          "updateMan": "13006\/张臣"
        }]
      });
    }, 500);
  },

  "POST /skynet/salesmansView/insertSalesmans": done(),

  "POST /skynet/welcome/queryUserName": (req, res) => {
    setTimeout(() => {
      res.json({
        result: "success",
        data: "Jack",
        msg: ""
      });
    }, 500);
  },

  "POST /skynet/opensso/logout": (req, res) => {
    setTimeout(() => {
      res.json({
        result: "success",
        data: "",
        msg: ""
      });
    }, 500);
  },

  'POST /skynet/salesmansAndPartyView/querysalesmansAndPartyList': (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "查询成功",
        "count": "3302",
        "data": [{
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 08:59:02.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778719",
            "partyName": "1704140859028820",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6861",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 08:53:24.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778645",
            "partyName": "1704140853247952",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6859",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 08:50:36.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778641",
            "partyName": "1704140850354260",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6857",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 08:42:06.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778603",
            "partyName": "1704140842068123",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6855",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 08:28:27.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778565",
            "partyName": "1704140828262114",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6853",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 08:28:19.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3036091",
            "partyName": "1612201535103295",
            "partyType": "个人",
            "permissionStatus": "已通过",
            "phoneNumber": "",
            "realName": "王茂阳",
            "role": "承运商",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6851",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 08:27:11.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778559",
            "partyName": "1704140827113556",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6849",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 08:24:26.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778551",
            "partyName": "1704140824263377",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6847",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 08:16:49.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778539",
            "partyName": "1704140816488188",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6845",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 08:16:06.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "600763",
            "partyName": "150108143756",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "孙阿标",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6843",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 08:14:05.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778533",
            "partyName": "1704140814053722",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6841",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 08:00:42.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "2376523",
            "partyName": "160818108546",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "钟文星",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6839",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 06:43:33.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "205029",
            "partyName": "565600039392",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "戚德宇",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6837",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 05:47:10.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778447",
            "partyName": "1704140547091511",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6835",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 02:53:47.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778439",
            "partyName": "1704140253464482",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6833",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 02:51:40.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778437",
            "partyName": "1704140248394481",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6831",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 02:03:30.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778431",
            "partyName": "1704140203292328",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "陈玲",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6829",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-14 00:20:08.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "1685579",
            "partyName": "160218122151",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "祝凌涛",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6827",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 23:47:58.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778405",
            "partyName": "1704132347151835",
            "partyType": "个人",
            "permissionStatus": "已通过",
            "phoneNumber": "",
            "realName": "",
            "role": "承运商",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6825",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 23:32:51.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778401",
            "partyName": "1704132332519839",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6823",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 23:21:15.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778395",
            "partyName": "1704132321159038",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6821",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 22:44:32.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778359",
            "partyName": "1704132244323933",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6819",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 22:25:23.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778349",
            "partyName": "1704132225231591",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6817",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 22:23:47.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "测距谢谢你的那你呢想难道你想你呢",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778347",
            "partyName": "1704132223473525",
            "partyType": "企业",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6815",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 22:19:51.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778217",
            "partyName": "1704132219516802",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6813",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 22:19:31.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3778203",
            "partyName": "1704132219312328",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6811",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 22:12:20.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777853",
            "partyName": "1704132211423648",
            "partyType": "个人",
            "permissionStatus": "已通过",
            "phoneNumber": "",
            "realName": "",
            "role": "承运商",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6809",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 21:38:35.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777807",
            "partyName": "1704132138352244",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "张先生",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6807",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 21:35:42.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "该货主未认证",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777803",
            "partyName": "1704132135423811",
            "partyType": "企业",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6805",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 21:22:17.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "常州全友货运有限公司",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777787",
            "partyName": "1704132122173055",
            "partyType": "企业",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6803",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 21:16:04.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777777",
            "partyName": "1704132116044193",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6801",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 21:05:41.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3709559",
            "partyName": "1704042003242169",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "邓腾飞",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6799",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 20:30:32.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777699",
            "partyName": "1704132030327489",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6797",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 20:14:15.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777673",
            "partyName": "1704132013503607",
            "partyType": "个人",
            "permissionStatus": "已通过",
            "phoneNumber": "",
            "realName": "",
            "role": "承运商",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6795",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 20:02:33.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777643",
            "partyName": "1704132002336217",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6793",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 19:57:21.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777635",
            "partyName": "1704131957211135",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6791",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 19:52:05.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "重庆市辉谦建材有限公司",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777625",
            "partyName": "1704131952054542",
            "partyType": "企业",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6789",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 19:35:56.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777593",
            "partyName": "LIUHUI_SAN",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6787",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 19:33:54.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3740857",
            "partyName": "1704081027309685",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "郭德贤",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6785",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 19:18:31.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "531965",
            "partyName": "141212084810",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "于爱良",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6783",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 19:16:15.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777557",
            "partyName": "1704131916156270",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "张超",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6781",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 19:14:13.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777549",
            "partyName": "1704131914136385",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6779",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 19:12:24.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3673634",
            "partyName": "1703301634087381",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6777",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 18:16:08.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "成都市准时达供应链管理有限公司",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3436657",
            "partyName": "1703171433058364",
            "partyType": "企业",
            "permissionStatus": "已通过",
            "phoneNumber": "",
            "realName": "",
            "role": "承运商",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6775",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 18:15:36.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777211",
            "partyName": "1704131815354110",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6773",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 18:14:28.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777207",
            "partyName": "1704131814282140",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6771",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 18:13:24.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777199",
            "partyName": "1704131813233517",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "刘辉",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6769",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 17:50:47.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777043",
            "partyName": "1704131750474310",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6767",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 17:49:38.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "北京好路福达运输有限公司",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3777029",
            "partyName": "1704131749381305",
            "partyType": "企业",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6765",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 17:45:48.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "2144885",
            "partyName": "160706096336",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "叶竞文",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6763",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 17:31:26.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776911",
            "partyName": "1704131731269193",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6761",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 17:30:03.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776891",
            "partyName": "1704131730024455",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6759",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 17:24:27.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776841",
            "partyName": "1704131724274699",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6757",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 17:15:41.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776761",
            "partyName": "1704131715414079",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6755",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 17:15:19.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776757",
            "partyName": "1704131715196252",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6753",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 17:09:49.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "该货主未认证",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776721",
            "partyName": "1704131709489124",
            "partyType": "企业",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6751",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 17:08:38.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776709",
            "partyName": "1704131708381453",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6749",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 17:02:06.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776627",
            "partyName": "1704131702013566",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "1",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6747",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 17:01:20.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776621",
            "partyName": "1704131701207719",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "金曙光",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6745",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:58:56.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776613",
            "partyName": "1704131658564267",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6743",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:57:45.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "975749",
            "partyName": "150713173273",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "李桂云",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6741",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:54:04.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776551",
            "partyName": "1704131654043351",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6739",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:50:58.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776447",
            "partyName": "1704131650586438",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6737",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:50:20.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776445",
            "partyName": "1704131650206351",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6735",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:46:06.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "该货主未认证",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776409",
            "partyName": "1704131646067235",
            "partyType": "企业",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6733",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:41:38.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776371",
            "partyName": "1704131641382120",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6731",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:40:15.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "成都捷链达物流有限公司",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776357",
            "partyName": "1704131640151031",
            "partyType": "企业",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6729",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:39:49.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776351",
            "partyName": "1704131639494848",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6727",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:38:13.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776347",
            "partyName": "1704131638139801",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6725",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:36:41.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "苏州市海兴货运代理有限公司",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "57104",
            "partyName": "SZL201",
            "partyType": "企业",
            "permissionStatus": "已通过",
            "phoneNumber": "",
            "realName": "",
            "role": "承运商",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6723",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:31:17.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776293",
            "partyName": "1704131630294418",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6721",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:30:41.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "成都浩宁物流有限责任公司",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776283",
            "partyName": "浩宁物流公司",
            "partyType": "企业",
            "permissionStatus": "已通过",
            "phoneNumber": "",
            "realName": "",
            "role": "承运商",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6719",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:29:44.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "苏州北新物流有限公司",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "56943",
            "partyName": "SZA343",
            "partyType": "企业",
            "permissionStatus": "已通过",
            "phoneNumber": "",
            "realName": "",
            "role": "承运商",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6717",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:27:07.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "北京科锐",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776257",
            "partyName": "遗忘的bingxue_1025",
            "partyType": "企业",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6715",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:21:50.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776225",
            "partyName": "1704131621509557",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6713",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:19:01.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776215",
            "partyName": "1704131619011473",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6711",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:17:55.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "贵州双荣易达物流有限公司",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776209",
            "partyName": "1704131617543623",
            "partyType": "企业",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6709",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:17:40.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "1522249",
            "partyName": "151106108001",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6707",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:17:20.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776183",
            "partyName": "1704131616066104",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6705",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:16:28.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776199",
            "partyName": "1704131616287369",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6703",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:14:31.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3308775",
            "partyName": "1703011959427552",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "王丽丽",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6701",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:13:29.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3776061",
            "partyName": "1704131613297403",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6699",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:12:38.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "成都兴捷安包装材料有限公司",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775997",
            "partyName": "1704131611595886",
            "partyType": "企业",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6697",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:11:20.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775963",
            "partyName": "1704131611206472",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6695",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:08:29.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775831",
            "partyName": "1704131608298636",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6693",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:08:12.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775815",
            "partyName": "1704131608124764",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6691",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:07:59.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775797",
            "partyName": "1704131607583969",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6689",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:05:58.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775681",
            "partyName": "1704131605581278",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6687",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:05:18.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775641",
            "partyName": "1704131605176893",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6685",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 16:01:37.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775599",
            "partyName": "1704131601377798",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6683",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 15:59:43.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775581",
            "partyName": "1704131559434563",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6681",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 15:55:49.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775549",
            "partyName": "1704131555499079",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6679",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 15:53:49.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "吉士通国际物流（苏州）有限公司",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "1982271",
            "partyName": "jishitong",
            "partyType": "企业",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6677",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 15:53:08.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775535",
            "partyName": "1704131553082975",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6675",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 15:53:00.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775531",
            "partyName": "1704131553003227",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "陈享英",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6673",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 15:52:57.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775529",
            "partyName": "1704131552561372",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6671",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 15:51:37.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775519",
            "partyName": "1704131551339226",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "冯秋梅",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6669",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 15:50:12.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775509",
            "partyName": "1704131550121208",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6667",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 15:49:40.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3506257",
            "partyName": "1703211123337858",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "边钢",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6665",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          },
          {
            "equalAndLessThanInputDate": "",
            "equalAndMoreThanInputDate": "",
            "inputDate": "2017-04-13 15:46:32.0",
            "isDelete": "",
            "lessThanInputDate": "",
            "mobileNumber": "",
            "moreThanInputDate": "",
            "orderByClause": "",
            "organization": "",
            "page": "",
            "pageNum": "1",
            "pageSize": "10",
            "partyId": "3775455",
            "partyName": "1704131546326368",
            "partyType": "个人",
            "permissionStatus": "",
            "phoneNumber": "",
            "realName": "",
            "role": "货主",
            "salesmanName": "",
            "salesmanNumber": "",
            "salesmansAndPartyId": "6663",
            "salesmansId": "",
            "startNum": "0",
            "updateMan": "BOSS系统录入",
            "updateTime": "",
            "wayPort": "未知"
          }
        ]
      });
    });
  },

 
  "POST /skynet/welcome/menuInfonew": (req, res) => {
    setTimeout(() => {
      res.json(pD);
    }, 500);
  },
  'POST /skynet/statistics/TransportStatsSys_Region_M/commonqueryParty': (req, res) => {
    res.json({
      "message": null,
      "code": null,
      "success": true,
      "totalCount": 0,
      "module": "当前查询条件下，共查询到到承运商BLUE139BLUE个、分拨中心BLUE0BLUE个、路港驿站BLUE9BLUE个、承运商网点BLUE287BLUE个， 供参考。",
      "models": {},
      "resultMessageEnum": null
    })
  },
  'POST /skynet/statistics/dropdown/carType': (req, res) => {
    res.json({
      "success": true,
      "totalCount": 0,
      "module": ["9.6-17.6米", "商务车", "9.6米以下", "17.6米以上"],
      "models": {}
    })
  },
  'POST /skynet/statistics/dropdown/feeType': (req, res) => {
    res.json({
      "success": true,
      "totalCount": 0,
      "module": ["hhhh", "dsad商务车", "cc9.6米以下", "dad17.6米以上"],
      "models": {}
    })
  },

  "POST /skynet/statistics/JobShippingStatusStats*": (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": {
          "pageKey": "jobShippingStatusStatsId",
          "partyName": "冯佳佳",
          "partyId": "15562",
          "dataCount": 55,
          "queryInfoVO": {
            "queryVOList": [{
                "displayName": "大区",
                "name": "region",
                "valueObjectList": null
              },
              {
                "displayName": "公路港",
                "name": "wayport",
                "valueObjectList": null
              },
              {
                "displayName": "订单开单日期",
                "name": "dataTime",
                "valueObjectList": null
              },
              {
                "displayName": "总订单数量/个",
                "name": "orderNum",
                "valueObjectList": null
              },
              {
                "displayName": "已配载订单数/个",
                "name": "stowageNum",
                "valueObjectList": null
              },
              {
                "displayName": "已发车订单数/个",
                "name": "departureNum",
                "valueObjectList": null
              },
              {
                "displayName": "已到货订单数/个",
                "name": "arrivalNum",
                "valueObjectList": null
              },
              {
                "displayName": "已签收订单数/个",
                "name": "signNum",
                "valueObjectList": null
              },
              {
                "displayName": "中转外包订单数/个",
                "name": "transferNum",
                "valueObjectList": null
              },
              {
                "displayName": "订单转化率/%€总订单转化率/%",
                "name": "shippingNumRate",
                "valueObjectList": null
              },
              {
                "displayName": "订单转化率/%€第1日订单转化率/%",
                "name": "shippingNum1Rate",
                "valueObjectList": null
              },
              {
                "displayName": "订单转化率/%€第2日订单转化率/%",
                "name": "shippingNum2Rate",
                "valueObjectList": null
              },
              {
                "displayName": "订单转化率/%€第3日订单转化率/%",
                "name": "shippingNum3Rate",
                "valueObjectList": null
              },
              {
                "displayName": "订单转化率/%€3日以上订单转化率/%",
                "name": "shippingNumOtRate",
                "valueObjectList": null
              },
              {
                "displayName": "配载率/%€总配载率/%",
                "name": "stowageNumRate",
                "valueObjectList": null
              },
              {
                "displayName": "配载率/%€第1日配载率/%",
                "name": "stowageNum1Rate",
                "valueObjectList": null
              },
              {
                "displayName": "配载率/%€第2日配载率/%",
                "name": "stowageNum2Rate",
                "valueObjectList": null
              },
              {
                "displayName": "配载率/%€第3日配载率/%",
                "name": "stowageNum3Rate",
                "valueObjectList": null
              },
              {
                "displayName": "配载率/%€3日以上配载率/%",
                "name": "stowageNumOtRate",
                "valueObjectList": null
              },
              {
                "displayName": "发车率/%€总发车率/%",
                "name": "departureNumRate",
                "valueObjectList": null
              },
              {
                "displayName": "发车率/%€第1日发车率/%",
                "name": "departureNum1Rate",
                "valueObjectList": null
              },
              {
                "displayName": "发车率/%€第2日发车率/%",
                "name": "departureNum2Rate",
                "valueObjectList": null
              },
              {
                "displayName": "发车率/%€第3日发车率/%",
                "name": "departureNum3Rate",
                "valueObjectList": null
              },
              {
                "displayName": "发车率/%€3日以上发车率/%",
                "name": "departureNumOtRate",
                "valueObjectList": null
              },
              {
                "displayName": "到货率/%€总到货率/%",
                "name": "arrivalNumRate",
                "valueObjectList": null
              },
              {
                "displayName": "到货率/%€第1日到货率/%",
                "name": "arrivalNum1Rate",
                "valueObjectList": null
              },
              {
                "displayName": "到货率/%€第2日到货率/%",
                "name": "arrivalNum2Rate",
                "valueObjectList": null
              },
              {
                "displayName": "到货率/%€第3日到货率/%",
                "name": "arrivalNum3Rate",
                "valueObjectList": null
              },
              {
                "displayName": "到货率/%€第4日到货率/%",
                "name": "arrivalNum4Rate",
                "valueObjectList": null
              },
              {
                "displayName": "到货率/%€第5日到货率/%",
                "name": "arrivalNum5Rate",
                "valueObjectList": null
              },
              {
                "displayName": "到货率/%€5日以上到货率/%",
                "name": "arrivalNumOtRate",
                "valueObjectList": null
              },
              {
                "displayName": "签收率/%€总签收率/%",
                "name": "signNumRate",
                "valueObjectList": null
              },
              {
                "displayName": "签收率/%€第1日签收率/%",
                "name": "signNum1Rate",
                "valueObjectList": null
              },
              {
                "displayName": "签收率/%€第2日签收率/%",
                "name": "signNum2Rate",
                "valueObjectList": null
              },
              {
                "displayName": "签收率/%€第3日签收率/%",
                "name": "signNum3Rate",
                "valueObjectList": null
              },
              {
                "displayName": "签收率/%€第4日签收率/%",
                "name": "signNum4Rate",
                "valueObjectList": null
              },
              {
                "displayName": "签收率/%€第5日签收率/%",
                "name": "signNum5Rate",
                "valueObjectList": null
              },
              {
                "displayName": "签收率/%€5日以上签收率/%",
                "name": "signNumOtRate",
                "valueObjectList": null
              }
            ],
            "authorityList": [{
                "aclUnitId": 415,
                "unitCode": "U1702230920030tx7pHk",
                "unitName": "华北大区",
                "type": "",
                "parentNode": 411,
                "unitLevel": 2,
                "rank": null,
                "productId": "myportal",
                "productType": "skynet",
                "description": "",
                "createDate": "2017-02-23 09:21:07.0",
                "createMan": "13006/张臣",
                "updateDate": "2017-02-23 09:21:07.0",
                "updateMan": "13006/张臣",
                "status": "Effective",
                "stampDate": "2017-02-23 09:21:07.0",
                "childrenList": [{
                    "aclUnitId": 943,
                    "unitCode": "U1706061709028DZS8F6",
                    "unitName": "石家庄项目组",
                    "type": "",
                    "parentNode": 415,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:09:31.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:09:31.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:09:31.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 947,
                    "unitCode": "U1706061709051S1WV64",
                    "unitName": "天津公路港",
                    "type": "",
                    "parentNode": 415,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:09:54.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:09:54.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:09:54.0",
                    "childrenList": null
                  }
                ]
              },
              {
                "aclUnitId": 973,
                "unitCode": "U1706061738019ZLYLZY",
                "unitName": "山东大区",
                "type": "",
                "parentNode": 411,
                "unitLevel": 2,
                "rank": null,
                "productId": "myportal",
                "productType": "skynet",
                "description": "",
                "createDate": "2017-06-06 17:38:21.0",
                "createMan": "15562/冯佳佳",
                "updateDate": "2017-06-06 17:38:21.0",
                "updateMan": "15562/冯佳佳",
                "status": "Effective",
                "stampDate": "2017-06-06 17:38:21.0",
                "childrenList": [{
                  "aclUnitId": 979,
                  "unitCode": "U1706061738048VIPGA5",
                  "unitName": "菏泽公路港",
                  "type": "",
                  "parentNode": 973,
                  "unitLevel": 3,
                  "rank": null,
                  "productId": "myportal",
                  "productType": "skynet",
                  "description": "",
                  "createDate": "2017-06-06 17:39:01.0",
                  "createMan": "15562/冯佳佳",
                  "updateDate": "2017-06-06 17:39:01.0",
                  "updateMan": "15562/冯佳佳",
                  "status": "Effective",
                  "stampDate": "2017-06-06 17:39:01.0",
                  "childrenList": null
                }]
              },
              {
                "aclUnitId": 413,
                "unitCode": "U1702230920007H3fmP2",
                "unitName": "浙江大区",
                "type": "",
                "parentNode": 411,
                "unitLevel": 2,
                "rank": null,
                "productId": "myportal",
                "productType": "skynet",
                "description": "",
                "createDate": "2017-02-23 09:20:24.0",
                "createMan": "13006/张臣",
                "updateDate": "2017-02-23 09:20:24.0",
                "updateMan": "13006/张臣",
                "status": "Effective",
                "stampDate": "2017-02-23 09:20:24.0",
                "childrenList": [{
                    "aclUnitId": 939,
                    "unitCode": "U1706061708034AF58CV",
                    "unitName": "温州公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:08:37.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:08:37.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:08:37.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 931,
                    "unitCode": "U1706061707039ADYGDW",
                    "unitName": "台州公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:07:45.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:07:45.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:07:45.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 937,
                    "unitCode": "U1706061708014XZEV4Y",
                    "unitName": "宁波公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:08:23.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:08:23.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:08:23.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 935,
                    "unitCode": "U17060617080015GWITA",
                    "unitName": "富阳公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:08:09.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:08:09.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:08:09.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 787,
                    "unitCode": "U170301152700635RIet",
                    "unitName": "衢州公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-03-01 15:27:14.0",
                    "createMan": "15832/张园庆",
                    "updateDate": "2017-03-01 15:27:14.0",
                    "updateMan": "15832/张园庆",
                    "status": "Effective",
                    "stampDate": "2017-03-01 15:27:14.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 785,
                    "unitCode": "U1703011526037pB23he",
                    "unitName": "金华公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-03-01 15:27:00.0",
                    "createMan": "15832/张园庆",
                    "updateDate": "2017-03-01 15:27:00.0",
                    "updateMan": "15832/张园庆",
                    "status": "Effective",
                    "stampDate": "2017-03-01 15:27:00.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 781,
                    "unitCode": "U1703011032035BE0o0q",
                    "unitName": "杭州公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-03-01 10:32:44.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-03-01 10:32:44.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-03-01 10:32:44.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 933,
                    "unitCode": "U1706061707053ZRRQQH",
                    "unitName": "汇通公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:07:56.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:07:56.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:07:56.0",
                    "childrenList": null
                  }
                ]
              }
            ]
          },
          "pageName": "运输效率公路港天统计",
          "columnList": [{
              "displayId": 123123719,
              "pageViewId": 92,
              "columnName": "region",
              "tableColumnName": "region",
              "displayName": "大区",
              "formula": "",
              "remark": "",
              "dataType": "CHARS",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 1,
              "orderAble": "YES",
              "unit": "",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123721,
              "pageViewId": 92,
              "columnName": "wayport",
              "tableColumnName": "wayport",
              "displayName": "公路港",
              "formula": "",
              "remark": "",
              "dataType": "CHARS",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 2,
              "orderAble": "YES",
              "unit": "",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123723,
              "pageViewId": 92,
              "columnName": "dataTime",
              "tableColumnName": "dataTime",
              "displayName": "订单开单日期",
              "formula": "",
              "remark": "",
              "dataType": "DATE",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 3,
              "orderAble": "YES",
              "unit": "个",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123725,
              "pageViewId": 92,
              "columnName": "orderNum",
              "tableColumnName": "orderNum",
              "displayName": "总订单数量/个",
              "formula": "",
              "remark": "查询时间范围内以订单号为准统计订单开单数量及运单反写来的订单个数",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 4,
              "orderAble": "YES",
              "unit": "个",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123727,
              "pageViewId": 92,
              "columnName": "stowageNum",
              "tableColumnName": "stowageNum",
              "displayName": "已配载订单数/个",
              "formula": "",
              "remark": "查询时间范围内的订单中已转运单且运单状态为“已配载”的个数",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 5,
              "orderAble": "YES",
              "unit": "个",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123729,
              "pageViewId": 92,
              "columnName": "departureNum",
              "tableColumnName": "departureNum",
              "displayName": "已发车订单数/个",
              "formula": "",
              "remark": "查询时间范围内的订单中已转运单且运单状态为“运输中”的个数",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 6,
              "orderAble": "YES",
              "unit": "个",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123731,
              "pageViewId": 92,
              "columnName": "arrivalNum",
              "tableColumnName": "arrivalNum",
              "displayName": "已到货订单数/个",
              "formula": "",
              "remark": "查询时间范围内的订单中已转运单且运单状态为“已到货”的个数",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 7,
              "orderAble": "YES",
              "unit": "个",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123733,
              "pageViewId": 92,
              "columnName": "signNum",
              "tableColumnName": "signNum",
              "displayName": "已签收订单数/个",
              "formula": "",
              "remark": "查询时间范围内的订单中已转运单且运单状态为“已签收”的个数",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 8,
              "orderAble": "YES",
              "unit": "个",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123735,
              "pageViewId": 92,
              "columnName": "transferNum",
              "tableColumnName": "transferNum",
              "displayName": "中转外包订单数/个",
              "formula": "",
              "remark": "查询时间范围内的订单中已转运单且进行订单数量",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 9,
              "orderAble": "YES",
              "unit": "个",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123737,
              "pageViewId": 92,
              "columnName": "shippingNumRate",
              "tableColumnName": "shippingNumRate",
              "displayName": "订单转化率/%€总订单转化率/%",
              "formula": "",
              "remark": "总订单转化率：查询时间范围内按照订单单号（去重）后，订单转为运单的个数占总订单数的比率",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 10,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123739,
              "pageViewId": 92,
              "columnName": "shippingNum1Rate",
              "tableColumnName": "shippingNum1Rate",
              "displayName": "订单转化率/%€第1日订单转化率/%",
              "formula": "",
              "remark": "第1日订单转化率：查询范围内的订单，在开订单的当日就转运单的个数占总订单数的比率",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 11,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123741,
              "pageViewId": 92,
              "columnName": "shippingNum2Rate",
              "tableColumnName": "shippingNum2Rate",
              "displayName": "订单转化率/%€第2日订单转化率/%",
              "formula": "",
              "remark": "第2日订单转化率：查询范围内的订单，在开订单的第二天的24小时中转运单的个数除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 12,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123743,
              "pageViewId": 92,
              "columnName": "shippingNum3Rate",
              "tableColumnName": "shippingNum3Rate",
              "displayName": "订单转化率/%€第3日订单转化率/%",
              "formula": "",
              "remark": "第3日订单转化率：查询范围内的订单，在开订单的第三天的24小时中转运单的个数除以总订单的比率",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 13,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123745,
              "pageViewId": 92,
              "columnName": "shippingNumOtRate",
              "tableColumnName": "shippingNumOtRate",
              "displayName": "订单转化率/%€3日以上订单转化率/%",
              "formula": "",
              "remark": "3日及以上订单转化率：查询范围内的订单，在开订单的第四天及以上的时间转运单的个数除以总订单的比率",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 14,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123747,
              "pageViewId": 92,
              "columnName": "stowageNumRate",
              "tableColumnName": "stowageNumRate",
              "displayName": "配载率/%€总配载率/%",
              "formula": "",
              "remark": "总配载率：查询时间范围内按照订单单号（去重）后，运单状态为“已配载”的所有运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 15,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123749,
              "pageViewId": 92,
              "columnName": "stowageNum1Rate",
              "tableColumnName": "stowageNum1Rate",
              "displayName": "配载率/%€第1日配载率/%",
              "formula": "",
              "remark": "第1日配载率：查询范围内的订单，在开订单的当日就转运单且运单状态为“已配载”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 16,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123751,
              "pageViewId": 92,
              "columnName": "stowageNum2Rate",
              "tableColumnName": "stowageNum2Rate",
              "displayName": "配载率/%€第2日配载率/%",
              "formula": "",
              "remark": "第2日配载率：查询范围内的订单，在开订单的第二天的24小时中运单状态为“已配载”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 17,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123753,
              "pageViewId": 92,
              "columnName": "stowageNum3Rate",
              "tableColumnName": "stowageNum3Rate",
              "displayName": "配载率/%€第3日配载率/%",
              "formula": "",
              "remark": "第3日配载率：查询范围内的订单，在开订单的第三天的24小时中运单状态为“已配载”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 18,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123755,
              "pageViewId": 92,
              "columnName": "stowageNumOtRate",
              "tableColumnName": "stowageNumOtRate",
              "displayName": "配载率/%€3日以上配载率/%",
              "formula": "",
              "remark": "3日及以上配载率：查询范围内的订单，在开订单的第四天及以上的时间内中运单状态为“已配载”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 19,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123757,
              "pageViewId": 92,
              "columnName": "departureNumRate",
              "tableColumnName": "departureNumRate",
              "displayName": "发车率/%€总发车率/%",
              "formula": "",
              "remark": "总发车率：查询时间范围内按照订单单号（去重）后，运单状态为“运输中”的所有运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 20,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123759,
              "pageViewId": 92,
              "columnName": "departureNum1Rate",
              "tableColumnName": "departureNum1Rate",
              "displayName": "发车率/%€第1日发车率/%",
              "formula": "",
              "remark": "第1日发车率：查询范围内的订单，在开订单的当日就转运单且运单状态为“运输中”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 21,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123761,
              "pageViewId": 92,
              "columnName": "departureNum2Rate",
              "tableColumnName": "departureNum2Rate",
              "displayName": "发车率/%€第2日发车率/%",
              "formula": "",
              "remark": "第2日发车率：查询范围内的订单，在开订单的第二天的24小时中运单状态为“运输中”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 22,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123763,
              "pageViewId": 92,
              "columnName": "departureNum3Rate",
              "tableColumnName": "departureNum3Rate",
              "displayName": "发车率/%€第3日发车率/%",
              "formula": "",
              "remark": "第3日发车率：查询范围内的订单，在开订单的第三天的24小时中运单状态为“运输中”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 23,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123765,
              "pageViewId": 92,
              "columnName": "departureNumOtRate",
              "tableColumnName": "departureNumOtRate",
              "displayName": "发车率/%€3日以上发车率/%",
              "formula": "",
              "remark": "3日及以上发车率：查询范围内的订单，在开订单的第四天及以上的时间内中运单状态为“运输中”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 24,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123767,
              "pageViewId": 92,
              "columnName": "arrivalNumRate",
              "tableColumnName": "arrivalNumRate",
              "displayName": "到货率/%€总到货率/%",
              "formula": "",
              "remark": "总到货率：查询时间范围内按照订单单号（去重）后，运单状态为“已到货”的所有运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 25,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123769,
              "pageViewId": 92,
              "columnName": "arrivalNum1Rate",
              "tableColumnName": "arrivalNum1Rate",
              "displayName": "到货率/%€第1日到货率/%",
              "formula": "",
              "remark": "第1日到货率：查询范围内的订单，在开订单的当日就转运单且运单状态为“已到货”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 26,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123771,
              "pageViewId": 92,
              "columnName": "arrivalNum2Rate",
              "tableColumnName": "arrivalNum2Rate",
              "displayName": "到货率/%€第2日到货率/%",
              "formula": "",
              "remark": "第2日到货率：查询范围内的订单，在开订单的第二天的24小时中运单状态为“已到货”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 27,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123773,
              "pageViewId": 92,
              "columnName": "arrivalNum3Rate",
              "tableColumnName": "arrivalNum3Rate",
              "displayName": "到货率/%€第3日到货率/%",
              "formula": "",
              "remark": "第3日到货率：查询范围内的订单，在开订单的第三天的24小时中运单状态为“已到货”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 28,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123775,
              "pageViewId": 92,
              "columnName": "arrivalNum4Rate",
              "tableColumnName": "arrivalNum4Rate",
              "displayName": "到货率/%€第4日到货率/%",
              "formula": "",
              "remark": "第4日到货率：查询范围内的订单，在开订单的第四天的24小时中运单状态为“已到货”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 29,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123777,
              "pageViewId": 92,
              "columnName": "arrivalNum5Rate",
              "tableColumnName": "arrivalNum5Rate",
              "displayName": "到货率/%€第5日到货率/%",
              "formula": "",
              "remark": "第5日到货率：查询范围内的订单，在开订单的第五天的24小时中运单状态为“已到货”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 30,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123779,
              "pageViewId": 92,
              "columnName": "arrivalNumOtRate",
              "tableColumnName": "arrivalNumOtRate",
              "displayName": "到货率/%€5日以上到货率/%",
              "formula": "",
              "remark": "5日及以上到货率：查询范围内的订单，在开订单的第六天及以上的时间内中运单状态为“已到货”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 31,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123781,
              "pageViewId": 92,
              "columnName": "signNumRate",
              "tableColumnName": "signNumRate",
              "displayName": "签收率/%€总签收率/%",
              "formula": "",
              "remark": "总签收率：查询时间范围内按照订单单号（去重）后，运单状态为“已签收”的所有运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 32,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123783,
              "pageViewId": 92,
              "columnName": "signNum1Rate",
              "tableColumnName": "signNum1Rate",
              "displayName": "签收率/%€第1日签收率/%",
              "formula": "",
              "remark": "第1日签收率：查询范围内的订单，在开订单的当日就转运单且运单状态为“已签收”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 33,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123785,
              "pageViewId": 92,
              "columnName": "signNum2Rate",
              "tableColumnName": "signNum2Rate",
              "displayName": "签收率/%€第2日签收率/%",
              "formula": "",
              "remark": "第2日签收率：查询范围内的订单，在开订单的第二天的24小时中运单状态为“已签收”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 34,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123787,
              "pageViewId": 92,
              "columnName": "signNum3Rate",
              "tableColumnName": "signNum3Rate",
              "displayName": "签收率/%€第3日签收率/%",
              "formula": "",
              "remark": "第3日签收率：查询范围内的订单，在开订单的第三天的24小时中运单状态为“已签收”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 35,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123789,
              "pageViewId": 92,
              "columnName": "signNum4Rate",
              "tableColumnName": "signNum4Rate",
              "displayName": "签收率/%€第4日签收率/%",
              "formula": "",
              "remark": "第4日签收率：查询范围内的订单，在开订单的第四天的24小时中运单状态为“已签收”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 36,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123791,
              "pageViewId": 92,
              "columnName": "signNum5Rate",
              "tableColumnName": "signNum5Rate",
              "displayName": "签收率/%€第5日签收率/%",
              "formula": "",
              "remark": "第5日签收率：查询范围内的订单，在开订单的第五天的24小时中运单状态为“已签收”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 37,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123793,
              "pageViewId": 92,
              "columnName": "signNumOtRate",
              "tableColumnName": "signNumOtRate",
              "displayName": "签收率/%€5日以上签收率/%",
              "formula": "",
              "remark": "5日及以上签收率：查询范围内的订单，在开订单的第六天及以上的时间内中运单状态为“已签收”的运单数，除以总订单的比率；",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 38,
              "orderAble": "YES",
              "unit": "%",
              "inputDate": "Jun 20, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 20, 2017 10:10:10 AM"
            }
          ],
          "dataList": [{
              "region": "浙江大区",
              "stowageNumOtRate": 0.00,
              "arrivalNum4Rate": 0.00,
              "arrivalNumRate": 0.00,
              "signNum": 0,
              "arrivalNum5Rate": 0.00,
              "wayport": "金华公路港",
              "departureNum": 0,
              "shippingNum3Rate": 0.00,
              "stowageNum1Rate": 0.00,
              "jobShippingStatusStatsId": 41733,
              "signNum4Rate": 0.00,
              "stowageNumRate": 0.00,
              "signNum3Rate": 0.00,
              "departureNumRate": 0.00,
              "departureNum1Rate": 0.00,
              "signNum1Rate": 0.00,
              "arrivalNum2Rate": 0.00,
              "shippingNumRate": 100.00,
              "transferNum": 0,
              "stowageNum3Rate": 0.00,
              "signNum2Rate": 0.00,
              "signNumOtRate": 0.00,
              "stowageNum2Rate": 0.00,
              "arrivalNumOtRate": 0.00,
              "arrivalNum3Rate": 0.00,
              "stowageNum": 0,
              "orderNum": 1,
              "departureNum2Rate": 0.00,
              "departureNum3Rate": 0.00,
              "signNumRate": 0.00,
              "shippingNum1Rate": 100.00,
              "shippingNum2Rate": 0.00,
              "departureNumOtRate": 0.00,
              "signNum5Rate": 0.00,
              "arrivalNum1Rate": 0.00,
              "dataTime": "2017-06-01",
              "shippingNumOtRate": 0.00,
              "arrivalNum": 0
            },
            {
              "region": "浙江大区",
              "stowageNumOtRate": 0.00,
              "arrivalNum4Rate": 0.00,
              "arrivalNumRate": 0.00,
              "signNum": 0,
              "arrivalNum5Rate": 0.00,
              "wayport": "汇通公路港",
              "departureNum": 51,
              "shippingNum3Rate": 0.00,
              "stowageNum1Rate": 57.95,
              "jobShippingStatusStatsId": 41731,
              "signNum4Rate": 0.00,
              "stowageNumRate": 57.95,
              "signNum3Rate": 0.00,
              "departureNumRate": 57.95,
              "departureNum1Rate": 57.95,
              "signNum1Rate": 0.00,
              "arrivalNum2Rate": 0.00,
              "shippingNumRate": 100.00,
              "transferNum": 0,
              "stowageNum3Rate": 0.00,
              "signNum2Rate": 0.00,
              "signNumOtRate": 0.00,
              "stowageNum2Rate": 0.00,
              "arrivalNumOtRate": 0.00,
              "arrivalNum3Rate": 0.00,
              "stowageNum": 51,
              "orderNum": 88,
              "departureNum2Rate": 0.00,
              "departureNum3Rate": 0.00,
              "signNumRate": 0.00,
              "shippingNum1Rate": 100.00,
              "shippingNum2Rate": 0.00,
              "departureNumOtRate": 0.00,
              "signNum5Rate": 0.00,
              "arrivalNum1Rate": 0.00,
              "dataTime": "2017-06-01",
              "shippingNumOtRate": 0.00,
              "arrivalNum": 0
            },
            {
              "region": "浙江大区",
              "stowageNumOtRate": 0.00,
              "arrivalNum4Rate": 0.00,
              "arrivalNumRate": 0.00,
              "signNum": 0,
              "arrivalNum5Rate": 0.00,
              "wayport": "杭州公路港",
              "departureNum": 0,
              "shippingNum3Rate": 0.00,
              "stowageNum1Rate": 0.00,
              "jobShippingStatusStatsId": 41729,
              "signNum4Rate": 0.00,
              "stowageNumRate": 0.00,
              "signNum3Rate": 0.00,
              "departureNumRate": 0.00,
              "departureNum1Rate": 0.00,
              "signNum1Rate": 0.00,
              "arrivalNum2Rate": 0.00,
              "shippingNumRate": 97.14,
              "transferNum": 6,
              "stowageNum3Rate": 0.00,
              "signNum2Rate": 0.00,
              "signNumOtRate": 0.00,
              "stowageNum2Rate": 0.00,
              "arrivalNumOtRate": 0.00,
              "arrivalNum3Rate": 0.00,
              "stowageNum": 0,
              "orderNum": 35,
              "departureNum2Rate": 0.00,
              "departureNum3Rate": 0.00,
              "signNumRate": 0.00,
              "shippingNum1Rate": 97.14,
              "shippingNum2Rate": 0.00,
              "departureNumOtRate": 0.00,
              "signNum5Rate": 0.00,
              "arrivalNum1Rate": 0.00,
              "dataTime": "2017-06-01",
              "shippingNumOtRate": 0.00,
              "arrivalNum": 0
            },
            {
              "region": "浙江大区",
              "stowageNumOtRate": 0.00,
              "arrivalNum4Rate": 0.00,
              "arrivalNumRate": 0.00,
              "signNum": 0,
              "arrivalNum5Rate": 0.00,
              "wayport": "台州公路港",
              "departureNum": 1,
              "shippingNum3Rate": 0.00,
              "stowageNum1Rate": 100.00,
              "jobShippingStatusStatsId": 41727,
              "signNum4Rate": 0.00,
              "stowageNumRate": 100.00,
              "signNum3Rate": 0.00,
              "departureNumRate": 100.00,
              "departureNum1Rate": 100.00,
              "signNum1Rate": 0.00,
              "arrivalNum2Rate": 0.00,
              "shippingNumRate": 100.00,
              "transferNum": 0,
              "stowageNum3Rate": 0.00,
              "signNum2Rate": 0.00,
              "signNumOtRate": 0.00,
              "stowageNum2Rate": 0.00,
              "arrivalNumOtRate": 0.00,
              "arrivalNum3Rate": 0.00,
              "stowageNum": 1,
              "orderNum": 1,
              "departureNum2Rate": 0.00,
              "departureNum3Rate": 0.00,
              "signNumRate": 0.00,
              "shippingNum1Rate": 100.00,
              "shippingNum2Rate": 0.00,
              "departureNumOtRate": 0.00,
              "signNum5Rate": 0.00,
              "arrivalNum1Rate": 0.00,
              "dataTime": "2017-06-01",
              "shippingNumOtRate": 0.00,
              "arrivalNum": 0
            },
            {
              "region": "山东大区",
              "stowageNumOtRate": 0.00,
              "arrivalNum4Rate": 0.00,
              "arrivalNumRate": 100.00,
              "signNum": 0,
              "arrivalNum5Rate": 0.00,
              "wayport": "菏泽公路港",
              "departureNum": 20,
              "shippingNum3Rate": 0.00,
              "stowageNum1Rate": 100.00,
              "jobShippingStatusStatsId": 41721,
              "signNum4Rate": 0.00,
              "stowageNumRate": 100.00,
              "signNum3Rate": 0.00,
              "departureNumRate": 100.00,
              "departureNum1Rate": 100.00,
              "signNum1Rate": 0.00,
              "arrivalNum2Rate": 0.00,
              "shippingNumRate": 100.00,
              "transferNum": 0,
              "stowageNum3Rate": 0.00,
              "signNum2Rate": 0.00,
              "signNumOtRate": 0.00,
              "stowageNum2Rate": 0.00,
              "arrivalNumOtRate": 0.00,
              "arrivalNum3Rate": 0.00,
              "stowageNum": 20,
              "orderNum": 20,
              "departureNum2Rate": 0.00,
              "departureNum3Rate": 0.00,
              "signNumRate": 0.00,
              "shippingNum1Rate": 100.00,
              "shippingNum2Rate": 0.00,
              "departureNumOtRate": 0.00,
              "signNum5Rate": 0.00,
              "arrivalNum1Rate": 100.00,
              "dataTime": "2017-06-01",
              "shippingNumOtRate": 0.00,
              "arrivalNum": 20
            },
            {
              "region": "华北大区",
              "stowageNumOtRate": 0.00,
              "arrivalNum4Rate": 0.00,
              "arrivalNumRate": 82.35,
              "signNum": 0,
              "arrivalNum5Rate": 0.00,
              "wayport": "天津公路港",
              "departureNum": 29,
              "shippingNum3Rate": 0.00,
              "stowageNum1Rate": 85.29,
              "jobShippingStatusStatsId": 41715,
              "signNum4Rate": 0.00,
              "stowageNumRate": 85.29,
              "signNum3Rate": 0.00,
              "departureNumRate": 85.29,
              "departureNum1Rate": 85.29,
              "signNum1Rate": 0.00,
              "arrivalNum2Rate": 0.00,
              "shippingNumRate": 100.00,
              "transferNum": 0,
              "stowageNum3Rate": 0.00,
              "signNum2Rate": 0.00,
              "signNumOtRate": 0.00,
              "stowageNum2Rate": 0.00,
              "arrivalNumOtRate": 0.00,
              "arrivalNum3Rate": 0.00,
              "stowageNum": 29,
              "orderNum": 34,
              "departureNum2Rate": 0.00,
              "departureNum3Rate": 0.00,
              "signNumRate": 0.00,
              "shippingNum1Rate": 100.00,
              "shippingNum2Rate": 0.00,
              "departureNumOtRate": 0.00,
              "signNum5Rate": 0.00,
              "arrivalNum1Rate": 82.35,
              "dataTime": "2017-06-01",
              "shippingNumOtRate": 0.00,
              "arrivalNum": 28
            },
            {
              "region": "浙江大区",
              "stowageNumOtRate": 0.00,
              "arrivalNum4Rate": 0.00,
              "arrivalNumRate": 0.00,
              "signNum": 0,
              "arrivalNum5Rate": 0.00,
              "wayport": "金华公路港",
              "departureNum": 0,
              "shippingNum3Rate": 0.00,
              "stowageNum1Rate": 0.00,
              "jobShippingStatusStatsId": 41779,
              "signNum4Rate": 0.00,
              "stowageNumRate": 0.00,
              "signNum3Rate": 0.00,
              "departureNumRate": 0.00,
              "departureNum1Rate": 0.00,
              "signNum1Rate": 0.00,
              "arrivalNum2Rate": 0.00,
              "shippingNumRate": 100.00,
              "transferNum": 0,
              "stowageNum3Rate": 0.00,
              "signNum2Rate": 0.00,
              "signNumOtRate": 0.00,
              "stowageNum2Rate": 0.00,
              "arrivalNumOtRate": 0.00,
              "arrivalNum3Rate": 0.00,
              "stowageNum": 0,
              "orderNum": 4,
              "departureNum2Rate": 0.00,
              "departureNum3Rate": 0.00,
              "signNumRate": 0.00,
              "shippingNum1Rate": 100.00,
              "shippingNum2Rate": 0.00,
              "departureNumOtRate": 0.00,
              "signNum5Rate": 0.00,
              "arrivalNum1Rate": 0.00,
              "dataTime": "2017-06-02",
              "shippingNumOtRate": 0.00,
              "arrivalNum": 0
            },
            {
              "region": "浙江大区",
              "stowageNumOtRate": 0.00,
              "arrivalNum4Rate": 0.00,
              "arrivalNumRate": 0.00,
              "signNum": 0,
              "arrivalNum5Rate": 0.00,
              "wayport": "汇通公路港",
              "departureNum": 35,
              "shippingNum3Rate": 0.00,
              "stowageNum1Rate": 100.00,
              "jobShippingStatusStatsId": 41777,
              "signNum4Rate": 0.00,
              "stowageNumRate": 100.00,
              "signNum3Rate": 0.00,
              "departureNumRate": 100.00,
              "departureNum1Rate": 100.00,
              "signNum1Rate": 0.00,
              "arrivalNum2Rate": 0.00,
              "shippingNumRate": 100.00,
              "transferNum": 0,
              "stowageNum3Rate": 0.00,
              "signNum2Rate": 0.00,
              "signNumOtRate": 0.00,
              "stowageNum2Rate": 0.00,
              "arrivalNumOtRate": 0.00,
              "arrivalNum3Rate": 0.00,
              "stowageNum": 35,
              "orderNum": 35,
              "departureNum2Rate": 0.00,
              "departureNum3Rate": 0.00,
              "signNumRate": 0.00,
              "shippingNum1Rate": 100.00,
              "shippingNum2Rate": 0.00,
              "departureNumOtRate": 0.00,
              "signNum5Rate": 0.00,
              "arrivalNum1Rate": 0.00,
              "dataTime": "2017-06-02",
              "shippingNumOtRate": 0.00,
              "arrivalNum": 0
            },
            {
              "region": "浙江大区",
              "stowageNumOtRate": 0.00,
              "arrivalNum4Rate": 0.00,
              "arrivalNumRate": 13.46,
              "signNum": 0,
              "arrivalNum5Rate": 0.00,
              "wayport": "杭州公路港",
              "departureNum": 7,
              "shippingNum3Rate": 0.00,
              "stowageNum1Rate": 13.46,
              "jobShippingStatusStatsId": 41773,
              "signNum4Rate": 0.00,
              "stowageNumRate": 13.46,
              "signNum3Rate": 0.00,
              "departureNumRate": 13.46,
              "departureNum1Rate": 13.46,
              "signNum1Rate": 0.00,
              "arrivalNum2Rate": 0.00,
              "shippingNumRate": 98.08,
              "transferNum": 7,
              "stowageNum3Rate": 0.00,
              "signNum2Rate": 0.00,
              "signNumOtRate": 0.00,
              "stowageNum2Rate": 0.00,
              "arrivalNumOtRate": 0.00,
              "arrivalNum3Rate": 13.46,
              "stowageNum": 7,
              "orderNum": 52,
              "departureNum2Rate": 0.00,
              "departureNum3Rate": 0.00,
              "signNumRate": 0.00,
              "shippingNum1Rate": 98.08,
              "shippingNum2Rate": 0.00,
              "departureNumOtRate": 0.00,
              "signNum5Rate": 0.00,
              "arrivalNum1Rate": 0.00,
              "dataTime": "2017-06-02",
              "shippingNumOtRate": 0.00,
              "arrivalNum": 7
            },
            {
              "region": "山东大区",
              "stowageNumOtRate": 0.00,
              "arrivalNum4Rate": 0.00,
              "arrivalNumRate": 100.00,
              "signNum": 0,
              "arrivalNum5Rate": 0.00,
              "wayport": "菏泽公路港",
              "departureNum": 3,
              "shippingNum3Rate": 0.00,
              "stowageNum1Rate": 100.00,
              "jobShippingStatusStatsId": 41767,
              "signNum4Rate": 0.00,
              "stowageNumRate": 100.00,
              "signNum3Rate": 0.00,
              "departureNumRate": 100.00,
              "departureNum1Rate": 100.00,
              "signNum1Rate": 0.00,
              "arrivalNum2Rate": 0.00,
              "shippingNumRate": 100.00,
              "transferNum": 0,
              "stowageNum3Rate": 0.00,
              "signNum2Rate": 0.00,
              "signNumOtRate": 0.00,
              "stowageNum2Rate": 0.00,
              "arrivalNumOtRate": 0.00,
              "arrivalNum3Rate": 0.00,
              "stowageNum": 3,
              "orderNum": 3,
              "departureNum2Rate": 0.00,
              "departureNum3Rate": 0.00,
              "signNumRate": 0.00,
              "shippingNum1Rate": 100.00,
              "shippingNum2Rate": 0.00,
              "departureNumOtRate": 0.00,
              "signNum5Rate": 0.00,
              "arrivalNum1Rate": 100.00,
              "dataTime": "2017-06-02",
              "shippingNumOtRate": 0.00,
              "arrivalNum": 3
            }
          ],
          "sumData": {
            "stowageNumOtRate": 0.00,
            "arrivalNum4Rate": 0.00,
            "signNum": 0,
            "arrivalNumRate": 1490.68,
            "arrivalNum5Rate": 0.00,
            "shippingNum3Rate": 0.00,
            "departureNum": 982,
            "stowageNum1Rate": 2756.15,
            "signNum4Rate": 0.00,
            "stowageNumRate": 2910.05,
            "signNum3Rate": 0.00,
            "departureNumRate": 2910.05,
            "departureNum1Rate": 2756.15,
            "signNum1Rate": 0.00,
            "arrivalNum2Rate": 0.00,
            "shippingNumRate": 5482.90,
            "transferNum": 91,
            "stowageNum3Rate": 8.39,
            "signNum2Rate": 0.00,
            "signNumOtRate": 0.00,
            "stowageNum2Rate": 145.51,
            "arrivalNumOtRate": 0.00,
            "arrivalNum3Rate": 13.46,
            "stowageNum": 982,
            "orderNum": 1750,
            "departureNum2Rate": 145.51,
            "departureNum3Rate": 8.39,
            "signNumRate": 0.00,
            "shippingNum1Rate": 5482.90,
            "shippingNum2Rate": 0.00,
            "departureNumOtRate": 0.00,
            "signNum5Rate": 0.00,
            "arrivalNum1Rate": 1477.22,
            "shippingNumOtRate": 0.00,
            "arrivalNum": 235
          }
        },
        "models": {

        },
        "resultMessageEnum": null
      });
    }, 1000);
  },

  "POST /skynet/statistics/welcome/queryExtOptions": (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": [{
            "partyName": "中国邮政速递物流股份有限公司合肥市分公司"
          },
          {
            "partyName": "安徽骑行者物流服务有限公司"
          },
          {
            "partyName": "薛广潭"
          },
          {
            "partyName": "陈希"
          },
          {
            "partyName": "合肥辛马科技有限公司"
          },
          {
            "partyName": "安徽省徽商五源国际物流港务有限公司"
          },
          {
            "partyName": "合肥志远物流有限公司"
          },
          {
            "partyName": "安徽众运物流有限公司"
          },
          {
            "partyName": "合肥传化信实公路港物流有限公司"
          },
          {
            "partyName": "杭州信实物流有限公司"
          },
          {
            "partyName": "邢美键"
          }
        ],
        "models": {

        },
        "resultMessageEnum": null
      });
    }, 1000);
  },

  "POST /skynet/statistics/ParkAggr*": (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": {
          "pageKey": "jobParkAggregationId",
          "partyName": "冯佳佳",
          "partyId": "15562",
          "dataCount": 37959,
          "queryInfoVO": {
            "queryVOList": [{
                "displayName": "数据日期",
                "name": "dataTime",
                "valueObjectList": null
              },
              {
                "displayName": "大区",
                "name": "region",
                "valueObjectList": null
              },
              {
                "displayName": "公路港",
                "name": "wayport",
                "valueObjectList": null
              },
              {
                "displayName": "总车流量/辆",
                "name": "inOutCount",
                "valueObjectList": null
              },
              {
                "displayName": "进场车流量/辆",
                "name": "inCount",
                "valueObjectList": null
              },
              {
                "displayName": "出场车流量/辆",
                "name": "outCount",
                "valueObjectList": null
              },
              {
                "displayName": "在场车辆/辆",
                "name": "averageParkingNum",
                "valueObjectList": null
              },
              {
                "displayName": "新增车辆/辆",
                "name": "newCarCount",
                "valueObjectList": null
              },
              {
                "displayName": "支付笔数/笔",
                "name": "payCount",
                "valueObjectList": null
              },
              {
                "displayName": "应收费用/元",
                "name": "shallPay",
                "valueObjectList": null
              },
              {
                "displayName": "实收费用/元",
                "name": "actualPay",
                "valueObjectList": null
              }
            ],
            "authorityList": [{
                "aclUnitId": 415,
                "unitCode": "U1702230920030tx7pHk",
                "unitName": "华北大区",
                "type": "",
                "parentNode": 411,
                "unitLevel": 2,
                "rank": null,
                "productId": "myportal",
                "productType": "skynet",
                "description": "",
                "createDate": "2017-02-23 09:21:07.0",
                "createMan": "13006/张臣",
                "updateDate": "2017-02-23 09:21:07.0",
                "updateMan": "13006/张臣",
                "status": "Effective",
                "stampDate": "2017-02-23 09:21:07.0",
                "childrenList": [{
                    "aclUnitId": 943,
                    "unitCode": "U1706061709028DZS8F6",
                    "unitName": "石家庄项目组",
                    "type": "",
                    "parentNode": 415,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:09:31.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:09:31.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:09:31.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 947,
                    "unitCode": "U1706061709051S1WV64",
                    "unitName": "天津公路港",
                    "type": "",
                    "parentNode": 415,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:09:54.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:09:54.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:09:54.0",
                    "childrenList": null
                  }
                ]
              },
              {
                "aclUnitId": 973,
                "unitCode": "U1706061738019ZLYLZY",
                "unitName": "山东大区",
                "type": "",
                "parentNode": 411,
                "unitLevel": 2,
                "rank": null,
                "productId": "myportal",
                "productType": "skynet",
                "description": "",
                "createDate": "2017-06-06 17:38:21.0",
                "createMan": "15562/冯佳佳",
                "updateDate": "2017-06-06 17:38:21.0",
                "updateMan": "15562/冯佳佳",
                "status": "Effective",
                "stampDate": "2017-06-06 17:38:21.0",
                "childrenList": [{
                  "aclUnitId": 979,
                  "unitCode": "U1706061738048VIPGA5",
                  "unitName": "菏泽公路港",
                  "type": "",
                  "parentNode": 973,
                  "unitLevel": 3,
                  "rank": null,
                  "productId": "myportal",
                  "productType": "skynet",
                  "description": "",
                  "createDate": "2017-06-06 17:39:01.0",
                  "createMan": "15562/冯佳佳",
                  "updateDate": "2017-06-06 17:39:01.0",
                  "updateMan": "15562/冯佳佳",
                  "status": "Effective",
                  "stampDate": "2017-06-06 17:39:01.0",
                  "childrenList": null
                }]
              },
              {
                "aclUnitId": 413,
                "unitCode": "U1702230920007H3fmP2",
                "unitName": "浙江大区",
                "type": "",
                "parentNode": 411,
                "unitLevel": 2,
                "rank": null,
                "productId": "myportal",
                "productType": "skynet",
                "description": "",
                "createDate": "2017-02-23 09:20:24.0",
                "createMan": "13006/张臣",
                "updateDate": "2017-02-23 09:20:24.0",
                "updateMan": "13006/张臣",
                "status": "Effective",
                "stampDate": "2017-02-23 09:20:24.0",
                "childrenList": [{
                    "aclUnitId": 939,
                    "unitCode": "U1706061708034AF58CV",
                    "unitName": "温州公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:08:37.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:08:37.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:08:37.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 931,
                    "unitCode": "U1706061707039ADYGDW",
                    "unitName": "台州公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:07:45.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:07:45.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:07:45.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 937,
                    "unitCode": "U1706061708014XZEV4Y",
                    "unitName": "宁波公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:08:23.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:08:23.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:08:23.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 935,
                    "unitCode": "U17060617080015GWITA",
                    "unitName": "富阳公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:08:09.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:08:09.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:08:09.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 787,
                    "unitCode": "U170301152700635RIet",
                    "unitName": "衢州公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-03-01 15:27:14.0",
                    "createMan": "15832/张园庆",
                    "updateDate": "2017-03-01 15:27:14.0",
                    "updateMan": "15832/张园庆",
                    "status": "Effective",
                    "stampDate": "2017-03-01 15:27:14.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 785,
                    "unitCode": "U1703011526037pB23he",
                    "unitName": "金华公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-03-01 15:27:00.0",
                    "createMan": "15832/张园庆",
                    "updateDate": "2017-03-01 15:27:00.0",
                    "updateMan": "15832/张园庆",
                    "status": "Effective",
                    "stampDate": "2017-03-01 15:27:00.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 781,
                    "unitCode": "U1703011032035BE0o0q",
                    "unitName": "杭州公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-03-01 10:32:44.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-03-01 10:32:44.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-03-01 10:32:44.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 933,
                    "unitCode": "U1706061707053ZRRQQH",
                    "unitName": "汇通公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:07:56.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:07:56.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:07:56.0",
                    "childrenList": null
                  }
                ]
              }
            ]
          },
          "pageName": "停车场公路港小时统计",
          "columnList": [{
              "displayId": 123123139,
              "pageViewId": 123123143,
              "columnName": "dataTime",
              "tableColumnName": "dataTime",
              "displayName": "数据日期",
              "formula": null,
              "remark": null,
              "dataType": "DATE",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 1,
              "orderAble": "YES",
              "unit": null,
              "inputDate": "Jun 12, 2017 5:21:34 PM",
              "isDelete": "NO",
              "stampDate": "Jun 13, 2017 5:31:26 PM"
            },
            {
              "displayId": 123123141,
              "pageViewId": 123123143,
              "columnName": "region",
              "tableColumnName": "region",
              "displayName": "大区",
              "formula": null,
              "remark": null,
              "dataType": "CHARS",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 2,
              "orderAble": "YES",
              "unit": null,
              "inputDate": "Jun 12, 2017 5:21:34 PM",
              "isDelete": "NO",
              "stampDate": "Jun 12, 2017 5:29:18 PM"
            },
            {
              "displayId": 123123143,
              "pageViewId": 123123143,
              "columnName": "wayport",
              "tableColumnName": "wayport",
              "displayName": "公路港",
              "formula": null,
              "remark": null,
              "dataType": "CHARS",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 3,
              "orderAble": "YES",
              "unit": null,
              "inputDate": "Jun 12, 2017 5:21:34 PM",
              "isDelete": "NO",
              "stampDate": "Jun 12, 2017 5:21:42 PM"
            },
            {
              "displayId": 123123145,
              "pageViewId": 123123143,
              "columnName": "inOutCount",
              "tableColumnName": "inOutCount",
              "displayName": "总车流量/辆",
              "formula": null,
              "remark": "进出场车辆数量之和",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 4,
              "orderAble": "YES",
              "unit": null,
              "inputDate": "Jun 12, 2017 5:21:34 PM",
              "isDelete": "NO",
              "stampDate": "Jun 12, 2017 5:35:58 PM"
            },
            {
              "displayId": 123123147,
              "pageViewId": 123123143,
              "columnName": "inCount",
              "tableColumnName": "inCount",
              "displayName": "进场车流量/辆",
              "formula": null,
              "remark": "进入停车场车辆数量",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 5,
              "orderAble": "YES",
              "unit": null,
              "inputDate": "Jun 12, 2017 5:21:34 PM",
              "isDelete": "NO",
              "stampDate": "Jun 12, 2017 5:36:00 PM"
            },
            {
              "displayId": 123123149,
              "pageViewId": 123123143,
              "columnName": "outCount",
              "tableColumnName": "outCount",
              "displayName": "出场车流量/辆",
              "formula": null,
              "remark": "驶出停车场车辆数量",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 6,
              "orderAble": "YES",
              "unit": null,
              "inputDate": "Jun 12, 2017 5:21:34 PM",
              "isDelete": "NO",
              "stampDate": "Jun 12, 2017 5:36:01 PM"
            },
            {
              "displayId": 123123151,
              "pageViewId": 123123143,
              "columnName": "averageParkingNum",
              "tableColumnName": "averageParkingNum",
              "displayName": "在场车辆/辆",
              "formula": null,
              "remark": "平均在场车辆数量",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 7,
              "orderAble": "YES",
              "unit": null,
              "inputDate": "Jun 12, 2017 5:21:34 PM",
              "isDelete": "NO",
              "stampDate": "Jun 12, 2017 5:36:10 PM"
            },
            {
              "displayId": 123123153,
              "pageViewId": 123123143,
              "columnName": "newCarCount",
              "tableColumnName": "newCarCount",
              "displayName": "新增车辆/辆",
              "formula": null,
              "remark": "首次进入公路港车辆数量",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 8,
              "orderAble": "YES",
              "unit": null,
              "inputDate": "Jun 12, 2017 5:21:34 PM",
              "isDelete": "NO",
              "stampDate": "Jun 12, 2017 5:37:40 PM"
            },
            {
              "displayId": 123123155,
              "pageViewId": 123123143,
              "columnName": "payCount",
              "tableColumnName": "payCount",
              "displayName": "支付笔数/笔",
              "formula": null,
              "remark": "停车费支付笔数",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 9,
              "orderAble": "YES",
              "unit": null,
              "inputDate": "Jun 12, 2017 5:21:34 PM",
              "isDelete": "NO",
              "stampDate": "Jun 16, 2017 2:49:09 PM"
            },
            {
              "displayId": 123123157,
              "pageViewId": 123123143,
              "columnName": "shallPay",
              "tableColumnName": "shallPay",
              "displayName": "应收费用/元",
              "formula": null,
              "remark": "应收停车费金额",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 10,
              "orderAble": "YES",
              "unit": null,
              "inputDate": "Jun 12, 2017 5:21:34 PM",
              "isDelete": "NO",
              "stampDate": "Jun 16, 2017 2:49:08 PM"
            },
            {
              "displayId": 123123159,
              "pageViewId": 123123143,
              "columnName": "actualPay",
              "tableColumnName": "actualPay",
              "displayName": "实收费用/元",
              "formula": null,
              "remark": "实收停车费金额",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 11,
              "orderAble": "YES",
              "unit": null,
              "inputDate": "Jun 12, 2017 5:21:34 PM",
              "isDelete": "NO",
              "stampDate": "Jun 16, 2017 2:49:07 PM"
            }
          ],
          "dataList": [{
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12357416,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 1.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-01\n00:00:00 ~ 01:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12357434,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 1.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-01\n01:00:00 ~ 02:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 5,
              "region": "华北大区",
              "jobParkAggregationId": 12357438,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 5,
              "actualPay": 0.00,
              "averageParkingNum": 2.00,
              "inOutCount": 7,
              "payCount": 0,
              "dataTime": "2017-03-01\n10:00:00 ~ 11:00:00",
              "outCount": 2
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12357454,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 1.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-01\n02:00:00 ~ 03:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 1,
              "region": "华北大区",
              "jobParkAggregationId": 12357456,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 2,
              "actualPay": 0.00,
              "averageParkingNum": 5.00,
              "inOutCount": 4,
              "payCount": 0,
              "dataTime": "2017-03-01\n11:00:00 ~ 12:00:00",
              "outCount": 2
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12357476,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 1.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-01\n03:00:00 ~ 04:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12357496,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 1.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-01\n04:00:00 ~ 05:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12357514,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 1.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-01\n05:00:00 ~ 06:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12357536,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 1.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-01\n06:00:00 ~ 07:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12357556,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 1.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-01\n07:00:00 ~ 08:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12357576,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 1.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-01\n08:00:00 ~ 09:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 1,
              "region": "华北大区",
              "jobParkAggregationId": 12357596,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 1,
              "actualPay": 0.00,
              "averageParkingNum": 1.00,
              "inOutCount": 1,
              "payCount": 0,
              "dataTime": "2017-03-01\n09:00:00 ~ 10:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 8,
              "region": "华北大区",
              "jobParkAggregationId": 12358048,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 9,
              "actualPay": 0.00,
              "averageParkingNum": 6.00,
              "inOutCount": 15,
              "payCount": 0,
              "dataTime": "2017-03-02\n10:00:00 ~ 11:00:00",
              "outCount": 6
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12358056,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 7.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-02\n20:00:00 ~ 21:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12358064,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 7.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-03\n06:00:00 ~ 07:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 3,
              "region": "华北大区",
              "jobParkAggregationId": 12358068,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 4,
              "actualPay": 0.00,
              "averageParkingNum": 9.00,
              "inOutCount": 12,
              "payCount": 0,
              "dataTime": "2017-03-02\n11:00:00 ~ 12:00:00",
              "outCount": 8
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12358070,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 5.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-01\n12:00:00 ~ 13:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12358072,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 7.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-02\n21:00:00 ~ 22:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12358080,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 7.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-03\n07:00:00 ~ 08:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 5,
              "region": "华北大区",
              "jobParkAggregationId": 12358086,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 7,
              "actualPay": 0.00,
              "averageParkingNum": 5.00,
              "inOutCount": 7,
              "payCount": 0,
              "dataTime": "2017-03-02\n12:00:00 ~ 13:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 1,
              "region": "华北大区",
              "jobParkAggregationId": 12358090,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 1,
              "actualPay": 0.00,
              "averageParkingNum": 5.00,
              "inOutCount": 1,
              "payCount": 0,
              "dataTime": "2017-03-01\n13:00:00 ~ 14:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12358092,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 7.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-02\n22:00:00 ~ 23:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 2,
              "region": "华北大区",
              "jobParkAggregationId": 12358094,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 3,
              "actualPay": 0.00,
              "averageParkingNum": 7.00,
              "inOutCount": 10,
              "payCount": 0,
              "dataTime": "2017-03-03\n08:00:00 ~ 09:00:00",
              "outCount": 7
            },
            {
              "newCarCount": 1,
              "region": "华北大区",
              "jobParkAggregationId": 12358100,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 6,
              "actualPay": 0.00,
              "averageParkingNum": 10.00,
              "inOutCount": 19,
              "payCount": 0,
              "dataTime": "2017-03-03\n16:00:00 ~ 17:00:00",
              "outCount": 13
            },
            {
              "newCarCount": 2,
              "region": "华北大区",
              "jobParkAggregationId": 12358104,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 4,
              "actualPay": 0.00,
              "averageParkingNum": 12.00,
              "inOutCount": 9,
              "payCount": 0,
              "dataTime": "2017-03-02\n13:00:00 ~ 14:00:00",
              "outCount": 5
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12358106,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 3.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-04\n02:00:00 ~ 03:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 5,
              "region": "华北大区",
              "jobParkAggregationId": 12358110,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 6,
              "actualPay": 0.00,
              "averageParkingNum": 6.00,
              "inOutCount": 8,
              "payCount": 0,
              "dataTime": "2017-03-01\n14:00:00 ~ 15:00:00",
              "outCount": 2
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12358112,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 7.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-02\n23:00:00 ~ 24:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 3,
              "region": "华北大区",
              "jobParkAggregationId": 12358116,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 4,
              "actualPay": 0.00,
              "averageParkingNum": 3.00,
              "inOutCount": 4,
              "payCount": 0,
              "dataTime": "2017-03-03\n09:00:00 ~ 10:00:00",
              "outCount": 0
            },
            {
              "newCarCount": 0,
              "region": "华北大区",
              "jobParkAggregationId": 12358118,
              "shallPay": 0.00,
              "wayport": "天津公路港",
              "inCount": 0,
              "actualPay": 0.00,
              "averageParkingNum": 3.00,
              "inOutCount": 0,
              "payCount": 0,
              "dataTime": "2017-03-03\n17:00:00 ~ 18:00:00",
              "outCount": 0
            }
          ],
          "sumData": {
            "newCarCount": 37.0,
            "shallPay": 0.0,
            "inCount": 52.0,
            "actualPay": 0.0,
            "inOutCount": 97.0,
            "averageParkingNum": 4.433333333333334,
            "payCount": 0.0,
            "outCount": 45.0
          }
        },
        "models": {

        },
        "resultMessageEnum": null
      });
    }, 1000);
  },

  "POST /skynet/statistics/TMSTimeAnalysis*": (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": {
          "pageKey": "jobTMSTimeAnalysisId",
          "partyName": "冯佳佳",
          "partyId": "15562",
          "dataCount": 4,
          "queryInfoVO": {
            "queryVOList": [{
                "displayName": "大区",
                "name": "region",
                "valueObjectList": null
              },
              {
                "displayName": "公路港",
                "name": "wayport",
                "valueObjectList": null
              },
              {
                "displayName": "承运商",
                "name": "partyName",
                "valueObjectList": null
              },
              {
                "displayName": "发货城市",
                "name": "startCity",
                "valueObjectList": null
              },
              {
                "displayName": "到货城市",
                "name": "endCity",
                "valueObjectList": null
              },
              {
                "displayName": "订单开单日期",
                "name": "dataTime",
                "valueObjectList": null
              },
              {
                "displayName": "订单数量/单",
                "name": "orderNum",
                "valueObjectList": null
              },
              {
                "displayName": "全时段平均耗时（已签收-创建订单）/h",
                "name": "allTimeSpanAverage",
                "valueObjectList": null
              },
              {
                "displayName": "运输时段平均耗时（已到港-待配载）/h€运输平均时段（已到港-待配载）/h",
                "name": "portedInStowTimeAverage",
                "valueObjectList": null
              },
              {
                "displayName": "运输时段平均耗时（已到港-待配载）/h€配载平均耗时（装车耗时）（运输中-待配载）/h",
                "name": "transInStowageTimeAverage",
                "valueObjectList": null
              },
              {
                "displayName": "运输时段平均耗时（已到港-待配载）/h€在途平均耗时（已到港-运输中）/h",
                "name": "portedInTransTimeAverage",
                "valueObjectList": null
              },
              {
                "displayName": "落地配时段平均耗时（已签收-已到港）/h€落地配时段平均耗时（已签收-已到港）/h",
                "name": "signedPortedTimeAverage",
                "valueObjectList": null
              },
              {
                "displayName": "落地配时段平均耗时（已签收-已到港）/h€卸车平均耗时（已到货-已到港）/h",
                "name": "arrivedPortedTimeAverage",
                "valueObjectList": null
              },
              {
                "displayName": "落地配时段平均耗时（已签收-已到港）/h€送货平均耗时（已签收-已落地配车）/h",
                "name": "signedLoadedTimeAverage",
                "valueObjectList": null
              }
            ],
            "authorityList": [{
                "aclUnitId": 415,
                "unitCode": "U1702230920030tx7pHk",
                "unitName": "华北大区",
                "type": "",
                "parentNode": 411,
                "unitLevel": 2,
                "rank": null,
                "productId": "myportal",
                "productType": "skynet",
                "description": "",
                "createDate": "2017-02-23 09:21:07.0",
                "createMan": "13006/张臣",
                "updateDate": "2017-02-23 09:21:07.0",
                "updateMan": "13006/张臣",
                "status": "Effective",
                "stampDate": "2017-02-23 09:21:07.0",
                "childrenList": [{
                    "aclUnitId": 943,
                    "unitCode": "U1706061709028DZS8F6",
                    "unitName": "石家庄项目组",
                    "type": "",
                    "parentNode": 415,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:09:31.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:09:31.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:09:31.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 947,
                    "unitCode": "U1706061709051S1WV64",
                    "unitName": "天津公路港",
                    "type": "",
                    "parentNode": 415,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:09:54.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:09:54.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:09:54.0",
                    "childrenList": null
                  }
                ]
              },
              {
                "aclUnitId": 973,
                "unitCode": "U1706061738019ZLYLZY",
                "unitName": "山东大区",
                "type": "",
                "parentNode": 411,
                "unitLevel": 2,
                "rank": null,
                "productId": "myportal",
                "productType": "skynet",
                "description": "",
                "createDate": "2017-06-06 17:38:21.0",
                "createMan": "15562/冯佳佳",
                "updateDate": "2017-06-06 17:38:21.0",
                "updateMan": "15562/冯佳佳",
                "status": "Effective",
                "stampDate": "2017-06-06 17:38:21.0",
                "childrenList": [{
                  "aclUnitId": 979,
                  "unitCode": "U1706061738048VIPGA5",
                  "unitName": "菏泽公路港",
                  "type": "",
                  "parentNode": 973,
                  "unitLevel": 3,
                  "rank": null,
                  "productId": "myportal",
                  "productType": "skynet",
                  "description": "",
                  "createDate": "2017-06-06 17:39:01.0",
                  "createMan": "15562/冯佳佳",
                  "updateDate": "2017-06-06 17:39:01.0",
                  "updateMan": "15562/冯佳佳",
                  "status": "Effective",
                  "stampDate": "2017-06-06 17:39:01.0",
                  "childrenList": null
                }]
              },
              {
                "aclUnitId": 413,
                "unitCode": "U1702230920007H3fmP2",
                "unitName": "浙江大区",
                "type": "",
                "parentNode": 411,
                "unitLevel": 2,
                "rank": null,
                "productId": "myportal",
                "productType": "skynet",
                "description": "",
                "createDate": "2017-02-23 09:20:24.0",
                "createMan": "13006/张臣",
                "updateDate": "2017-02-23 09:20:24.0",
                "updateMan": "13006/张臣",
                "status": "Effective",
                "stampDate": "2017-02-23 09:20:24.0",
                "childrenList": [{
                    "aclUnitId": 939,
                    "unitCode": "U1706061708034AF58CV",
                    "unitName": "温州公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:08:37.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:08:37.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:08:37.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 931,
                    "unitCode": "U1706061707039ADYGDW",
                    "unitName": "台州公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:07:45.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:07:45.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:07:45.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 937,
                    "unitCode": "U1706061708014XZEV4Y",
                    "unitName": "宁波公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:08:23.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:08:23.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:08:23.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 935,
                    "unitCode": "U17060617080015GWITA",
                    "unitName": "富阳公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:08:09.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:08:09.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:08:09.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 787,
                    "unitCode": "U170301152700635RIet",
                    "unitName": "衢州公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-03-01 15:27:14.0",
                    "createMan": "15832/张园庆",
                    "updateDate": "2017-03-01 15:27:14.0",
                    "updateMan": "15832/张园庆",
                    "status": "Effective",
                    "stampDate": "2017-03-01 15:27:14.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 785,
                    "unitCode": "U1703011526037pB23he",
                    "unitName": "金华公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-03-01 15:27:00.0",
                    "createMan": "15832/张园庆",
                    "updateDate": "2017-03-01 15:27:00.0",
                    "updateMan": "15832/张园庆",
                    "status": "Effective",
                    "stampDate": "2017-03-01 15:27:00.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 781,
                    "unitCode": "U1703011032035BE0o0q",
                    "unitName": "杭州公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-03-01 10:32:44.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-03-01 10:32:44.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-03-01 10:32:44.0",
                    "childrenList": null
                  },
                  {
                    "aclUnitId": 933,
                    "unitCode": "U1706061707053ZRRQQH",
                    "unitName": "汇通公路港",
                    "type": "",
                    "parentNode": 413,
                    "unitLevel": 3,
                    "rank": null,
                    "productId": "myportal",
                    "productType": "skynet",
                    "description": "",
                    "createDate": "2017-06-06 17:07:56.0",
                    "createMan": "15562/冯佳佳",
                    "updateDate": "2017-06-06 17:07:56.0",
                    "updateMan": "15562/冯佳佳",
                    "status": "Effective",
                    "stampDate": "2017-06-06 17:07:56.0",
                    "childrenList": null
                  }
                ]
              }
            ]
          },
          "pageName": null,
          "columnList": [{
              "displayId": 123123977,
              "pageViewId": 111,
              "columnName": "region",
              "tableColumnName": "region",
              "displayName": "大区",
              "formula": "",
              "remark": "",
              "dataType": "CHARS",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 1,
              "orderAble": "YES",
              "unit": "",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123979,
              "pageViewId": 111,
              "columnName": "wayport",
              "tableColumnName": "wayport",
              "displayName": "公路港",
              "formula": "",
              "remark": "",
              "dataType": "CHARS",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 2,
              "orderAble": "YES",
              "unit": "",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123981,
              "pageViewId": 111,
              "columnName": "partyName",
              "tableColumnName": "partyName",
              "displayName": "承运商",
              "formula": "",
              "remark": "",
              "dataType": "CHARS",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 3,
              "orderAble": "YES",
              "unit": "",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:57:57 AM"
            },
            {
              "displayId": 123123983,
              "pageViewId": 111,
              "columnName": "startCity",
              "tableColumnName": "startCity",
              "displayName": "发货城市",
              "formula": "",
              "remark": "根据货物始发地点及到达地点截取城市名，组成“杭州-苏州”类似的线路名称",
              "dataType": "CHARS",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 4,
              "orderAble": "YES",
              "unit": "",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:57:59 AM"
            },
            {
              "displayId": 123123985,
              "pageViewId": 111,
              "columnName": "endCity",
              "tableColumnName": "endCity",
              "displayName": "到货城市",
              "formula": "",
              "remark": "根据货物始发地点及到达地点截取城市名，组成“杭州-苏州”类似的线路名称",
              "dataType": "CHARS",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 5,
              "orderAble": "YES",
              "unit": "",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 26, 2017 1:20:54 PM"
            },
            {
              "displayId": 123123987,
              "pageViewId": 111,
              "columnName": "dataTime",
              "tableColumnName": "dataTime",
              "displayName": "订单开单日期",
              "formula": "",
              "remark": "",
              "dataType": "DATE",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 6,
              "orderAble": "YES",
              "unit": "",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:58:02 AM"
            },
            {
              "displayId": 123123989,
              "pageViewId": 111,
              "columnName": "orderNum",
              "tableColumnName": "orderNum",
              "displayName": "订单数量/单",
              "formula": "",
              "remark": "查询时间范围内承运商名下按照不同线路统计的订单数量，按照订单号及运单反写来的订单号进行的统计",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 7,
              "orderAble": "YES",
              "unit": "单",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123991,
              "pageViewId": 111,
              "columnName": "allTimeSpanAverage",
              "tableColumnName": "allTimeSpanAverage",
              "displayName": "全时段平均耗时（已签收-创建订单）/h",
              "formula": "",
              "remark": "取客户已签收时订单已转运单且运单状态为”已签收“的时间点，减去客户下单成功时创建订单的时间，时间单位为小时（h);",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 8,
              "orderAble": "YES",
              "unit": "h",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123993,
              "pageViewId": 111,
              "columnName": "portedInStowTimeAverage",
              "tableColumnName": "portedInStowTimeAverage",
              "displayName": "运输时段平均耗时（已到港-待配载）/h€运输平均时段（已到港-待配载）/h",
              "formula": "",
              "remark": "取已经到港完毕时的订单状态为“已到港”的时间点，减去运单待配载时的时间，时间单位为小时（h);",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 9,
              "orderAble": "YES",
              "unit": "h",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123995,
              "pageViewId": 111,
              "columnName": "transInStowageTimeAverage",
              "tableColumnName": "transInStowageTimeAverage",
              "displayName": "运输时段平均耗时（已到港-待配载）/h€配载平均耗时（装车耗时）（运输中-待配载）/h",
              "formula": "",
              "remark": "取已运输完毕时的订单状态为运输中的时间点，减去运单待配载时的时间，时间单位为小时（h);",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 10,
              "orderAble": "YES",
              "unit": "h",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123997,
              "pageViewId": 111,
              "columnName": "portedInTransTimeAverage",
              "tableColumnName": "portedInTransTimeAverage",
              "displayName": "运输时段平均耗时（已到港-待配载）/h€在途平均耗时（已到港-运输中）/h",
              "formula": "",
              "remark": "取已经到港完毕时的订单状态为“已到港”的时间点，减去运单运输中时的时间，时间单位为小时（h);",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 11,
              "orderAble": "YES",
              "unit": "h",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:10:10 AM"
            },
            {
              "displayId": 123123999,
              "pageViewId": 111,
              "columnName": "signedPortedTimeAverage",
              "tableColumnName": "signedPortedTimeAverage",
              "displayName": "落地配时段平均耗时（已签收-已到港）/h€落地配时段平均耗时（已签收-已到港）/h",
              "formula": "",
              "remark": "取已签收完毕时的订单状态为“已签收”的时间点，减去运单已到港时的时间，时间单位为小时（h);",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 12,
              "orderAble": "YES",
              "unit": "h",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:10:10 AM"
            },
            {
              "displayId": 123124001,
              "pageViewId": 111,
              "columnName": "arrivedPortedTimeAverage",
              "tableColumnName": "arrivedPortedTimeAverage",
              "displayName": "落地配时段平均耗时（已签收-已到港）/h€卸车平均耗时（已到货-已到港）/h",
              "formula": "",
              "remark": "取已经到货完毕时的订单状态为“已到货”的时间点，减去运单已到港时的时间，时间单位为小时（h);",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 13,
              "orderAble": "YES",
              "unit": "h",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:10:10 AM"
            },
            {
              "displayId": 123124003,
              "pageViewId": 111,
              "columnName": "signedLoadedTimeAverage",
              "tableColumnName": "signedLoadedTimeAverage",
              "displayName": "落地配时段平均耗时（已签收-已到港）/h€送货平均耗时（已签收-已落地配车）/h",
              "formula": "",
              "remark": "取已经签收完毕时的订单状态为“已签收”的时间点，减去运单已落地配车时的时间，时间单位为小时（h);",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "NO",
              "orderNum": 14,
              "orderAble": "YES",
              "unit": "h",
              "inputDate": "Jun 21, 2017 10:10:10 AM",
              "isDelete": "NO",
              "stampDate": "Jun 21, 2017 10:10:10 AM"
            }
          ],
          "dataList": [{
              "region": "山东大区",
              "partyName": "谢景运",
              "jobTMSTimeAnalysisId": 22607,
              "portedInStowTimeAverage": 0,
              "arrivedPortedTimeAverage": 0,
              "wayport": "菏泽公路港",
              "orderNum": 1,
              "transInStowageTimeAverage": 0,
              "signedLoadedTimeAverage": 0,
              "endCity": "菏泽市",
              "portedInTransTimeAverage": 0,
              "startCity": "菏泽市",
              "dataTime": "2017-05-03",
              "allTimeSpanAverage": 0,
              "signedPortedTimeAverage": 0
            },
            {
              "region": "山东大区",
              "partyName": "谢景运",
              "jobTMSTimeAnalysisId": 22611,
              "portedInStowTimeAverage": 0,
              "arrivedPortedTimeAverage": 0,
              "wayport": "菏泽公路港",
              "orderNum": 6,
              "transInStowageTimeAverage": 0,
              "signedLoadedTimeAverage": 0,
              "endCity": "菏泽市",
              "portedInTransTimeAverage": 0,
              "startCity": "菏泽市",
              "dataTime": "2017-05-03",
              "allTimeSpanAverage": 0,
              "signedPortedTimeAverage": 0
            },
            {
              "region": "山东大区",
              "partyName": "谢景运",
              "jobTMSTimeAnalysisId": 22613,
              "portedInStowTimeAverage": 0,
              "arrivedPortedTimeAverage": 0,
              "wayport": "菏泽公路港",
              "orderNum": 1,
              "transInStowageTimeAverage": 0,
              "signedLoadedTimeAverage": 0,
              "endCity": "菏泽市",
              "portedInTransTimeAverage": 0,
              "startCity": "菏泽市",
              "dataTime": "2017-05-04",
              "allTimeSpanAverage": 0,
              "signedPortedTimeAverage": 0
            },
            {
              "region": "山东大区",
              "partyName": "谢景运",
              "jobTMSTimeAnalysisId": 22615,
              "portedInStowTimeAverage": 358,
              "arrivedPortedTimeAverage": 0,
              "wayport": "菏泽公路港",
              "orderNum": 0,
              "transInStowageTimeAverage": 0,
              "signedLoadedTimeAverage": 0,
              "endCity": "菏泽市",
              "portedInTransTimeAverage": 0,
              "startCity": "菏泽市",
              "dataTime": "2017-05-19",
              "allTimeSpanAverage": 0,
              "signedPortedTimeAverage": 0
            }
          ],
          "sumData": {
            "portedInStowTimeAverage": 358,
            "arrivedPortedTimeAverage": 0,
            "transInStowageTimeAverage": 0,
            "orderNum": 8,
            "signedLoadedTimeAverage": 0,
            "portedInTransTimeAverage": 0,
            "allTimeSpanAverage": 0,
            "signedPortedTimeAverage": 0
          }
        },
        "models": {

        },
        "resultMessageEnum": null
      });
    }, 1000);
  },

  "POST /skynet/statistics/operatequery": (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": {
          "dataList": [{
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "主营业务收入",
              "field": "totalMoney",
              "fieldName": "总计/万元",
              "remark": null,
              "day": 2018969.1,
              "month": 13723810.75,
              "quarter": 391165286.52,
              "year": 857161316.36
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "主营业务收入",
              "field": "proportionMoney",
              "fieldName": "租金管理费收入/万元",
              "remark": null,
              "day": 0,
              "month": 0,
              "quarter": 0,
              "year": 0
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "主营业务收入",
              "field": "parkAmount",
              "fieldName": "停车场收入/万元",
              "remark": null,
              "day": 467179.1,
              "month": 5646829.75,
              "quarter": 140854392.21,
              "year": 204356053.27
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "主营业务收入",
              "field": "HotelMoney",
              "fieldName": "旅馆收入/万元",
              "remark": null,
              "day": 255890,
              "month": 1304181,
              "quarter": 15792398,
              "year": 16191920
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "主营业务收入",
              "field": "mainBusiness",
              "fieldName": "商贸主营收入/万元",
              "remark": null,
              "day": 0,
              "month": 45600,
              "quarter": 48686800,
              "year": 158141400
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "主营业务收入",
              "field": "mainSupplychain",
              "fieldName": "供应链主营/万元",
              "remark": null,
              "day": 0,
              "month": 0,
              "quarter": 106409348.14,
              "year": 239459561.99
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "主营业务收入",
              "field": "afterCar",
              "fieldName": "车后（卡车、轮胎等）/万元",
              "remark": null,
              "day": 0,
              "month": 0,
              "quarter": 20191848.17,
              "year": 97443594.17
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "主营业务收入",
              "field": "refuelingIncome",
              "fieldName": "加油站收入/万元",
              "remark": null,
              "day": 1295900,
              "month": 6727200,
              "quarter": 59230500,
              "year": 141568786.93
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "平台营业额/万元",
              "field": "plateformTurnover",
              "fieldName": "平台营业额/万元",
              "remark": null,
              "day": 100181463.05,
              "month": 285201095.43,
              "quarter": 3076115268.94,
              "year": 7107636004.32
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "车流量/车次",
              "field": "ParkCount",
              "fieldName": "车流量/车次",
              "remark": null,
              "day": 21071,
              "month": 543494,
              "quarter": 1717346,
              "year": 3101989
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "织网业务",
              "field": "distributionNum",
              "fieldName": "分拨中心个数/个",
              "remark": null,
              "day": 0,
              "month": 0,
              "quarter": 0,
              "year": 0
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "织网业务",
              "field": "warehouseNum",
              "fieldName": "网点个数/个",
              "remark": null,
              "day": 0,
              "month": 0,
              "quarter": 0,
              "year": 0
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "织网业务",
              "field": "routeNum",
              "fieldName": "线路条数/条",
              "remark": null,
              "day": 0,
              "month": 0,
              "quarter": 0,
              "year": 0
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "织网业务",
              "field": "tmsUserNum",
              "fieldName": "系统使用客户数/个",
              "remark": null,
              "day": 77,
              "month": 291,
              "quarter": 2489,
              "year": 4149
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "织网业务",
              "field": "effectiveCount",
              "fieldName": "运单量/单/天",
              "remark": null,
              "day": 30459,
              "month": 128025,
              "quarter": 1466721,
              "year": 1934131
            },
            {
              "view": "city_logistics",
              "viewName": "city_logistics",
              "category": "织网业务",
              "field": "effectiveFees",
              "fieldName": "交易流量/亿元",
              "remark": null,
              "day": 65098408.9,
              "month": 328024646.8,
              "quarter": 3784402587.96,
              "year": 4880315994.5
            }
          ],
          "authorityMap": [{
            "aclUnitId": 1087,
            "unitCode": "U1706281501041YJS2FG",
            "unitName": "传化集团",
            "type": "",
            "parentNode": 1085,
            "unitLevel": 1,
            "rank": null,
            "productId": "myportal",
            "productType": "IntelLogistics",
            "description": "",
            "createDate": "2017-06-28 15:01:44.0",
            "createMan": "16965/孙力火",
            "updateDate": "2017-06-28 15:01:44.0",
            "updateMan": "16965/孙力火",
            "status": "Effective",
            "stampDate": "2017-06-28 15:01:44.0",
            "childrenList": [{
              "aclUnitId": 1089,
              "unitCode": "U1706281501048XKHY6U",
              "unitName": "浙江大区",
              "type": "",
              "parentNode": 1087,
              "unitLevel": 2,
              "rank": null,
              "productId": "myportal",
              "productType": "IntelLogistics",
              "description": "",
              "createDate": "2017-06-28 15:01:55.0",
              "createMan": "16965/孙力火",
              "updateDate": "2017-06-28 15:01:55.0",
              "updateMan": "16965/孙力火",
              "status": "Effective",
              "stampDate": "2017-06-28 15:01:55.0",
              "childrenList": null
            }]
          }]
        },
        "models": {

        },
        "resultMessageEnum": null
      });
    }, 1000);
  },

  "POST /skynet/statistics/**": (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": {
          "pageKey": "yQTWarehouseMonthId",
          "partyName": "冯佳佳",
          "partyId": "15562",
          "dataCount": 36,
          "queryInfoVO": {
            "queryVOList": [{
                "displayName": "数据日期",
                "name": "inputdate",
                "valueObjectList": null
              },
              {
                "displayName": "大区",
                "name": "region",
                "valueObjectList": null
              },
              {
                "displayName": "公路港",
                "name": "wayport",
                "valueObjectList": null
              },
              {
                "displayName": "网点",
                "name": "warehouseName",
                "valueObjectList": null
              },
              {
                "displayName": "开单运单数量/个",
                "name": "soStartOrderNum",
                "valueObjectList": null
              },
              {
                "displayName": "开单基本运费/元",
                "name": "soStartShippingFee",
                "valueObjectList": null
              },
              {
                "displayName": "开单保险费/元",
                "name": "soStartInsuranceFee",
                "valueObjectList": null
              },
              {
                "displayName": "开单代收货款/元",
                "name": "soStartPayeeAmount",
                "valueObjectList": null
              },
              {
                "displayName": "到货运单数量/个",
                "name": "soArrivalNum",
                "valueObjectList": null
              },
              {
                "displayName": "到货货物数量/件",
                "name": "soArrivalAmount",
                "valueObjectList": null
              },
              {
                "displayName": "到货货物重量/吨",
                "name": "soArrivalWeight",
                "valueObjectList": null
              },
              {
                "displayName": "到货货物体积/立方",
                "name": "soArrivalVolume",
                "valueObjectList": null
              },
              {
                "displayName": "发车运单数量/个",
                "name": "soDepartureNum",
                "valueObjectList": null
              },
              {
                "displayName": "发车货物数量/件",
                "name": "soDepartureAmount",
                "valueObjectList": null
              },
              {
                "displayName": "发车货物重量/吨",
                "name": "soDepartureWeight",
                "valueObjectList": null
              },
              {
                "displayName": "发车货物体积/立方",
                "name": "soDepartureVolume",
                "valueObjectList": null
              },
              {
                "displayName": "签收运单数量/个",
                "name": "soSignNum",
                "valueObjectList": null
              },
              {
                "displayName": "签收运费合计/元",
                "name": "soSignShippingFee",
                "valueObjectList": null
              },
              {
                "displayName": "签收保险费/元",
                "name": "soSignInsuranceFee",
                "valueObjectList": null
              },
              {
                "displayName": "签收代收货款/元",
                "name": "soSignPayeeAmount",
                "valueObjectList": null
              }
            ],
            "authorityList": [{
              "aclUnitId": 413,
              "unitCode": "U1702230920007H3fmP2",
              "unitName": "浙江大区",
              "type": "",
              "parentNode": 411,
              "unitLevel": 2,
              "rank": null,
              "productId": "myportal",
              "productType": "skynet",
              "description": "",
              "createDate": "2017-02-23 09:20:24.0",
              "createMan": "13006/张臣",
              "updateDate": "2017-02-23 09:20:24.0",
              "updateMan": "13006/张臣",
              "status": "Effective",
              "stampDate": "2017-02-23 09:20:24.0",
              "childrenList": [{
                  "aclUnitId": 785,
                  "unitCode": "U1703011526037pB23he",
                  "unitName": "金华公路港",
                  "type": "",
                  "parentNode": 413,
                  "unitLevel": 3,
                  "rank": null,
                  "productId": "myportal",
                  "productType": "skynet",
                  "description": "",
                  "createDate": "2017-03-01 15:27:00.0",
                  "createMan": "15832/张园庆",
                  "updateDate": "2017-03-01 15:27:00.0",
                  "updateMan": "15832/张园庆",
                  "status": "Effective",
                  "stampDate": "2017-03-01 15:27:00.0",
                  "childrenList": null
                },
                {
                  "aclUnitId": 781,
                  "unitCode": "U1703011032035BE0o0q",
                  "unitName": "杭州公路港",
                  "type": "",
                  "parentNode": 413,
                  "unitLevel": 3,
                  "rank": null,
                  "productId": "myportal",
                  "productType": "skynet",
                  "description": "",
                  "createDate": "2017-03-01 10:32:44.0",
                  "createMan": "15562/冯佳佳",
                  "updateDate": "2017-03-01 10:32:44.0",
                  "updateMan": "15562/冯佳佳",
                  "status": "Effective",
                  "stampDate": "2017-03-01 10:32:44.0",
                  "childrenList": null
                },
                {
                  "aclUnitId": 787,
                  "unitCode": "U170301152700635RIet",
                  "unitName": "衢州公路港",
                  "type": "",
                  "parentNode": 413,
                  "unitLevel": 3,
                  "rank": null,
                  "productId": "myportal",
                  "productType": "skynet",
                  "description": "",
                  "createDate": "2017-03-01 15:27:14.0",
                  "createMan": "15832/张园庆",
                  "updateDate": "2017-03-01 15:27:14.0",
                  "updateMan": "15832/张园庆",
                  "status": "Effective",
                  "stampDate": "2017-03-01 15:27:14.0",
                  "childrenList": null
                }
              ]
            }]
          },
          "columnList": [{
              "displayId": 1825,
              "pageViewId": 26,
              "columnName": "inputdate",
              "tableColumnName": "dataTime",
              "displayName": "数据日期",
              "formula": "",
              "remark": "数据日期",
              "dataType": "DATE",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 1,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 24, 2017 11:27:06 AM"
            },
            {
              "displayId": 1827,
              "pageViewId": 26,
              "columnName": "region",
              "tableColumnName": "region",
              "displayName": "大区",
              "formula": "",
              "remark": "大区",
              "dataType": "CHARS",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 2,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1829,
              "pageViewId": 26,
              "columnName": "wayport",
              "tableColumnName": "wayport",
              "displayName": "公路港",
              "formula": "",
              "remark": "公路港",
              "dataType": "CHARS",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 3,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1833,
              "pageViewId": 26,
              "columnName": "warehouseName",
              "tableColumnName": "warehouseName",
              "displayName": "网点",
              "formula": "",
              "remark": "网点",
              "dataType": "CHARS",
              "displayType": "LATITUDE",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 5,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1835,
              "pageViewId": 26,
              "columnName": "soStartOrderNum",
              "tableColumnName": "soStartOrderNum",
              "displayName": "开单运单数量/个",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，运单的“开单”动作的次数之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 6,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1837,
              "pageViewId": 26,
              "columnName": "soStartShippingFee",
              "tableColumnName": "soStartShippingFee",
              "displayName": "开单基本运费/元",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，“开单”的运单的“基本运费”字段数值之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 7,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1839,
              "pageViewId": 26,
              "columnName": "soStartInsuranceFee",
              "tableColumnName": "soStartInsuranceFee",
              "displayName": "开单保险费/元",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，“开单”的运单的“保险费”字段数值之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 8,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1841,
              "pageViewId": 26,
              "columnName": "soStartPayeeAmount",
              "tableColumnName": "soStartPayeeAmount",
              "displayName": "开单代收货款/元",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，“开单”的运单的“代收货款”字段数值之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 9,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1843,
              "pageViewId": 26,
              "columnName": "soArrivalNum",
              "tableColumnName": "soArrivalNum",
              "displayName": "到货运单数量/个",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，运单的“确认到货”或“到货”动作的次数之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 10,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1845,
              "pageViewId": 26,
              "columnName": "soArrivalAmount",
              "tableColumnName": "soArrivalAmount",
              "displayName": "到货货物数量/件",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，“确认到货”或“到货”的运单的货物信息的“数量（件）”字段数值之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 11,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1847,
              "pageViewId": 26,
              "columnName": "soArrivalWeight",
              "tableColumnName": "soArrivalWeight",
              "displayName": "到货货物重量/吨",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，“确认到货”或“到货”的运单的货物信息的“重量（千克）”字段数值之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 12,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 28, 2017 7:18:53 PM"
            },
            {
              "displayId": 1849,
              "pageViewId": 26,
              "columnName": "soArrivalVolume",
              "tableColumnName": "soArrivalVolume",
              "displayName": "到货货物体积/立方",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，“确认到货”或“到货”的运单的货物信息的“体积（立方）”字段数值之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 13,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1851,
              "pageViewId": 26,
              "columnName": "soDepartureNum",
              "tableColumnName": "soDepartureNum",
              "displayName": "发车运单数量/个",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，运单的“发车”或“保存并发车”动作的次数之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 14,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1853,
              "pageViewId": 26,
              "columnName": "soDepartureAmount",
              "tableColumnName": "soDepartureAmount",
              "displayName": "发车货物数量/件",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，“发车”或“保存并发车”的运单的货物信息的“数量（件）”字段数值之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 15,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1855,
              "pageViewId": 26,
              "columnName": "soDepartureWeight",
              "tableColumnName": "soDepartureWeight",
              "displayName": "发车货物重量/吨",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，“发车”或“保存并发车”的运单的货物信息的“重量（千克）”字段数值之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 16,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 28, 2017 7:18:53 PM"
            },
            {
              "displayId": 1857,
              "pageViewId": 26,
              "columnName": "soDepartureVolume",
              "tableColumnName": "soDepartureVolume",
              "displayName": "发车货物体积/立方",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，“发车”或“保存并发车”的运单的货物信息的“体积（立方）”字段数值之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 17,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1859,
              "pageViewId": 26,
              "columnName": "soSignNum",
              "tableColumnName": "soSignNum",
              "displayName": "签收运单数量/个",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，运单的“签收”动作的次数之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 18,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1861,
              "pageViewId": 26,
              "columnName": "soSignShippingFee",
              "tableColumnName": "soSignShippingFee",
              "displayName": "签收运费合计/元",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，“签收”的运单的“基本运费”字段数值之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 19,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1863,
              "pageViewId": 26,
              "columnName": "soSignInsuranceFee",
              "tableColumnName": "soSignInsuranceFee",
              "displayName": "签收保险费/元",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，“签收”的运单的“保险费”字段数值之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 20,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            },
            {
              "displayId": 1865,
              "pageViewId": 26,
              "columnName": "soSignPayeeAmount",
              "tableColumnName": "soSignPayeeAmount",
              "displayName": "签收代收货款/元",
              "formula": "",
              "remark": "计算在当前查询时间范围内，当前维度下，“签收”的运单的“代收货款”字段数值之和。",
              "dataType": "NUM",
              "displayType": "QUOTA",
              "queryAble": "YES",
              "hideAble": "YES",
              "orderNum": 21,
              "inputDate": "Mar 20, 2017 2:04:00 PM",
              "isDelete": "NO",
              "stampDate": "Mar 20, 2017 2:04:00 PM"
            }
          ],
          "dataList": [{
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 0,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 0,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "济南收货点",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 17265,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 4604.18,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 11,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 4790,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 7138,
              "soDepartureNum": 123,
              "warehouseName": "杭州老郑物流有限公司",
              "soDepartureVolume": 2,
              "yQTWarehouseMonthId": 17445,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 1,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 1300,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "杭州伟成物流有限公司安庆分公司",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 17665,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 170,
              "soDepartureWeight": 0,
              "wayport": "金华公路港",
              "soArrivalVolume": 29.19,
              "soStartOrderNum": 3,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 4085,
              "soSignShippingFee": 5615,
              "soArrivalWeight": 0,
              "soDepartureAmount": 170,
              "soDepartureNum": 3,
              "warehouseName": "金华传化公路港物流有限公司",
              "soDepartureVolume": 29.19,
              "yQTWarehouseMonthId": 17667,
              "soSignNum": 4,
              "soArrivalNum": 3,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "衢州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 0,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 0,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "萧山坤静物流",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 17709,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 1.4,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 1,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 310,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 44,
              "soDepartureNum": 1,
              "warehouseName": "杭州萧山财元货运部",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 17715,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "衢州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 0,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 0,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "启航物流",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 17719,
              "soSignNum": 105,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 363,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 16718170.37,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "新孚物流青岛专线",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 17759,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 4,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 830,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 20,
              "soDepartureNum": 4,
              "warehouseName": "万联",
              "soDepartureVolume": 2,
              "yQTWarehouseMonthId": 17851,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0.01,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 9,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 3755,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 86,
              "soDepartureNum": 9,
              "warehouseName": "杭州萧山江浦货运部",
              "soDepartureVolume": 6,
              "yQTWarehouseMonthId": 17857,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 5,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 1,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 1200,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 15,
              "soDepartureNum": 1,
              "warehouseName": "浙江浩垚物流有限公司",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 17901,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 6.58,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 21,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 3865,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 425,
              "soDepartureNum": 21,
              "warehouseName": "杭州航杰物流有限公司",
              "soDepartureVolume": 19.6,
              "yQTWarehouseMonthId": 17909,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 22,
              "soDepartureWeight": 9,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 4,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 470,
              "soSignShippingFee": 0,
              "soArrivalWeight": 7,
              "soDepartureAmount": 35,
              "soDepartureNum": 4,
              "warehouseName": "杭州晨希物流有限公司",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 17939,
              "soSignNum": 3,
              "soArrivalNum": 2,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 1,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 910,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "杭州路畅物流有限公司",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 17969,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 681,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 3407723.79,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "芜湖分公司",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 17983,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 0,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 0,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "中能物流新疆网点",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 18105,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 202,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 66032,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "桥南收货点",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 18157,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "衢州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 0,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 0,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "义乌启航物流",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 18179,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 1,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 200,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "兴汉物流",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 18229,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 3570,
              "soDepartureWeight": 37.7,
              "wayport": "衢州公路港",
              "soArrivalVolume": 202.6,
              "soStartOrderNum": 103,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 98208,
              "soSignShippingFee": 0,
              "soArrivalWeight": 37.7,
              "soDepartureAmount": 3570,
              "soDepartureNum": 103,
              "warehouseName": "衢州九鼎物流有限公司",
              "soDepartureVolume": 202.6,
              "yQTWarehouseMonthId": 18251,
              "soSignNum": 0,
              "soArrivalNum": 103,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 1,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 600,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "杭州大江东产业集聚区盐淮货运部",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 18467,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0.01,
              "wayport": "金华公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 4,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 9511,
              "soSignShippingFee": 11,
              "soArrivalWeight": 0,
              "soDepartureAmount": 2,
              "soDepartureNum": 2,
              "warehouseName": "金华市吉祥货物运输有限公司",
              "soDepartureVolume": 1,
              "yQTWarehouseMonthId": 18507,
              "soSignNum": 2,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 50,
              "soDepartureWeight": 5,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 1,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 2000,
              "soSignShippingFee": 2000,
              "soArrivalWeight": 5,
              "soDepartureAmount": 50,
              "soDepartureNum": 1,
              "warehouseName": "杭州中能物流有限公司",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 18509,
              "soSignNum": 1,
              "soArrivalNum": 1,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 2,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 200,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "杭州兴宏物流有限公司",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 18531,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 2,
              "soDepartureWeight": 0.1,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 6855,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 93391165.63,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0.1,
              "soDepartureAmount": 2,
              "soDepartureNum": 1,
              "warehouseName": "杭州传化公路港分拨中心",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 18569,
              "soSignNum": 0,
              "soArrivalNum": 1,
              "soStartInsuranceFee": 4610439.72,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 500,
              "soArrivalAmount": 0,
              "soDepartureWeight": 1.5,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 2,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 810,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 15,
              "soDepartureNum": 2,
              "warehouseName": "杭州浦达物流有限公司",
              "soDepartureVolume": 5,
              "yQTWarehouseMonthId": 18689,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 105,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 977134.28,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "武汉分公司",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 18743,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 1,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 680,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 0,
              "soDepartureNum": 0,
              "warehouseName": "鑫泓圣佛山网点",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 18751,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0.01,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 6,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 915,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 333,
              "soDepartureNum": 8,
              "warehouseName": "创盛物流",
              "soDepartureVolume": 5,
              "yQTWarehouseMonthId": 18801,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            },
            {
              "region": "浙江大区",
              "soStartPayeeAmount": 0,
              "soArrivalAmount": 0,
              "soDepartureWeight": 0,
              "wayport": "杭州公路港",
              "soArrivalVolume": 0,
              "soStartOrderNum": 1,
              "soSignInsuranceFee": 0,
              "soStartShippingFee": 40,
              "soSignShippingFee": 0,
              "soArrivalWeight": 0,
              "soDepartureAmount": 2,
              "soDepartureNum": 1,
              "warehouseName": "源达物流",
              "soDepartureVolume": 0,
              "yQTWarehouseMonthId": 18813,
              "soSignNum": 0,
              "soArrivalNum": 0,
              "soStartInsuranceFee": 0,
              "dataTime": "2017-03",
              "soSignPayeeAmount": 0
            }
          ],
          "sumData": {
            "soStartPayeeAmount": 500,
            "soArrivalAmount": 4114,
            "soDepartureWeight": 4679.3,
            "soArrivalVolume": 231.79,
            "soStartOrderNum": 8554,
            "soSignInsuranceFee": 0,
            "soStartShippingFee": 115143001.99,
            "soSignShippingFee": 7626,
            "soArrivalWeight": 55.8,
            "soDepartureNum": 301,
            "soDepartureAmount": 12679,
            "soDepartureVolume": 274.39,
            "soSignNum": 115,
            "soArrivalNum": 111,
            "soStartInsuranceFee": 4610439.72,
            "soSignPayeeAmount": 0
          }
        },
        "models": {},
        "resultMessageEnum": null
      });
    }, 500);
  },

  "POST /skynet/salesmansAndPartyView/updateSalesmansAndParty": (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "查询成功",
        "data": "1"
      });
    }, 500);
  },

  'GET /static/**': (req, res) => {

    fs.readFile('./src' + req.url, (err, data) => {
      if (err) {

        res.statusCode = 404;
        res.end('Internet Server Error');
        return;
      }


      res.set("Cache-Control", "max-age=" + 10 * 365 * 24 * 60 * 60 * 1000);
      res.end(data.toString());
    });
  },

  'POST /skynet/operationalDataView/queryOperationalData': (req, res) => {
    setTimeout(() => {
      let t = [];
      for (let i = 0; i < 500; i++) {
        t.push({
          "afterCar": "10000.0",
          "dataTime": "2017-01-03 00:00:00.0",
          "dataTimeHistory": "",
          "inputDate": "2017-04-19 14:58:39.0",
          "inputMan": "张臣/13006",
          "isDelete": "NO",
          "mainBusiness": "10000.0",
          "mainSupplyChain": "20000.0",
          "operationalDataId": "7",
          "organizationName": "",
          "organizationType": "",
          "refuelingIncome": "10000.0",
          "region": "浙江大区",
          "stampDate": "2017-04-19 14:58:42.0",
          "timeType": "Day",
          "updateTime": "2017-04-19 14:58:39.0",
          "wayPort": "杭州公路港"
        });
      }
      res.json({
        "result": "success",
        "msg": "查询成功",
        "count": "2000",
        "data": t
      });
    }, 500);
  },

  'POST /skynet/operationalDataView/updataOperationalData': (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "更新成功",
        "count": "0",
        "data": []
      });
    }, 1000);

  },

  'POST /skynet/operationalDataView/insertOperationalData': (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "新增成功",
        "count": "1",
        "data": {
          "afterCar": "10000.0",
          "dataTime": "2017-01-03",
          "dataTimeHistory": "",
          "inputDate": "2017-04-19 14:58:39",
          "inputMan": "张臣/13006",
          "isDelete": "NO",
          "mainBusiness": "10000.0",
          "mainSupplyChain": "20000.0",
          "operationalDataId": "7",
          "organizationName": "",
          "organizationType": "",
          "refuelingIncome": "10000.0",
          "region": "浙江大区",
          "stampDate": "",
          "timeType": "Day",
          "updateTime": "2017-04-19 14:58:39",
          "wayPort": "杭州公路港"
        }
      });
    }, 1000);

  },
  // index page
  'GET /skynet/home/region/**': (req, res) => {
    // console.log('url', req.url);

    res.json({
      "message": null,
      "code": null,
      "success": true,
      "totalCount": 0,
      "module": [{
        "area": "浙江大区",
        "dataValue": 100
      }, {
        "area": "西北大区",
        "dataValue": 92
      }, {
        "area": "沪苏大区",
        "dataValue": 74
      }, {
        "area": "华北大区",
        "dataValue": 71
      }, {
        "area": "未知",
        "dataValue": 57
      }, {
        "area": "安徽大区",
        "dataValue": 53
      }, {
        "area": "西南大区",
        "dataValue": 50
      }, {
        "area": "东北大区",
        "dataValue": 40
      }, {
        "area": "河南大区",
        "dataValue": 35
      }, {
        "area": "山东大区",
        "dataValue": 34
      }],
      "models": {},
      "resultMessageEnum": null
    });
  },

  'GET /skynet/home/*/flowQuery': (req, res) => {
    // console.log('url', req.url);

    res.json({
      "message": null,
      "code": null,
      "success": true,
      "totalCount": 0,
      "module": [{
        "weShippingfee": "4,501.80",
        "weShipordernum": 15727,
        "dataTime": "2017-04-12"
      }, {
        "weShippingfee": "4,179.39",
        "weShipordernum": 15791,
        "dataTime": "2017-04-13"
      }, {
        "weShippingfee": "2,638.08",
        "weShipordernum": 10398,
        "dataTime": "2017-04-14"
      }, {
        "weShippingfee": "568.53",
        "weShipordernum": 4166,
        "dataTime": "2017-04-15"
      }, {
        "weShippingfee": "555.01",
        "weShipordernum": 1072,
        "dataTime": "2017-04-16"
      }, {
        "weShippingfee": "4,820.40",
        "weShipordernum": 18445,
        "dataTime": "2017-04-17"
      }, {
        "weShippingfee": "6,492.57",
        "weShipordernum": 29600,
        "dataTime": "2017-04-18"
      }, {
        "weShippingfee": "6,731.06",
        "weShipordernum": 23156,
        "dataTime": "2017-04-19"
      }, {
        "weShippingfee": "8,823.29",
        "weShipordernum": 25464,
        "dataTime": "2017-04-20"
      }, {
        "weShippingfee": "9,132.88",
        "weShipordernum": 31761,
        "dataTime": "2017-04-21"
      }, {
        "weShippingfee": "3,053.13",
        "weShipordernum": 34241,
        "dataTime": "2017-04-22"
      }, {
        "weShippingfee": "1,944.07",
        "weShipordernum": 19040,
        "dataTime": "2017-04-23"
      }, {
        "weShippingfee": "9,350.42",
        "weShipordernum": 45806,
        "dataTime": "2017-04-24"
      }, {
        "weShippingfee": "6,666.89",
        "weShipordernum": 28656,
        "dataTime": "2017-04-25"
      }, {
        "weShippingfee": "12,783.13",
        "weShipordernum": 84425,
        "dataTime": "2017-04-26"
      }, {
        "weShippingfee": "38,190.03",
        "weShipordernum": 116764,
        "dataTime": "2017-04-27"
      }, {
        "weShippingfee": "32,029.11",
        "weShipordernum": 113758,
        "dataTime": "2017-04-28"
      }, {
        "weShippingfee": "8,549.60",
        "weShipordernum": 49776,
        "dataTime": "2017-04-29"
      }, {
        "weShippingfee": "3,769.90",
        "weShipordernum": 20746,
        "dataTime": "2017-04-30"
      }, {
        "weShippingfee": "244.35",
        "weShipordernum": 4301,
        "dataTime": "2017-05-01"
      }, {
        "weShippingfee": "3,000.02",
        "weShipordernum": 18774,
        "dataTime": "2017-05-02"
      }, {
        "weShippingfee": "6,079.03",
        "weShipordernum": 25722,
        "dataTime": "2017-05-03"
      }, {
        "weShippingfee": "5,980.71",
        "weShipordernum": 23302,
        "dataTime": "2017-05-04"
      }, {
        "weShippingfee": "6,148.62",
        "weShipordernum": 31646,
        "dataTime": "2017-05-05"
      }, {
        "weShippingfee": "1,149.86",
        "weShipordernum": 8047,
        "dataTime": "2017-05-06"
      }, {
        "weShippingfee": "3,628.12",
        "weShipordernum": 16063,
        "dataTime": "2017-05-07"
      }, {
        "weShippingfee": "8,338.25",
        "weShipordernum": 36871,
        "dataTime": "2017-05-08"
      }, {
        "weShippingfee": "11,431.37",
        "weShipordernum": 50725,
        "dataTime": "2017-05-09"
      }, {
        "weShippingfee": "7,848.37",
        "weShipordernum": 47625,
        "dataTime": "2017-05-10"
      }, {
        "weShippingfee": "6,072.62",
        "weShipordernum": 38838,
        "dataTime": "2017-05-11"
      }],
      "models": {},
      "resultMessageEnum": null
    });
  },

  //just for web front ending
  // 'POST /skynet/home/**': (req, res) => {
  //   // console.log('url', req.url)
  //   http.request({
  //     host: 'http://10.51.42.66',
  //     method: 'POST',
  //     path: req.url,
  //     port: 8080
  //   }, (inres) => {
  //     inres.on('data', chunk => {
  //       // console.log('data', chunk.toString());
  //       res.set('Access-Control-Allow-Methods', 'POST');
  //       // res.set('Access-Control-Allow-Origin', '*');
  //       res.end(chunk.toString());
  //     });
  //   });
  // },

  // 'GET /skynet/home/**': (req, res) => {
  //   // console.log('url', req.url);
  //   const inreq = http.request({
  //     host: '10.51.42.66',
  //     method: 'POST',
  //     path: req.url,
  //     port: 8080
  //   }, (inres) => {
  //     let str = '';
  //     inres.on('data', chunk => {
  //       // console.log('data', chunk.toString());
  //       // res.set('Access-Control-Allow-Methods', 'GET');
  //       // res.set('Access-Control-Allow-Origin', '*');
  //       str += chunk;
  //     });
  //     inres.on('end', data => {
  //       // console.log('data', chunk.toString());
  //       res.set('Access-Control-Allow-Methods', 'GET');
  //       // res.set('Access-Control-Allow-Origin', '*');
  //       const newData = str;
  //       console.log('dataaaa+_____', newData);
  //       res.end(newData);
  //     });

  //   });
  //   inreq.on('error', err => {
  //     // console.log(err);
  //   });
  //   inreq.end();
  // },
  // end for front ending

  'POST /skynet/yunYingJiXiaoView/queryFirstDate': (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "",
        "count": "查询成功",
        "data": {
          "columen": "parkingRevenue",
          "finishRate": "88.34354",
          "realValue": "0.0",
          "targetValue": "2000.0",
          "timeRate": "6.45"
        }
      });
    }, 1000);
  },

  'POST /skynet/yunYingJiXiaoView/querySecondDate': (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "查询成功",
        "count": "31",
        "data": [{
          "columen": "",
          "dataTime": "2017-01-01",
          "realValue": "134115",
          "targetValue": "300.0451"
        }, {
          "columen": "",
          "dataTime": "2017-01-02",
          "realValue": "178134.65341",
          "targetValue": "305340.0153"
        }, {
          "columen": "",
          "dataTime": "2017-01-03",
          "realValue": "213765.85343",
          "targetValue": "343500.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-04",
          "realValue": "216052.8536",
          "targetValue": "3043560.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-05",
          "realValue": "210276.25346",
          "targetValue": "3007878.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-06",
          "realValue": "186952.5351",
          "targetValue": "8798300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-07",
          "realValue": "169531.16",
          "targetValue": "305460.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-08",
          "realValue": "175251.534571",
          "targetValue": "306760.0531"
        }, {
          "columen": "",
          "dataTime": "2017-01-09",
          "realValue": "1841790.5359",
          "targetValue": "307670.0531"
        }, {
          "columen": "",
          "dataTime": "2017-01-10",
          "realValue": "209158.28",
          "targetValue": "306570.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-11",
          "realValue": "201800.96",
          "targetValue": "3075670.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-12",
          "realValue": "194979.72",
          "targetValue": "300756.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-13",
          "realValue": "194092.39",
          "targetValue": "307560.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-14",
          "realValue": "179677.28",
          "targetValue": "306550.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-15",
          "realValue": "157067.73",
          "targetValue": "376800.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-16",
          "realValue": "2947428.61",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-17",
          "realValue": "13709982.48",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-18",
          "realValue": "3855218.69",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-19",
          "realValue": "101557.24",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-20",
          "realValue": "66759.99",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-21",
          "realValue": "6896295.36",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-22",
          "realValue": "35892.14",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-23",
          "realValue": "23676.8",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-24",
          "realValue": "14189.64",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-25",
          "realValue": "6994.62",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-26",
          "realValue": "3280.2",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-27",
          "realValue": "1857.65",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-28",
          "realValue": "1701.4",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-29",
          "realValue": "7864.2",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-30",
          "realValue": "10143.6",
          "targetValue": "300.01"
        }, {
          "columen": "",
          "dataTime": "2017-01-31",
          "realValue": "18479",
          "targetValue": "300.01"
        }]
      });
    }, 1000);
  },

  'POST /skynet/yunYingJiXiaoView/queryThridDate': (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "查询成功",
        "count": "8",
        "data": [{
          "beforeRate": "9999999999999.99",
          "beforeRealValue": "456456.88E9",
          "columen": "",
          "dataTime": "2017-01",
          "finishedRate": "3345656e5656",
          "lastYearRate": "43546546E2",
          "organizationName": "浙江大区",
          "realValue": "64565765765E5",
          "realValueLastYear": "0435E4",
          "region": "浙江大区",
          "targetValue": "34564645E5",
          "wayPort": ""
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "6546456456.02E4",
          "columen": "",
          "dataTime": "2017-02",
          "finishedRate": "43265437657.5676570E4",
          "lastYearRate": "699436546E4",
          "organizationName": "浙江大区",
          "realValue": "5436.55476575E3",
          "realValueLastYear": "0.0",
          "region": "浙江大区",
          "targetValue": "100.0",
          "wayPort": ""
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "100.02",
          "columen": "",
          "dataTime": "2017-02",
          "finishedRate": "400.0",
          "lastYearRate": "699.84",
          "organizationName": "传化网",
          "realValue": "800.0",
          "realValueLastYear": "400.0",
          "region": "",
          "targetValue": "200.0",
          "wayPort": ""
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "0.0",
          "columen": "",
          "dataTime": "2016-01",
          "finishedRate": "0.0",
          "lastYearRate": "0.0",
          "organizationName": "传化网",
          "realValue": "800.0",
          "realValueLastYear": "0.0",
          "region": "",
          "targetValue": "0.0",
          "wayPort": ""
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "0.0",
          "columen": "",
          "dataTime": "2017-01",
          "finishedRate": "33.34",
          "lastYearRate": "0.0",
          "organizationName": "传化网",
          "realValue": "100.02",
          "realValueLastYear": "800.0",
          "region": "",
          "targetValue": "300.01",
          "wayPort": ""
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "0.0",
          "columen": "",
          "dataTime": "2016-01",
          "finishedRate": "0.0",
          "lastYearRate": "0.0",
          "organizationName": "西北大区",
          "realValue": "800.0",
          "realValueLastYear": "0.0",
          "region": "西北大区",
          "targetValue": "0.0",
          "wayPort": ""
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "800.0",
          "columen": "",
          "dataTime": "2016-02",
          "finishedRate": "0.0",
          "lastYearRate": "0.0",
          "organizationName": "传化网",
          "realValue": "400.0",
          "realValueLastYear": "0.0",
          "region": "",
          "targetValue": "0.0",
          "wayPort": ""
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "800.0",
          "columen": "",
          "dataTime": "2016-02",
          "finishedRate": "0.0",
          "lastYearRate": "0.0",
          "organizationName": "西北大区",
          "realValue": "400.0",
          "realValueLastYear": "0.0",
          "region": "西北大区",
          "targetValue": "0.0",
          "wayPort": ""
        }]
      });
    }, 1000);
  },

  'POST /skynet/yunYingJiXiaoView/queryWayPortByRegion': (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "查询成功",
        "count": "8",
        "data": [{
          "beforeRate": "23546565.546E4",
          "beforeRealValue": "345436546.546546E4",
          "columen": "",
          "dataTime": "2017-01-02",
          "finishedRate": "0.0",
          "lastYearRate": "0.0",
          "organizationName": "西安公路港",
          "realValue": "100.0",
          "realValueLastYear": "0.0",
          "region": "西北大区",
          "targetValue": "0.0",
          "wayPort": "西安公路港"
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "0.0",
          "columen": "",
          "dataTime": "2017-01-01",
          "finishedRate": "0.0",
          "lastYearRate": "0.0",
          "organizationName": "西安公路港",
          "realValue": "100.0",
          "realValueLastYear": "0.0",
          "region": "西北大区",
          "targetValue": "0.0",
          "wayPort": "西安公路港"
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "0.0",
          "columen": "",
          "dataTime": "2017-01-01",
          "finishedRate": "0.0",
          "lastYearRate": "0.0",
          "organizationName": "宝鸡公路港",
          "realValue": "100.0",
          "realValueLastYear": "0.0",
          "region": "西北大区",
          "targetValue": "0.0",
          "wayPort": "宝鸡公路港"
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "0.0",
          "columen": "",
          "dataTime": "2016-01-01",
          "finishedRate": "0.0",
          "lastYearRate": "0.0",
          "organizationName": "杭州公路港",
          "realValue": "200.0",
          "realValueLastYear": "0.0",
          "region": "浙江大区",
          "targetValue": "0.0",
          "wayPort": "杭州公路港"
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "0.0",
          "columen": "",
          "dataTime": "2016-01-02",
          "finishedRate": "0.0",
          "lastYearRate": "0.0",
          "organizationName": "杭州公路港",
          "realValue": "300.0",
          "realValueLastYear": "0.0",
          "region": "浙江大区",
          "targetValue": "0.0",
          "wayPort": "杭州公路港"
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "0.0",
          "columen": "",
          "dataTime": "2017-01-01",
          "finishedRate": "0.0",
          "lastYearRate": "0.0",
          "organizationName": "杭州公路港",
          "realValue": "100.0",
          "realValueLastYear": "200.0",
          "region": "浙江大区",
          "targetValue": "0.0",
          "wayPort": "杭州公路港"
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "0.0",
          "columen": "",
          "dataTime": "2017-01-02",
          "finishedRate": "0.0",
          "lastYearRate": "0.0",
          "organizationName": "杭州公路港",
          "realValue": "100.0",
          "realValueLastYear": "300.0",
          "region": "浙江大区",
          "targetValue": "0.0",
          "wayPort": "杭州公路港"
        }, {
          "beforeRate": "0.0",
          "beforeRealValue": "0.0",
          "columen": "",
          "dataTime": "2017-01-03",
          "finishedRate": "0.0",
          "lastYearRate": "0.0",
          "organizationName": "杭州公路港",
          "realValue": "100.0",
          "realValueLastYear": "0.0",
          "region": "浙江大区",
          "targetValue": "0.0",
          "wayPort": "杭州公路港"
        }]
      });
    }, 1000);
  },

  // 商圈分析 接口
  // 1
  'POST /skynet/sqView/getRegion': (req, res) => {
    setTimeout(() => {
      res.json({
        "message": "成功",
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": [
          "华北大区",
          "浙江大区"
        ],
        "others": {}
      });
    }, 1000);
  },

  // 2
  'POST /skynet/sqView/getWayPort': (req, res) => {
    setTimeout(() => {
      res.json({
        "message": "成功",
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": {
          "华北大区": [
            "华北公路港",
            "未知公路港"
          ],
          "浙江大区": [
            "金华公路港",
            "杭州公路港",
            "衢州公路港"
          ]
        },
        "others": {}
      });
    }, 1000);
  },

  // 3
  'POST /skynet/sqView/getMerchants': (req, res) => {
    setTimeout(() => {
      res.json({
        "message": "成功",
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": {
          "华北大区": {
            "未知公路港": [{
              "3333333": "Hello"
            }]
          },
          "浙江大区": {
            "杭州公路港": [{
                "12345678": "大润发"
              },
              {
                "987654321": "顺旺基"
              },
              {
                "24680": "如家快捷酒店"
              }
            ]
          }
        },
        "others": {}
      });
    }, 1000);
  },
  // 4
  'POST /skynet/sqView/getStatisticsList': (req, res) => {
    setTimeout(() => {
      let datas = [];
      let i;
      for (i = 0; i < 100; i++) {
        datas.push({
          "freshParties": i * 5,
          "totalTransFlow": 394203.01,
          "totalParties": 5452,
          "dataTime": "2017-05-02",
          "avgFlow": 72.304294,
          "totalFavorableMoney": 42164.53,
          "avgOrderMoney": 53.027039,
          "totalOrders": 7434,
          "id": i + 'll' + i,
          "region": "华东大区" + i,
          "avgOrder": 1.3635
        });
      }
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": i + 3,
        "module": {
          "dataList": datas,
          "sumData": {
            "avgOrder": "14.74",
            "avgFlow": "1,397.63",
            "totalFavorableMoney": "151,605.37",
            "avgOrderMoney": "94.79",
            "freshParties": "459",
            "totalOrders": "18,077",
            "totalTransFlow": "1,713,489.60",
            "totalParties": "1,226"
          },
        },
        "others": {
          "region": "大区",
          "dataTime": "日期",
          "totalTransFlow": "商圈总交易流量",
          "totalOrders": "商圈交易订单数",
          "totalParties": "商圈交易用户数",
          "totalFavorableMoney": "商圈优惠金额",
          "freshParties": "商圈新用户数",
          "avgFlow": "商圈人均消费金额",
          "avgOrder": "商圈人均订单数",
          "avgOrderMoney": "商圈单均消费金额"
        }
      });
    }, 1000);
  },

  // 5
  'POST /skynet/sqView/getBaseAnalysis': (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": [{
            "dataTime": "2017-05-01",
            "ring": "0.33",
            "region": "浙江大区",
            "totalData": "103,900.00"
          },
          {
            "dataTime": "2017-05-02",
            "ring": "0.06",
            "region": "浙江大区",
            "totalData": "45,2566.00"
          },
          {
            "dataTime": "2017-05-03",
            "ring": "0.66",
            "region": "浙江大区",
            "totalData": "810,260.00"
          },
          {
            "dataTime": "2017-05-04",
            "ring": "0.96",
            "region": "浙江大区",
            "totalData": "180,260.00"
          }
        ],
        "others": {}
      });
    }, 1000);
  },

  // 6
  'POST /skynet/sqView/getRegionAnalysis': (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": [{
            "wayPort": "杭州公路港",
            "region": "浙江大区",
            "totalData": "667,160.00",
            "merchantName": "werdf"
          },
          {
            "wayPort": "杭州公路港",
            "region": "浙江大区",
            "totalData": "897,160.00",
            "merchantName": "fsdf"
          },
          {
            "wayPort": "杭州公路港",
            "region": "浙江大区",
            "totalData": "232,160.00",
            "merchantName": "fsdf"
          },
          {
            "wayPort": "杭州公路港",
            "region": "浙江大区",
            "totalData": "1244,160.00",
            "merchantName": "ewref"
          },
          {
            "wayPort": "杭州公路港",
            "region": "浙江大区",
            "totalData": "443,160.00",
            "merchantName": "vcxv"
          }
        ],
        "others": {}
      });
    }, 1000);
  },

  // 7
  'POST /skynet/sqView/getClassTypeAnalysis': (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": [{
            "data": "231.00",
            "dataTime": "2017-05-16",
            "region": "浙江大区",
            "classType": "保养"
          },
          {
            "data": "6,468.00",
            "dataTime": "2017-05-01",
            "region": "浙江大区",
            "classType": "商店"
          },
          {
            "data": "50.00",
            "dataTime": "2017-05-03",
            "region": "浙江大区",
            "classType": "宾馆"
          },
          {
            "data": "3,349.00",
            "dataTime": "2017-05-01",
            "region": "浙江大区",
            "classType": "餐馆"
          }
        ],
        "others": {}
      });
    }, 1000);
  },

  // 8
  'POST /skynet/sqView/getCouponTypeAnalysis': (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": [{
            "data": "126.00",
            "dataTime": "2017-06-04",
            "couponType": "FULL_CUT_COUPON",
            "region": "浙江大区"
          },
          {
            "data": "9,972.00",
            "dataTime": "2017-05-01",
            "couponType": "未知",
            "region": "浙江大区"
          }
        ],
        "others": {}
      });
    }, 1000);
  },

  // 9
  'POST /skynet/sqView/getMoneyTypeAnalysis': (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": [{
            "data": "1,056.00",
            "dataTime": "2017-05-01",
            "moneyType": "0",
            "region": "浙江大区"
          },
          {
            "data": "8,191.00",
            "dataTime": "2017-05-01",
            "moneyType": "1",
            "region": "浙江大区"
          },
          {
            "data": "755.00",
            "dataTime": "2017-05-01",
            "moneyType": "2",
            "region": "浙江大区"
          },
          {
            "data": "96.00",
            "dataTime": "2017-05-01",
            "moneyType": "3",
            "region": "浙江大区"
          }
        ],
        "others": {}
      });
    }, 1000);
  },

  // 10
  'POST /skynet/sqView/getFavorableTypeAnalysis': (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": [{
            "data": "435.00",
            "dataTime": "2017-05-01",
            "favorableType": "0",
            "region": "浙江大区"
          },
          {
            "data": "2,251.00",
            "dataTime": "2017-05-01",
            "favorableType": "1",
            "region": "浙江大区"
          },
          {
            "data": "7,367.00",
            "dataTime": "2017-05-01",
            "favorableType": "2",
            "region": "浙江大区"
          },
          {
            "data": "12.00",
            "dataTime": "2017-05-10",
            "favorableType": "3",
            "region": "浙江大区"
          },
          {
            "data": "33.00",
            "dataTime": "2017-05-11",
            "favorableType": "4",
            "region": "浙江大区"
          }
        ],
        "others": {}
      });
    }, 1000);
  },

  // 11
  'POST /skynet/sqView/getRankingAnalysis': (req, res) => {
    setTimeout(() => {
      let d = [];
      for (let i = 0; i < 500; i++) {
        d.push({
          "wayPort": "杭州公路港",
          "region": "浙江大区",
          "dataTime": "2017-05-02",
          "totalData": Math.random() * 500000,
          "merchantName": "如家快捷酒店" + Math.random() * 1000
        });
      }

      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": d,
        "others": {}
      });
    }, 1000);
  },

  'POST /skynet/sqView/getClassType': (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": "0000",
        "success": true,
        "totalCount": 0,
        "module": [
          "餐饮美食",
          "宾馆酒店",
          "运动休闲",
          "购物服务",
          "汽车维修",
          "汽车养护与装饰"
        ],
        "others": {}
      });
    }, 1000);
  },

  'POST /skynet/testgetexcel': (req, res) => {
    fs.readFile('./src/static/test.xls', (err, data) => {

      res.set({
        'Content-Disposition': "attachment",
        filename: 'testt.xls',
        'Content-Type': 'application/vnd.ms-excel;charset=utf-8'
      });
      res.end(data);
    });
  },

  'POST /skynet/cityView/queryOrganizationalRelationshipByAcl': (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "查询成功",
        "count": "",
        "data": [{
            "aclUnitId": "1117",
            "childrenList": "",
            "createDate": "2017-07-06 09:02:22.0",
            "createMan": "16965/孙力火",
            "description": "freight_finance",
            "parentNode": "1103",
            "productId": "myportal",
            "productType": "skynet_daily",
            "rank": "",
            "stampDate": "2017-07-06 09:02:22.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "freight_finance",
            "unitCode": "U1707060902005DRU8DJ",
            "unitLevel": "1",
            "unitName": "运费金融业务",
            "updateDate": "2017-07-06 09:02:22.0",
            "updateMan": "16965/孙力火"
          },
          {
            "aclUnitId": "1119",
            "childrenList": "",
            "createDate": "2017-07-06 09:02:49.0",
            "createMan": "16965/孙力火",
            "description": "tfpay",
            "parentNode": "1103",
            "productId": "myportal",
            "productType": "skynet_daily",
            "rank": "",
            "stampDate": "2017-07-06 09:02:49.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "tfpay",
            "unitCode": "U17070609020388O5NOF",
            "unitLevel": "1",
            "unitName": "支付业务",
            "updateDate": "2017-07-06 09:02:49.0",
            "updateMan": "16965/孙力火"
          },
          {
            "aclUnitId": "1111",
            "childrenList": "",
            "createDate": "2017-07-06 09:01:00.0",
            "createMan": "16965/孙力火",
            "description": "ehuodi",
            "parentNode": "1103",
            "productId": "myportal",
            "productType": "skynet_daily",
            "rank": "",
            "stampDate": "2017-07-06 09:01:00.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "ehuodi",
            "unitCode": "U1707060900041GRUCGB",
            "unitLevel": "1",
            "unitName": "易货嘀",
            "updateDate": "2017-07-06 09:01:00.0",
            "updateMan": "16965/孙力火"
          },
          {
            "aclUnitId": "1113",
            "childrenList": "",
            "createDate": "2017-07-06 09:01:43.0",
            "createMan": "16965/孙力火",
            "description": "truck_finance",
            "parentNode": "1103",
            "productId": "myportal",
            "productType": "skynet_daily",
            "rank": "",
            "stampDate": "2017-07-06 09:01:43.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "truck_finance",
            "unitCode": "U1707060901010J87IZZ",
            "unitLevel": "1",
            "unitName": "卡车金融业务",
            "updateDate": "2017-07-06 09:01:43.0",
            "updateMan": "16965/孙力火"
          },
          {
            "aclUnitId": "1109",
            "childrenList": "",
            "createDate": "2017-07-06 09:00:36.0",
            "createMan": "16965/孙力火",
            "description": "lujing",
            "parentNode": "1103",
            "productId": "myportal",
            "productType": "skynet_daily",
            "rank": "",
            "stampDate": "2017-07-06 09:00:36.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "lujing",
            "unitCode": "U1707060900021008FMX",
            "unitLevel": "1",
            "unitName": "陆鲸业务",
            "updateDate": "2017-07-06 09:00:36.0",
            "updateMan": "16965/孙力火"
          },
          {
            "aclUnitId": "1105",
            "childrenList": "",
            "createDate": "2017-07-06 08:59:27.0",
            "createMan": "16965/孙力火",
            "description": "",
            "parentNode": "1103",
            "productId": "myportal",
            "productType": "skynet_daily",
            "rank": "",
            "stampDate": "2017-07-06 08:59:27.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "all",
            "unitCode": "U1707060858017VI0K6G",
            "unitLevel": "1",
            "unitName": "全部业务",
            "updateDate": "2017-07-06 08:59:27.0",
            "updateMan": "16965/孙力火"
          },
          {
            "aclUnitId": "1107",
            "childrenList": "",
            "createDate": "2017-07-06 09:00:06.0",
            "createMan": "16965/孙力火",
            "description": "city_logistics",
            "parentNode": "1103",
            "productId": "myportal",
            "productType": "skynet_daily",
            "rank": "",
            "stampDate": "2017-07-06 09:00:06.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "city_logistics",
            "unitCode": "U17070608590401JD8EL",
            "unitLevel": "1",
            "unitName": "城市物流中心业务",
            "updateDate": "2017-07-06 09:00:06.0",
            "updateMan": "16965/孙力火"
          },
          {
            "aclUnitId": "1115",
            "childrenList": "",
            "createDate": "2017-07-06 09:02:02.0",
            "createMan": "16965/孙力火",
            "description": "insurance",
            "parentNode": "1103",
            "productId": "myportal",
            "productType": "skynet_daily",
            "rank": "",
            "stampDate": "2017-07-06 09:02:02.0",
            "status": "Effective",
            "statusEnumCn": "有效",
            "statusEnumName": "Effective",
            "type": "insurance",
            "unitCode": "U1707060901046IATY0G",
            "unitLevel": "1",
            "unitName": "保险业务",
            "updateDate": "2017-07-06 09:02:02.0",
            "updateMan": "16965/孙力火"
          }
        ]
      });
    }, 1000);
  },

  // tms BOSS platform-----------------------------------------------------------------
  // get partyname lists and wayport lists
  'POST /skynet/tmiBizTransportController/getPartyByUser': (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "",
        "count": "1",
        "data": [{
            "inputDate": "2017-04-06 09:45:35.0",
            "isDelete": "NO",
            "mobileNumber": "18887878787",
            "organization": "游世移动通信",
            "partyId": "567960595",
            "partyName": "anydata",
            "partyType": "企业",
            "realName": "王珊珊",
            "role": "承运商",
            "salesmansAndPartyId": "669",
            "salesmansId": "93",
            "stampDate": {
              "date": "5",
              "day": "3",
              "hours": "10",
              "minutes": "36",
              "month": "6",
              "seconds": "6",
              "time": "1499222166000",
              "timezoneOffset": "-480",
              "year": "117"
            },
            "updateMan": "BOSS系统录入",
            "updateTime": "2017-07-05 10:42:39.0",
            "wayPort": "杭州公路港"
          },
          {
            "inputDate": "2017-04-06 09:45:35.0",
            "isDelete": "NO",
            "mobileNumber": "18887878787",
            "organization": "游世移动通信",
            "partyId": "5354350595",
            "partyName": "gfdgrhta",
            "partyType": "企业",
            "realName": "王珊珊",
            "role": "承运商",
            "salesmansAndPartyId": "669",
            "salesmansId": "93",
            "stampDate": {
              "date": "5",
              "day": "3",
              "hours": "10",
              "minutes": "36",
              "month": "6",
              "seconds": "6",
              "time": "1499222166000",
              "timezoneOffset": "-480",
              "year": "117"
            },
            "updateMan": "BOSS系统录入",
            "updateTime": "2017-07-05 10:42:39.0",
            "wayPort": "杭州公路港"
          }
        ]
      });
    }, 2000)
  },

  // 根据订单编码查询TMS跟踪记录
  'POST /skynet/wayBill/getTrack': (req, res) => {
    setTimeout(() => {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": {
          "dataList": [{
            "serialNumber": 1,
            "partyName": null,
            "waybillStatus": "中转",
            "acceptStation": "【朱燕生的公司1】中转给【陈辉测试的网点名称】,名称：test货物、重量：22、体积：33、件数：11,中转单号: 1707280148",
            "inputDate": "2017-07-28 16:22:04",
            "inputMan": null,
            "status": null
          }],
          "columnList": [{
              "displayName": "序号",
              "columnName": "serialNumber"
            },
            {
              "displayName": "跟踪时间",
              "columnName": "inputDate"
            },
            {
              "displayName": "操作承运商",
              "columnName": "partyName"
            },
            {
              "displayName": "操作人",
              "columnName": "inputMan"
            },
            {
              "displayName": "货物状态",
              "columnName": "status"
            },
            {
              "displayName": "运单状态",
              "columnName": "waybillStatus"
            },
            {
              "displayName": "跟踪描述",
              "columnName": "acceptStation"
            }
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      });
    }, 2000);
  },

  // 获取运单状态的列表
  'POST /skynet/wayBill/getWayBillStatus': (req, res) => {
    setTimeout(() => {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": [
          "已受理",
          "提货中",
          "已提货",
          "已装车",
          "已发车",
          "已卸车",
          "已退货",
          "部分到达",
          "全部到达",
          "送货中",
          "已签收",
          "已作废",
          "已作废",
          "中转待受理",
          "中转已拒绝",
          "已中转",
          "中转已取消",
          "已转出"
        ],
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      });
    }, 2000);
  },

  // 根据订单编码获取费用信息
  'POST /skynet/wayBill/getFinAccounts': (req, res) => {
    setTimeout(() => {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": {
          "dataList": [{
              "realAmount": 0,
              "owner": "tony",
              "totalAmount": 10,
              "verifyDate": null,
              "ownerNum": "ML795",
              "unpaidAmount": 10,
              "payType": null,
              "toMailistId": null,
              "payMethod": null,
              "toWarehouseId": 425,
              "toObject": "组织单元承运商4",
              "feeType": "回单付车费"
            },
            {
              "realAmount": 0,
              "owner": "组织单元承运商4",
              "totalAmount": 10,
              "verifyDate": null,
              "ownerNum": "425",
              "unpaidAmount": 10,
              "payType": null,
              "toMailistId": null,
              "payMethod": null,
              "toWarehouseId": 427,
              "toObject": "朱燕生的公司1",
              "feeType": "现付中转费"
            },
            {
              "realAmount": 0,
              "owner": "tony",
              "totalAmount": 10,
              "verifyDate": null,
              "ownerNum": "ML795",
              "unpaidAmount": 10,
              "payType": null,
              "toMailistId": null,
              "payMethod": null,
              "toWarehouseId": 425,
              "toObject": "组织单元承运商4",
              "feeType": "现付车费"
            },
            {
              "realAmount": 0,
              "owner": "组织单元承运商4",
              "totalAmount": 11,
              "verifyDate": null,
              "ownerNum": "425",
              "unpaidAmount": 11,
              "payType": "非传化",
              "toMailistId": null,
              "payMethod": null,
              "toWarehouseId": 427,
              "toObject": "朱燕生的公司1",
              "feeType": "货款"
            }
          ],
          "columnList": [{
              "displayName": "费用类别",
              "columnName": "feeType"
            },
            {
              "displayName": "结算方式",
              "columnName": "feeTypeAndDirect"
            },
            {
              "displayName": "收款方",
              "columnName": "owner"
            },
            {
              "displayName": "应收金额",
              "columnName": "totalAmount"
            },
            {
              "displayName": "实收金额",
              "columnName": "realAmount"
            },
            {
              "displayName": "未收金额",
              "columnName": "unpaidAmount"
            },
            {
              "displayName": "收款日期",
              "columnName": "verifyDate"
            },
            {
              "displayName": "付款方",
              "columnName": "toObject"
            }
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      });
    }, 2000);
  },

  // 根据订单编码获取回单信息
  'POST /skynet/wayBill/getReceiptInfo': (req, res) => {
    setTimeout(() => {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": {
          "dataList": [{
            "tmiBizWaybillNum": "N984E9WB17071800001139",
            "childWaybillNum": null,
            "receiptNum": 1,
            "receiptMethod": "无需回单",
            "recepitReceiveDate": null,
            "signStatus": null,
            "signRemark": null,
            "recepitSendDate": null,
            "signDate": null,
            "parentWaybillNum": null
          }],
          "columnList": [{
              "displayName": "回单状态",
              "columnName": "receiptStatus"
            },
            {
              "displayName": "签收时间",
              "columnName": "signDate"
            },
            {
              "displayName": "签收状态",
              "columnName": "signStatus"
            },
            {
              "displayName": "回单数量",
              "columnName": "receiptNum"
            },
            {
              "displayName": "上游收单网点",
              "columnName": "parentWaybill"
            },
            {
              "displayName": "接收时间",
              "columnName": "recepitReceiveDate"
            },
            {
              "displayName": "下游寄单网点",
              "columnName": "childWaybill"
            },
            {
              "displayName": "寄出时间",
              "columnName": "recepitSendDate"
            },
            {
              "displayName": "备注",
              "columnName": "signRemark"
            }
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      });
    }, 2000);
  },

  // 根据运单号获取运单详情
  'POST /skynet/wayBill/getWayBillInfo': (req, res) => {
    setTimeout(() => {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {

        },
        "module": {
          "senderAddress": "undefined",
          "totalGoodsWeight": "117.00",
          "goodsPackage": "纸箱",
          "remark": "",
          "goodsCustomValue": "1.00",
          "deliveryMethod": "自提",
          "totalGoodsVolume": "117.00",
          "transferWarehouseName": "组织单元-承运商4",
          "returnPayFee": null,
          "endShortAddress": "市辖区",
          "waybillSource": "自开运单",
          "wayBillDate": "2017-07-18 19:56:51",
          "receivePayFee": null,
          "sendPayFee": "14.00",
          "receiverName": "233",
          "tmiBizTransferNo": "170724012B",
          "returnFee": "1.00",
          "senderPhone": "15712312412",
          "tmiBizTransportNum": "N984E9LD17072100000065",
          "agentFee": "11.00",
          "wayFee": "1.00",
          "payMethod": "现付",
          "receiverPhone": "15088880000",
          "tmiBizDeliveryNo": null,
          "toOrganizationName": "组织单元承运商4",
          "inputDate": "2017-07-18 19:56:51.0",
          "orderDate": null,
          "startShortAddress": "东城区",
          "senderFullAddress": null,
          "goodsName": "1",
          "tmiBizWaybillNum": "N984E9WB17071800000992",
          "waybillNo": "1707180000099",
          "tmiBizTransportNo": "1707210065",
          "takePayFee": "1.00",
          "tmiBizTransferNum": "PXK5E9TF1707280000015D",
          "tmiBizDeliveryNum": null,
          "receiverAddress": "undefined",
          "nextStatus": "中转已拒绝/中转已取消/已中转",
          "totalGoodsNumber": "117",
          "totalShippingFee": "7.00",
          "tmiBizPickNum": null,
          "tmiBizOrderNum": "N984E9LD1707240000012F",
          "agentExtractFee": "1.00",
          "predictTransitFee": null,
          "goodsType": "竹、藤、棕、草秸，芦苇等植物及其制品类",
          "endWarehouseName": "组织单元-承运商4",
          "tmiBizPickNo": null,
          "wayPort": "未知",
          "currentCity": null,
          "deliveryPayFee": "2.00",
          "receiverFullAddress": null,
          "waybillStatus": "中转待受理",
          "receiptMethod": "无需回单",
          "orderNo": null,
          "senderName": "asf1",
          "pickMethod": "false",
          "monthClearing": null,
          "carrierName": "朱燕生的公司1",
          "packingFee": "1.00",
          "startWarehouseName": null,
          "goodsValue": "1.00"
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 0
      });
    }, 2000);
  },

  // 获取运单列表信息
  'POST /skynet/wayBill/getWayBillLists': (req, res) => {
    setTimeout(() => {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": {
          "dataList": [{
              "agentExtractFee": null,
              "agentFee": null,
              "carrierName": "组织单元承运商4",
              "deliveryMethod": "自提",
              "deliveryPayFee": null,
              "endWarehouseName": "组织单元-承运商4",
              "goodsCustomValue": "1.00",
              "goodsName": "1",
              "goodsPackage": "托盘",
              "goodsType": "纺织品、衣被鞋帽类",
              "goodsValue": "1.00",
              "inputDate": "2017-07-17 11:16:57.0",
              "monthClearing": null,
              "orderNo": null,
              "packingFee": null,
              "payMethod": "现付",
              "pickMethod": null,
              "predictTransitFee": null,
              "receiptMethod": "签信封",
              "receivePayFee": null,
              "receiverAddress": "北京市市辖区-民和路99号",
              "receiverFullAddress": null,
              "receiverMobile": null,
              "receiverName": "233",
              "remark": null,
              "returnFee": null,
              "returnPayFee": null,
              "sendPayFee": null,
              "senderAddress": "北京市-长安大街100号",
              "senderFullAddress": null,
              "senderMobile": null,
              "senderName": "asf1",
              "startWarehouseName": null,
              "takePayFee": null,
              "tmiBizDeliveryNo": null,
              "tmiBizDeliveryNum": null,
              "tmiBizOrderNum": "N984E9WB1707170000019A",
              "tmiBizPickNo": null,
              "tmiBizPickNum": null,
              "tmiBizTransferNo": "1707240113",
              "tmiBizTransportNo": "1707210065",
              "tmiBizTransportNum": "N984E9LD17072100000065",
              "tmiBizWaybillNum": "N984E9WB1707170000019A",
              "toOrganizationName": "朱燕生的公司1",
              "totalGoodsNumber": "71",
              "totalGoodsVolume": "71.00",
              "totalGoodsWeight": "71.00",
              "totalShippingFee": "2.00",
              "transferWarehouseName": "组织单元-承运商4",
              "wayFee": "1.00",
              "wayPort": null,
              "waybillNum": "1707170000019",
              "waybillSource": "自开运单",
              "waybillStatus": "已发车"
            },
            {
              "agentExtractFee": null,
              "agentFee": null,
              "carrierName": "组织单元承运商4",
              "deliveryMethod": "自提",
              "deliveryPayFee": null,
              "endWarehouseName": "组织单元-承运商4",
              "goodsCustomValue": "1.00",
              "goodsName": "1",
              "goodsPackage": "托盘",
              "goodsType": "纺织品、衣被鞋帽类",
              "goodsValue": "1.00",
              "inputDate": "2017-07-17 11:16:57.0",
              "monthClearing": null,
              "orderNo": null,
              "packingFee": null,
              "payMethod": "现付",
              "pickMethod": null,
              "predictTransitFee": null,
              "receiptMethod": "签信封",
              "receivePayFee": null,
              "receiverAddress": "北京市市辖区-民和路99号",
              "receiverFullAddress": null,
              "receiverMobile": null,
              "receiverName": "233",
              "remark": null,
              "returnFee": null,
              "returnPayFee": null,
              "sendPayFee": null,
              "senderAddress": "北京市-长安大街100号",
              "senderFullAddress": null,
              "senderMobile": null,
              "senderName": "asf1",
              "startWarehouseName": null,
              "takePayFee": null,
              "tmiBizDeliveryNo": null,
              "tmiBizDeliveryNum": null,
              "tmiBizOrderNum": "N984E9WB1707170000019A",
              "tmiBizPickNo": null,
              "tmiBizPickNum": null,
              "tmiBizTransferNo": "1707240113",
              "tmiBizTransportNo": "1707210065",
              "tmiBizTransportNum": "N984E9LD17072100000065",
              "tmiBizWaybillNum": "N984E9WB1707170000019A",
              "toOrganizationName": "朱燕生的公司1",
              "totalGoodsNumber": "71",
              "totalGoodsVolume": "71.00",
              "totalGoodsWeight": "71.00",
              "totalShippingFee": "2.00",
              "transferWarehouseName": "组织单元-承运商4",
              "wayFee": "1.00",
              "wayPort": null,
              "waybillNum": "1707170000019",
              "waybillSource": "自开运单",
              "waybillStatus": "已发车"
            }
          ],
          "columnList": [{
              "displayName": "运单编码",
              "columnName": "tmiBizWaybillNum"
            },
            {
              "displayName": "运单号",
              "columnName": "waybillNum"
            },
            {
              "displayName": "订单编码",
              "columnName": "tmiBizOrderNum"
            },
            {
              "displayName": "订单号",
              "columnName": "orderNo"
            },
            {
              "displayName": "收货承运商",
              "columnName": "carrierName"
            },
            {
              "displayName": "中转承运商",
              "columnName": "toOrganizationName"
            },
            {
              "displayName": "运单状态",
              "columnName": "waybillStatus"
            },
            {
              "displayName": "运单下单时间",
              "columnName": "inputDate"
            },
            {
              "displayName": "货物名称",
              "columnName": "goodsName"
            },
            {
              "displayName": "货物包装",
              "columnName": "goodsPackage"
            },
            {
              "displayName": "货物类型",
              "columnName": "goodsType"
            },
            {
              "displayName": "货物数量",
              "columnName": "goodsNumber"
            },
            {
              "displayName": "货物体积",
              "columnName": "goodsVolume"
            },
            {
              "displayName": "货物价值",
              "columnName": "goodsValue"
            },
            {
              "displayName": "货物重量",
              "columnName": "goodsWeight"
            },
            {
              "displayName": "中转地网点",
              "columnName": "transferWarehouseName"
            },
            {
              "displayName": "始发网点",
              "columnName": "startWarehouseName"
            },
            {
              "displayName": "达到网点",
              "columnName": "endWarehouseName"
            },
            {
              "displayName": "付款方式",
              "columnName": "payMethod"
            },
            {
              "displayName": "接货方式",
              "columnName": "pickMethod"
            },
            {
              "displayName": "配送方式",
              "columnName": "deliveryMethod"
            },
            {
              "displayName": "运费合计",
              "columnName": "totalShippingFee"
            },
            {
              "displayName": "运费",
              "columnName": "wayFee"
            },
            {
              "displayName": "保价费",
              "columnName": "goodsCustomValue"
            },
            {
              "displayName": "包装费",
              "columnName": "packingFee"
            },
            {
              "displayName": "送货费",
              "columnName": "deliveryPayFee"
            },
            {
              "displayName": "预估中转费",
              "columnName": "predictTransitFee"
            },
            {
              "displayName": "接货费",
              "columnName": "takePayFee"
            },
            {
              "displayName": "返款费",
              "columnName": "returnFee"
            },
            {
              "displayName": "货款金额",
              "columnName": "agentFee"
            },
            {
              "displayName": "货款手续费",
              "columnName": "agentExtractFee"
            },
            {
              "displayName": "现付",
              "columnName": "sendPayFee"
            },
            {
              "displayName": "到付",
              "columnName": "receivePayFee"
            },
            {
              "displayName": "回单付",
              "columnName": "returnPayFee"
            },
            {
              "displayName": "月结",
              "columnName": "monthClearing"
            },
            {
              "displayName": "发货人",
              "columnName": "senderName"
            },
            {
              "displayName": "发货人手机号",
              "columnName": "senderMobile"
            },
            {
              "displayName": "发货地址",
              "columnName": "senderAddress"
            },
            {
              "displayName": "发货详细地址",
              "columnName": "senderFullAddress"
            },
            {
              "displayName": "收货人",
              "columnName": "receiverName"
            },
            {
              "displayName": "收货人手机号",
              "columnName": "receiverMobile"
            },
            {
              "displayName": "收货地址",
              "columnName": "receiverAddress"
            },
            {
              "displayName": "收货详细地址",
              "columnName": "receiverFullAddress"
            },
            {
              "displayName": "公路港",
              "columnName": "wayPort"
            },
            {
              "displayName": "运单来源",
              "columnName": "waybillSource"
            },
            {
              "displayName": "回单要求",
              "columnName": "receiptMethod"
            },
            {
              "displayName": "提货单号",
              "columnName": "tmiBizPickNo"
            },
            {
              "displayName": "提货单编码",
              "columnName": "tmiBizPickNum"
            },
            {
              "displayName": "配送单号",
              "columnName": "tmiBizDeliveryNo"
            },
            {
              "displayName": "配载单编码",
              "columnName": "tmiBizDeliveryNum"
            },
            {
              "displayName": "配载单号",
              "columnName": "tmiBizTransportNo"
            },
            {
              "displayName": "中转单编码",
              "columnName": "tmiBizTransportNum"
            },
            {
              "displayName": "中转单号",
              "columnName": "tmiBizTransferNo"
            },
            {
              "displayName": "备注",
              "columnName": "remark"
            }
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 199
      });
    }, 2000);
  },

  // 1.1.2根据承运商查询配载单的信息
  'POST /skynet/tmiBizTransportController/getTmiBizTransportListByParty': (req, res) => {
    setTimeout(() => {
      res.json({
        "result": "success",
        "msg": "",
        "count": "2",
        "module": {
          "columnList": [{
              "displayName": "承运商",
              "columnName": "partyName"
            },
            {
              "displayName": "配载单号",
              "columnName": "tmiBizTransportNum"
            },
            {
              "displayName": "车牌号",
              "columnName": "carNum"
            },
            {
              "displayName": "司机姓名",
              "columnName": "driverName"
            },
            {
              "displayName": "司机电话",
              "columnName": "driverPhone"
            },
            {
              "displayName": "配载单创建时间",
              "columnName": "inputDate"
            },
            {
              "displayName": "配载单状态",
              "columnName": "transportStatus"
            },
            {
              "displayName": "配载单类型",
              "columnName": "type"
            },
            {
              "displayName": "公路港",
              "columnName": "wayPort"
            },
            {
              "displayName": "车次号",
              "columnName": "tmiBizLoadNo"
            },
            {
              "displayName": "起始网店",
              "columnName": "startWarehouse"
            },
            {
              "displayName": "到达网点",
              "columnName": "arrivalWarehouse"
            },
            {
              "displayName": "发车时间",
              "columnName": "startTime"
            },
            {
              "displayName": "到达时间",
              "columnName": "completionTime"
            },
            {
              "displayName": "现付运输费",
              "columnName": "spotTransportCost"
            },
            {
              "displayName": "到付运输费",
              "columnName": "arrivalTransportCost"
            },
            {
              "displayName": "回付运输费",
              "columnName": "receiptTransportCost"
            },
            {
              "displayName": "到站装卸费",
              "columnName": "arrivalHandingCost"
            },
            {
              "displayName": "运单数量",
              "columnName": "waybillCount"
            },
            {
              "displayName": "货物数量",
              "columnName": "totalGoodsNumber"
            },
            {
              "displayName": "货物重量",
              "columnName": "totalGoodsWeight"
            },
            {
              "displayName": "货物体积",
              "columnName": "totalGoodsVolume"
            },
            {
              "displayName": "总运费",
              "columnName": "totalShippingFee"
            },
            {
              "displayName": "实际运费",
              "columnName": "realShippingFee"
            },
            {
              "displayName": "现付运费",
              "columnName": "sendPayFee"
            },
            {
              "displayName": "到付运费",
              "columnName": "receivePayFee"
            },
            {
              "displayName": "月结",
              "columnName": "monthClearing"
            },
            {
              "displayName": "代收货款",
              "columnName": "agentFeeSum"
            },
            {
              "displayName": "代收货款手续费",
              "columnName": "agentExtractFee"
            },
            {
              "displayName": "送货费",
              "columnName": "deliveryPayFee"
            },
            {
              "displayName": "实际中转费",
              "columnName": "transferFee"
            },
            {
              "displayName": "预估中转费",
              "columnName": "predictTransitFee"
            }
          ],
          "dataList": [{
              "agentExtractFee": "",
              "agentFeeSum": "",
              "arrivalHandingCost": "1234.00",
              "arrivalTransportCost": "1234.00",
              "arrivalWarehouse": "arrivalWarehouse-12482029",
              "carNum": "carNum-12482029",
              "completionTime": "2017-06-29 00:00:00.0",
              "deliveryPayFee": "",
              "driverName": "driverName-12482029",
              "driverPhone": "ne-12482029",
              "inputDate": "2017-06-29 00:00:00.0",
              "lessThenInputDate": "",
              "monthClearing": "",
              "moreThanInputDate": "",
              "orderByClause": "",
              "orderRole": "",
              "page": "",
              "pageNum": "1",
              "pageSize": "10",
              "partyId": "1234",
              "partyName": "",
              "predictTransitFee": "",
              "realShippingFee": "",
              "receiptTransportCost": "1234.00",
              "receivePayFee": "",
              "sendPayFee": "",
              "spotTransportCost": "1234.00",
              "startNum": "0",
              "startTime": "2017-06-29 00:00:00.0",
              "startWarehouse": "startWarehouse-12482029",
              "tmiBizLoadNo": "tmiBizLoadNo-12482029",
              "tmiBizTransportNum": "tmiBizTransportNo-12482029",
              "totalGoodsNumber": "",
              "totalGoodsVolume": "",
              "totalGoodsWeight": "",
              "totalShippingFee": "",
              "transferFee": "",
              "transportStatus": "transportStatus-12482029",
              "type": "type-12482029",
              "wayPort": "",
              "waybillCount": "0"
            },
            {
              "agentExtractFee": "",
              "agentFeeSum": "",
              "arrivalHandingCost": "1234.00",
              "arrivalTransportCost": "1234.00",
              "arrivalWarehouse": "arrivalWarehouse-12840034",
              "carNum": "carNum-12840034",
              "completionTime": "2017-06-24 00:00:00.0",
              "deliveryPayFee": "",
              "driverName": "driverName-12840034",
              "driverPhone": "ne-12840034",
              "inputDate": "2017-06-24 00:00:00.0",
              "lessThenInputDate": "",
              "monthClearing": "",
              "moreThanInputDate": "",
              "orderByClause": "",
              "orderRole": "",
              "page": "",
              "pageNum": "1",
              "pageSize": "10",
              "partyId": "1234",
              "partyName": "",
              "predictTransitFee": "",
              "realShippingFee": "",
              "receiptTransportCost": "1234.00",
              "receivePayFee": "",
              "sendPayFee": "",
              "spotTransportCost": "1234.00",
              "startNum": "0",
              "startTime": "2017-06-24 00:00:00.0",
              "startWarehouse": "startWarehouse-12840034",
              "tmiBizLoadNo": "tmiBizLoadNo-12840034",
              "tmiBizTransportNum": "tmiBizTransportNo-12840034",
              "totalGoodsNumber": "",
              "totalGoodsVolume": "",
              "totalGoodsWeight": "",
              "totalShippingFee": "",
              "transferFee": "",
              "transportStatus": "transportStatus-12840034",
              "type": "type-12840034",
              "wayPort": "",
              "waybillCount": "0"
            }
          ]
        }
      })
    }, 2000)
  },

  // 1.1.4查询中转单的接口
  'POST /skynet/tmiBizTransfer/getTmiBizTransferList': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {

        },
        "module": {
          "dataList": [{
            "arrivalWarehouse": "arrivalWarehouse-10099841",
            "fromPartyName": "fromPartyName-10099841",
            "remark": "remark-10099841",
            "tmiBizTransferNo": "tmiBizTransferNo-10099841",
            "toContact": "toContact-10099841",
            "toContactPhone": "toContactPhone-10099841",
            "toPartyName": "toPartyName-10099841",
            "transferCost": 1631.0,
            "transferDate": "2012-07-13 00:00:00",
            "transferFeePayMethod": "transferFeePayMethod-10099841",
            "transferStatus": "transferStatus-10099841",
            "updateMan": "updateMan-10099841",
            "wayPort": null,
            "waybillNum": null,
            "waybillSource": null
          }],
          "columnList": [{
              "displayName": "中转单号",
              "columnName": "tmiBizTransferNo"
            },
            {
              "displayName": "运单号",
              "columnName": "waybillNum"
            },
            {
              "displayName": "运单来源",
              "columnName": "waybillSource"
            },
            {
              "displayName": "中转日期",
              "columnName": "transferDate"
            },
            {
              "displayName": "中转状态",
              "columnName": "transferStatus"
            },
            {
              "displayName": "公路港",
              "columnName": "wayPort"
            },
            {
              "displayName": "中转出承运商名称",
              "columnName": "fromPartyName"
            },
            {
              "displayName": "中转入承运商名称",
              "columnName": "toPartyName"
            },
            {
              "displayName": "中转入网点",
              "columnName": "arrivalWarehouse"
            },
            {
              "displayName": "中转费",
              "columnName": "transferCost"
            },
            {
              "displayName": "结算方式",
              "columnName": "transferFeePayMethod"
            },
            {
              "displayName": "联系人",
              "columnName": "toContact"
            },
            {
              "displayName": "联系电话",
              "columnName": "toContactPhone"
            },
            {
              "displayName": "备注",
              "columnName": "remark"
            },
            {
              "displayName": "操作人",
              "columnName": "updateMan"
            }
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 1.1.5查询中转单状态接口
  'POST /skynet/tmiBizTransfer/getTransferStatus': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {

        },
        "module": [
          "待中转",
          "待受理",
          "处理中",
          "已中转",
          "已拒绝"
        ],
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 预警中心
  // 查询当前登录用户所有未读消息
  'POST /skynet/userMessage/unreadMessageCount': (req, res) => {
    setTimeout(function () {
      res.json({
        "success": true,
        "totalCount": 193,
        "module": {
          'info': [{
            title: '预警',
            count: 232
          }, {
            title: '审核',
            count: 232
          }],
        },
        "models": {}
      });
    }, 2000);
  },

  //  通知detail
  'POST /skynet/userMessage/message': (req, res) => {
    setTimeout(function () {
      res.json({
        "success": true,
        "totalCount": 193,
        "module": {
          'inputDate': '2017-5-6',
          'title': 'lumb ashd dasjbxd d ads ad s',
          'content': '1.sfdsfdsf cinnet content da \n2.dsffds wdec ewdew\n3.asdasd',
          'messageSourceId': '33,454,66,66'
        },
        "models": {}
      })
    }, 2000);
  },

  // 状态列表list
  'POST /skynet/UserMessageTask_smallType': (req, res) => {
    setTimeout(function () {
      res.json({
        "success": true,
        "totalCount": 193,
        "module": ['系统升级', '知识库'],
        "models": {}
      })
    }, 2000);
  },
  'POST /skynet/UserMessageTask_Status': (req, res) => {
    setTimeout(function () {
      res.json({
        "success": true,
        "totalCount": 193,
        "module": ['暂存', '未推送', '已推送'],
        "models": {}
      })
    }, 2000);
  },

  // 分页查询当前登录用户分页消息
  'POST /skynet/userMessage/messagePage': (req, res) => {
    setTimeout(function () {
      res.json({
        "success": true,
        "totalCount": 100,
        "module": [{
            "userMessageId": "722",
            "inputDate": "Aug 10, 2017 6:42:05 PM",
            "stampDate": "Aug 15, 2017 2:26:32 PM",
            "isDelete": "NO",
            "content": 'censorshiplist',
            "dataTime": "2017-08-10",
            "messageSourceId": "1484",
            "isRead": "NO",
            "title": "【预警】【运单统计】【运单_公路港_日】浙江大区杭州公路港 签收货物重量 2017-08-09",
            "msgType": "1",
            "userId": 17704
          },
          {
            "userMessageId": "722",
            "inputDate": "Aug 10, 2017 6:42:05 PM",
            "stampDate": "Aug 15, 2017 2:26:32 PM",
            "isDelete": "NO",
            "dataTime": "2017-08-10",
            "messageSourceId": "1484",
            "isRead": "NO",
            "title": "【预警】【运单统计】【运单_公路港_日】浙江大区杭州公路港 签收货物重量 2017-08-09",
            "msgType": "1",
            "userId": 17704
          }
        ],
        "models": {

        }
      })
    }, 2000);
  },

  // 标记为已读
  'POST /skynet/userMessage/read': (req, res) => {
    setTimeout(function () {
      res.json({
        "success": true,
        "totalCount": 1,
        "module": true,
        "models": {}
      })
    }, 2000);
  },

  // 查询预警结果详情(注意不会标记消息已读)
  'POST /skynet/earlyWarningResult': (req, res) => {
    setTimeout(function () {
      res.json({
        "success": true,
        "totalCount": 1,
        "module": {
          "columnList": [{
              "tableColumnName": "alias",
              "displayName": "维度"
            },
            {
              "tableColumnName": "displayName",
              "displayName": "指标名称"
            },
            {
              "tableColumnName": "priorday",
              "displayName": "昨日日期"
            },
            {
              "tableColumnName": "priordayValue",
              "displayName": "昨日数据/吨"
            },
            {
              "tableColumnName": "yesterday",
              "displayName": "今日日期"
            },
            {
              "tableColumnName": "yesterdayValue",
              "displayName": "今日数据/吨"
            },
            {
              "tableColumnName": "percentage",
              "displayName": "环比％"
            }
          ],
          "dataList": [{
            "earlyWarningResultId": "1484",
            "inputDate": "2017-08-10 18:42:05",
            "stampDate": "2017-08-10 16:40:22",
            "isDelete": "NO",
            "dataTime": "2017-08-10",
            "earlyWarningTaskId": "8",
            "viewName": "ShippingOrders_Wayport_D",
            "tableColumnName": "signTotalWeight",
            "region": "西北大区",
            "wayport": "宝鸡公路港",
            "yesterday": "2017-08-05",
            "yesterdayValue": 95.0,
            "priorday": "2017-08-04",
            "priordayValue": 3108.1,
            "menuName": "运单统计",
            "alias": "运单 公路港 日",
            "displayName": "签收货物重量",
            "percentage": 96.94
          }]
        },
        "models": {

        }
      });
    }, 2000);
  },

  // 这个获取配载单状态
  'POST /skynet/tmiBizTransportController/getTransportStatus': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": [
          "配载单船台",
          "提货中",
          "已提货",
          "已装车",
          "已发车",
          "已卸车",
          "已退货",
          "部分到达",
          "全部到达",
          "送货中",
          "已签收",
          "已作废",
          "已作废",
          "中转待受理",
          "中转已拒绝",
          "已中转",
          "中转已取消",
          "已转出"
        ],
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 1.1 查询车辆信息列表接口
  'POST /skynet/carAndDriverInfo/getCarInfoLists': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {

        },
        "module": {
          "dataList": [{
              "annualVerificationDate": null,
              "businessNumber": null,
              "carBrand": null,
              "carCustomNo": null,
              "carHigh": 7,
              "carLightWeight": null,
              "carLong": 5,
              "carStatus": "待装车",
              "carStruct": "挂车",
              "carUseType": null,
              "carWidth": 6,
              "driver1DrivingDueDate": null,
              "driver1DrivingLicenseNumber": null,
              "driver1Mobile": null,
              "driver1OccupationalNumber": null,
              "driver1ToName": null,
              "driver2": null,
              "driver2DrivingDueDate": null,
              "driver2DrivingLicenseNumber": null,
              "driver2Mobile": null,
              "driver2OccupationalNumber": null,
              "driver2toName": null,
              "driverId1": null,
              "drivingNumber": null,
              "engineNo": null,
              "forShort": null,
              "gpsNumber": null,
              "inputDate": "2017-07-29 22:00:18.0",
              "manufactureDate": null,
              "mileage": null,
              "name": "c151229002",
              "partyId": 1647473,
              "purchaseDate": null,
              "region": null,
              "registrationDate": null,
              "relationship": null,
              "simpleCode": null,
              "status": "启用",
              "tciCompany": null,
              "tciExpireDate": null,
              "tciInsuredDate": null,
              "tciNo": null,
              "tmiWarehouseRelaCarId": 375,
              "trailerPlateNumber": null,
              "vciCompany": null,
              "vciExpireDate": null,
              "vciInsuredDate": null,
              "vciNo": null,
              "verificationLoadCapacity": null,
              "verificationLoadQuality": null,
              "vinNo": null,
              "warehouseId": 835,
              "warehouseInputDate": "2017-07-29 21:51:51.0",
              "warehouseName": "c151229002",
              "warehouseSubType": "自营",
              "warehouseType": "公司",
              "wayport": "未知"
            },
            {
              "annualVerificationDate": null,
              "businessNumber": null,
              "carBrand": null,
              "carCustomNo": null,
              "carHigh": null,
              "carLightWeight": null,
              "carLong": null,
              "carStatus": "待装车",
              "carStruct": "牵引车",
              "carUseType": null,
              "carWidth": null,
              "driver1DrivingDueDate": null,
              "driver1DrivingLicenseNumber": "111111111111111",
              "driver1Mobile": null,
              "driver1OccupationalNumber": null,
              "driver1ToName": "xxf1",
              "driver2": null,
              "driver2DrivingDueDate": null,
              "driver2DrivingLicenseNumber": null,
              "driver2Mobile": null,
              "driver2OccupationalNumber": null,
              "driver2toName": null,
              "driverId1": 1773,
              "drivingNumber": "行驶证001",
              "engineNo": null,
              "forShort": null,
              "gpsNumber": null,
              "inputDate": "2017-07-29 22:00:18.0",
              "manufactureDate": null,
              "mileage": null,
              "name": "c151229002",
              "partyId": 1647473,
              "purchaseDate": null,
              "region": null,
              "registrationDate": null,
              "relationship": null,
              "simpleCode": null,
              "status": "启用",
              "tciCompany": null,
              "tciExpireDate": null,
              "tciInsuredDate": null,
              "tciNo": null,
              "tmiWarehouseRelaCarId": 377,
              "trailerPlateNumber": null,
              "vciCompany": null,
              "vciExpireDate": null,
              "vciInsuredDate": null,
              "vciNo": null,
              "verificationLoadCapacity": null,
              "verificationLoadQuality": null,
              "vinNo": null,
              "warehouseId": 835,
              "warehouseInputDate": "2017-07-29 21:51:51.0",
              "warehouseName": "c151229002",
              "warehouseSubType": "自营",
              "warehouseType": "公司",
              "wayport": "未知"
            },
            {
              "annualVerificationDate": null,
              "businessNumber": null,
              "carBrand": null,
              "carCustomNo": null,
              "carHigh": 3,
              "carLightWeight": null,
              "carLong": 18,
              "carStatus": "待装车",
              "carStruct": "平板",
              "carUseType": null,
              "carWidth": 3,
              "driver1DrivingDueDate": null,
              "driver1DrivingLicenseNumber": "111111111111111",
              "driver1Mobile": null,
              "driver1OccupationalNumber": null,
              "driver1ToName": "冯诚诚1",
              "driver2": null,
              "driver2DrivingDueDate": null,
              "driver2DrivingLicenseNumber": null,
              "driver2Mobile": null,
              "driver2OccupationalNumber": null,
              "driver2toName": null,
              "driverId1": 1789,
              "drivingNumber": "1111",
              "engineNo": null,
              "forShort": "下沙14",
              "gpsNumber": null,
              "inputDate": "2017-07-30 09:39:30.0",
              "manufactureDate": null,
              "mileage": null,
              "name": "个体户-冯诚诚",
              "partyId": 651355,
              "purchaseDate": null,
              "region": null,
              "registrationDate": null,
              "relationship": null,
              "simpleCode": "XS14",
              "status": "启用",
              "tciCompany": null,
              "tciExpireDate": null,
              "tciInsuredDate": null,
              "tciNo": null,
              "tmiWarehouseRelaCarId": 379,
              "trailerPlateNumber": null,
              "vciCompany": null,
              "vciExpireDate": null,
              "vciInsuredDate": null,
              "vciNo": null,
              "verificationLoadCapacity": null,
              "verificationLoadQuality": null,
              "vinNo": null,
              "warehouseId": 851,
              "warehouseInputDate": "2017-07-30 09:29:54.0",
              "warehouseName": "杭州分拨中心",
              "warehouseSubType": "自营",
              "warehouseType": "普通网点",
              "wayport": "未知"
            },
            {
              "annualVerificationDate": null,
              "businessNumber": null,
              "carBrand": null,
              "carCustomNo": null,
              "carHigh": null,
              "carLightWeight": null,
              "carLong": null,
              "carStatus": "待装车",
              "carStruct": "集装箱车",
              "carUseType": null,
              "carWidth": null,
              "driver1DrivingDueDate": null,
              "driver1DrivingLicenseNumber": "222333443445564",
              "driver1Mobile": null,
              "driver1OccupationalNumber": null,
              "driver1ToName": "MR.ZHE",
              "driver2": null,
              "driver2DrivingDueDate": null,
              "driver2DrivingLicenseNumber": null,
              "driver2Mobile": null,
              "driver2OccupationalNumber": null,
              "driver2toName": null,
              "driverId1": 1795,
              "drivingNumber": "4435",
              "engineNo": null,
              "forShort": null,
              "gpsNumber": null,
              "inputDate": "2017-07-30 09:41:16.0",
              "manufactureDate": null,
              "mileage": null,
              "name": "个体户-杨艳*5725",
              "partyId": 2873107,
              "purchaseDate": null,
              "region": null,
              "registrationDate": null,
              "relationship": null,
              "simpleCode": null,
              "status": "启用",
              "tciCompany": null,
              "tciExpireDate": null,
              "tciInsuredDate": null,
              "tciNo": null,
              "tmiWarehouseRelaCarId": 381,
              "trailerPlateNumber": null,
              "vciCompany": null,
              "vciExpireDate": null,
              "vciInsuredDate": null,
              "vciNo": null,
              "verificationLoadCapacity": null,
              "verificationLoadQuality": null,
              "vinNo": null,
              "warehouseId": 853,
              "warehouseInputDate": "2017-07-30 09:29:58.0",
              "warehouseName": "个体户-杨艳*5725",
              "warehouseSubType": "自营",
              "warehouseType": "公司",
              "wayport": "未知"
            },
            {
              "annualVerificationDate": null,
              "businessNumber": null,
              "carBrand": null,
              "carCustomNo": null,
              "carHigh": null,
              "carLightWeight": null,
              "carLong": null,
              "carStatus": "待装车",
              "carStruct": "平板",
              "carUseType": null,
              "carWidth": null,
              "driver1DrivingDueDate": null,
              "driver1DrivingLicenseNumber": "323232223322322",
              "driver1Mobile": null,
              "driver1OccupationalNumber": null,
              "driver1ToName": "老李",
              "driver2": null,
              "driver2DrivingDueDate": null,
              "driver2DrivingLicenseNumber": null,
              "driver2Mobile": null,
              "driver2OccupationalNumber": null,
              "driver2toName": null,
              "driverId1": 1853,
              "drivingNumber": "1222",
              "engineNo": null,
              "forShort": null,
              "gpsNumber": null,
              "inputDate": "2017-07-30 10:49:38.0",
              "manufactureDate": null,
              "mileage": null,
              "name": "万方物流",
              "partyId": 3391011,
              "purchaseDate": null,
              "region": null,
              "registrationDate": null,
              "relationship": null,
              "simpleCode": null,
              "status": "启用",
              "tciCompany": null,
              "tciExpireDate": null,
              "tciInsuredDate": null,
              "tciNo": null,
              "tmiWarehouseRelaCarId": 383,
              "trailerPlateNumber": null,
              "vciCompany": null,
              "vciExpireDate": null,
              "vciInsuredDate": null,
              "vciNo": null,
              "verificationLoadCapacity": null,
              "verificationLoadQuality": null,
              "vinNo": null,
              "warehouseId": 871,
              "warehouseInputDate": "2017-07-30 09:37:59.0",
              "warehouseName": "威海营业处",
              "warehouseSubType": "自营",
              "warehouseType": "普通网点",
              "wayport": "未知"
            },
            {
              "annualVerificationDate": null,
              "businessNumber": null,
              "carBrand": null,
              "carCustomNo": null,
              "carHigh": 2.5,
              "carLightWeight": 20,
              "carLong": 17.5,
              "carStatus": "待装车",
              "carStruct": "高栏",
              "carUseType": "长途",
              "carWidth": 2.5,
              "driver1DrivingDueDate": null,
              "driver1DrivingLicenseNumber": "111111111111111",
              "driver1Mobile": null,
              "driver1OccupationalNumber": null,
              "driver1ToName": "FCC",
              "driver2": null,
              "driver2DrivingDueDate": null,
              "driver2DrivingLicenseNumber": null,
              "driver2Mobile": null,
              "driver2OccupationalNumber": null,
              "driver2toName": null,
              "driverId1": 1861,
              "drivingNumber": "111",
              "engineNo": null,
              "forShort": null,
              "gpsNumber": null,
              "inputDate": "2017-07-30 13:30:26.0",
              "manufactureDate": null,
              "mileage": 0,
              "name": "个体户-冯诚诚",
              "partyId": 651355,
              "purchaseDate": null,
              "region": null,
              "registrationDate": null,
              "relationship": "外部雇车",
              "simpleCode": null,
              "status": "启用",
              "tciCompany": null,
              "tciExpireDate": null,
              "tciInsuredDate": null,
              "tciNo": null,
              "tmiWarehouseRelaCarId": 387,
              "trailerPlateNumber": null,
              "vciCompany": null,
              "vciExpireDate": null,
              "vciInsuredDate": null,
              "vciNo": null,
              "verificationLoadCapacity": 50,
              "verificationLoadQuality": 49,
              "vinNo": null,
              "warehouseId": 849,
              "warehouseInputDate": "2017-07-30 09:28:24.0",
              "warehouseName": "个体户-冯诚诚",
              "warehouseSubType": "自营",
              "warehouseType": "公司",
              "wayport": "未知"
            },
            {
              "annualVerificationDate": null,
              "businessNumber": null,
              "carBrand": null,
              "carCustomNo": null,
              "carHigh": null,
              "carLightWeight": null,
              "carLong": null,
              "carStatus": "待装车",
              "carStruct": "平板",
              "carUseType": null,
              "carWidth": null,
              "driver1DrivingDueDate": null,
              "driver1DrivingLicenseNumber": "222222222222222",
              "driver1Mobile": null,
              "driver1OccupationalNumber": null,
              "driver1ToName": "海老大",
              "driver2": null,
              "driver2DrivingDueDate": null,
              "driver2DrivingLicenseNumber": null,
              "driver2Mobile": null,
              "driver2OccupationalNumber": null,
              "driver2toName": null,
              "driverId1": 1867,
              "drivingNumber": "111",
              "engineNo": null,
              "forShort": null,
              "gpsNumber": null,
              "inputDate": "2017-07-30 14:05:15.0",
              "manufactureDate": null,
              "mileage": null,
              "name": "万方物流",
              "partyId": 3391011,
              "purchaseDate": null,
              "region": null,
              "registrationDate": null,
              "relationship": null,
              "simpleCode": null,
              "status": "启用",
              "tciCompany": null,
              "tciExpireDate": null,
              "tciInsuredDate": null,
              "tciNo": null,
              "tmiWarehouseRelaCarId": 389,
              "trailerPlateNumber": null,
              "vciCompany": null,
              "vciExpireDate": null,
              "vciInsuredDate": null,
              "vciNo": null,
              "verificationLoadCapacity": null,
              "verificationLoadQuality": null,
              "vinNo": null,
              "warehouseId": 871,
              "warehouseInputDate": "2017-07-30 09:37:59.0",
              "warehouseName": "威海营业处",
              "warehouseSubType": "自营",
              "warehouseType": "普通网点",
              "wayport": "未知"
            },
            {
              "annualVerificationDate": null,
              "businessNumber": null,
              "carBrand": null,
              "carCustomNo": null,
              "carHigh": null,
              "carLightWeight": null,
              "carLong": null,
              "carStatus": "待装车",
              "carStruct": "平板",
              "carUseType": null,
              "carWidth": null,
              "driver1DrivingDueDate": null,
              "driver1DrivingLicenseNumber": "333333333333333",
              "driver1Mobile": null,
              "driver1OccupationalNumber": null,
              "driver1ToName": "333",
              "driver2": null,
              "driver2DrivingDueDate": null,
              "driver2DrivingLicenseNumber": null,
              "driver2Mobile": null,
              "driver2OccupationalNumber": null,
              "driver2toName": null,
              "driverId1": 1869,
              "drivingNumber": "333",
              "engineNo": null,
              "forShort": null,
              "gpsNumber": null,
              "inputDate": "2017-07-30 14:13:01.0",
              "manufactureDate": null,
              "mileage": null,
              "name": "万方物流",
              "partyId": 3391011,
              "purchaseDate": null,
              "region": null,
              "registrationDate": null,
              "relationship": null,
              "simpleCode": null,
              "status": "启用",
              "tciCompany": null,
              "tciExpireDate": null,
              "tciInsuredDate": null,
              "tciNo": null,
              "tmiWarehouseRelaCarId": 391,
              "trailerPlateNumber": null,
              "vciCompany": null,
              "vciExpireDate": null,
              "vciInsuredDate": null,
              "vciNo": null,
              "verificationLoadCapacity": null,
              "verificationLoadQuality": null,
              "vinNo": null,
              "warehouseId": 865,
              "warehouseInputDate": "2017-07-30 09:35:00.0",
              "warehouseName": "烟台分公司",
              "warehouseSubType": "自营",
              "warehouseType": "普通网点",
              "wayport": "未知"
            },
            {
              "annualVerificationDate": null,
              "businessNumber": null,
              "carBrand": null,
              "carCustomNo": null,
              "carHigh": null,
              "carLightWeight": null,
              "carLong": null,
              "carStatus": "待装车",
              "carStruct": "平板",
              "carUseType": null,
              "carWidth": null,
              "driver1DrivingDueDate": null,
              "driver1DrivingLicenseNumber": "423566672335477",
              "driver1Mobile": null,
              "driver1OccupationalNumber": null,
              "driver1ToName": "小明",
              "driver2": null,
              "driver2DrivingDueDate": null,
              "driver2DrivingLicenseNumber": null,
              "driver2Mobile": null,
              "driver2OccupationalNumber": null,
              "driver2toName": null,
              "driverId1": 1875,
              "drivingNumber": "11345464645",
              "engineNo": null,
              "forShort": null,
              "gpsNumber": null,
              "inputDate": "2017-07-30 18:16:03.0",
              "manufactureDate": null,
              "mileage": null,
              "name": "传化物流TMS",
              "partyId": 3721575,
              "purchaseDate": null,
              "region": null,
              "registrationDate": null,
              "relationship": null,
              "simpleCode": null,
              "status": "启用",
              "tciCompany": null,
              "tciExpireDate": null,
              "tciInsuredDate": null,
              "tciNo": null,
              "tmiWarehouseRelaCarId": 393,
              "trailerPlateNumber": null,
              "vciCompany": null,
              "vciExpireDate": null,
              "vciInsuredDate": null,
              "vciNo": null,
              "verificationLoadCapacity": null,
              "verificationLoadQuality": null,
              "vinNo": null,
              "warehouseId": 911,
              "warehouseInputDate": "2017-07-30 18:05:09.0",
              "warehouseName": "传化物流TMS",
              "warehouseSubType": "自营",
              "warehouseType": "公司",
              "wayport": "未知"
            },
            {
              "annualVerificationDate": null,
              "businessNumber": null,
              "carBrand": null,
              "carCustomNo": null,
              "carHigh": null,
              "carLightWeight": null,
              "carLong": null,
              "carStatus": "待装车",
              "carStruct": "平板",
              "carUseType": null,
              "carWidth": null,
              "driver1DrivingDueDate": null,
              "driver1DrivingLicenseNumber": "423566672335477",
              "driver1Mobile": null,
              "driver1OccupationalNumber": null,
              "driver1ToName": "小明",
              "driver2": null,
              "driver2DrivingDueDate": null,
              "driver2DrivingLicenseNumber": null,
              "driver2Mobile": null,
              "driver2OccupationalNumber": null,
              "driver2toName": null,
              "driverId1": 1877,
              "drivingNumber": "11345464645",
              "engineNo": null,
              "forShort": null,
              "gpsNumber": null,
              "inputDate": "2017-07-30 18:16:03.0",
              "manufactureDate": null,
              "mileage": null,
              "name": "传化物流TMS",
              "partyId": 3721575,
              "purchaseDate": null,
              "region": null,
              "registrationDate": null,
              "relationship": null,
              "simpleCode": null,
              "status": "启用",
              "tciCompany": null,
              "tciExpireDate": null,
              "tciInsuredDate": null,
              "tciNo": null,
              "tmiWarehouseRelaCarId": 395,
              "trailerPlateNumber": null,
              "vciCompany": null,
              "vciExpireDate": null,
              "vciInsuredDate": null,
              "vciNo": null,
              "verificationLoadCapacity": null,
              "verificationLoadQuality": null,
              "vinNo": null,
              "warehouseId": 911,
              "warehouseInputDate": "2017-07-30 18:05:09.0",
              "warehouseName": "传化物流TMS",
              "warehouseSubType": "自营",
              "warehouseType": "公司",
              "wayport": "未知"
            }
          ],
          "columnList": [{
              "displayName": "大区",
              "columnName": "region"
            },
            {
              "displayName": "公路港",
              "columnName": "wayport"
            },
            {
              "displayName": "承运商名称",
              "columnName": "name"
            },
            {
              "displayName": "网点名称",
              "columnName": "warehouseName"
            },
            {
              "displayName": "网点创建时间",
              "columnName": "warehouseInputDate"
            },
            {
              "displayName": "网点状态",
              "columnName": "status"
            },
            {
              "displayName": "网点简称",
              "columnName": "forShort"
            },
            {
              "displayName": "网点代码",
              "columnName": "simpleCode"
            },
            {
              "displayName": "网点类型",
              "columnName": "warehouseType"
            },
            {
              "displayName": "网点子类型",
              "columnName": "warehouseSubType"
            },
            {
              "displayName": "添加车辆日期",
              "columnName": "inputDate"
            },
            {
              "displayName": "车辆状态",
              "columnName": "carStatus"
            },
            {
              "displayName": "车牌号",
              "columnName": "trailerPlateNumber"
            },
            {
              "displayName": "车型",
              "columnName": "carStruct"
            },
            {
              "displayName": "行驶证号",
              "columnName": "drivingNumber"
            },
            {
              "displayName": "车辆用途",
              "columnName": "carUseType"
            },
            {
              "displayName": "车辆用途",
              "columnName": "carCustomNo"
            },
            {
              "displayName": "是否自有车辆",
              "columnName": "relationship"
            },
            {
              "displayName": "GPS号码",
              "columnName": "gpsNumber"
            },
            {
              "displayName": "营运证号",
              "columnName": "businessNumber"
            },
            {
              "displayName": "司机1姓名",
              "columnName": "driver1ToName"
            },
            {
              "displayName": "司机1电话",
              "columnName": "driver1Mobile"
            },
            {
              "displayName": "司机1驾驶证",
              "columnName": "driver1DrivingLicenseNumber"
            },
            {
              "displayName": "司机1从业资格证",
              "columnName": "driver1OccupationalNumber"
            },
            {
              "displayName": "司机1驾驶证到期日",
              "columnName": "driver1DrivingDueDate"
            },
            {
              "displayName": "司机2姓名",
              "columnName": "driver2toName"
            },
            {
              "displayName": "司机2电话",
              "columnName": "driver2Mobile"
            },
            {
              "displayName": "司机2驾驶证",
              "columnName": "driver2DrivingLicenseNumber"
            },
            {
              "displayName": "司机2从业资格证",
              "columnName": "driver2OccupationalNumber"
            },
            {
              "displayName": "司机2驾驶证到期日",
              "columnName": "driver2DrivingDueDate"
            },
            {
              "displayName": "车长",
              "columnName": "carLong"
            },
            {
              "displayName": "车宽",
              "columnName": "carWidth"
            },
            {
              "displayName": "车高",
              "columnName": "carHigh"
            },
            {
              "displayName": "车架号",
              "columnName": "vinNo"
            },
            {
              "displayName": "车辆品牌",
              "columnName": "carBrand"
            },
            {
              "displayName": "发动机号",
              "columnName": "engineNo"
            },
            {
              "displayName": "出厂日期",
              "columnName": "manufactureDate"
            },
            {
              "displayName": "购入日期",
              "columnName": "purchaseDate"
            },
            {
              "displayName": "荷载重量",
              "columnName": "verificationLoadQuality"
            },
            {
              "displayName": "荷载容量",
              "columnName": "verificationLoadCapacity"
            },
            {
              "displayName": "车辆自重",
              "columnName": "carLightWeight"
            },
            {
              "displayName": "注册日期",
              "columnName": "registrationDate"
            },
            {
              "displayName": "年审期限",
              "columnName": "annualVerificationDate"
            },
            {
              "displayName": "里程数",
              "columnName": "mileage"
            },
            {
              "displayName": "交强险参保日期",
              "columnName": "tciInsuredDate"
            },
            {
              "displayName": "交强险参保公司",
              "columnName": "tciCompany"
            },
            {
              "displayName": "交强险到期日期",
              "columnName": "tciExpireDate"
            },
            {
              "displayName": "交强险保单号",
              "columnName": "tciNo"
            },
            {
              "displayName": "商业险参保日期",
              "columnName": "vciInsuredDate"
            },
            {
              "displayName": "商业险参保公司",
              "columnName": "vciCompany"
            },
            {
              "displayName": "商业险到期日期",
              "columnName": "vciExpireDate"
            },
            {
              "displayName": "商业险保单号",
              "columnName": "vciNo"
            }
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 82
      });
    }, 2000);
  },

  // 1.2司机信息查询列表接口
  'POST /skynet/carAndDriverInfo/getDiverInfoLists': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {

        },
        "module": {
          "dataList": [{
              "allowedDriveCarType": null,
              "birthDate": null,
              "detailAddress": null,
              "driverType": null,
              "drivingDueDate": null,
              "drivingLicenseNumber": "111111111111111",
              "forShort": null,
              "inputDate": "2017-07-29 22:00:18.0",
              "mobile": null,
              "name": "c151229002",
              "occupationalNumber": null,
              "ownerPartyId": 1647473,
              "placeOrigin": null,
              "region": null,
              "remark": null,
              "simpleCode": null,
              "status": "启用",
              "tmiMailListId": 1773,
              "toName": "xxf1",
              "warehouseId": 835,
              "warehouseInputDate": "2017-07-29 21:51:51.0",
              "warehouseName": "c151229002",
              "warehouseSubType": "自营",
              "warehouseType": "公司",
              "wayport": "未知"
            },
            {
              "allowedDriveCarType": null,
              "birthDate": null,
              "detailAddress": null,
              "driverType": null,
              "drivingDueDate": null,
              "drivingLicenseNumber": "111111111111111",
              "forShort": "下沙14",
              "inputDate": "2017-07-30 09:39:30.0",
              "mobile": null,
              "name": "个体户-冯诚诚",
              "occupationalNumber": null,
              "ownerPartyId": 651355,
              "placeOrigin": null,
              "region": null,
              "remark": null,
              "simpleCode": "XS14",
              "status": "启用",
              "tmiMailListId": 1789,
              "toName": "冯诚诚1",
              "warehouseId": 851,
              "warehouseInputDate": "2017-07-30 09:29:54.0",
              "warehouseName": "杭州分拨中心",
              "warehouseSubType": "自营",
              "warehouseType": "普通网点",
              "wayport": "未知"
            },
            {
              "allowedDriveCarType": null,
              "birthDate": null,
              "detailAddress": null,
              "driverType": null,
              "drivingDueDate": null,
              "drivingLicenseNumber": "222333443445564",
              "forShort": null,
              "inputDate": "2017-07-30 09:41:16.0",
              "mobile": null,
              "name": "个体户-杨艳*5725",
              "occupationalNumber": null,
              "ownerPartyId": 2873107,
              "placeOrigin": null,
              "region": null,
              "remark": null,
              "simpleCode": null,
              "status": "启用",
              "tmiMailListId": 1795,
              "toName": "MR.ZHE",
              "warehouseId": 853,
              "warehouseInputDate": "2017-07-30 09:29:58.0",
              "warehouseName": "个体户-杨艳*5725",
              "warehouseSubType": "自营",
              "warehouseType": "公司",
              "wayport": "未知"
            },
            {
              "allowedDriveCarType": null,
              "birthDate": null,
              "detailAddress": null,
              "driverType": null,
              "drivingDueDate": null,
              "drivingLicenseNumber": "323232223322322",
              "forShort": null,
              "inputDate": "2017-07-30 10:49:38.0",
              "mobile": null,
              "name": "万方物流",
              "occupationalNumber": null,
              "ownerPartyId": 3391011,
              "placeOrigin": null,
              "region": null,
              "remark": null,
              "simpleCode": null,
              "status": "启用",
              "tmiMailListId": 1853,
              "toName": "老李",
              "warehouseId": 871,
              "warehouseInputDate": "2017-07-30 09:37:59.0",
              "warehouseName": "威海营业处",
              "warehouseSubType": "自营",
              "warehouseType": "普通网点",
              "wayport": "未知"
            },
            {
              "allowedDriveCarType": null,
              "birthDate": null,
              "detailAddress": null,
              "driverType": null,
              "drivingDueDate": null,
              "drivingLicenseNumber": "321278891019998989",
              "forShort": null,
              "inputDate": "2017-07-30 13:15:55.0",
              "mobile": null,
              "name": "耳东光军物流",
              "occupationalNumber": null,
              "ownerPartyId": 3312281,
              "placeOrigin": null,
              "region": null,
              "remark": null,
              "simpleCode": null,
              "status": "启用",
              "tmiMailListId": 1855,
              "toName": "晓辉",
              "warehouseId": 843,
              "warehouseInputDate": "2017-07-29 22:53:52.0",
              "warehouseName": "耳东光军物流",
              "warehouseSubType": "自营",
              "warehouseType": "公司",
              "wayport": "未知"
            },
            {
              "allowedDriveCarType": "A1",
              "birthDate": null,
              "detailAddress": null,
              "driverType": "大车",
              "drivingDueDate": null,
              "drivingLicenseNumber": "111111111111111",
              "forShort": null,
              "inputDate": "2017-07-30 13:30:26.0",
              "mobile": null,
              "name": "个体户-冯诚诚",
              "occupationalNumber": null,
              "ownerPartyId": 651355,
              "placeOrigin": "皖",
              "region": null,
              "remark": null,
              "simpleCode": null,
              "status": "启用",
              "tmiMailListId": 1861,
              "toName": "FCC",
              "warehouseId": 849,
              "warehouseInputDate": "2017-07-30 09:28:24.0",
              "warehouseName": "个体户-冯诚诚",
              "warehouseSubType": "自营",
              "warehouseType": "公司",
              "wayport": "未知"
            },
            {
              "allowedDriveCarType": null,
              "birthDate": null,
              "detailAddress": null,
              "driverType": null,
              "drivingDueDate": null,
              "drivingLicenseNumber": "222222222222222",
              "forShort": null,
              "inputDate": "2017-07-30 14:05:15.0",
              "mobile": null,
              "name": "万方物流",
              "occupationalNumber": null,
              "ownerPartyId": 3391011,
              "placeOrigin": null,
              "region": null,
              "remark": null,
              "simpleCode": null,
              "status": "启用",
              "tmiMailListId": 1867,
              "toName": "海老大",
              "warehouseId": 871,
              "warehouseInputDate": "2017-07-30 09:37:59.0",
              "warehouseName": "威海营业处",
              "warehouseSubType": "自营",
              "warehouseType": "普通网点",
              "wayport": "未知"
            },
            {
              "allowedDriveCarType": null,
              "birthDate": null,
              "detailAddress": null,
              "driverType": null,
              "drivingDueDate": null,
              "drivingLicenseNumber": "333333333333333",
              "forShort": null,
              "inputDate": "2017-07-30 14:13:01.0",
              "mobile": null,
              "name": "万方物流",
              "occupationalNumber": null,
              "ownerPartyId": 3391011,
              "placeOrigin": null,
              "region": null,
              "remark": null,
              "simpleCode": null,
              "status": "启用",
              "tmiMailListId": 1869,
              "toName": "333",
              "warehouseId": 865,
              "warehouseInputDate": "2017-07-30 09:35:00.0",
              "warehouseName": "烟台分公司",
              "warehouseSubType": "自营",
              "warehouseType": "普通网点",
              "wayport": "未知"
            },
            {
              "allowedDriveCarType": null,
              "birthDate": null,
              "detailAddress": null,
              "driverType": null,
              "drivingDueDate": null,
              "drivingLicenseNumber": "423566672335477",
              "forShort": null,
              "inputDate": "2017-07-30 18:16:03.0",
              "mobile": null,
              "name": "传化物流TMS",
              "occupationalNumber": null,
              "ownerPartyId": 3721575,
              "placeOrigin": null,
              "region": null,
              "remark": null,
              "simpleCode": null,
              "status": "启用",
              "tmiMailListId": 1875,
              "toName": "小明",
              "warehouseId": 911,
              "warehouseInputDate": "2017-07-30 18:05:09.0",
              "warehouseName": "传化物流TMS",
              "warehouseSubType": "自营",
              "warehouseType": "公司",
              "wayport": "未知"
            },
            {
              "allowedDriveCarType": null,
              "birthDate": null,
              "detailAddress": null,
              "driverType": null,
              "drivingDueDate": null,
              "drivingLicenseNumber": "423566672335477",
              "forShort": null,
              "inputDate": "2017-07-30 18:16:03.0",
              "mobile": null,
              "name": "传化物流TMS",
              "occupationalNumber": null,
              "ownerPartyId": 3721575,
              "placeOrigin": null,
              "region": null,
              "remark": null,
              "simpleCode": null,
              "status": "启用",
              "tmiMailListId": 1877,
              "toName": "小明",
              "warehouseId": 911,
              "warehouseInputDate": "2017-07-30 18:05:09.0",
              "warehouseName": "传化物流TMS",
              "warehouseSubType": "自营",
              "warehouseType": "公司",
              "wayport": "未知"
            }
          ],
          "columnList": [{
              "displayName": "大区",
              "columnName": "region"
            },
            {
              "displayName": "公路港",
              "columnName": "wayport"
            },
            {
              "displayName": "承运商名称",
              "columnName": "name"
            },
            {
              "displayName": "网点名称",
              "columnName": "warehouseName"
            },
            {
              "displayName": "网点创建时间",
              "columnName": "warehouseInputDate"
            },
            {
              "displayName": "网点状态",
              "columnName": "status"
            },
            {
              "displayName": "网点简称",
              "columnName": "forShort"
            },
            {
              "displayName": "网点代码",
              "columnName": "simpleCode"
            },
            {
              "displayName": "网点类型",
              "columnName": "warehouseType"
            },
            {
              "displayName": "网点子类型",
              "columnName": "warehouseSubType"
            },
            {
              "displayName": "添加司机日期",
              "columnName": "inputDate"
            },
            {
              "displayName": "司机姓名",
              "columnName": "toName"
            },
            {
              "displayName": "司机种类",
              "columnName": "driverType"
            },
            {
              "displayName": "从业资格证号",
              "columnName": "occupationalNumber"
            },
            {
              "displayName": "驾驶证号",
              "columnName": "drivingLicenseNumber"
            },
            {
              "displayName": "驾照类型",
              "columnName": "allowedDriveCarType"
            },
            {
              "displayName": "驾驶证到期日",
              "columnName": "drivingDueDate"
            },
            {
              "displayName": "出生年月",
              "columnName": "birthDate"
            },
            {
              "displayName": "联系电话",
              "columnName": "mobile"
            },
            {
              "displayName": "联系地址",
              "columnName": "detailAddress"
            },
            {
              "displayName": "籍贯",
              "columnName": "placeOrigin"
            },
            {
              "displayName": "备注",
              "columnName": "remark"
            }
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 1.3获取车辆类型信息接口
  'POST /skynet/carAndDriverInfo/getCarStruct': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": [
          "平板",
          "高栏",
          "厢式",
          "牵引车",
          "集装箱车",
          "挂车"
        ],
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 1.4获取司机类型接口
  'POST /skynet/carAndDriverInfo/getDiverType': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": [
          "全部",
          "大车",
          "配送车"
        ],
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 2.1.1合作企业查询菜单接口
  'POST /skynet/bossCooperateInfo/getBossCooperateInfoList': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": {
          "dataList": [{
            "bizLicence": "",
            "forShort": null,
            "inputDate": "2017-07-29 22:56:35.0",
            "linkMan": "陈辉",
            "mobile": "13958119237",
            "name": "传说物流",
            "ownerPartyId": 3888235,
            "region": null,
            "remark": null,
            "simpleCode": null,
            "status": "启用",
            "tmiMailListId": 1775,
            "toName": "耳东光军物流",
            "warehouseId": 845,
            "warehouseInputDate": "2017-07-29 22:55:34.0",
            "warehouseName": "传说物流",
            "warehouseSubType": "自营",
            "warehouseType": "公司",
            "wayport": null
          }],
          "columnList": [{
              "displayName": "大区",
              "columnName": "region"
            },
            {
              "displayName": "公路港",
              "columnName": "wayport"
            },
            {
              "displayName": "承运商名称",
              "columnName": "name"
            },
            {
              "displayName": "网点名称",
              "columnName": "warehouseName"
            },
            {
              "displayName": "网点创建时间",
              "columnName": "warehouseInputDate"
            },
            {
              "displayName": "网点子类型",
              "columnName": "warehouseSubType"
            },
            {
              "displayName": "合作企业添加日期",
              "columnName": "inputDate"
            },
            {
              "displayName": "合作企业名称",
              "columnName": "toName"
            },
            {
              "displayName": "营业执照号",
              "columnName": "bizLicence"
            },
            {
              "displayName": "联系人",
              "columnName": "linkMan"
            },
            {
              "displayName": "联系人手机",
              "columnName": "mobile"
            },
            {
              "displayName": "备注",
              "columnName": "remark"
            }
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 2.2.1客户管理查询菜单接口
  'POST /skynet/bossClientInfo/getBossClientInfoList': (req, res) => {
    setTimeout(function () {
      res.json({

        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": {
          "dataList": [{
            "address": null,
            "cLevel": null,
            "detailAddress": "",
            "forShort": null,
            "inputDate": "2017-07-29 21:53:04.0",
            "linkMan": null,
            "name": "c151229002",
            "organization": null,
            "ownerPartyId": 1647473,
            "phone": "8888111",
            "region": null,
            "simpleCode": null,
            "status": "启用",
            "tmiMailListId": 1765,
            "toName": "xxf1",
            "warehouseId": 835,
            "warehouseInputDate": "2017-07-29 21:51:51.0",
            "warehouseName": "c151229002",
            "warehouseSubType": "自营",
            "warehouseType": "公司",
            "wayport": "未知"
          }],
          "columnList": [{
              "displayName": "大区",
              "columnName": "region"
            },
            {
              "displayName": "公路港",
              "columnName": "wayport"
            },
            {
              "displayName": "承运商名称",
              "columnName": "name"
            },
            {
              "displayName": "网点名称",
              "columnName": "warehouseName"
            },
            {
              "displayName": "网点创建时间",
              "columnName": "warehouseInputDate"
            },
            {
              "displayName": "网点子类型",
              "columnName": "warehouseType"
            },
            {
              "displayName": "客户添加日期",
              "columnName": "inputDate"
            },
            {
              "displayName": "客户名称",
              "columnName": "toName"
            },
            {
              "displayName": "联系方式",
              "columnName": "phone"
            },
            {
              "displayName": "省市区乡镇",
              "columnName": "address"
            },
            {
              "displayName": "联系地址",
              "columnName": "detailAddress"
            },
            {
              "displayName": "客户单位",
              "columnName": "organization"
            },
            {
              "displayName": "客户类别",
              "columnName": "cLevel"
            },
            {
              "displayName": "客户经理",
              "columnName": "linkMan"
            }
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 3.1 网点列表查询接口
  'POST /skynet/carrier/queryWarehouseList': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "成功",
        "code": "0000",
        "success": true,
        "totalCount": 2,
        "module": {
          "dataList": [{
              "region": null,
              "wayport": null,
              "partyId": 2915029,
              "name": "星星物流有限公司",
              "tmiWarehouseId": 901,
              "warehouseName": "星星物流有限公司",
              "inputDate": "2017-07-30 12:41:05.0",
              "status": "启用",
              "forShort": null,
              "simpleCode": null,
              "warehouseType": "公司",
              "warehouseSubType": "自营",
              "address": "浙江省杭州市西湖区",
              "detailAddress": "之江九里",
              "warehouseCover": null,
              "contact": "王晨星",
              "contactMobile": "15313916717"
            },
            {
              "region": null,
              "wayport": null,
              "partyId": 2915029,
              "name": "星星物流有限公司",
              "tmiWarehouseId": 948,
              "warehouseName": "杭州网点",
              "inputDate": "2017-08-01 00:04:50.0",
              "status": "启用",
              "forShort": "hangzhouwangdian",
              "simpleCode": "hzwd",
              "warehouseType": "普通网点",
              "warehouseSubType": "自营",
              "address": "浙江省杭州市西湖区",
              "detailAddress": "之江九里",
              "warehouseCover": null,
              "contact": "王先生",
              "contactMobile": "13245566778"
            },
            {
              "region": null,
              "wayport": null,
              "partyId": 345346,
              "name": "星星物流有限公司",
              "tmiWarehouseId": 901,
              "warehouseName": "星星物流有限公司",
              "inputDate": "2017-07-30 12:41:05.0",
              "status": "启用",
              "forShort": null,
              "simpleCode": null,
              "warehouseType": "公司",
              "warehouseSubType": "自营",
              "address": "浙江省杭州市西湖区",
              "detailAddress": "之江九里",
              "warehouseCover": null,
              "contact": "王晨星",
              "contactMobile": "15313916717"
            }
          ],
          "columnList": [{
              "columnName": "region",
              "displayName": "大区"
            },
            {
              "columnName": "wayport",
              "displayName": "公路港"
            },
            {
              "columnName": "name",
              "displayName": "承运商名称"
            },
            {
              "columnName": "warehouseName",
              "displayName": "网点名称"
            },
            {
              "columnName": "inputDate",
              "displayName": "网点创建时间"
            },
            {
              "columnName": "status",
              "displayName": "网点状态"
            },
            {
              "columnName": "forShort",
              "displayName": "网点简称"
            },
            {
              "columnName": "simpleCode",
              "displayName": "网点代码"
            },
            {
              "columnName": "warehouseType",
              "displayName": "网点类型"
            },
            {
              "columnName": "warehouseSubType",
              "displayName": "网点子类型"
            },
            {
              "columnName": "address",
              "displayName": "地址"
            },
            {
              "columnName": "detailAddress",
              "displayName": "详细地址"
            },
            {
              "columnName": "warehouseCover",
              "displayName": "面积"
            },
            {
              "columnName": "contact",
              "displayName": "联系人"
            },
            {
              "columnName": "contactMobile",
              "displayName": "联系电话"
            }
          ]
        },
        "models": {}
      })
    }, 2000);
  },

  // 1.7根据权限获取区域接口
  'POST /skynet/carAndDriverInfo/getWayports': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": {
          "未知": [
            "未知"
          ],
          "山东大区": [
            "临沂公路港",
            "淄博公路港",
            "菏泽公路港",
            "青岛公路港",
            "济南公路港"
          ],
          "华北大区": [
            "沧州公路港",
            "包头公路港",
            "北京公路港",
            "石家庄项目组",
            "太原公路港",
            "天津港公路港",
            "华北公路港",
            "天津公路港"
          ],
          "浙江大区": [
            "宁波公路港",
            "温州公路港",
            "汇通公路港",
            "杭州公路港",
            "金华公路港",
            "衢州公路港",
            "富阳公路港",
            "台州公路港"
          ],
          "西南大区": [
            "遵义公路港",
            "贵阳公路港"
          ],
          "华东大区": [
            "无锡公路港",
            "宿迁公路港",
            "合肥公路港",
            "淮安公路港",
            "淮北公路港",
            "六安公路港",
            "苏州公路港",
            "上海公路港"
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 0
      })
    }, 2000);
  },

  // 4.1 网点员工列表查询接口
  'POST /skynet/carrier/queryEmployeeList': (req, res) => {
    setTimeout(function () {
      res.json({

        "message": "成功",
        "code": "0000",
        "success": true,
        "totalCount": 1,
        "module": {
          "dataList": [

            {
              "tmiUserRelaWarehouseId": 1850,
              "region": null,
              "wayport": null,
              "partyId": 3312281,
              "name": "星星物流有限公司",
              "tmiWarehouseId": 901,
              "warehouseName": "星星物流有限公司",
              "inputDate": "2017-07-30 12:41:05.0",
              "status": "启用",
              "forShort": null,
              "simpleCode": null,
              "warehouseType": "公司",
              "warehouseSubType": "自营",
              "loginName": "CDWL029449/admin",
              "operator": "admin",
              "realName": "吕光友",
              "employeeStatus": "启用",
              "mobileNumber": "18620277708",
              "telephoneNumber": null
            }
          ],
          "columnList": [{
              "columnName": "region",
              "displayName": "大区"
            },
            {
              "columnName": "wayport",
              "displayName": "公路港"
            },
            {
              "columnName": "name",
              "displayName": "承运商名称"
            },
            {
              "columnName": "warehouseName",
              "displayName": "网点名称"
            },
            {
              "columnName": "inputDate",
              "displayName": "创建时间"
            },
            {
              "columnName": "status",
              "displayName": "网点状态"
            },
            {
              "columnName": "forShort",
              "displayName": "网点简称"
            },
            {
              "columnName": "simpleCode",
              "displayName": "网点代码"
            },
            {
              "columnName": "warehouseType",
              "displayName": "网点类型"
            },
            {
              "columnName": "warehouseSubType",
              "displayName": "网点子类型"
            },
            {
              "columnName": "loginName",
              "displayName": "登录名"
            },
            {
              "columnName": "operator",
              "displayName": "账号名"
            },
            {
              "columnName": "realName",
              "displayName": "员工姓名"
            },
            {
              "columnName": "employeeStatus",
              "displayName": "员工状态"
            },
            {
              "columnName": "mobileNumber",
              "displayName": "手机号码"
            },
            {
              "columnName": "telephoneNumber",
              "displayName": "联系电话"
            }
          ]
        },
        "models": {}
      })
    }, 2000);
  },

  // 分页查询审核列表
  'POST /skynet/verify/queryList': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 120,
        "module": [{
            "inputDate": "2017-08-24 13:13:45",
            "title": "warehouseName路港驿站加盟审核申请",
            "status": "处理中",
            "pendingId": 12
          },
          {
            "inputDate": "2017-08-24 13:13:45",
            "title": "warehouseName路港驿站加盟审核申请",
            "status": "待处理",
            "pendingId": 22
          },
          {
            "inputDate": "2017-08-24 13:13:45",
            "title": "warehouseName路港驿站加盟审核申请",
            "status": "已提交",
            "pendingId": 32
          },
          {
            "inputDate": "2017-08-24 13:13:45",
            "title": "warehouseName路港驿站加盟审核申请",
            "status": "完成",
            "pendingId": 42
          },
          {
            "inputDate": "2017-08-24 13:13:45",
            "title": "warehouseName路港驿站加盟审核申请",
            "status": "退回",
            "pendingId": 52
          }
        ],
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 查询审核状态列表
  'POST /skynet/verify/getVerifyStatus': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": [
          "待处理",
          "处理中",
          "已提交",
          "完成",
          "退回"
        ],
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 查询审核详情
  'POST /skynet/verify/query': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": {
          "metadataVO": {
            "ExamineAndVerifyMetadataId": 2,
            "title": '经典款见风使舵九分裤，可是陆冀分开了，啊激动了',
            "region": null,
            "wayport": null,
            "isDelete": null,
            "inputDate": null,
            "updateTime": "2017-08-23 10:35:40",
            "cooperation": "合作方式",
            "warehouseId": 555,
            "warehouseName": "\t//\t网点名称",
            "warehouseCode": "ddd",
            "partyId": 707859,
            "partyName": "加盟方名称",
            "partyPhone": "联系方式",
            "owner": "\t//\t驿站负责人",
            "ownerPhone": "\t//\t驿站负责人联系方式",
            "stageAddress": "\t//\t驿站地址",
            "stageDesc": "\t//\t驿站功能",
            "isCollection": "\t//\t是否代收",
            "warehouseNum": "\t//\t网点人数",
            "car": "\t//自备车辆",
            "areaCode": null,
            "address": null
          },
          "pendingVO": {
            "examineAndVerifyPendingId": 2,
            "metadataId": 2,
            "verifyType": null,
            "region": null,
            "wayport": null,
            "status": ["待处理", "处理中", "已提交", "完成", "退回"][Math.round(Math.random() * 4)],
            "handleManId": 15562,
            "handleManName": null,
            "handleManDepartment": "我是部门",
            "handleManPhone": "我是手机",
            "handleManOwner": "负责人",
            "handleManDate": "处理时间",
            "attachmentId": "22,33,44,55,34",
            "backNetworkAttachmentId": "89,899,8",
            "remark": "就得考虑，是否犄角旮旯，开发的价格肯定难道是v",
            "rejectRemark": "",
            "oaAccount": '[{"actionInfo":"起草人-提交文档","advice":"测试2","auditTime":"2017-09-21 15:17:30","auditor":"张园庆","auditorNodeName":"公路港经办人"},{"actionInfo":"系统-身份重复跳过","auditTime":"2017-09-21 15:17:31","auditor":"系统","auditorNodeName":"公路港分管负责人"},{"actionInfo":"处理人-驳回","advice":"不同意A2","auditTime":"2017-09-21 15:19:10","auditor":"李晓丽","auditorNodeName":"港港互通经办人"}]',
            "isDelete": null,
            "inputDate": null,
            "updateTime": null,
            "isSolved": null
          }
        },
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 分页查询组织未知审核列表
  'POST /skynet/verify/queryUnknownList': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 3,
        "module": [{
            "inputDate": "2017-08-22 16:30:16",
            "title": null,
            "status": "组织未知",
            "pendingId": 4,
            "partyId": 22,
            "partyName": 33,
            "warehouseId": 44,
            "warehouseName": 99,
            "stageAddress": 'test address'
          },
          {
            "inputDate": "2017-08-22 16:33:32",
            "title": null,
            "status": "组织未知",
            "pendingId": 8,
            "partyId": 22,
            "partyName": 33,
            "warehouseId": 44,
            "warehouseName": 99,
            "stageAddress": 'test address'
          },
          {
            "inputDate": "2017-08-24 13:14:23",
            "title": "warehouseName路港驿站加盟审核申请",
            "status": "组织未知",
            "pendingId": 14,
            "partyId": 22,
            "partyName": 33,
            "warehouseId": 44,
            "warehouseName": 99,
            "stageAddress": 'test address'
          }
        ],
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 同步组织未知的审核的组织关系
  'POST /skynet/verify/sync': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "",
        "code": "",
        "success": true,
        "totalCount": 0,
        "module": null,
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // #### 审核暂存
  'POST /skynet/verify/save': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "",
        "code": "",
        "success": true,
        "totalCount": 0,
        "module": null,
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 审核归档
  'POST /skynet/verify/solved': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "",
        "code": "",
        "success": true,
        "totalCount": 0,
        "module": null,
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 审核提交
  'POST /skynet/verify/submit': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "",
        "code": "",
        "success": true,
        "totalCount": 0,
        "module": null,
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 审核退回
  'POST /skynet/verify/refused': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "",
        "code": "",
        "success": true,
        "totalCount": 0,
        "module": null,
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 上传附件
  'POST /skynet/file/upload': (req, res) => {
    setTimeout(function () {
      res.json({
        'success': true,
        'module': '15'
      })
    }, 3000);
  },

  // 删除附件
  'POST /skynet/file/delete/**': (req, res) => {
    setTimeout(function () {
      res.json({
        'success': true,
        'module': true
      })
    }, 2000);
  },

  // 查询下载用带签文件URL以及其他信息
  'POST /skynet/file/**': (req, res) => {
    setTimeout(function () {
      res.json({
        "success": true,
        "totalCount": 0,
        "module": {
          "examineAndVerifyAttachmentId": 8,
          "fileName": "233",
          "ext": ".xlsx",
          "dfsUrl": "http://10.7.28.14/fastdfs/group2/M00/0E/4E/CgcN7FmeP8uAG4qEAADwUdD4Igk5.xlsx?doggyurl=&dog_ak=ym17i9t10GI084G7&tf_sign=EC805D796038DF7A462FF8AD9D4943B5&tf_timestamp=20170824170149",
          "dfsFileName": "group2/M00/0E/4E/CgcN7FmeP8uAG4qEAADwUdD4Igk5.xlsx",
          "inputDate": "2017-08-24 11:07:08.0",
          "isDelete": "NO",
          "stampDate": "Aug 24, 2017 11:07:07 AM"
        },
        "models": {

        }
      })
    }, 2000);
  },

  // 分拨中心基础页面及路港驿站接口文档
  // 1.1.1分拨中心等级枚举接口
  'POST /skynet/allotCenterController/getAllotLevelEnum': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": [
          "一级",
          "二级",
          "三级"
        ],
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 1.1.2分拨中心类别枚举接口
  'POST /skynet/allotCenterController/getAllotTypeEnum': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": [
          "中转",
          "集散",
          "枢纽"
        ],
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 1.1.3公司性质枚举接口
  'POST /skynet/allotCenterController/getCompanyNatureEnum': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": [
          "私企",
          "国企",
          "中外合资",
          "外商独资",
          "其他"
        ],
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 1.1.4合作方式枚举接口
  'POST /skynet/allotCenterController/getCooperationEnum': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": [
          "合作",
          "合资",
          "业务合作",
          "自营"
        ],
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 1.1.5运营类型枚举接口
  'POST /skynet/allotCenterController/getOperationTypeEnum': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": [
          "全国",
          "省内",
          "市内"
        ],
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 1.1.6运营情况枚举接口
  'POST /skynet/allotCenterController/getOperateStatusEnum': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": [
          "待运营",
          "已运营",
          "试运营",
          "停止运营"
        ],
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 2.1.1分拨中心基础信息管理---经营信息查询接口
  'POST /skynet/allotCenterManage/getAllotCenterManageList': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": {
          "dataList": [{
              "allotCenterId": 1740,
              "allotCenterManageId": -10099950,
              "allotType": "allotType-10099950",
              "businessVehicleNum": 1744,
              "city": "哈尔滨市",
              "directOperatorNum": 1743,
              "fete": 1741,
              "inputDate": "2012-05-19 00:00:00",
              "inputMan": "inputMan-10099950",
              "isDelete": "0",
              "loadometerNum": 1745,
              "managerNum": 1742,
              "operateDate": "2017-08",
              "otherFixedAssetsNum": 1746,
              "partyId": "partyId-10099950",
              "partyName": "partyName-10099950",
              "province": "黑龙江省",
              "region": "region-10099950",
              "rentArea": "1740.01",
              "residualFixedAssets": "1740.03",
              "stampDate": "2017-09-20 01:15:00",
              "unRentArea": "1740.02",
              "updateMan": "丰文琴",
              "warehouseCode": "warehouseCode-10099950",
              "warehouseId": "warehouseId-10099950",
              "warehouseName": null,
              "wayport": "wayport-10099950"
            },
            {
              "allotCenterId": null,
              "allotCenterManageId": 97,
              "allotType": "集散",
              "businessVehicleNum": 7,
              "city": "齐齐哈尔市",
              "directOperatorNum": 5,
              "fete": 3,
              "inputDate": "2017-09-21 14:08:45",
              "inputMan": "丰文琴",
              "isDelete": "0",
              "loadometerNum": 8,
              "managerNum": 4,
              "operateDate": "2017-08",
              "otherFixedAssetsNum": 9,
              "partyId": null,
              "partyName": "组织单元-承运商2",
              "province": "黑龙江省",
              "region": "浙江大区",
              "rentArea": "1.00",
              "residualFixedAssets": "6.00",
              "stampDate": "2017-09-21 14:08:45",
              "unRentArea": "2.00",
              "updateMan": null,
              "warehouseCode": null,
              "warehouseId": null,
              "warehouseName": null,
              "wayport": "金华公路港"
            }
          ],
          "columnList": [{
              "displayName": "大区",
              "columnName": "region"
            },
            {
              "displayName": "公路港",
              "columnName": "wayport"
            },
            {
              "displayName": "分拨中心名称",
              "columnName": "warehouseName"
            },
            {
              "displayName": "分拨中心类别",
              "columnName": "allotType"
            },
            {
              "displayName": "日期",
              "columnName": "operateDate"
            },
            {
              "displayName": "省",
              "columnName": "province"
            },
            {
              "displayName": "市",
              "columnName": "city"
            },
            {
              "displayName": "计租作业场地面积(㎡)",
              "columnName": "rentArea"
            },
            {
              "displayName": "非计租作业场地面积(㎡)",
              "columnName": "unRentArea"
            },
            {
              "displayName": "企业总人数",
              "columnName": "fete"
            },
            {
              "displayName": "管理人员人数",
              "columnName": "managerNum"
            },
            {
              "displayName": "直属操作人员人数",
              "columnName": "directOperatorNum"
            },
            {
              "displayName": "固定资产残值总估值",
              "columnName": "residualFixedAssets"
            },
            {
              "displayName": "商务车台数",
              "columnName": "businessVehicleNum"
            },
            {
              "displayName": "地磅台数",
              "columnName": "loadometerNum"
            },
            {
              "displayName": "其他固定资产数量",
              "columnName": "otherFixedAssetsNum"
            }
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 100
      })
    }, 2000);
  },

  // 2.1.3分拨中心基础信息管理---经营信息删除接口
  'POST /skynet/allotCenterManage/deleteAllotCenterManage': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": 1,
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 2.1.3分拨中心基础信息管理---经营信息新增接口
  'POST /skynet/allotCenterManage/addAllotCenterManage': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": 20,
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 2.1.4 分拨中心基础信息管理---经营信息编辑接口
  'POST /skynet/allotCenterManage/updateAllotCenterManage': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": 1,
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 3.1 获取分拨中心基本信息
  'POST /skynet/allotCenterController/getAllotCenterList': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": {
          "sumData": {
            "wareHouses": 500,
            "firstLevel": 112,
            "secondLevel": 1,
            "thirdLevel": 404
          },
          "dataList": [{
            "address": "address-10099460",
            "allotCenterId": -10099460,
            "allotLevel": "allotLevel-10099460",
            "allotType": "allotType-10099460",
            "applyDate": "2013-09-21 00:00:00",
            "areaCode": "areaCode-10099460",
            "city": "city-10099460",
            "companyNature": "companyNature-10099460",
            "cooperation": "cooperation-10099460",
            "cooperativeTruckNum": "cooperativeTruckNum-10099460",
            "examineAndVerifyMetadataAllotId": "examineAndVerifyMetadataAllotId-10099460",
            "forkliftNum": "forkliftNum-10099460",
            "inputDate": "2013-09-21 00:00:00",
            "inputMan": "inputMan-10099460",
            "isDelete": false,
            "logisticsSystem": "logisticsSystem-10099460",
            "operationSituation": "operationSituation-10099460",
            "operationType": "operationType-10099460",
            "ownTruckNum": "ownTruckNum-10099460",
            "palletJackNum": "palletJackNum-10099460",
            "partner": "partner-10099460",
            "partyId": "partyId-10099460",
            "partyName": "partyName-10099460",
            "province": "province-10099460",
            "region": "region-10099460",
            "registeredCapital": "registeredCapital-10099460",
            "stampDate": "2017-09-20 01:13:47",
            "title": "title-10099460",
            "updateMan": "updateMan-10099460",
            "warehouseCode": "warehouseCode-10099460",
            "warehouseId": "warehouseId-10099460",
            "warehouseName": null,
            "warehouseNum": "warehouseNum-10099460",
            "wayport": "wayport-10099460"
          }],
          "columnList": [{
              "displayName": "大区",
              "columnName": "region"
            },
            {
              "displayName": "公路港",
              "columnName": "wayport"
            },
            {
              "displayName": "分拨中心名称",
              "columnName": "warehouseName"
            },
            {
              "displayName": "分拨中心编码",
              "columnName": "warehouseCode"
            },
            {
              "displayName": "申请时间",
              "columnName": "applyDate"
            },
            {
              "displayName": "合作方式",
              "columnName": "cooperation"
            },
            {
              "displayName": "运作情况",
              "columnName": "operationSituation"
            },
            {
              "displayName": "分拨中心类别",
              "columnName": "allotType"
            },
            {
              "displayName": "分拨中心级别",
              "columnName": "allotLevel"
            },
            {
              "displayName": "运营类型",
              "columnName": "operationType"
            },
            {
              "displayName": "物流系统名称",
              "columnName": "logisticsSystem"
            },
            {
              "displayName": "所在省",
              "columnName": "province"
            },
            {
              "displayName": "所在市",
              "columnName": "city"
            },
            {
              "displayName": "详细地址",
              "columnName": "address"
            },
            {
              "displayName": "路港驿站个数",
              "columnName": "warehouseNum"
            },
            {
              "displayName": "叉车台数",
              "columnName": "forkliftNum"
            },
            {
              "displayName": "手动/电子液压车",
              "columnName": "palletJackNum"
            },
            {
              "displayName": "自有货车台数",
              "columnName": "ownTruckNum"
            },
            {
              "displayName": "合作货车台数",
              "columnName": "cooperativeTruckNum"
            },
            {
              "displayName": "合作方",
              "columnName": "partner"
            },
            {
              "displayName": "注册资本",
              "columnName": "registeredCapital"
            },
            {
              "displayName": "公司性质",
              "columnName": "companyNature"
            }
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 10481
      })
    }, 2000);
  },

  // 3.2修改分拨中心基本信息
  'POST /skynet/allotCenterController/modifyAllotCenter': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": 1,
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 3.3获取下拉分拨中心信息
  'POST /skynet/allotCenterController/findAllotCenters': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": [{
            "allotType": "猜猜看",
            "province": "浙江省",
            "city": "杭州市",
            "warehouseName": "路人甲",
            "wayport": "杭州公路港",
            "region": "浙江大区",
            "partyId": "1222",
            "allotCenterId": 4
          },
          {
            "allotType": "随便",
            "province": "天津市",
            "city": "天津市",
            "warehouseName": "666",
            "wayport": "天津公路港",
            "region": "北京大区",
            "partyId": "55555",
            "allotCenterId": 6
          }
        ],
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 3.4获取分拨中心运营信息
  'POST /skynet/allotCenterOperation/getAllotCenterOperations': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": {
          "dataList": [{
              "allotCenterId": null,
              "allotCenterOperationId": 53,
              "allotType": null,
              "city": null,
              "coverage": " 覆盖",
              "inputDate": "2017-09-13 17:30:39",
              "inputMan": "丰文琴",
              "isDelete": false,
              "operateDate": "2017-08",
              "operateType": "省内",
              "partyId": null,
              "partyName": null,
              "province": null,
              "region": null,
              "stampDate": "2017-09-21 14:41:39",
              "unopnenCity": null,
              "updateMan": "邱俊强",
              "warehouseCode": null,
              "warehouseId": null,
              "warehouseName": null,
              "wayport": null
            },
            {
              "allotCenterId": null,
              "allotCenterOperationId": 135,
              "allotType": "中专",
              "city": null,
              "coverage": null,
              "inputDate": "2017-09-21 14:28:57",
              "inputMan": "丰文琴",
              "isDelete": false,
              "operateDate": "2017-08",
              "operateType": null,
              "partyId": null,
              "partyName": "partyName",
              "province": null,
              "region": "东南大区",
              "stampDate": "2017-09-21 14:28:57",
              "unopnenCity": null,
              "updateMan": null,
              "warehouseCode": null,
              "warehouseId": null,
              "warehouseName": null,
              "wayport": "上海公路港"
            }
          ],
          "columnList": [{
              "displayName": "大区",
              "columnName": "region"
            },
            {
              "displayName": "公路港",
              "columnName": "wayport"
            },
            {
              "displayName": "分拨中心名称",
              "columnName": "warehouseName"
            },
            {
              "displayName": "日期",
              "columnName": "operateDate"
            },
            {
              "displayName": "分拨中心类别",
              "columnName": "allotType"
            },
            {
              "displayName": "运营类型",
              "columnName": "operateType"
            },
            {
              "displayName": "覆盖范围",
              "columnName": "coverage"
            },
            {
              "displayName": "暂未开放城市",
              "columnName": "unopnenCity"
            },
            {
              "displayName": "省份",
              "columnName": "province"
            },
            {
              "displayName": "城市",
              "columnName": "city"
            }
          ]
        },
        "notEmpty": true,
        "success": true,
        "totalCount": 100
      })
    }, 2000);
  },

  // 3.5编辑分拨运营信息
  'POST /skynet/allotCenterOperation/modifyAllotCenterOperation': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": 1,
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 3.6新增分拨中心运营信息
  'POST /skynet/allotCenterOperation/addAllotCenterOperation': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": 1,
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 3.7删除分拨中心运营信息
  'POST /skynet/allotCenterOperation/deleteAllotCenterOperation': (req, res) => {
    setTimeout(function () {
      res.json({
        "code": "0000",
        "empty": false,
        "failure": false,
        "message": "成功",
        "models": {},
        "module": 1,
        "notEmpty": true,
        "success": true,
        "totalCount": 1
      })
    }, 2000);
  },

  // 4.1.1网点（路港驿站）信息查询列表接口
  'POST /skynet/carrier/queryWarehouseList': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "成功",
        "code": "0000",
        "success": true,
        "totalCount": 1,
        "module": {
          "dataList": [{
            "region": "未知",
            "wayport": "未知",
            "partyId": 2915029,
            "name": "星星物流有限公司",
            "attribute": '分拨中心',
            "tmiWarehouseId": 901,
            "warehouseName": "星星物流有限公司",
            "inputDate": "2017-07-30 12:41:05",
            "harborPost": "是",
            "harborName": "",
            "harborCode": "",
            "status": "启用",
            "forShort": "",
            "simpleCode": "",
            "warehouseType": "公司",
            "warehouseSubType": "自营",
            "address": "浙江省杭州市西湖区",
            "detailAddress": "之江九里",
            "warehouseCover": 0,
            "contact": "王晨星",
            "contactMobile": "15313916717",
            "contactTel": "",
            "stageDesc": "",
            "isCollection": "",
            "warehouseNum": "",
            "car": "",
            "auditRemark": ""
          }, {
            "region": "未知",
            "wayport": "未知",
            "partyId": 2915029,
            "name": "星星物流有限公司",
            "attribute": '承运商',
            "tmiWarehouseId": 501,
            "warehouseName": "星星物流有限公司",
            "inputDate": "2017-07-30 12:41:05",
            "harborPost": "否",
            "harborName": "",
            "harborCode": "",
            "status": "启用",
            "forShort": "",
            "simpleCode": "",
            "warehouseType": "公司",
            "warehouseSubType": "自营",
            "address": "浙江省杭州市西湖区",
            "detailAddress": "之江九里",
            "warehouseCover": 0,
            "contact": "王晨星",
            "contactMobile": "15313916717",
            "contactTel": "",
            "stageDesc": "",
            "isCollection": "",
            "warehouseNum": "",
            "car": "",
            "auditRemark": ""
          },{
            "region": "未知",
            "wayport": "未知",
            "partyId": 456457029,
            "name": "星星物流有限公司",
            "attribute": '承运商',
            "tmiWarehouseId": 501,
            "warehouseName": "星星物流有限公司",
            "inputDate": "2017-07-30 12:41:05",
            "harborPost": "是",
            "harborName": "",
            "harborCode": "",
            "status": "启用",
            "forShort": "",
            "simpleCode": "",
            "warehouseType": "公司",
            "warehouseSubType": "自营",
            "address": "浙江省杭州市西湖区",
            "detailAddress": "之江九里",
            "warehouseCover": 0,
            "contact": "王晨星",
            "contactMobile": "15313916717",
            "contactTel": "",
            "stageDesc": "",
            "isCollection": "",
            "warehouseNum": "",
            "car": "",
            "auditRemark": ""
          }
        ],
          "sumData": {
            "totalCarNum": 0,
            "totalUserNum": 0,
            "totalCarrierNum": 1,
            "totalHarborPostNum": 0,
            "totalNotHarborPostNum": null,
            "totalWarehouseNum": 1
          },
          "columnList": [{
              "columnName": "region",
              "displayName": "大区"
            },
            {
              "columnName": "wayport",
              "displayName": "公路港"
            },
            {
              "columnName": "name",
              "displayName": "承运商名称"
            },
            {
              "columnName": "attribute",
              "displayName": "承运商分类"
            },
            {
              "columnName": "warehouseName",
              "displayName": "网点名称"
            },
            {
              "columnName": "inputDate",
              "displayName": "网点创建时间"
            },
            {
              "columnName": "harborPost",
              "displayName": "是否路港驿站"
            },
            {
              "columnName": "harborName",
              "displayName": "路港驿站名称"
            },
            {
              "columnName": "harborCode",
              "displayName": "路港驿站编码"
            },
            {
              "columnName": "status",
              "displayName": "网点状态"
            },
            {
              "columnName": "forShort",
              "displayName": "网点简称"
            },
            {
              "columnName": "simpleCode",
              "displayName": "网点代码"
            },
            {
              "columnName": "warehouseType",
              "displayName": "网点类型"
            },
            {
              "columnName": "warehouseSubType",
              "displayName": "网点子类型"
            },
            {
              "columnName": "address",
              "displayName": "地址"
            },
            {
              "columnName": "detailAddress",
              "displayName": "详细地址"
            },
            {
              "columnName": "warehouseCover",
              "displayName": "面积(㎡)"
            },
            {
              "columnName": "contact",
              "displayName": "联系人"
            },
            {
              "columnName": "contactMobile",
              "displayName": "联系电话"
            },
            {
              "columnName": "contactTel",
              "displayName": "联系固话"
            },
            {
              "columnName": "stageDesc",
              "displayName": "驿站功能"
            },
            {
              "columnName": "isCollection",
              "displayName": "是否代收"
            },
            {
              "columnName": "warehouseNum",
              "displayName": "网点人数"
            },
            {
              "columnName": "car",
              "displayName": "自备车辆"
            }
          ]
        },
        "models": {}
      })
    }, 2000);
  },

  // 4.1.3路港驿站承运商分类修改接口
  'POST /skynet/carrier/updateHarborPostInfo': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "成功",
        "code": "0000",
        "success": true,
        "totalCount": 1,
        "module": 1,
        "models": {}
      })
    }, 2000);
  },

  // 4.1.4员工信息查询列表接口
  'POST /skynet/carrier/queryEmployeeList': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "成功",
        "code": "0000",
        "success": true,
        "totalCount": 1,
        "module": {
          "dataList": [{
            "tmiUserRelaWarehouseId": 1850,
            "region": null,
            "wayport": "未知",
            "partyId": 3312281,
            "name": "星星物流有限公司",
            "tmiWarehouseId": 901,
            "warehouseName": "星星物流有限公司",
            "inputDate": "2017-07-30 12:41:05",
            "harborPost": null,
            "status": "启用",
            "forShort": null,
            "simpleCode": null,
            "warehouseType": "公司",
            "warehouseSubType": "自营",
            "loginName": "MapleChen/admin",
            "operator": "admin",
            "realName": "张有志",
            "employeeStatus": "启用",
            "mobileNumber": "13917776136",
            "telephoneNumber": null
          }],
          "columnList": [{
              "columnName": "region",
              "displayName": "大区"
            },
            {
              "columnName": "wayport",
              "displayName": "公路港"
            },
            {
              "columnName": "name",
              "displayName": "承运商名称"
            },
            {
              "columnName": "warehouseName",
              "displayName": "网点名称"
            },
            {
              "columnName": "inputDate",
              "displayName": "创建时间"
            },
            {
              "columnName": "harborPost",
              "displayName": "是否路港驿站"
            },
            {
              "columnName": "status",
              "displayName": "网点状态"
            },
            {
              "columnName": "forShort",
              "displayName": "网点简称"
            },
            {
              "columnName": "simpleCode",
              "displayName": "网点代码"
            },
            {
              "columnName": "warehouseType",
              "displayName": "网点类型"
            },
            {
              "columnName": "warehouseSubType",
              "displayName": "网点子类型"
            },
            {
              "columnName": "loginName",
              "displayName": "登录名"
            },
            {
              "columnName": "operator",
              "displayName": "账号名"
            },
            {
              "columnName": "realName",
              "displayName": "员工姓名"
            },
            {
              "columnName": "employeeStatus",
              "displayName": "员工状态"
            },
            {
              "columnName": "mobileNumber",
              "displayName": "手机号码"
            },
            {
              "columnName": "telephoneNumber",
              "displayName": "联系电话"
            }
          ]
        },
        "models": {}
      })
    }, 2000);
  },

  // 分页查询审核列表
  'POST /skynet/allot/verify/queryList': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 1,
        "module": [{
          "inputDate": "2017-08-24 13:13:45",
          "title": "warehouseName路港驿站加盟审核申请",
          "status": "处理中",
          "pendingId": 12
        }],
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 查询审核状态列表
  'POST /skynet/allot/verify/getVerifyStatus': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": [
          "待处理",
          "处理中",
          "已提交",
          "完成",
          "退回"
        ],
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 查询审核详情
  'POST /skynet/allot/verify/query': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": {
          "metadataVO": {
            "examineAndVerifyMetadataAllotId": 445,
            "title": "浙江大区金华公路港wangchenxing加盟审核申请",
            "region": "浙江大区",
            "wayport": "金华公路港",
            "isDelete": "NO",
            "inputDate": "2017-09-25 17:04:52",
            "updateTime": null,
            "partyId": 567970725,
            "partyName": "wangchenxing",
            "warehouseId": 469,
            "warehouseName": "新兴物流有限公司test",
            "warehouseCode": null,
            "cooperation": "合资",
            "operationSituation": "试运营",
            "allotType": null,
            "allotLevel": null,
            "operationType": "全国",
            "logisticsSystem": "链云",
            "province": "浙江省",
            "city": "杭州市",
            "address": "传化大厦",
            "warehouseNum": "10",
            "forkliftNum": "1",
            "palletJackNum": "4",
            "ownTruckNum": "2",
            "cooperativeTruckNum": "3",
            "partner": "传化分拨",
            "registeredCapital": "10000",
            "companyNature": "民营",
            "areaCode": "579"
          },
          "pendingVO": {
            "examineAndVerifyPendingId": 1241,
            "metadataId": 445,
            "verifyType": "分拨中心加盟审核",
            "region": "浙江大区",
            "wayport": "金华公路港",
            "status": "OA退回",
            "handleManId": 78,
            "handleManName": "fdfZ",
            "handleManDepartment": null,
            "handleManPhone": 68756453,
            "handleManOwnerId": 980,
            "handleManOwner": "njnjjk",
            "handleManDate": "2014/32/3",
            "attachmentId": "90,33",
            "remark": 'remark',
            "rejectRemark": null,
            "isDelete": "NO",
            "inputDate": "2017-09-25 17:04:52",
            "updateTime": null,
            "isSolved": "NO",
            "historyProcessIds": null,
            "oaAccount": "[{\"actionInfo\":\"起草人-提交文档\",\"advice\":\"gdsgfsgdgds\",\"auditTime\":\"2017-10-07 15:28:49\",\"auditor\":\"冯佳佳\",\"auditorNodeName\":\"公路港经办人\"},{\"actionInfo\":\"处理人-驳回\",\"advice\":\"jppipo\",\"auditTime\":\"2017-10-07 15:30:57\",\"auditor\":\"李晓丽\",\"auditorNodeName\":\"公路港总经理\"},{\"actionInfo\":\"起草人-提交文档\",\"advice\":\"bcdv\",\"auditTime\":\"2017-10-07 16:01:03\",\"auditor\":\"张园庆\",\"auditorNodeName\":\"公路港经办人\"},{\"actionInfo\":\"处理人-通过\",\"advice\":\"fwefw\",\"auditTime\":\"2017-10-07 16:02:28\",\"auditor\":\"李晓丽\",\"auditorNodeName\":\"公路港总经理\"},{\"actionInfo\":\"处理人-通过\",\"advice\":\"hhrh\",\"auditTime\":\"2017-10-07 16:05:21\",\"auditor\":\"胡添添\",\"auditorNodeName\":\"大区财务部\"},{\"actionInfo\":\"处理人-通过\",\"advice\":\"xxzscsd\",\"auditTime\":\"2017-10-07 16:24:25\",\"auditor\":\"孙力火\",\"auditorNodeName\":\"大区总经理\"},{\"actionInfo\":\"处理人-通过\",\"advice\":\"abcd\",\"auditTime\":\"2017-10-07 16:25:07\",\"auditor\":\"林东东\",\"auditorNodeName\":\"港港互通经办人\"},{\"actionInfo\":\"处理人-通过\",\"advice\":\"qwer\",\"auditTime\":\"2017-10-07 16:27:21\",\"auditor\":\"邱俊强\",\"auditorNodeName\":\"港港互通事业部网络运营部总监\"},{\"actionInfo\":\"处理人-通过\",\"advice\":\"asdf\",\"auditTime\":\"2017-10-07 16:28:42\",\"auditor\":\"冯佳佳\",\"auditorNodeName\":\"港港互通事业部总经理\"},{\"actionInfo\":\"系统-结束流程\",\"auditTime\":\"2017-10-07 16:28:42\",\"auditor\":\"系统\",\"auditorNodeName\":\"结束节点\"}]",
            "backNetworkAttachmentId": "89,899,8",
            "backNetworkRemark": "uuytte",
            "backNetworkHistoryProcessIds": null,
            "backNetworkOaAccount": "[{\"actionInfo\":\"起草人-提交文档\",\"advice\":\"gdsgfsgdgds\",\"auditTime\":\"2017-10-07 15:28:49\",\"auditor\":\"冯佳佳\",\"auditorNodeName\":\"公路港经办人\"},{\"actionInfo\":\"处理人-驳回\",\"advice\":\"jppipo\",\"auditTime\":\"2017-10-07 15:30:57\",\"auditor\":\"李晓丽\",\"auditorNodeName\":\"公路港总经理\"},{\"actionInfo\":\"起草人-提交文档\",\"advice\":\"bcdv\",\"auditTime\":\"2017-10-07 16:01:03\",\"auditor\":\"张园庆\",\"auditorNodeName\":\"公路港经办人\"},{\"actionInfo\":\"处理人-通过\",\"advice\":\"fwefw\",\"auditTime\":\"2017-10-07 16:02:28\",\"auditor\":\"李晓丽\",\"auditorNodeName\":\"公路港总经理\"},{\"actionInfo\":\"处理人-通过\",\"advice\":\"hhrh\",\"auditTime\":\"2017-10-07 16:05:21\",\"auditor\":\"胡添添\",\"auditorNodeName\":\"大区财务部\"},{\"actionInfo\":\"处理人-通过\",\"advice\":\"xxzscsd\",\"auditTime\":\"2017-10-07 16:24:25\",\"auditor\":\"孙力火\",\"auditorNodeName\":\"大区总经理\"},{\"actionInfo\":\"处理人-通过\",\"advice\":\"abcd\",\"auditTime\":\"2017-10-07 16:25:07\",\"auditor\":\"林东东\",\"auditorNodeName\":\"港港互通经办人\"},{\"actionInfo\":\"处理人-通过\",\"advice\":\"qwer\",\"auditTime\":\"2017-10-07 16:27:21\",\"auditor\":\"邱俊强\",\"auditorNodeName\":\"港港互通事业部网络运营部总监\"},{\"actionInfo\":\"处理人-通过\",\"advice\":\"asdf\",\"auditTime\":\"2017-10-07 16:28:42\",\"auditor\":\"冯佳佳\",\"auditorNodeName\":\"港港互通事业部总经理\"},{\"actionInfo\":\"系统-结束流程\",\"auditTime\":\"2017-10-07 16:28:42\",\"auditor\":\"系统\",\"auditorNodeName\":\"结束节点\"}]"
          }
        },
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 分页查询组织未知审核列表
  'POST /skynet/allot/verify/queryUnknownList': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 3,
        "module": [{
            "inputDate": "2017-08-22 16:30:16",
            "title": null,
            "status": "组织未知",
            "pendingId": 4
          },
          {
            "inputDate": "2017-08-22 16:33:32",
            "title": null,
            "status": "组织未知",
            "pendingId": 8
          },
          {
            "inputDate": "2017-08-24 13:14:23",
            "title": "warehouseName路港驿站加盟审核申请",
            "status": "组织未知",
            "pendingId": 14
          }
        ],
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 同步组织未知的审核的组织关系
  'POST /skynet/allot/verify/sync': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "",
        "code": "",
        "success": true,
        "totalCount": 0,
        "module": null,
        "models": {},
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 审核暂存
  'POST /skynet/allot/verify/save': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "",
        "code": "",
        "success": true,
        "totalCount": 0,
        "module": null,
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 审核提交
  'POST /skynet/allot/verify/submit': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "",
        "code": "",
        "success": true,
        "totalCount": 0,
        "module": null,
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 审核退回
  'POST /skynet/allot/verify/refused': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": "",
        "code": "",
        "success": true,
        "totalCount": 0,
        "module": null,
        "models": {

        },
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 1.1.1分拨中心退网审核状态接口
  'POST /skynet/allot/logout/getLogoutStatus': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": [
          "完成",
          "退网草稿",
          "退网已提交",
          "退网完成",
          "OA退网退回"
        ],
        "models": {},
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 3.1.1分拨中心可退网列表接口 
  'POST /skynet/allot/logout/queryList': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 1,
        "module": [{
            "inputDate": "2017-08-22 16:30:16",
            "title": null,
            "status": "完成",
            "pendingId": 4
          },
          {
            "inputDate": "2017-08-22 16:30:16",
            "title": null,
            "status": "完成退网",
            "pendingId": 4
          }
        ],
        "models": {},
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 3.1.1分拨中心暂存接口 
  'POST /skynet/allot/logout/save': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 1,
        "module": {},
        "models": {},
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 4.1.1分拨中心提交接口
  'POST /skynet/allot/logout/submit': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 1,
        "module": {},
        "models": {},
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 1.1.1路港驿站退网审核状态接口
  'POST /skynet/lugang/logout/getLogoutStatus': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 0,
        "module": [
          "完成",
          "退网草稿",
          "退网已提交",
          "退网完成",
          "OA退网退回"
        ],
        "models": {},
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 3.1.1路港驿站可退网列表接口
  'POST /skynet/lugang/logout/queryList': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 1,
        "module": [{
          "inputDate": "2017-08-22 16:30:16",
          "title": null,
          "status": "组织未知",
          "pendingId": 4
        }],
        "models": {},
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 4.1.1路港驿站退网暂存接口
  'POST /skynet/lugang/logout/save': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 1,
        "module": {},
        "models": {},
        "resultMessageEnum": null
      })
    }, 2000);
  },

  // 5.1.1路港驿站退网提交接口
  'POST /skynet/lugang/logout/submit': (req, res) => {
    setTimeout(function () {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 1,
        "module": {},
        "models": {},
        "resultMessageEnum": null
      })
    }, 2000);
  },


  'POST /skynet/monitorAppLog/queryList': (req, res) => {
    setTimeout(() => {
      res.json({
        "message": null,
        "code": null,
        "success": true,
        "totalCount": 794,
        "module": {
          "dataList": [{
            "skynetMonitorAppLogId": 1999,
            "url": "/skynet/sqView/getBaseAnalysis",
            "monitorTime": "2017-09-14 08:36:36",
            "userId": "17047",
            "userName": "郑威",
            "region": "浙江大区",
            "wayPort": "金华公路港",
            "ip": null,
            "menul": "分析中心/商圈主题/商圈分析",
            "action": "查询",
            "pageNum": null,
            "pageSize": null,
            "orderByClause": null,
            "startNum": null,
            "distinct": null
          }, {
            "skynetMonitorAppLogId": 1997,
            "url": "/skynet/sqView/getBaseAnalysis",
            "monitorTime": "2017-09-14 08:36:24",
            "userId": "17047",
            "userName": "郑威",
            "region": "浙江大区",
            "wayPort": "金华公路港",
            "ip": null,
            "menul": "分析中心/商圈主题/商圈分析",
            "action": "查询",
            "pageNum": null,
            "pageSize": null,
            "orderByClause": null,
            "startNum": null,
            "distinct": null
          }, {
            "skynetMonitorAppLogId": 1989,
            "url": "/skynet[表情]YingJiXiaoView/queryFirstDate",
            "monitorTime": "2017-09-14 08:36:08",
            "userId": "4268",
            "userName": "赵恩宇",
            "region": "西南大区",
            "wayPort": "遵义公路港",
            "ip": null,
            "menul": "运营中心/运营绩效",
            "action": "查询",
            "pageNum": null,
            "pageSize": null,
            "orderByClause": null,
            "startNum": null,
            "distinct": null
          }, {
            "skynetMonitorAppLogId": 1983,
            "url": "/skynet[表情]YingJiXiaoView/queryFirstDate",
            "monitorTime": "2017-09-14 08:36:08",
            "userId": "4268",
            "userName": "赵恩宇",
            "region": "西南大区",
            "wayPort": "遵义公路港",
            "ip": null,
            "menul": "运营中心/运营绩效",
            "action": "查询",
            "pageNum": null,
            "pageSize": null,
            "orderByClause": null,
            "startNum": null,
            "distinct": null
          }, {
            "skynetMonitorAppLogId": 1995,
            "url": "/skynet[表情]YingJiXiaoView/querySecondDate",
            "monitorTime": "2017-09-14 08:36:08",
            "userId": "4268",
            "userName": "赵恩宇",
            "region": "西南大区",
            "wayPort": "遵义公路港",
            "ip": null,
            "menul": "运营中心/运营绩效",
            "action": "查询",
            "pageNum": null,
            "pageSize": null,
            "orderByClause": null,
            "startNum": null,
            "distinct": null
          }, {
            "skynetMonitorAppLogId": 1991,
            "url": "/skynet[表情]YingJiXiaoView/queryFirstDate",
            "monitorTime": "2017-09-14 08:36:08",
            "userId": "4268",
            "userName": "赵恩宇",
            "region": "西南大区",
            "wayPort": "遵义公路港",
            "ip": null,
            "menul": "运营中心/运营绩效",
            "action": "查询",
            "pageNum": null,
            "pageSize": null,
            "orderByClause": null,
            "startNum": null,
            "distinct": null
          }, {
            "skynetMonitorAppLogId": 1985,
            "url": "/skynet[表情]YingJiXiaoView/queryFirstDate",
            "monitorTime": "2017-09-14 08:36:08",
            "userId": "4268",
            "userName": "赵恩宇",
            "region": "西南大区",
            "wayPort": "遵义公路港",
            "ip": null,
            "menul": "运营中心/运营绩效",
            "action": "查询",
            "pageNum": null,
            "pageSize": null,
            "orderByClause": null,
            "startNum": null,
            "distinct": null
          }, {
            "skynetMonitorAppLogId": 1979,
            "url": "/skynet[表情]YingJiXiaoView/queryFirstDate",
            "monitorTime": "2017-09-14 08:36:08",
            "userId": "4268",
            "userName": "赵恩宇",
            "region": "西南大区",
            "wayPort": "遵义公路港",
            "ip": null,
            "menul": "运营中心/运营绩效",
            "action": "查询",
            "pageNum": null,
            "pageSize": null,
            "orderByClause": null,
            "startNum": null,
            "distinct": null
          }, {
            "skynetMonitorAppLogId": 1993,
            "url": "/skynet[表情]YingJiXiaoView/queryFirstDate",
            "monitorTime": "2017-09-14 08:36:08",
            "userId": "4268",
            "userName": "赵恩宇",
            "region": "西南大区",
            "wayPort": "遵义公路港",
            "ip": null,
            "menul": "运营中心/运营绩效",
            "action": "查询",
            "pageNum": null,
            "pageSize": null,
            "orderByClause": null,
            "startNum": null,
            "distinct": null
          }, {
            "skynetMonitorAppLogId": 1987,
            "url": "/skynet[表情]YingJiXiaoView/queryFirstDate",
            "monitorTime": "2017-09-14 08:36:08",
            "userId": "4268",
            "userName": "赵恩宇",
            "region": "西南大区",
            "wayPort": "遵义公路港",
            "ip": null,
            "menul": "运营中心/运营绩效",
            "action": "查询",
            "pageNum": null,
            "pageSize": null,
            "orderByClause": null,
            "startNum": null,
            "distinct": null
          }],
          "columnList": [{
            "columnName": "monitorTime",
            "displayName": "发生时间"
          }, {
            "columnName": "userName",
            "displayName": "用户名称"
          }, {
            "columnName": "region",
            "displayName": "大区"
          }, {
            "columnName": "wayPort",
            "displayName": "公路港"
          }, {
            "columnName": "ip",
            "displayName": "IP地址"
          }, {
            "columnName": "menul",
            "displayName": "模块名称"
          }, {
            "columnName": "action",
            "displayName": "操作类型"
          }]
        },
        "models": {},
        "resultMessageEnum": null
      })
    }, 2000);
  },
  'POST /skynet/transfarLine/lines/**': (req, res) => {
    res.json({
      "message": null,
      "code": null,
      "success": true,
      "totalCount": 1,
      "module": {
        "columnList": [{
            "columnName": "startRegion",
            "displayName": "出发大区",
            "orderBy": 1
          },
          {
            "columnName": "startWayport",
            "displayName": "出发公路港",
            "orderBy": 2
          },
          {
            "columnName": "startWarehouseName",
            "displayName": "出发分拨中心",
            "orderBy": 3
          },
          {
            "columnName": "endRegion",
            "displayName": "到达大区",
            "orderBy": 4
          },
          {
            "columnName": "endWayport",
            "displayName": "到达公路港",
            "orderBy": 5
          },
          {
            "columnName": "endWarehouseName",
            "displayName": "到达分拨中心",
            "orderBy": 6
          },
          {
            "columnName": "lineName",
            "displayName": "线路名称",
            "orderBy": 10
          },
          {
            "columnName": "openDate",
            "displayName": "开设日期",
            "orderBy": 11
          },
          {
            "columnName": "startCity",
            "displayName": "出发城市",
            "orderBy": 20
          },
          {
            "columnName": "startAdress",
            "displayName": "出发详细地址",
            "orderBy": 21
          },
          {
            "columnName": "endCity",
            "displayName": "到达城市",
            "orderBy": 22
          },
          {
            "columnName": "endAdress",
            "displayName": "到达详细地址",
            "orderBy": 23
          },
          {
            "columnName": "operationModel",
            "displayName": "运营模式",
            "orderBy": 30
          },
          {
            "columnName": "carModel",
            "displayName": "车型",
            "orderBy": 31
          },
          {
            "columnName": "lineType",
            "displayName": "线路类型",
            "orderBy": 32
          },
          {
            "columnName": "customerName",
            "displayName": "客户名称",
            "orderBy": 33
          },
          {
            "columnName": "linkMan",
            "displayName": "联系人",
            "orderBy": 34
          },
          {
            "columnName": "phone",
            "displayName": "联系电话",
            "orderBy": 35
          },
          {
            "columnName": "inputMan",
            "displayName": "录入人",
            "orderBy": 36
          },
          {
            "columnName": "lineStatus",
            "displayName": "线路状态",
            "orderBy": 37
          }
        ],
        "dataList": [{
          "startRegion": "浙江大区",
          "startWayport": "杭州公路港",
          "startWarehouseName": "杭州兴宏物流有限公司",
          "endRegion": "山东大区",
          "endWayport": "淄博公路港",
          "endWarehouseName": "山东德邦物流有限公司淄博湖罗路分公司",
          "startCity": "杭州市",
          "startAdress": "浙江省杭州市萧山区传化公路港B3017",
          "endCity": "淄博市",
          "endAdress": "山东省淄博市张店区湖罗路",
          "startEndCity": null,
          "startLongitudeLatitude": null, //经纬度
          "endLongitudeLatitude": null, //经纬度
          "transfarLineInfoId": 2,
          "inputDate": null,
          "updateTime": null,
          "stampDate": "2017-12-18 17:07:39",
          "isDelete": "NO",
          "lineName": "杭州-山东",
          "startWarehouseId": 1481,
          "endWarehouseId": 1797,
          "openDate": "2017-01-01",
          "operationModel": "运营模式",
          "carModel": "车型",
          "lineType": "线路类型",
          "customerName": "客户名称",
          "linkMan": "联系人",
          "phone": "联系电话",
          "inputMan": "16965/孙力火",
          "lineStatus": "启用"
        }]
      },
      "models": {

      },
      "resultMessageEnum": null
    })
  }



};
