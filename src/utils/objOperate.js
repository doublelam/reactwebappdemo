export class ObjOperate {
  static copyObj(obj) {
    let imageObject = {};
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        if (obj[key] instanceof Array) {
          imageObject[key] = ObjOperate.copyArr(obj[key]);
        } else if (obj[key] instanceof Object) {
          imageObject[key] = ObjOperate.copyObj(obj[key]);
        } else {
          imageObject[key] = obj[key];
        }
      } else {
        imageObject[key] = obj[key];
      }
    }
    return imageObject;
  }

  static copyArr(arr) {
    let imageArray = [];
    for (let index in arr) {
      if (typeof arr[index] === 'object') {
        if (arr[index] instanceof Array) {
          imageArray[index] = ObjOperate.copyArr(arr[index]);
        } else if (arr[index] instanceof Object) {
          imageArray[index] = ObjOperate.copyObj(arr[index]);
        } else {
          imageArray[index] = arr[index];
        }
      } else {
        imageArray[index] = arr[index];
      }
    }
    return imageArray;
  }

  /**
 * 将对象按照json格式输出成字符串
 * @param {Object} obj 输入对象
 * @returns {String} 
 */
  static objTransformToStr(obj) {
    let str = '';
    for (let item in obj) {
      let subStr = '';
      if (obj[item] instanceof Array) {
        subStr = `${item}: ${ObjOperate.arrayTransformToStr(obj[item])}`;
      } else if (typeof obj[item] === 'object' && obj[item] !== null) {
        subStr = `${item}: ${ObjOperate.objTransformToStr(obj[item])}`;
      } else if (typeof obj[item] === 'number' || obj[item] === null) {
        subStr = `${item}: ${String(obj[item])}`;
      } else if (typeof obj[item] === 'string') {
        subStr = `${item}: '${obj[item]}'`;
      }
      str += subStr + ',';
    }
    str = str.slice(0, str.length - 1);
    return `{${str}}`;
  }

  /**
   * 将数组按照数组格式输出成字符串
   * @param {any[]} arr 输入数组
   * @returns {String}
   */
  static arrayTransformToStr(arr) {
    let str = '';
    for (let content of arr) {
      let subStr = '';
      if (content instanceof Array) {
        subStr = ObjOperate.arrayTransformToStr(content);
      } else if (typeof content === 'object' && content !== null) {
        subStr = ObjOperate.objTransformToStr(content);
      } else if (typeof content === 'number' || content === null) {
        subStr = String(content);
        // console.log('when number', subStr);
      } else if (typeof content === 'string') {
        subStr = `'${content}'`;
      }
      str += subStr + ',';
    }
    str = str.slice(0, str.length - 1);
    return `[${str}]`;
  }

  static addComma(str) {
    let newStr = String(str);
    let arr = newStr.split('\.');
    if (arr.length > 2) {
      // console.warn('Wrong Input String: ', newStr);
      return newStr;
    }
    let intPartSingleNum = arr[0].split('');
    for (let i = intPartSingleNum.length - 1; i >= 0; i--) {
      let gap = intPartSingleNum.length - 1 - i;
      if (gap !== 0 && gap % 3 === 0 && intPartSingleNum[i] !== '-') {
        intPartSingleNum[i] += ',';
      }
    }
    return `${intPartSingleNum.join('')}${arr[1] ? '.' + arr[1] : ''}`;
  }

  static trimExtra(str) {
    return str.replace(/\'/g, '').trim();
  }

  static objToUrlQuery(obj) {
    let str = '';
    for (let key in obj) {
      str += `${key}=${obj[key]}&`;
    }
    return str.substring(0, str.length - 1);
  }

  static transformToDivition(str, type, maintain) {
    const num = Number(str);
    const divided = Math.pow(10, type);
    const floatNum = num / divided;
    return floatNum.toFixed(maintain);
  }

  static arrayToUrl(arr, setKey = "key") {
    return (arr.map(val => `${setKey}=${val}`).join('&'));
  }
}

export const deduplication = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  return [arr[0]].concat(deduplication(filter(val => val !== arr[0], arr.slice(1, arr.length))));
};

export const filter = (f, arr) => {
  if (!arr.length) {
    return [];
  }
  if (arr.length === 1) {
    return f(arr[0]) ? [arr[0]] : [];
  }
  return (f(arr[0]) ? [arr[0]] : [])
    .concat(filter(f, arr.slice(1, arr.length)));
};

export const getMatches = (strs, str) => {
  if (!strs.length){
    return [];
  }
  const tVal = str.indexOf(strs[0]) === -1 ? [] : [strs[0]];
  return tVal.concat(getMatches(strs.slice(1), str))
}
