import React, { useState } from "react";

const Update = ({ update }) => {
  const [value, setvalue] = useState("");

  let handleSubmit = e => {
    e.preventDefault();
    let abc = localStorage.getItem("todos");
    console.log(abc);
  };
  return (
    <div className="addform">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setvalue(e.target.value)}
        />
        <button onClick={handleSubmit}>update</button>
      </form>
    </div>
  );
};

export default Update;
