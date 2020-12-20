import React from 'react';
import { useContext } from 'react';
import { State, SetState } from '../../App';

const SortingOrder = () => {
  const state = useContext(State);
  const setState = useContext(SetState);

  const handleChange = (e) => {
    if (e.target.type === 'radio') {
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