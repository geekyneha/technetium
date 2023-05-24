import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const ToDoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };
  return (
    <p>
      {
        <div>
          <span>
            <input
              type="checkbox"
              checked={completed}
              onChange={handleCompleteClick}
            />
            {title}
          </span>
          <button onClick={handleDelete}>Delete</button>
        </div>
      }
    </p>
  );
};

export default ToDoItem;
