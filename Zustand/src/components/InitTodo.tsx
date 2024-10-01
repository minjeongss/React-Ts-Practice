import useTodoStore from "../store/todoStore";

const InitTodo = () => {
  const { initTodo } = useTodoStore((state) => state.actions);
  return (
    <button type="button" onClick={() => initTodo()}>
      Reset!!
    </button>
  );
};

export default InitTodo;
