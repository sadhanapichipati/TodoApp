import React, { useState } from 'react';
import './App.css';

function App() {
  let [todoInput, updateInput] = useState("");
  let [todolist, updateTodos] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Learn JavaScript" },
    { id: 3, task: "Learn Html" },
    { id: 4, task: "Learn css" }
  ]);

  let nextid = 5; // Initialize the nextid properly

  function addNewTodo() {
    if (todoInput === "") {
      alert("Add some task");
    } else {
      let newTodos = [
        ...todolist,
        {
          id: nextid++,
          task: todoInput
        }
      ];
      updateTodos(newTodos);
      updateInput("");
    }
  }

  function deleteTodo(id) {
    let updatedTodos = todolist.filter((todo) => todo.id !== id);
    updateTodos(updatedTodos);
  }

  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">Todo App Using React</h3>
      <div className="input-group">
        <input
          className="form-control"
          onChange={(e) => {
            let task = e.target.value;
            updateInput(task);
          }}
          type="text"
          value={todoInput}
        />
        <button
          onClick={addNewTodo}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
      <ul className="list-group mt-4">
        {todolist.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <p>{todo.task}</p>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
