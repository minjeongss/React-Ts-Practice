import { useState } from "react";
import useTodoStore from "../store/todoStore";

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
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add!</button>
    </form>
  );
};

export default AddTodo;
