
export class SimulateAjax {
  static getSiderbarList(delay, cb) {
    window.setTimeout(() => {
      const data = {
        "success": true,
        "totalCount": 0,
        "module": [
          {
            "aclMenuId": 1069,
            "menuName": "skynet",
            "menuUrl": "../",
            "menuType": "公有菜单",
            "parentNode": -1,
            "rank": 1,
            "level": 0,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006",
            "createDate": "2016-12-21 16:38:20.0",
            "updateMan": "13006",
            "updateDate": "2016-12-21 16:38:20.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1959,
            "menuName": "资产易耗品",
            "menuUrl": "../",
            "parentNode": 1079,
            "rank": 7,
            "level": 3,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006/张臣",
            "createDate": "2017-03-21 17:47:41.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:47:41.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1081,
            "menuName": "业务员管理",
            "menuIcon": "",
            "menuUrl": "../",
            "parentNode": 1073,
            "rank": 1,
            "level": 2,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006",
            "createDate": "2016-12-22 11:25:22.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:48:47.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1077,
            "menuName": "运输主题",
            "menuIcon": "",
            "menuUrl": "statistics/shipOrder_Region_M/query",
            "parentNode": 1071,
            "rank": 1,
            "level": 2,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006",
            "createDate": "2016-12-22 11:24:51.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:45:16.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1083,
            "menuName": "会员管理",
            "menuIcon": "",
            "menuUrl": "../",
            "parentNode": 1073,
            "rank": 2,
            "level": 2,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006",
            "createDate": "2016-12-22 11:25:35.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:49:01.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1957,
            "menuName": "资产动产",
            "menuUrl": "asset-movable",
            "parentNode": 1079,
            "rank": 6,
            "level": 3,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006/张臣",
            "createDate": "2017-03-21 17:47:28.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:47:28.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1961,
            "menuName": "客户经理业务统计",
            "menuUrl": "../",
            "parentNode": 1079,
            "rank": 8,
            "level": 3,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006/张臣",
            "createDate": "2017-03-21 17:48:03.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:48:03.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1079,
            "menuName": "园区主题",
            "menuIcon": "",
            "menuUrl": "../",
            "parentNode": 1071,
            "rank": 2,
            "level": 2,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006",
            "createDate": "2016-12-22 11:25:08.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:45:35.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1947,
            "menuName": "运单统计",
            "menuUrl": "waybill-count",
            "parentNode": 1077,
            "rank": 2,
            "level": 3,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006/张臣",
            "createDate": "2017-03-21 17:44:49.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:44:49.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1955,
            "menuName": "资产不动产",
            "menuUrl": "asset-immovable",
            "parentNode": 1079,
            "rank": 5,
            "level": 3,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006/张臣",
            "createDate": "2017-03-21 17:47:05.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:47:05.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1945,
            "menuName": "园区出租统计",
            "menuIcon": "",
            "menuUrl": "yards-rent",
            "parentNode": 1079,
            "rank": 1,
            "level": 3,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006/张臣",
            "createDate": "2017-03-21 17:44:23.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:45:56.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1963,
            "menuName": "园区综合经营报表",
            "menuUrl": "../",
            "parentNode": 1079,
            "rank": 9,
            "level": 3,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006/张臣",
            "createDate": "2017-03-21 17:48:23.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:48:23.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1943,
            "menuName": "运输业务指标",
            "menuIcon": "",
            "menuUrl": "transport-bussness",
            "parentNode": 1077,
            "rank": 1,
            "level": 3,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006/张臣",
            "createDate": "2017-03-21 17:43:59.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:49:27.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1953,
            "menuName": "财务收入统计",
            "menuUrl": "income-count",
            "parentNode": 1079,
            "rank": 4,
            "level": 3,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006/张臣",
            "createDate": "2017-03-21 17:46:45.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:46:45.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1073,
            "menuName": "权限管理",
            "menuIcon": "",
            "menuUrl": "../",
            "parentNode": 1069,
            "rank": 2,
            "level": 1,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006",
            "createDate": "2016-12-22 11:24:25.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:43:32.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1071,
            "menuName": "报表中心",
            "menuIcon": "",
            "menuUrl": "../",
            "parentNode": 1069,
            "rank": 1,
            "level": 1,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006",
            "createDate": "2016-12-22 11:24:09.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:43:13.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1949,
            "menuName": "合同签订统计",
            "menuUrl": "contract-sign-count",
            "parentNode": 1079,
            "rank": 2,
            "level": 3,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006/张臣",
            "createDate": "2017-03-21 17:46:12.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:46:12.0",
            "status": "有效"
          },
          {
            "aclMenuId": 1951,
            "menuName": "水电统计",
            "menuUrl": "../",
            "parentNode": 1079,
            "rank": 3,
            "level": 3,
            "productId": "myportal",
            "productType": "skynet",
            "createMan": "13006/张臣",
            "createDate": "2017-03-21 17:46:27.0",
            "updateMan": "13006/张臣",
            "updateDate": "2017-03-21 17:46:27.0",
            "status": "有效"
          }
        ],
        "models": {}
      };

      cb(data);
    }, delay);
  }

  
}  

