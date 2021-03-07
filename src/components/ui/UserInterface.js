import React from "react";
import FilterButtons from './Buttons/FilterButtons';
import AddText from './AddText';
import AddButtons from './Buttons/AddButtons';
import TaskList from '../ui/TaskList';


const UserInterface = ({ tasks }) => {
  return (
    <div className="container">
      <form>
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

export default UserInterface;
