import React from "react";
import FilterButtons from './Buttons/FilterButtons';
import EditButtons from './Buttons/EditButtons';
import AddText from './AddText';
import AddButtons from './Buttons/AddButtons';

const UserInterface = () => {
  return (
    <div className="container">
      <form>
        <h2 className='head'>What needs to be done?</h2>
        <AddText />
        <AddButtons/>
      </form>
      <FilterButtons />
      <h2 className='list-heading'>3 tasks remaining</h2>
      <EditButtons name='Eat' completed={true}/>
      <EditButtons name='Sleep' completed={false}/>
      <EditButtons name='Repeat'completed={false}/>

    </div>
  );
};

export default UserInterface;
