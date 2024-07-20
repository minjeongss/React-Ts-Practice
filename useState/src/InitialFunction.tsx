import { useState } from 'react';
interface Todo {
  id: number;
  text: string;
}
const createInitialTodos = () => {
  const initialTodos: Todo[] = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({
      id: i,
      text: 'Item' + (i + 1),
    });
  }
  return initialTodos;
};
const InitialFinction = () => {
  const [todos, setTodos] = useState<Todo[]>(createInitialTodos);
  const [text, setText] = useState<string>('');
  return (
    <>
      <input
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          setTodos([...todos, { id: todos.length, text: text }]);
        }}
      >
        ADD
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};
export default InitialFinction;
