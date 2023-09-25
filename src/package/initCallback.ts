import initJvarScriptTool from "./lib/jstool";

export function initCallback(zero: Zero) {
  function startInit() {
    zero.$set = function (key: string, value: any) {
      zero[key] = value;
    };

    zero.$get = function (key) {
      return zero[key];
    };
    zero.lifeCycle.inited();
  }
  /**开始zero初始化加载 */
  startInit();

  /**开始挂载依赖包 */
  zero.lifeCycle.beforeLoad();
  startLoadPackage();
}

function startLoadPackage() {
  /**load"@zrcode/jstool": "^0.2.4" js工具包 */
  initJvarScriptTool();
  zero.lifeCycle.loaded();
}
