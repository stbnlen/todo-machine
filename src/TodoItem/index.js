import { TiDeleteOutline } from "react-icons/ti";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiChatDeleteLine } from "react-icons/ri";
import "./TodoItem.css";

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className={`todo-item ${completed && "completed"}`}>
      {completed ? (
        <span className="state-button complete">
          <FaRegCheckCircle />
        </span>
      ) : (
        <span className="state-button incomplete">
          <RiChatDeleteLine />
        </span>
      )}
      <p onClick={onComplete}>{text}</p>
      <span onClick={onDelete} className="deleteButton">
        <TiDeleteOutline />
      </span>
    </li>
  );
};
