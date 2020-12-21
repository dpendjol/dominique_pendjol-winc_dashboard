import React from 'react';
import { useGlobalContext } from '../AppContext/AppContext';

const SortingOrder = () => {
  const {state, setState} = useGlobalContext()

  const handleChange = (e) => {
    const {type} = e.target;
    if (type === 'radio') {
      setState({ ...state, sortOrder: !state.sortOrder })
    } 
  }

  return (
    <fieldset className='sort__options'>
      <legend>Sort direction</legend>
      <label htmlFor='rbAscending'>
        <input
          type='radio'
          id='rbAscending'
          name='sortOrder'
          checked={state.sortOrder}
          onChange={handleChange}
        />
        Ascending
      </label>
      <label htmlFor='rbDescending'>
        <input
          type='radio'
          id='rbDescending'
          name='sortOrder'
          checked={!state.sortOrder}
          onChange={handleChange}
        />
        Descending
      </label>
    </fieldset>
  )
}

export default SortingOrder;