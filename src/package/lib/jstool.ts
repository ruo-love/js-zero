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
  createLocalStorage,
  encrypto,
  decrypto,
} from "@zrcode/jstool";

export default function initJvarScriptTool() {
  zero.$set("tool", {
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
    createLocalStorage,
    encrypto,
    decrypto,
  });
}
