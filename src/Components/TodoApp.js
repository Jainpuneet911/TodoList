import React, { useState, useEffect } from "react";
import Todos from "./todo";
import Todoform from "./todoform";
import "./TodoApp.css"; // Import the updated CSS file

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodo = todo => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="card">
      <div className="todo-form-container">
        <h1>Todo with local Storage</h1>
        <Todoform addTodos={addTodo} />
      </div>
      <div className="todos-container">
        <Todos todos={todos} markComplete={markComplete} />
      </div>
    </div>
  );
};

export default TodoApp;
