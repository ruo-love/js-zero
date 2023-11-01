declare interface LifeCycle {
  created: () => void;
  inited: () => void;
  beforeLoad: () => void;
  loaded: () => void;
  beforeDestroy: () => void;
  destroy: () => void;
}

declare interface Tool {
  toArray: <T>(x: any) => Array<T>;
  toggle: <Args>(fns: Array<any>) => any;
  filterValue: (
    value: string | number,
    filterType: FilterType,
    _oldValue?: string | number
  ) => string | number;
  toAsync: <T, U = Error>(
    promise: Promise<T>,
    errorExt?: object
  ) => Promise<[U, undefined] | [null, T]>;
  sleep: (time: number) => Promise<number>;
  debounce: <T extends Function>(callback: T, time: number, immediate: boolean) => T;
  throttle: <T extends Function>(fun: T, delay: number, date: boolean) => T;
  isExist: <T>(x: T) => x is T;
  isNumber: (x: any) => boolean;
  deepClone: (target: any, map?: MapType) => any;
  typeOf: (target: any) => TypeOfResult;
  toRandom: (min: number, max: number, type: 'number' | 'string') => number | string;
  isEmpty: (target: any) => boolean;
  getSearchParams: (url: string, type: 'url' | 'params') => Object;
}
