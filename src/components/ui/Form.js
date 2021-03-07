import React from "react";
import FilterButtons from './Buttons/FilterButtons';
import AddText from './AddText';
import AddButtons from './Buttons/AddButtons';
import TaskList from './TaskList';

// Create handleSubmit function
// 1. Add onSubmit to and pass handleSubmit to form
// 2. Add new addTask parameter and use addTask callback prop in handleSubmit
const Form = ({ tasks, addTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask('Say Hello')
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2 className='head'>What needs to be done?</h2>
        <AddText />
        <AddButtons/>
      </form>
      <FilterButtons />
      <h2 className='list-heading'>3 tasks remaining</h2>
      <TaskList />

    </div>
  );
};

export default Form;
