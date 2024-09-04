# useEffect를 분석해보자 🎯

## 정의

컴포넌트가 렌더링될 때 수행할 부수적인 효과를 처리하기 위해 사용된다.

부수 효과는 다음과 같다.

- DOM 업데이트
- 타이머 설정
- 데이터 가져오기

## 구조

- effect: 부수 효과 실행하는 부분
- dependency list
  - 값 존재X: 컴포넌트가 처음 마운트될 때만 effect가 실행
  - 값 존재: 배열에 포함된 값들이 변경될 때마다 effect가 실행

```ts
useEffect(effect, dependency list);

useEffect(()=>{

},[]);
```

## 사용법

1. 데이터 값이 변화됨을 감지하기

- 전체 데이터

```ts
useEffect(() => {
  alert('Component has been rendered or updated');
});
```

- 특정 데이터

```ts
useEffect(() => {
  alert('Count or Text Changed!');
}, [count, text]);
```

2. 컴포넌트 언마운트되거나 업데이트될 때 특정 동작 수행하기

컴포넌트가 언마운트될 때 clearInterval이 호출되어 타이머를 정리해 메모리 누수와 불필요한 타이머 실행을 방지한다.

```ts
useEffect(() => {
  const timer = setInterval(() => {
    setCount((count) => count + 1);
  }, 1000);
  return () => {
    clearInterval(timer);
    alert('Timer cleared!');
  };
}, []);
```

3. 외부에서 데이터 가져오기

```ts
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const result: Data = await response.json();
    setData(result);
  };
  fetchData();
}, []);
```

4. 초기 렌더링 변화 감지 막기

```ts
const isMounted = useRef<boolean>(false);
useEffect(() => {
  const alertClick = () => {
    alert(`Click이 ${clicked}로 변경되었습니다! 🚀`);
  };
  if (isMounted.current) {
    alertClick();
  } else {
    isMounted.current = true;
  }
  console.log('K');
}, [clicked]);
```

이때, Strict Mode에 의해 개발 환경에서 useEffect가 두 번 호출되는 문제가 존재해서 main.tsx의 `<React.StrictMode>, </React.StrictMode>`을 주석처리했음에 유의해야 한다.

## 실습

1. 데이터 값이 변화됨을 감지하기: `Basic.tsx`
2. 컴포넌트 언마운트되거나 업데이트될 때 특정 동작 수행하기: `CleanUp.tsx`
3. 외부에서 데이터 가져오기: `FetchData.tsx`
4. 초기 렌더링 변화 감지 막기: `BlockFirstRendering.tsx`
