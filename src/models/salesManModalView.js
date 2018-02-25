import * as ajax from "../services/salesMan";
import { ObjOperate } from '../utils/objOperate';
function resetKey(arrayData) {
  let newArr = ObjOperate.copyArr(arrayData);
  if (newArr[0].unitLevel === '1') {
    console.log('level is 1', newArr)
    newArr = newArr[0].childrenList;
  }
  for (let item of newArr) {
    item.key = item.aclUnitId;
    item.value = item.unitName;
    item.label = item.unitName;
    if (item.childrenList) {
      item.children = resetKey(item.childrenList);
    }
  }
  return newArr;
}
export default {

  namespace: 'salesManModalView',

  state: {
    title: "编辑",
    // control show or hide state
    visible: false,
    // edit or add done
    ajaxDone: false,
    // these variables must be cleared after close
    confirmLoading: false,
    region: "",
    treeSelect: null,
    notValid: false,
    // passed from parent
    // type: edit: { index: i, item: {}, type: "edit" }
    // type: add: { index: null, item: {}, type: "add" }
    renderData: null,
  },

  subscriptions: {
    setup({ dispatch, history }) { },
  },

  effects: {
    // tree
    *fetchTreeSelect({ payload }, { call, put }) {
      const res = yield call(ajax.treeSelect);
      if (!res || res.result !== "success") {
        return;
      }
      log("fetchTreeSelectdsdsds", res.data,resetKey(res.data));
      yield put({
        type: "save",
        payload: {
          treeSelect: resetKey(res.data)
        }
      })
    },

    // del table item
    *add({ payload }, { call, put }) {
      const res = yield call(ajax.add, { ...payload.params });
      if (!res || res.result !== "success") {
        yield put({ type: "close" });
        return;
      }
      log("salesManModalView add done", res);

      yield put({
        type: "save",
        payload: {
          visible: false,
          confirmLoading: false,
          ajaxDone: true
        }
      })
    },

    // edit table item
    *edit({ payload }, { call, put }) {
      const res = yield call(ajax.edit, { ...payload.params });
      if (!res || res.result !== "success") {
        yield put({ type: "close" });
        return;
      }

      log("salesManModalView edit done", res);

      yield put({
        type: "save",
        payload: {
          visible: false,
          confirmLoading: false,
          ajaxDone: true
        }
      });
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    close(state) {
      return {
        ...state,
        visible: false,
        ajaxDone: false,
        confirmLoading: false,
        region: "",
        treeSelect: null,
        notValid: false,
        renderData: null,
      }
    }
  },

}
