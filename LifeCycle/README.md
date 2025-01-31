# 컴포넌트 생명주기(라이프 사이클)에 대해 분석해보자 🎯

## 참고 주소

- [리액트 라이프 사이클](https://velog.io/@remon/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9D%B4%ED%94%84-%EC%82%AC%EC%9D%B4%ED%81%B4)
- [리액트 라이프 사이클2](https://react.vlpt.us/basic/25-lifecycle.html/)
- [리액트 라이프 사이클3](https://laurent.tistory.com/entry/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EC%83%9D%EB%AA%85-%EC%A3%BC%EA%B8%B0Life-Cycle)
- [함수형 컴포넌트 라이프 사이클](https://yooneeee.tistory.com/45)
- [리액트 라이프 사이클 다이어그램](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [라이프 사이클 단계](https://goidle.github.io/react/in-depth-react-intro/)

## 라이프 사이클이란

컴포넌트가 브라우저에 렌더링되고, 업데이트 되고, 사라지는 과정이다.

### 순서

1. 생성(mount)
2. 업데이트(update)
3. 제거(unmount)

### 단계

1. Render 단계

Virtual DOM 반영 단계이다.
reconciler가 컴포넌트의 변경을 DOM에 적용하기 위한 Work를 스케줄러를 통해 실행하게 된다.

유의 사항은 페인트되어 화면에 반영되는 것은 아니고, Virtual DOM에 반영만 된다.

2. Commit 단계

Virtual DOM을 DOM에 적용하고, 라이프 사이클을 실행하는 단계이다.

유의 사항은 페인트되어 화면에 반영되는 것은 아니고, DOM에 반영만 된다.
해당 단계가 끝난 후, 콜 스택을 비워야지 페인트되어 화면에 반영된다.

## 라이프 사이클 분류

### 간단한 과정

![SimpleLifeCycle](./SimpleLifeCycle.png)

### 세부적인 과정

![DetailLifeCycle](./DetailLifeCycle.png)

## 라이프 사이클 메서드 종류

- constructor: 초기 state 설정
- getDerivedStateFromProps: props로 받아온 값 state에 동기화
- shouldComponentUpdate: props나 state 변경시 리렌더링 여부 결정
- render: 컴포넌트가 보이는 부분 결정, 반환값을 통해 DOM 업데이트
- getSnapShotBeforeUpdate: 업데이트로부터 변경될 수 있는 DOM에서 정보 캡처하도록 함
- componentDidMount: DOM 직접 조작
- ComponentDidUpdate
- ComponentWillUnmount

## 라이프 사이클 과정(간단한 버전)

### 1. 생성(mount)

- componentDidMount

### 2. 업데이트(update)

- componentDidUpdate

### 3. 제거(unmount)

- componentWillUnmount

## 라이프 사이클 과정(복잡한 버전)

리액트 생태계는 16.8 버전에서 Hook이 도입되며, 라이프 사이클 역시 변경되어 클래스형 컴포넌트는 legacy가 되었다.

해당 내용은 **useEffect**가 대체하게 되었다.

### 1. 생성(mount)

- constructor: 초기 state 설정
- static getDerivedStateFromProps: props로 받아온 값 state에 동기화
- shouldComponentUpdate: props나 state 변경시 리렌더링 여부 결정
- render: 컴포넌트가 보이는 부분 결정, 반환값을 통해 DOM 업데이트
- componentDidMount: DOM 직접 조작

### 2. 업데이트(update)

- static getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapShotBeforeUpdate: 업데이트로부터 변경될 수 있는 DOM에서 정보 캡처하도록 함
- ComponentDidUpdate

### 3. 제거(unmount)

- ComponentWillUnmount

## 라이프 사이클 과정

### 클래스형 컴포넌트 VS 함수형 컴포넌트

| **분류**   | **클래스형 컴포넌트**  | **함수형 컴포넌트**      |
| ---------- | ---------------------- | ------------------------ |
| Mounting   | constructor()          | **함수형 컴포넌트 내부** |
| Mounting   | render()               | **return()**             |
| Mounting   | ComponenDidMount()     | **useEffect()**          |
| Updating   | componentDidUpdate()   | **useEffect()**          |
| UnMounting | componentWillUnmount() | **useEffect()**          |

### 함수형 컴포넌트

- useEffect의 dependencies
  - []: componentDidMount처럼 한 번만 수행
  - [값]: 값에 변화가 생길 때마다 componentDidUpdate처럼 수행
- useEffect 내부의 return
  - componentWillUnmount

## 라이프 사이클 내부 로직

- [클래스형 컴포넌트/ClassLifeCycle](https://github.com/minjeongss/React-Ts-Practice/blob/main/LifeCycle/ClassLifeCycle.jsx)
- [함수형 컴포넌트/FunctionLifeCycle](https://github.com/minjeongss/React-Ts-Practice/blob/main/LifeCycle/FunctionLifeCycle.jsx)

## 라이프 사이클 실제 예시

- [UI 컴포넌트/LifeCycle](https://github.com/minjeongss/React-Ts-Practice/blob/main/LifeCycle/LifeCycle.jsx)
- [로직 처리/useAPI](https://github.com/minjeongss/React-Ts-Practice/blob/main/LifeCycle/useAPI.js)

### 생성(mount)

1. 컴포넌트 초기화

상태, 속성 초기화

```jsx
const { id } = useParams();
```

2. 훅 초기화

- useAPI가 id로 호출되어, data가 빈 문자열로 초기화
- return된 data를 전달받아 user도 빈 문자열로 초기화

```jsx
const user = useAPI({ id });
```

3. 초기 렌더링

4. componentDidMount 완료

### 생성 후, 업데이트 전

1. useEffect 시행

컴포넌트가 렌더링된 후, useEffect 실행

```jsx
useEffect(() => {
  const fetchData = async () => {...};
  fetchData();
}, [id]);
```

2. useEffect 도중 데이터 업데이트 진행

setData를 통해 상태 업데이트

```jsx
const fetchData = async () => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  setData(JSON.stringify(data));
};
```

### 업데이트(update)

1. setData가 상태 업데이트
2. ComponentLifeCycle 재렌더링
