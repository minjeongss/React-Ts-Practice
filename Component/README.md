# Vanilla Javascript로 웹 컴포넌트 만드는 방법에 대해 분석해보자!

## 참고 주소

- [bind](https://velog.io/@from_numpy/Javascript-Binding%EA%B3%BC-%ED%95%A8%EA%BB%98-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-apply-call-bind)

## 1. 상태관리-컴포넌트

### (1) 이전

> JSP, PHP, ASP

- 방식: SSR(Server Side Rendering)
  - 서버: HTML을 만들어 클라이언트에 넘겨준다
  - 클라이언트(브라우저): 데이터를 정교하게 관리할 필요가 없다
- DOM을 직접적으로 다루는 행위가 많다

### (2) 현재

> Angular(CSR 시작) - React(컴포넌트 기반 개발) - Vue(Angular+React)

- 방식: CSR(Client Side Rendering)
  - 서버: 브라우저 렌더링에 필요한 데이터만 제공한다(Rest API, GraphQL)
  - 클라이언트(브라우저): 모든 렌더링을 처리해, 데이터를 정교하게 관리할 필요가 있다
- 상태(State)를 기준으로 DOM을 렌더링하며, DOM을 직접적으로 다루는 행위가 감소했다
- 웹 어플리케이션은 컴포넌트 단위로 설계 및 개발되며, 컴포넌트마다 해당 컴포넌트를 렌더링할 때 필요한 상태를 관리한다

## 2. state-setState-render

DOM을 직접적으로 다루지 않고, 브라우저 출력되는 내용은 state에 종속되도록 설정한다. 이때, state가 변경되면 렌더링이 발생하게 된다.

### (1) Class 없는 구현

#### 구조

```
├── Test_state-setState-render
    └── Function.html
```

### (2) Class로 구현

#### 구조

```
├── Test_state-setState-render
    └── Class.html
```

### (3) 모듈화

#### 구조

```
├── index.html
└── src
    ├── app.js
    ├── components
    │   └── Items.js
    └── core
        └── Component.js

```

#### 작동 순서

- index.html > app.js
- **app.js > Component.js > Items.js**

## 3. 이벤트 처리

### (1) 모든 하위 요소에 이벤트 등록하기

```js
setEvent() {
    //요소 추가
    this.$target.querySelector('.addBtn').addEventListener('click', () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });

    //요소 삭제
    this.$target.querySelectorAll('.deleteBtn').forEach((deleteBtn) => {
      deleteBtn.addEventListener('click', ({ target }) => {
        const items = [...this.state.items];
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      });
    });
  }
```

### (2) 하나의 상위 요소에 이벤트 등록하기(이벤트 위임)

#### Items.js

```js
setEvent() {
    this.$target.addEventListener('click', ({ target }) => {
      const items = [...this.state.items];

      //요소 추가
      if (target.classList.contains('addBtn')) {
        this.setState({ items: [...items, `item${items.length + 1}`] });
      }
      //요소 삭제
      if (target.classList.contains('deleteBtn')) {
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      }
    });
  }
```

#### Component.js

기존과 동일하게 render()에 setEvent()를 위치하게 되면, 추가를 진행할 때 렌더링 된 수만큼 요소가 추가되는 현상이 발생한다.
고로 생성자 부분에 setEvent()를 등록하면 해당 문제가 발생하지 않는다.

addEventListener의 경우, 추가적인 할당을 할수록 중첩되는 형태로 구성이 된다. 요소 추가 버튼을 누르면 setState() > render() > setEvent()로 작동이 진행된다.

이때, 요소 추가 버튼에 할당된 setEvent()는 클릭을 할수록 2배>4배>8배로 증가하게 되어서 render()가 아닌 constructor로 위치를 이동해야 한다.

```js
  constructor($target) {
    //생략
    + this.setEvent();
    this.render();
  }
  render() {
    this.$target.innerHTML = this.template();
    - this.render();
  }
```

### (3) 이벤트 버블링 추상화

#### Items.js

```js
setEvent() {
    this.addEvent('click', '.addBtn', ({ target }) => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
    this.addEvent('click', '.deleteBtn', ({ target }) => {
      const items = [...this.state.items];
      items.splice(target.dataset.index, 1);
      this.setState({ items });
    });
  }
```

#### Component.js

```js
  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }
```

## 4. 컴포넌트 분할

### (1) 구조

- 추가
  - `App.js`: main에서 App 컴포넌트를 마운트하기 위해
  - `ItemAppender.js`
  - `ItemFilter.js`
- 변경
  - app.js > `main.js`: js가 시작하는 시점(=entry point)
  - Component.js
    - props() 추가
      - 위치
        constructor에서 props 할당
      - 역할
        부모 컴포넌트에서 자식 컴포넌트로 상태 또는 메소드를 전달
    - mounted() 추가
      - 위치
        클래스의 메소드와 rnder() 내부에 선언
      - 역할
        render 이후에 추가적인 기능 수행

```
├── index.html
└── src
    ├── App.js #추가
    ├── main.js #변경
    ├── components
        ├── ItemAppender.js #추가
        ├── ItemFilter.js #추가
    │   └── Items.js
    └── core
        └── Component.js
```

### (2) 작동 순서

⚠️ console.log로 순서를 보며 정확한 수정이 요구됨 ⚠️

#### 초기 상태

0. index.html

- main.js
- App.js > Component를 상속

1. Component.js의 constructor

- target, props 등록
- setup
- setEvent
- render
  - template
  - mount

2. App.js

- setup: 기본값 state 설정
- render
  - template
  - mount: target, props 전달
    - ItemAppender.js
    - Items.js
    - ItemsFilter.js

3. ItemAppender.js, Items.js, ItemsFilter.js

#### state 변경

0. App.js를 부모 컴포넌트로 설정
1. ItemAppender.js

- setEvent
- 부모에서 받은 addItem을 다시 부모로 전달

2. App.js

- addItem
  - setState

3. Component.js

- setState
- **render** >>>>>>>> 이 부분에서 전체 화면이 다시 그려지게 됨
  - template
  - mount
