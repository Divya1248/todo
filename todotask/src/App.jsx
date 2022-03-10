import React, { useEffect, useState } from "react";
import AddItem from "./AddItem";
import "./index.css";
import Update from "./Update";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>update</button>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </div>
      </div>
    </>
  );
}

function App() {
  //   let [todos, setTodos] = useState([
  //     {
  //       value: "",
  //     },
  //   ]);
  const [todos, setTodos] = useState([
    {
      text: "Learn",
      isCompleted: false,
    },
    {
      text: "React",
      isCompleted: false,
    },
    {
      text: "Friends",
      isCompleted: false,
    },
  ]);

  let [item, setItems] = useState("");
  // local storage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setItems(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // const completeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = true;
  //   setTodos(newTodos);
  // };
  // function updateTodoAtIndex(e, i) {
  //   const newTodos = [...todos];
  //
  //   setTodos(newTodos);
  // }

  const updateTodo = index => {
    const newTodo = [...todos];
    newTodo.splice(index, 1, );
    // newTodo[index].content = e.target.value;
    // console.log(e);
    setTodos(newTodo);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h3>TODO APP</h3>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={updateTodo}
            removeTodo={removeTodo}
          />
        ))}
        <AddItem addTodo={addTodo} className="form" />
        <Update update={updateTodo} />
      </div>
    </div>
  );
}

export default App;
