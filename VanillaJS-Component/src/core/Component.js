export default class Component {
  //필드 선언
  $target;
  state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }

  setup() {}
  template() {
    return '';
  }
  render() {
    //   this.$target.innerHTML = this.template();
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
