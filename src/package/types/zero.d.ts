declare interface Zero {
  $set: (key: string, value: any) => void;
  $get: (key: string) => any;
  lifeCycle: LifeCycle;
  tool: Tool;
  [key: string]: any;
}
// 激活码: 34464F0D7AA6809DCE4C300CEDE10CA6F864AB14427EC9691934113F60BF2561
