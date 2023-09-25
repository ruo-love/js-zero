import { initCallback } from "./initCallback";
import { LifeCycle } from "./life-cycle/index";
(function () {
  /** Detect free variable `global` from Node.js. */
  let nodeGlobal =
    typeof global == "object" && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  let selfGlobal =
    typeof self == "object" && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  let root = nodeGlobal || selfGlobal || Function("return this")();

  /** Detect free variable `exports`. */
  let freeExports =
    typeof exports == "object" && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  let freeModule =
    freeExports &&
    typeof module == "object" &&
    module &&
    !module.nodeType &&
    module;

  //force inject to global:
  let zero = (root.zero = root.zero || {
    BREAKER: {},
    NIL: {},
    VERSION: "0.0.1",
    DEBUG: false,
    GLOBAL: root,
  });

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (
    typeof define == "function" &&
    typeof define.amd == "object" &&
    define.amd
  ) {
    root.zero = zero;
    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    define(function () {
      return zero;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = zero).zero = zero;
    // Export for CommonJS support.
    freeExports.zero = zero;
  } else {
    // Export to the global object.
    root.zero = zero;
  }
  (function () {
    const lifeCycle = new LifeCycle();
    lifeCycle.created();
    this.lifeCycle = lifeCycle;
    initCallback(this);
  }).call(zero);
}).call(this);
