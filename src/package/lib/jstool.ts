import {
  isEmpty,
  throttle,
  typeOf,
  deepClone,
  debounce,
  isExist,
  toAsync,
  toArray,
  toRandom,
  toggle,
  sleep,
  filterValue,
  getSearchParams,
  isNumber
} from '@zrcode/jstool';

export default function initJvarScriptTool(zero: Zero) {
  zero.$set('tool', {
    isEmpty,
    throttle,
    typeOf,
    deepClone,
    debounce,
    isExist,
    toAsync,
    toArray,
    toRandom,
    toggle,
    sleep,
    filterValue,
    getSearchParams,
    isNumber
  });
}
