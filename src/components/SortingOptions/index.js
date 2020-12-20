import React from 'react';
import { useContext } from 'react';
import { Route } from 'react-router-dom'
import { useGlobalContext } from '../AppContext/AppContext';
import TableSortingOptions from '../TableSortingOptions';

const SortingOptions = () => {
  const {state, setState} = useGlobalContext();

  const handleChange = (e) => {
    if (e.target.type === 'radio') {
      setState({ ...state, sortBy: e.target.value })
    } 
  }

  return (
    <fieldset className='chartbar__options'>
      <legend>Sort the data by grades</legend>
      <Route exact path='/tableview'>
        <TableSortingOptions />
      </Route>
      <label htmlFor='rbDifficulty'>
        <input
          type='radio'
          id='rbDifficulty'
          name='sortBy'
          value='difficulty'
          checked={state.sortBy === 'difficulty'}
          onChange={handleChange}
        />
      Grade difficulty
      </label>
      <label htmlFor='rbFun'>
        <input
          type='radio'
          id='rbFun'
          name='sortBy'
          value='fun'
          checked={state.sortBy === 'fun'}
          onChange={handleChange}
        />
        Grade fun
      </label>
      <label htmlFor='rbDefault'>
        <input
          type='radio'
          id='rbDefault'
          name='sortBy'
          value='default'
          checked={state.sortBy === 'default'}
          onChange={handleChange}
        />
        Default sorting
      </label>
    </fieldset>
  )
}

export default SortingOptions;