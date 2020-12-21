import React from 'react';
import { useGlobalContext } from '../AppContext/AppContext';

const ChartDisplayOptions = () => {
  const {state, setState} = useGlobalContext();

  const handleChange = (e) => {
    const {name, type} = e.target;
    if (type === "checkbox") {
      setState({ ...state, [name]: !state[name] })
    } 
  }

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