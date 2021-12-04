import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

export const TodoSearch = () => {
  const { search, setSearch } = useContext(TodoContext);
  const handleInputChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <input
      className="todo-search"
      placeholder="Busca una Tarea"
      onChange={handleInputChange}
      value={search}
    />
  );
};
