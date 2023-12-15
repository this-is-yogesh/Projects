import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //declared the gloabal states here
  todos: [
    {
      id: 1,
      todo: "message",
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
