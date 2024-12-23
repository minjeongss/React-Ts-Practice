# Immer를 분석해보자🎯

## 참고 자료

- [Immer 공식 자료](https://immerjs.github.io/immer/)
- [Immer의 원리 분석](https://ui.toast.com/weekly-pick/ko_20220217?ref=codenary)
- [Proxy](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

## React의 불변성 유지

### 불변성 유지해야 하는 이유유

React는 Props나 State가 변경되었을 때 리렌더링이 발생한다. 이 Props와 State의 변경을 불변성을 이용해 감지하게 된다.

(객체의 참조를 복사하는 성질을 이용해 얕은 비교를 이용해 변경 발생 여부를 확인한다)

그렇기에 React에서 모든 요소는 불변성을 지니고 있어야 한다. 특정 시점의 UI를 나타내며, UI를 업데이트하는 방법은 새 요소를 만들어 전달하는 것이 존재한다.

State는 직접 수정되어서는 안되고, 새로운 요소로 업데이트되어야 한다.

자바스크립트에서 객체인 경우 메모리 힙 영역에 저장이 되어, 내부 프로퍼티를 변경하면 동일한 참조를 가지고 있기에 변경되었다는 사실을 인지하지 못해 리렌더링이 발생하지 않기 때문이다.

### 불변성 유지하는 방법

- Object.assign()
- 스프레드 연산자

## Immer를 사용해야 하는 이유

불변성을 유지하기 위해 스프레드 연산자를 사용하게 될 때, 복잡한 형태의 객체에서 문제가 발생하게 된다.

새로운 요소를 만들기 위해 옮기는 과정에서 직접 구현한 형태가 단순 객체로 변하는 등 성능상의 문제가 발생하게 되는 것이다.

Immer는 이러한 문제를 개선하며 불변성을 쉽게 유지하도록 돕는다. 변경할 부분의 코드만 작성하여 코드가 간결해지게 된다.

## Immer의 형태

- 수정할 상태, 상태 업데이트 함수가 존재하는 버전

```js
const nextState = produce(baseState, (draft) => {
  draft.push({ title: "Tweet about it" });
});
```

- 상태 업데이트 함수, 파라미터가 존재하는 버전

```js
const toggleTodo = produce((draft, id) => {
  const todo = draft.find((todo) => todo.id === id);
  todo.done = !todo.done;
});

const baseState = [ ... ];

const nextState = toggleTodo(baseState, 'Immer');
```

## Immer의 원리

프록시(Proxy) 객체를 이용해 원본 객체 대신 프록시 객체를 복사하고 변경하여 사용하게 된다.

### Proxy 객체

원본 객체를 대신 사용할 수 있는 객체를 만들지만, 객체의 속성 또는 설정 또는 정의와 같은 부분을 재정의할 수 있다.

- target: 원본 객체
- handler: 원본 객체를 가져와 재정의하는 방법에 대한 객체

```js
const proxy1 = new Proxy(target, handler);
```

### Immer 과정

1. Proxy를 사용해 수정 가능한 초안 객체 생성
   - 값을 읽을 때, `get 트랩` 호출
   - 값 변경할 때, `set 트랩` 호출
2. Proxy를 통해 생성된 초안 객체 사용자에게 전달(recipe 함수)
3. 수정된 부분을 기준으로 원본 객체 복사본 생성
   - 원본 객체를 수정 X
   - 항상 복사본을 생성 O

## React에서 Immer 사용하는 방법

- [useState에 produce 사용]()
- [useState 대신 useImmer 사용]()
- [zustand에 produce 사용]()
