import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  // Initialize a state variable "value" with an empty string
  const [value, setValue] = useState("");

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    if (value) {
      // Call the "addTodo" function passed as a prop with the current "value"
      addTodo(value);
      // Clear the form input by setting "value" to an empty string
      setValue("");
    }
  };

  // Render a form element with an input field and a submit button
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      {/* Input field */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />
      {/* Submit button */}
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
