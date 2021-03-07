import React from 'react';
import EditButtons from './Buttons/EditButtons';

const tasks = [
  { id: 'todo-0', name: 'Eat', completed: true},
  { id: 'todo-1', name: 'Sleep', completed: false},
  { id: 'todo-2', name: 'Shit', completed: false},
  { id: 'todo-3', name: 'Work Out', completed: false},

]
const taskList = tasks.map(task => {
  return (
    <EditButtons id={task.id} name={task.name} completed={task.completed} key={task.id}/>

  )
})

const TaskList = () => {
  return (
    <>
      {taskList}
    </>
  )
}

export default TaskList
