import React, { useState } from "react";

const AddItem = ({ addTodo }) => {
  const [value, setvalue] = useState("");

  let handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setvalue("");
  };
  return (
    <div className="addform">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setvalue(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default AddItem;
