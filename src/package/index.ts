import { initCallback } from './initCallback';
import { LifeCycle } from './life-cycle/index';

(function init() {
  /** Detect free variable `global` from Node.js. */
  let nodeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  let selfGlobal = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  let root = nodeGlobal || selfGlobal || Function('return this')();

  //force inject to global:
  let zero = (root.zero = root.zero || {
    NAME: 'zero',
    VERSION: '0.0.1',
    GLOBAL: root
  });
  root.zero = zero;
  (function (this: any) {
    const lifeCycle = new LifeCycle();
    lifeCycle.created();
    this.lifeCycle = lifeCycle;
    initCallback(this);
  }).call(zero);
}).call(this);

export default zero;
