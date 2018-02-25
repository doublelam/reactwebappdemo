import React from "react";
import {ajax} from "jquery";
import {message} from "antd";

console.log("===jquery ajax===");

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options = {}) {
  return ajax(url, options)
    .then(function (res) {
      if (redirect(res)) return;

      if (res) {
        if (typeof res === "string") {
          res = JSON.parse(res);
        }
      } else {
        res = {
          result: "error",
          data: null,
          msg: "wrong response structure"
        };
      }

      if (res.result !== "success") {
        if (!/logout$/.test(url)) {
          console.warn("[" + url + "]: " + res.msg);
        }
      }

      return res;
    })
    .fail((xhr, status) => {
      console.warn("[" + url + "]: fail ");
    });
}

function redirect(res) {
	if (!res) {
		return false;
	}

	if (typeof res === "string") {
		try {
			res = JSON.parse(res);
		} catch(e) {
			// do not handle the err
			return false;
		}
	}

  // {"redirect":true,"redirectUrl":"http://sitetest.tf56.com/openssoWeb/opensso/login?clientNo=1&redirectUrl=http://10.7.13.17/skynet/salesmansView/updateSalesmans"}
	if (res.redirect
		&& typeof res.redirectUrl === "string"
		&& /\&redirectUrl\=/.test(res.redirectUrl)
	) {
		res.redirectUrl = res.redirectUrl
			.replace(/^(.+?redirectUrl=)(.*)$/, "$1" + window.location.href);

		window.location.href = res.redirectUrl;
		return true;
	}

	return false;
}
