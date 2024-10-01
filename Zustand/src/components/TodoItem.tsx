import useTodoStore from "../store/todoStore";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
const TodoItem = ({ todo }: { todo: Todo }) => {
  const { removeTodo, toggleTodo } = useTodoStore((state) => state.actions);
  return (
    <li style={{ display: "flex", alignItems: "center" }}>
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

export default TodoItem;
