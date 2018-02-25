var toString = Object.prototype.toString;

var $ = {
  type: function (obj) {
    if (obj === null) return 'null';
    else if (obj === undefined) return 'undefined';
    else if (typeof obj !== 'object') return typeof obj;
    else {
      var str = toString.call(obj);
      return str.slice(8, str.length - 1).toLowerCase();
    }
  },
  isWindow: function (node) {
    return node && node.window === node;
  }
};

function isArraylike( obj ) {
  var length = "length" in obj && obj.length,
    type = $.type( obj );

  if ( type === "function" || $.isWindow( obj ) ) {
    return false;
  }

  if ( obj.nodeType === 1 && length ) {
    return true;
  }

  return type === "array" || length === 0 ||
    typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}

module.exports = function treeWalk(item, callback, prop, y, x, parent) {
  if (item == null) return;
  if (y == null) y = 0;
  if (x == null) x = 0;
  if (callback(item, y, x, parent) === false) return false;

  if (prop == null) prop = 'children';
  if (!isArraylike(item[prop])) return;

  var i = -1, len = item[prop].length, one;
  while (++i < len) {
    one = item[prop][i];

    if (one == null) continue;

    if (one[prop]) {
      if (treeWalk(one, callback, prop, y + 1, i, item) === false) {
        return false;
      }
    } else if (callback(one, y + 1, i, item) === false) {
      return false;
    }
  }
};
