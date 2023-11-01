export interface Zero {
  $set: (key: string, value: any) => void;
  $get: (key: string) => any;
  lifeCycle: LifeCycle;
  tool: Tool;
  [key: string]: any;
}
