import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  const pendingTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === false)
  );
  return (
    <>
      <h4>Complete Task: {completedTodos.length}</h4>
      <h4>Pending Task: {pendingTodos.length}</h4>
    </>
  );
};
export default TotalCompleteItems;