export const tableInfo = {
    "success": true,
    "totalCount": 0,
    "module": {
      "pageKey": "warehouseMonthId",
      "partyName": "zc",
      "partyId": "13006",
      "dataCount": 3,
      "queryInfoVO": {
        "queryVOList": [
          {
            "displayName": "时间",
            "name": "inputdate"
          },
          {
            "displayName": "大区",
            "name": "region"
          },
          {
            "displayName": "公路港",
            "name": "wayport"
          },
          {
            "displayName": "网点",
            "name": "warehouse"
          }
        ],
        "authorityList": [
          {
            "aclUnitId": 413,
            "unitCode": "U1702230920007H3fmP2",
            "unitName": "浙江大区",
            "type": "",
            "parentNode": 411,
            "unitLevel": 2,
            "productId": "myportal",
            "productType": "skynet",
            "description": "",
            "createDate": "2017-02-23 09:20:24.0",
            "createMan": "13006/张臣",
            "updateDate": "2017-02-23 09:20:24.0",
            "updateMan": "13006/张臣",
            "status": "Effective",
            "stampDate": "2017-02-23 09:20:24.0",
            "childrenList": [
              {
                "aclUnitId": 785,
                "unitCode": "U1703011526037pB23he",
                "unitName": "金华公路港",
                "type": "",
                "parentNode": 413,
                "unitLevel": 3,
                "productId": "myportal",
                "productType": "skynet",
                "description": "",
                "createDate": "2017-04-01 15:27:00.0",
                "createMan": "15832/张园庆",
                "updateDate": "2017-04-01 15:27:00.0",
                "updateMan": "15832/张园庆",
                "status": "Effective",
                "stampDate": "2017-03-01 15:27:00.0"
              },
              {
                "aclUnitId": 781,
                "unitCode": "U1703011032035BE0o0q",
                "unitName": "杭州公路港",
                "type": "",
                "parentNode": 413,
                "unitLevel": 3,
                "productId": "myportal",
                "productType": "skynet",
                "description": "",
                "createDate": "2016-03-01 10:32:44.0",
                "createMan": "15562/冯佳佳",
                "updateDate": "2016-03-01 10:32:44.0",
                "updateMan": "15562/冯佳佳",
                "status": "Effective",
                "stampDate": "2017-03-01 10:32:44.0"
              },
              {
                "aclUnitId": 787,
                "unitCode": "U170301152700635RIet",
                "unitName": "衢州公路港",
                "type": "",
                "parentNode": 413,
                "unitLevel": 3,
                "productId": "myportal",
                "productType": "skynet",
                "description": "",
                "createDate": "2016-03-01 15:27:14.0",
                "createMan": "15832/张园庆",
                "updateDate": "2016-03-01 15:27:14.0",
                "updateMan": "15832/张园庆",
                "status": "Effective",
                "stampDate": "2017-03-01 15:27:14.0"
              }
            ]
          }
        ]
      },
      "columnList": [
        {
          "displayId": 24,
          "pageViewId": 3,
          "columnName": "inputdate",
          "tableColumnName": "month",
          "displayName": "时间",
          "remark": "",
          "dataType": "DATE",
          "displayType": "LATITUDE",
          "queryAble": "YES",
          "hideAble": "YES",
          "orderNum": 1
        },
        {
          "displayId": 23,
          "pageViewId": 3,
          "columnName": "region",
          "tableColumnName": "region",
          "displayName": "大区",
          "remark": "",
          "dataType": "CHARS",
          "displayType": "LATITUDE",
          "queryAble": "YES",
          "hideAble": "YES",
          "orderNum": 2
        },
        {
          "displayId": 25,
          "pageViewId": 3,
          "columnName": "wayport",
          "tableColumnName": "wayport",
          "displayName": "公路港",
          "remark": "",
          "dataType": "CHARS",
          "displayType": "LATITUDE",
          "queryAble": "YES",
          "hideAble": "YES",
          "orderNum": 3
        },
        {
          "displayId": 26,
          "pageViewId": 3,
          "columnName": "warehouse",
          "tableColumnName": "warehouse",
          "displayName": "网点",
          "remark": "",
          "dataType": "CHARS",
          "displayType": "LATITUDE",
          "queryAble": "YES",
          "hideAble": "YES",
          "orderNum": 4
        },
        {
          "displayId": 27,
          "pageViewId": 3,
          "columnName": "acceptordernum",
          "tableColumnName": "acceptordernum",
          "displayName": "受理订单个数",
          "remark": "",
          "dataType": "NUM",
          "displayType": "QUOTA",
          "queryAble": "NO",
          "hideAble": "NO",
          "orderNum": 5
        },
        {
          "displayId": 28,
          "pageViewId": 3,
          "columnName": "shipordernum",
          "tableColumnName": "shipordernum",
          "displayName": "运单开单个数",
          "remark": "",
          "dataType": "NUM",
          "displayType": "QUOTA",
          "queryAble": "NO",
          "hideAble": "NO",
          "orderNum": 6
        },
        {
          "displayId": 29,
          "pageViewId": 3,
          "columnName": "startnum",
          "tableColumnName": "startnum",
          "displayName": "发车车次",
          "remark": "",
          "dataType": "NUM",
          "displayType": "QUOTA",
          "queryAble": "NO",
          "hideAble": "NO",
          "orderNum": 7
        },
        {
          "displayId": 30,
          "pageViewId": 3,
          "columnName": "arrivenum",
          "tableColumnName": "arrivenum",
          "displayName": "到达车次",
          "remark": "",
          "dataType": "NUM",
          "displayType": "QUOTA",
          "queryAble": "NO",
          "hideAble": "NO",
          "orderNum": 8
        },
        {
          "displayId": 31,
          "pageViewId": 3,
          "columnName": "shippingfee",
          "tableColumnName": "shippingfee",
          "displayName": "基本运费",
          "remark": "",
          "dataType": "NUM",
          "displayType": "QUOTA",
          "queryAble": "NO",
          "hideAble": "NO",
          "orderNum": 9
        }
      ],
      "dataList": [
        {
          "region": "浙江大区",
          "startnum": 0,
          "arrivenum": 0,
          "wayport": "杭州公路港",
          "shippingfee": 48296,
          "shipordernum": 94,
          "month": "2016-01",
          "acceptordernum": 0,
          "warehouse": "杭州传化公路港分拨中心"
        },
        {
          "region": "浙江大区",
          "startnum": 0,
          "arrivenum": 0,
          "wayport": "杭州公路港",
          "shippingfee": 1220514.98,
          "shipordernum": 944,
          "month": "2017-03",
          "acceptordernum": 0,
          "warehouse": "新孚物流青岛专线"
        },
        {

          "region": "浙江大区",
          "startnum": 31,
          "arrivenum": 14,
          "wayport": "杭州公路港",
          "shippingfee": 25722,
          "shipordernum": 14,
          "month": "2017-01",
          "acceptordernum": 0,
          "warehouse": "杭州鑫泓圣物流有限公司"
        }
      ],
      "sumData": {
        "startnum": 31,
        "arrivenum": 14,
        "shippingfee": 1294532.98,
        "shipordernum": 1052,
        "acceptordernum": 0
      }
    },
    "models": {}
  };