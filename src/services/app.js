import {get, post} from "../utils/ajax";

export const username = (params = {}) => {
  return post("welcome/queryUserName", params);
};

export const logout = (params = {}) => {
  return post("opensso/logout", params);
};
