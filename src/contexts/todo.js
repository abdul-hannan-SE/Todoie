import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "some todo",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  editTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export default function useTodo() {
  return useContext(TodoContext);
}
