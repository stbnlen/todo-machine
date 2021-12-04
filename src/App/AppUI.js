import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { useContext } from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodoLoading } from "../TodosLoading";
import { EmpyTodos } from "../EmpyTodos";

export const AppUI = () => {
  const { error, loading, searchTodos, toggleTodo, deleteTodo, openModal } =
    useContext(TodoContext);

  return (
    <>
      <h2>Todo Machine</h2>
      <TodoSearch />
      <TodoCounter />

      <TodoList>
        {error && <TodosError />}
        {loading &&
          new Array(4).fill(1).map((todo, i) => <TodoLoading key={i} />)}
        {!loading && !searchTodos.length && <EmpyTodos />}

        {searchTodos.map(({ text, completed }) => (
          <TodoItem
            key={text}
            text={text}
            completed={completed}
            onComplete={() => toggleTodo(text)}
            onDelete={() => deleteTodo(text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />
    </>
  );
};
