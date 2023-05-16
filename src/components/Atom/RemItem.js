import React, { useState } from "react";
import "./RemItem.module.css";

const RemItem = () => {
  const [input, setInput] = useState(null);
  const [users, setUsers] = useState([]);
  const handleSubmit = (event) => {
    //   event.preventDefault();

    setUsers((currentuser) => [...currentuser, input]);
    setInput(" ");
  };

  const handleDelete = (deletingUser) => {
    const newUser = users.filter((ele, id) => deletingUser !== id);
    setUsers(newUser);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && input !== " ") {
      handleSubmit();
    }
  };

  return (
    <>
      <h1>Add users</h1>
      <input
        type="text"
        placeholder="add new user"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {/* <button onClick={handleSubmit} >Submit</button> */}
      {users.map((person, index) => (
        <p key={index}>
          {person} <button onClick={() => handleDelete(index)}>Delete</button>
        </p>
      ))}
    </>
  );
};

export default RemItem;
