import { useState } from "react";
import "./index.css";
import { TodoContextProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoITem";

function App() {
  const [todos, setTodos] = useState([]);

  //defined the global states
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };
  const editTodo = (id, todo) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? todo : prev)));
  };
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <TodoContextProvider
    //passed the global states here to all the components
      value={{ todos, addTodo, deleteTodo, toggleTodo, editTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
          <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* <TodoItem /> */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
