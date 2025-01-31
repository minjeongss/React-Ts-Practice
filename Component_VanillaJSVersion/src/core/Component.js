export default class Component {
  //필드 선언
  $target;
  props; //부모 컴포넌트 > 자식 컴포넌트: 상태 or 메소드 넘겨주기 위해서
  state;
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}
  mounted() {}
  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  setEvent() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render(); //render 이후에 추가 기능 수행 위해서
  }

  //? 요소가 없는데 왜 먼저 실행하는지 분석(궁금해졌음)
  //? 이벤트 버블링? 이벤트를 밖에서 건다?
  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }
}
