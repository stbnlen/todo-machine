import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

import "./TodoForm.css";

export const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    setNewTodoValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        placeholder="Algun Todo"
        value={newTodoValue}
        onChange={handleInputChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
};
