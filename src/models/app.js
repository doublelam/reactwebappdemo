import {username, logout} from "../services/app";
import window from "global/window";

export default {

  namespace: 'app',

  state: {
    username: ""
  },

  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({
        type: "username"
      })
    },
  },

  effects: {
    *username({ payload }, { call, put }) {
      const res = yield call(username, {});
      if (res.result !== "success") {
        return;
      }

      yield put({
        type: "save",
        payload: {
          username: res.data
        }
      });
    },

    *logout({ payload }, { call, put }) {
      log("logout start");
      setTimeout(() => {
        log("logout done");
        window.location.reload();
      }, 500);

      yield call(logout, {});
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
}
