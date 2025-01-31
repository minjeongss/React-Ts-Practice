# Componenet에 대해 분석해보자 🎯

## 참고

- [Component VS PureComponent](https://www.dhiwise.com/post/purecomponent-vs-component-understanding-react-rendering)

## Element VS Component

### Element

Component를 이루는 작은 단위

- Component Instance나 DOM Node에 관한 정보를 묘사
- 바로 사용되지 않으며, Component에서 return을 통해 사용

### Component

데이터를 가진 props를 인자로 받아, 엘리번트를 반환하는 구조

## 클래스형 컴포넌트

- [예시 / ClassComponent.jsx](https://github.com/minjeongss/React-Ts-Practice/tree/main/Component/ClassComponent.jsx)

### 구성

클래스를 선언하고, 만들고 싶은 컴포넌트를 extends하고, 제네릭으로 props, state 넣는 형태로 구성된다.

### extends에 넣을 수 있는 클래스

- React.Component
- React.PureComponent

### render()

내부에 렌더링할 내용을 정의한다. 함수형 컴포넌트의 return 내부와 동일한 역할을 한다.

## 함수형 컴포넌트

- [예시 / FunctionComponent](https://github.com/minjeongss/React-Ts-Practice/tree/main/Component/FunctionComponent.jsx)

## 클래스형 컴포넌트 VS 함수형 컴포넌트

- 클래스형 컴포넌트
  - state, 라이프 사이클 관련 기능 사용 컴포넌트 내부에서 가능
  - 메모리 자원을 함수형 컴포넌트보다 더 많이 사용
- 함수형 컴포넌트
  - state, 라이프 사이클 관련 기능 사용 컴포넌트 내부에서 불가능
  - **Hook**을 통해 해당 문제 해결 가능
  - 메모리 자원을 클래스형 컴포넌트보다 적게 사용

## 함수형 컴포넌트를 추구하는 이유

- 클래스형 컴포넌트의 한계

  - 데이터 흐름을 추적하기 어려움
    - 여러 메서드에서 state의 업데이트 발생할 수 있어, 사람이 읽기도 어렵고 메서드 순서가 정해져 있지도 않음
  - 내부 로직 재사용 어려움
    - 공통 로직이 많을수록 이를 감싸는 고차 컴포넌트가 많아지는데, 이걸 처리하기가 어려움

- 함수형 컴포넌트의 장점
  - 클래스형 컴포넌트보다 선언이 편리함
    - render() 내부에서 props을 불러오는 과정 불필요
  - 메모리 자원, 빌드 결과물의 크기가 클래스형 컴포넌트보다 작음

## Component VS Pure Component

### Component

shouldComponentUpdate 메서드를 구현하지 않는다. 이로 인해 구성 요소가 자주 업데이트되거나 렌더링으로 인해 큰 서브트리가 업데이트되는 경우 성능 문제가 발생할 수 있다.

### Pure Component

불필요한 업데이트를 피해 렌더링을 최적화한다.

얕은 props 및 state 비교를 진행해 shouldComponentUpdate 메서드를 구현한다. 참조값뿐만 아니라 실제값이 변경되었는지 확인하기 위해 얕은 비교를 진행하게 된다.

단, 얕은 비교를 진행하기에 데이터 구조가 복잡한 경우 업데이트가 누락될 수 있다.

### Component VS Pure Component

- Component
  - setState가 진행되면, props 또는 state의 변경 여부를 신경쓰지 않고 무조건 컴포넌트를 업데이트하게 된다.
- Pure Component
  - setState가 진행되면, props 또는 state의 변경 여부에 따라 업데이트 여부를 결정하게 된다.
