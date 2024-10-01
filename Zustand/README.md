# Zustand를 분석해보자🎯

## 참고 자료

- [Zustand 액션 분리](https://www.heropy.dev/p/n74Tgc)
- [Zustand로 TodoList 제작](https://duektmf34.tistory.com/201)

## Zustand 파일 위치

src 내부의 store에 존재하며, \*\*Store.ts로 생성한다.

## Zustand 파일 구성

- 초기값: 사용할 값
- actions: 사용할 함수

## Zustand 파일 키워드

- create: store 생성
- set: store의 actions에서 값 처리에 활용
- state: store의 actions에서 값 접근에 활용

```ts
const useTodoStore = create<TodoStore>((set) => ({
  // create!
  todos: [],
  actions: {
    addTodo: (text) =>
      set((state) => ({
        // set, state!
        todos: [...state.todos, { id: Date.now(), text, completed: false }],
      })),
  },
}));
```

## Zustand 파일 컴포넌트에서 활용

- use\*\*Store: 생성한 store import
  - state.초기값: store의 초기값에 접근
  - state.actions: store의 actions에 접근

```tsx
const InitTodo = () => {
  const todos = useTodoStore((state) => state.todos);
  const { resetTodo } = useTodoStore((state) => state.actions);
  return (
    <span>{todos.text}</span>
    <button type="button" onClick={() => resetTodo()}>
      Reset!!
    </button>
  );
};
```

## Zustand 파일 활용하여 TodoList 제작

### 구조

- src/store
  - todoStore.ts
- src/pages
  - ZustandTodo.tsx
- src/components
  - AddTodo.tsx
  - InitTodo.tsx
  - TodoList.tsx
  - TodoItem.tsx

### 기능

- 리스트 추가: useTodoStore의 actions 중 addTodo
- 리스트 토글: useTodoStore의 actions 중 toggleTodo
- 리스트 삭제: useTodoStore의 actions 중 removeTodo
- 리스트 전체 삭제: useTodoStore의 actions 중 initTodo

```ts
const useTodoStore = create<TodoStore>((set) => ({
  todos: [], // 초기값
  actions: {
    addTodo: (text) =>
      set((state) => ({
        todos: [...state.todos, { id: Date.now(), text, completed: false }],
      })),
    toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((e) =>
          e.id === id ? { ...e, completed: !e.completed } : e
        ),
      })),
    removeTodo: (id) =>
      set((state) => ({ todos: state.todos.filter((e) => e.id !== id) })),
    initTodo: () => set({ todos: [] }),
  },
}));
```

### 기능 활용

- 리스트 추가: AppTodo.tsx

```tsx
const AddTodo = () => {
  const { addTodo } = useTodoStore((state) => state.actions);
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return; // 공백 제거
    addTodo(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add!</button>
    </form>
  );
};
```

- 리스트 토글 및 삭제: TodoList.tsx, TodoItem.tsx

```tsx
const TodoItem = ({ todo }: { todo: Todo }) => {
  const { removeTodo, toggleTodo } = useTodoStore((state) => state.actions);
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <p>{todo.text}</p>
      <button onClick={() => removeTodo(todo.id)}>Remove!</button>
    </li>
  );
};
```

- 리스트 전체 삭제: InitTodo.tsx

```tsx
const InitTodo = () => {
  const { initTodo } = useTodoStore((state) => state.actions);
  return (
    <button type="button" onClick={() => initTodo()}>
      Reset!!
    </button>
  );
};
```
