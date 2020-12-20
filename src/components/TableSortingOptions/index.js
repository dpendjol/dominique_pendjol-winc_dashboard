import React from 'react';
import { useContext } from 'react';
import { State, SetState } from '../../App';

const TableSortingOptions = () => {
  const state = useContext(State);
  const setState = useContext(SetState);

  const handleChange = (e) => {
    if (e.target.type === 'radio') {
      setState({ ...state, sortBy: e.target.value })
    } 
  }

  return (
    <>
        {state.difficulty ?
        <label htmlFor='rbName'>
          <input
            type='radio'
            id='rbName'
            name='sortBy'
            value='name'
            checked={state.sortBy === 'name'}
            onChange={handleChange}
          />
        Student name
        </label>
        : null}
        {state.fun ? 
        <label htmlFor='rbAssignment'>
          <input
            type='radio'
            id='rbAssignment'
            name='sortBy'
            value='assignment'
            checked={state.sortBy === 'assignment'}
            onChange={handleChange}
          />
          Assignment Name
        </label>
        : null}
        </>
  )
}

export default TableSortingOptions;