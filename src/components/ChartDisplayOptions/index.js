import React from 'react';
import './ChartDisplayOptions.css';

const ChartDisplayOptions = ({ state, handleChange}) => {
  return (
    <div className='ChartDisplayOptions'>
      <fieldset>
        <legend>Display the grades</legend>
          <label htmlFor='difficulty'>
            <input
              type='checkbox'
              id='difficulty'
              name='difficulty'
              checked={state.difficulty}
              onChange={handleChange}
            />
            Difficulty
          </label>
          <label htmlFor='fun'>
            <input
              type='checkbox'
              id='fun'
              name='fun'
              checked={state.fun}
              onChange={handleChange}
            />
            Fun
          </label>
        </fieldset>
      </div>
  )
}

export default ChartDisplayOptions;