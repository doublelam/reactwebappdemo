import request from './_request';
import config from "../config";

const AJAX_URL_PREFIX = config.AJAX_URL_PREFIX

export const post = (url = "", params = {}) => {
  if (/^\$/.test(url)) {
    url = url.slice(1);
  } else {
    url = AJAX_URL_PREFIX + url;
  }

  return request(url, {
    type: "POST",
    traditional: true,
    // headers: {
    //   "Content-Type": "application/json"
    // },
    data: {...params, _: Date.now()},
    // dataType: "json"
  });
};

function q(url, params) {
  params = params || {};

  params._ = Date.now();

  var str = ""
  for (var p in params) {
    str += p + "=" + params[p] + "&";
  }

  str = "?" + str.slice(0, str.length - 1);

  return url + str;
}

export const get = (url = "", params = {}, noAffix) => {
  url = !noAffix
    ? AJAX_URL_PREFIX + url + "/" + config.productId
    : AJAX_URL_PREFIX + url;

  return request(q(url, params), {
    type: "GET"
  });
};

export const commonGet = (url = "", params = {}, noAffix) => {
  url = AJAX_URL_PREFIX + url;

  return request(q(url, params), {
    method: "GET"
  });
};

/**
 * get by params which contains jsonStr
 * used in page: [overallProfile]
 */
export const getByJsonStr = (url = "", params = {}) => {
  params.prodId = config.productId;

  url = AJAX_URL_PREFIX + url;
  url = q(url, {
    jsonStr: window.encodeURIComponent(JSON.stringify(params))
  });

  return request(url, {
    type: "GET",
  });
}
