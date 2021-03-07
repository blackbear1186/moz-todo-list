import React from 'react'

const EditButtons = ({name, completed, id}) => {
  return (
    <div className='container-checkbox'>
      <ul>
        <li>
          <div className='checked'>
            <input type='checkbox' id={id} defaultChecked={completed}/>
            <label id='todo-label'>{name}</label>
          </div>
          <div className='btn-group'>
            <button type='button' className='btn'>Edit</button>
            <button type='button' className='btn btn-danger'>Delete</button>
          </div>
        </li>
      
      </ul>
    </div>
  )
}

export default EditButtons
