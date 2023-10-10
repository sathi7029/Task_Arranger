import React, { useState } from "react";

// The EditTodo component takes two props: editTodo and task
export const EditTodo = ({ editTodo, task }) => {
  // Initialize a state variable 'value' with the task's initial value
  const [value, setValue] = useState(task.task);

  // Define a function to handle the form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Call the 'editTodo' function and pass the updated 'value' and task 'id'
    editTodo(value, task.id);
  };

  // Render a form with an input field and a submit button
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      {/* Input field for updating the task */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />

      {/* Submit button for updating the task */}
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
