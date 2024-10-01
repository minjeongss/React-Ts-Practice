import AddTodo from "../components/AddTodo";
import InitTodo from "../components/InitTodo";
import TodoList from "../components/TodoList";

const ZustandTodo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1>TodoList</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <AddTodo />
        <InitTodo />
      </div>
      <TodoList />
    </div>
  );
};

export default ZustandTodo;
