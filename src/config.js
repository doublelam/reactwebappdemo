import window from "global/window";

/**
 * global sign for coders
 * test
 * prev
 * production
 */
const ENV = "prod";

/**
 * cache the console.log method
 */
let log = window.console.log;

/**
 * sign for logging if env is production
 */
const PRODUCTION_LOG_SIGN = "tf56:log";

/**
 * used for replacing console.log
 */
window.log = function () {
  let args;

  if (ENV === "prod") {
    if (arguments[0] !== PRODUCTION_LOG_SIGN) {
      return;
    } else {
      args = [].slice.call(arguments, 1);
    }
  } else {
    args = [].slice.call(arguments);
  }

  return log.apply(window.console, args);
};

/**
 * for caching data
 */
console.log('env', ENV);
const setPrefix = () => {
  let href = self.location.href.match(/.*\#/g) || self.location.href;
  console.log('match href', href)
  if (/tmsBossAdmin/i.test(href)) {
    window.dominPrefix = ['/tmsBossAdmin/', 'tmsadmin']
    return '/tmsBossAdmin/';
  }
  window.dominPrefix = ['/skynet/', 'sales-man'];
  return '/skynet/';
}
let preFix = setPrefix();
console.log(preFix)
export default {
  // the alias for ak
  productId: "",
  // ak: used for fetching ajax data
  // akList: holding a list of ak for switching channels
  akList: [],
  // the const as the global env
  ENV,
  // used when fetching ajax data
  // http://statictest.tf56.com/
  AJAX_URL_PREFIX: ({
    test: '/skynet/',
    prev: preFix,
    prod: preFix
  })[ENV]
};


