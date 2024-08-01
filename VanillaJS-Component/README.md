# Vanilla Javascript로 웹 컴포넌트 만드는 방법에 대해 분석해보자!

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
├── Part2
    └── Function.html
```

### (2) Class로 구현

#### 구조

```
├── Part2
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
- app.js > Items.js > Component.js
