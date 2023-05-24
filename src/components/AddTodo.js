import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className=""
        value={value}
        placeholder="Add todo..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTodo;
