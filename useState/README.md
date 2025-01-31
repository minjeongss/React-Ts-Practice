# useState을 분석해보자 🎯

## 참고 주소

- [useState 정의 및 사용법](https://ko.react.dev/reference/react/useState)
- [typescript에서 useState 사용법](https://velog.io/@velopert/using-hooks-with-typescript)
- [typescript 기본타입](https://joshua1988.github.io/ts/guide/basic-types.html#%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B8%B0%EB%B3%B8-%ED%83%80%EC%9E%85)

## 정의

컴포넌트에 state 변수를 추가할 수 있는 React Hook입니다.
set 함수 호출을 통해 state 값이 변경되면 리렌더링을 진행합니다. 이때, set함수를 호출해도 이미 실행 중인 코드의 현재 state는 변경되지 않고 다음 렌더링에 반환할 state가 변경됩니다.

## 방식

const로 선언하여 변수의 재할당을 제한합니다.

비동기적으로, 16ms 동안 변경된 값들을 모아서 한 번에 처리하게 됩니다.

## 일반 변수 VS state

- 일반 변수
  - 변경되어도 자동으로 화면이 바뀌지 않습니다.
  - 렌더링 될 때 초기화된 값을 계속 이용하게 됩니다.
- state
  - 변경되면 자동으로 화면이 바뀌게 됩니다.
  - 클로저를 사용해 렌더링 될 때 이전 값을 기억하여 업데이트 할 수 있습니다.

## 실습

### 기본타입: LikeCountButton.tsx

- 사용한 타입
  - boolean
  - number

```ts
const [liked, setLiked] = useState<boolean>(false);
const [count, setCount] = useState<number>(0);
```

### 중첩객체: InfoInput.tsx

```ts
type Information = {
  name: string;
  description: {
    job: string;
    city: string;
  };
};

const [info, setInfo] = useState<Information>({
  name: "Kim minjeong",
  description: {
    job: "Student",
    city: "Seoul",
  },
});
```

### 초기화 함수 전달하기: InitialFunction.tsx

```ts
interface Todo {
  id: number;
  text: string;
}
const createInitialTodos = () => {
  const initialTodos: Todo[] = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({
      id: i,
      text: "Item" + (i + 1),
    });
  }
  return initialTodos;
};

const [todos, setTodos] = useState<Todo[]>(createInitialTodos);
```
