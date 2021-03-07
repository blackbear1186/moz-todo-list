import React from 'react'

const FilterButtons = () => {
  return (
    <div>
        <div className='filter-buttons'>
        <button type='button' className='btn toggle-btn' aria-pressed='true'>
          <span>All</span>
        </button>
        <button type='button' className='btn toggle-btn' aria-pressed='false'>
          <span>Active</span>
        </button>
        <button type='button' className='btn toggle-btn' aria-pressed='false'>
          <span>Completed</span>
        </button>
      </div>
    </div>
  )
}

export default FilterButtons
