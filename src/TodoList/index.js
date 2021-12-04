import "./TodoList.css";

export const TodoList = ({ children }) => {
  return (
    <section className="todo-list">
      <ul className="todo-list__ul">{children}</ul>
    </section>
  );
};
