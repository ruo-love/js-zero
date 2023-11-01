export class LifeCycle {
  created() {
    console.log('created');
  }
  inited() {
    console.log('inited');
  }
  beforeLoad() {
    console.log('beforeLoad');
  }
  loaded() {
    console.log('loaded');
  }
  beforeDestroy() {
    console.log('beforeDestroy');
  }
  destroy() {
    console.log('destroy');
  }
}

//
