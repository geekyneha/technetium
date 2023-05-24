import React from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <p>
      {todos.map((todo) => (
        <ToDoItem
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        ></ToDoItem>
      ))}
    </p>
  );
};
