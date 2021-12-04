import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";

export const CreateTodoButton = () => {
  const { setOpenModal } = useContext(TodoContext);

  const handleClick = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="createTodoButton" onClick={handleClick}>
      +
    </button>
  );
};
