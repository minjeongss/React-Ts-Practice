import { useCallback } from "react";
import { useImmer } from "use-immer";

const UseImmerVersion = () => {
  const [todos, setTodos] = useImmer([
    {
      id: "React",
      title: "Learn React",
      done: true,
    },
    {
      id: "Immer",
      title: "Try Immer",
      done: false,
    },
  ]);

  const handleToggle = useCallback((id: string) => {
    setTodos((draft) => {
      const todo = draft.find((todo) => todo.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
    });
  }, []);

  const handleAdd = useCallback(() => {
    setTodos((draft) => {
      draft.push({
        id: "new todo",
        title: "A new todo",
        done: false,
      });
    });
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <div>{todo.done.toString()}</div>
        </div>
      ))}
      <button onClick={() => handleToggle("Immer")}>toggle button</button>
      <button onClick={handleAdd}>add button</button>
    </>
  );
};

export default UseImmerVersion;
