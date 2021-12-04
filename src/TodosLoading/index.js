import "./TodosLoading.css";

export const TodoLoading = () => {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando Todos...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
};
