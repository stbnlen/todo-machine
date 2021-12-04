import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter(({ completed }) => completed).length;
  const totalTodos = todos.length;
  const searchTodos = todos.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(search.toLowerCase())
  );

  const addTodo = (text) => {
    const newTodo = { completed: false, text };
    const newTodos = [...todos, newTodo];
    saveTodos(newTodos);
  };

  const toggleTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        search,
        setSearch,
        totalTodos,
        completedTodos,
        searchTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
