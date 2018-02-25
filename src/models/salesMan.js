import * as ajax from "../services/salesMan";
import coreEvents from "cc-core-events";

// const dataSource = [{
//   id: '...',
//   key: '0',
//   nth: '1',
//   jobNumber: '123',
//   name: 'asdsd',
//   cellPhone: '13423452345',
//   region: '杭州',
//   roadPort: '杭州',
//   note: 'asdasdasd',
//   op: '',
// }, {
//   id: '...',
//   key: '1',
//   nth: '2',
//   jobNumber: '123sd',
//   name: 'asdsd',
//   cellPhone: '13423452345',
//   region: '杭州',
//   roadPort: '杭州',
//   note: 'asdasdasd',
//   op: '',
// }];

const columns = [{
  title: '序号',
  dataIndex: 'nth',
  key: '0',
}, {
  title: '工号',
  dataIndex: 'jobNumber',
  key: '1',
}, {
  title: '姓名',
  dataIndex: 'name',
  key: '2',
}, {
  title: '手机号',
  dataIndex: 'cellPhone',
  key: '3',
}, {
  title: '大区',
  dataIndex: 'region',
  key: '4',
}, {
  title: '公路港',
  dataIndex: 'roadPort',
  key: '5',
}, {
  title: '备注',
  dataIndex: 'note',
  key: '6',
}, {
  title: '操作',
  dataIndex: 'op',
  key: '7',
}];

export default {

  namespace: 'salesMan',

  state: {
    treeSelect: null,
    // search key is region
    treeSelectedValue: "",
    region: "",
    wayPort: "",
    salesmanName: "",
    dataSource: [],
    columns: [...columns],
    pagination: {
      total: 0,
      current: 1,
      pageSize: 10
    }
  },

  subscriptions: {
    setup({dispatch, history}) {
      dispatch({
        type: "search",
        payload: {
          params: {
            region: "",
            salesmanName: "",
            pageSize: 10,
            pageNum: 1
          }
        }
      });

      dispatch({
        type: "fetchTreeSelect",
        payload: {
          params: {}
        }
      });

      coreEvents.on("salesManModalView:renderData", (renderData) => {
        if (renderData.type === "edit") {
          log("salesManModalView:renderData => edit");
          dispatch({
            type: "updateOneTableItem",
            payload: {
              index: renderData.index,
              item: renderData.item
            }
          });
        } else if (renderData.type === "add") {
          log("salesManModalView:renderData => add");
          var params = {};
          // ...state.pagination,
          // total: payload.total,
          // current: params.pageNum

          dispatch({
            type: "getParams",
            payload: {
              params
            }
          });

          dispatch({
            type: "search",
            payload: {
              params: {...params}
            }
          });
        }
      });

      // dispatch({
      //   type: "login",
      //   payload: {
      //     params: {
      //       username: "15562",
      //       password: "19930628.0718"
      //     }
      //   }
      // })
    },
  },

  effects: {
    // search table
    *search({payload}, {call, put}) {
      const res = yield call(ajax.list, {...payload.params});
      if (!res || res.result !== "success") {
        return;
      }

      yield put({
        type: "updateTableList",
        payload: res.data,
        params: payload.params
      })
    },

    // tree
    *fetchTreeSelect({payload}, {call, put}) {
      const res = yield call(ajax.treeSelect);
      console.log('fecth',res)
      if (!res || res.result !== "success") {
        return;
      }
      log("fetchTreeSelect", res);

      yield put({
        type: "save",
        payload: {
          treeSelect: res.data
        }
      });
    },

    // del table item
    *del({payload}, {call, put}) {
      const res = yield call(ajax.del, {...payload.params});
      if (!res || res.result !== "success") {
        return;
      }
      log("del", res);

      yield put({
        type: "search",
        payload: {
          params: {
            ...payload.searchParams,
            pageNum: 1
          }
        }
      });
    },

    haha: [function *() {
      // type: takeLatest
    }, { type: "throttle", ms: 2e+3 }]

    // *login({payload}, {call, put}) {
    //   const res = yield call(ajax.login, {...payload.params});
    //   if (!res || res.result !== "success") {
    //     return;
    //   }
    //   log(res);
    // },
  },

  reducers: {
    getParams(state, {payload}) {
      payload.params.region = state.region;
      payload.params.salesmanName = state.salesmanName;
      payload.params.pageSize = state.pagination.pageSize;
      payload.params.pageNum = state.pagination.current;

      return state;
    },

    delOneTableItem(state, {payload}) {
      const {dataSource} = state;
      dataSource.splice(payload.index, 1);
      return {
        ...state,
        dataSource: [...dataSource]
      };
    },

    updateOneTableItem(state, {payload}) {
      const {dataSource} = state;
      dataSource[payload.index] = {...payload.item};

      return {
        ...state,
        dataSource: [...dataSource]
      };
    },

    updateTableList(state, {payload, params}) {
      return {
        ...state,
        dataSource: [...payload.dataSource],
        pagination: {
          ...state.pagination,
          total: payload.total,
          current: params.pageNum
        }
      };
    },

    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

}
