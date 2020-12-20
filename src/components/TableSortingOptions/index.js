import React from 'react';
import { useGlobalContext } from '../AppContext/AppContext';

const TableSortingOptions = () => {
  const {state, setState} = useGlobalContext();

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