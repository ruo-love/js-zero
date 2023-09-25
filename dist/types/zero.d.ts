interface Zero {
  $set: (key: string, value: any) => void;
  $get: (key: string) => any;
  lifeCycle: LifeCycle;
  [key: string]: any;
}

interface LifeCycle {
  created: () => void;
  inited: () => void;
  beforeLoad: () => void;
  loaded: () => void;
  beforeDestroy: () => void;
  destroy: () => void;
}
