import React, { useState } from "react";
import FilterButtons from "./Buttons/FilterButtons";
import AddButtons from "./Buttons/AddButtons";
import TaskList from "./TaskList";

// Create handleSubmit function
// 1. Add onSubmit to and pass handleSubmit to form
// 2. Add new addTask parameter and use addTask callback prop in handleSubmit
const Form = ({ addTask }) => {
  // 1. create useState variable and function and pass name to value element inside input
  const [name, setName] = useState("");
  // 2. create eventhandler function and store the updated state name as input value changes
  // 3. Pass handleChange eventhandler function into onChange event handler
  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(name);
    // clear input after form is submitted by setting setName to empty string
    setName("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2 className="head">What needs to be done?</h2>
        <div className="input-text">
          <input
            type="text"
            name="todo-input"
            id="todo-input"
            value={name}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <AddButtons />
      </form>
      <FilterButtons />
      <h2 className="list-heading">3 tasks remaining</h2>
      <TaskList />
    </div>
  );
};

export default Form;
