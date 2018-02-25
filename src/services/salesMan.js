import { get, post } from "../utils/ajax";
import treeWalk from "../utils/treeWalk";
import { ObjOperate } from '../utils/objOperate';
import { message } from 'antd';

// 表格
// "description": "大多数",
// "inputDate": {
//   "date": "20",
//   "day": "1",
//   "hours": "17",
//   "minutes": "58",
//   "month": "1",
//   "seconds": "51",
//   "time": "1487584731000",
//   "timezoneOffset": "-480",
//   "year": "117"
// },
// "isDelete": "NO",
// "phoneNumber": "453453465456456",
// "region": "浙江大区",
// "salesmanName": "业务员123123123",
// "salesmanNumber": "asdasdasd",
// "salesmanType": "业务员",
// "salesmansId": "2",
// "stampDate": {
//   "date": "20",
//   "day": "1",
//   "hours": "18",
//   "minutes": "31",
//   "month": "1",
//   "seconds": "32",
//   "time": "1487586692000",
//   "timezoneOffset": "-480",
//   "year": "117"
// },
// "updateTime": {
//   "date": "20",
//   "day": "1",
//   "hours": "17",
//   "minutes": "58",
//   "month": "1",
//   "seconds": "51",
//   "time": "1487584731000",
//   "timezoneOffset": "-480",
//   "year": "117"
// },
// "wayPort": "杭州公路港14234"
// ==============================
// ==============================
// ==============================
// key: '1',
// nth: '2',
// jobNumber: '123sd',
// name: 'asdsd',
// cellPhone: '13423452345',
// region: '杭州',
// roadPort: '杭州',
// note: 'asdasdasd',
// op: '',
export const list = (params = {}) => {
  return post("salesmansView/querySalesmanList", params)
    .then(res => {
      if (!res || res.result !== "success") {
        return;
      }

      // arr
      let { data } = res;

      res.data = {
        total: res.count - 0,
        dataSource: data.map((item, i) => ({
          key: i,
          nth: i + 1,
          jobNumber: item.salesmanNumber,
          name: item.salesmanName,
          cellPhone: item.phoneNumber,
          region: item.region,
          roadPort: item.wayPort,
          note: item.description,
          op: '',
          id: item.salesmansId
        }))
      }

      return res;
    });
};

export const treeSelect = (params = {}) => {
  return post("salesmansView/queryRegionByAcl", params)
    .then(res => {
      const newRes = ObjOperate.copyObj(res);
      // console.log('new res', newRes)
      var data = res.data || [];

      // tree root node is the only one node
      data = data[0];
      if (!data) {
        res.data = null;
        return res;
      }

      var tree = {
        key: "0",
        unitName: data.unitName,
        childrenList: [...(data.childrenList || [])],
        valueSelect: "",
        wayPortMap: {}
      };

      let maxY = -1;

      treeWalk(tree, (node, y, x, parent) => {
        node._y = y;
        node._x = x;

        if (y > maxY) maxY = y;

        if (parent) {
          node.key = parent.key + "-" + x;
        }
      }, "childrenList");

      treeWalk(tree, (node, y, x, parent) => {
        if (y === maxY && y > 0) {
          tree.wayPortMap[node.unitName] = {
            wayPort: node.unitName,
            region: parent.unitName
          };
        }
      }, "childrenList");
      res.data = tree;
      return newRes;
    });
}

/**
 * salesmansId
 */
export const del = (params = {}) => {
  return post("salesmansView/updateSalesmans", {
    ...params,
    isDelete: "YES"
  }).then((data) => {
    if (data.result !== 'success') {
      message.warn(data.msg || '网络错误，请重新绑定');
      return;
    }
    return data;
  });
}

/**
 * salesmansId must be provided
 */
export const edit = (params = {}) => {
  return post("salesmansView/updateSalesmans", {
    ...params,
  }).then((data) => {
    if (data.result !== 'success') {
      message.warn(data.msg || '网络错误，请重新绑定');
      return;
    }
    return data;
  });
}

/**
 * add
 */
export const add = (params = {}) => {
  return post("salesmansView/insertSalesmans", {
    ...params,
  }).then((data) => {
    if (data.result !== 'success') {
      message.warn(data.msg || '网络错误，请重新绑定');
      return;
    }
    return data;
  });
}
