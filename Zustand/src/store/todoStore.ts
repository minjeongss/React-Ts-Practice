import { create } from "zustand";

interface State {
  id: number;
  text: string;
  completed: boolean;
}
interface Actions {
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  initTodo: () => void;
}
interface TodoStore {
  todos: State[];
  actions: Actions;
}

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

export default useTodoStore;
