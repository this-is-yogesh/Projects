import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todomsg: "message",
      completed: false,
    },
  ],
  addTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
  editTodo: () => {},
});
export const TodoContextProvider = TodoContext.Provider;
export const useTodo = () => {
  return useContext(TodoContext);
};
