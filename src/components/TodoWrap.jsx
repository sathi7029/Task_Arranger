import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodo } from "./EditTodo";

export const TodoWrap = () => {
  // Initialize the 'todos' state as an empty array
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todo) => {
    // Add a new todo to the 'todos' state with a unique ID
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  // Function to delete a todo by its ID
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  // Function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to toggle the editing mode of a todo
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Function to edit the task of a todo
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Achieve Your Goals !</h1>
      <TodoForm addTodo={addTodo} />
      {/* Display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          // If in editing mode, render the EditTodo component
          <EditTodo editTodo={editTask} task={todo} />
        ) : (
          // If not in editing mode, render the Todo component
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
