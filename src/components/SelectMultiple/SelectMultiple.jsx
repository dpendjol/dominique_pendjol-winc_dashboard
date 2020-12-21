import React from 'react';
import { useGlobalContext } from '../AppContext/AppContext';

import { useLocation, useRouteMatch, Redirect, Route } from 'react-router-dom';

import './SelectMultiple.css';

const SelectMultiple = (props) => {
  const {state, setState} = useGlobalContext();
  const location = useLocation();
  const match = useRouteMatch();
  
  //Get the name selected by the user
  const studentName = location.pathname.split('/').reverse()[0];
  const url = match.path;
  
  const handleChange = (e) => {
    const {name, checked} = e.target;
    const objecten = checked ? 
      {[name]: !state.[name], students: [studentName]}
    :
      {[name]: !state.[name], students: []}
    setState({ ...state, ...objecten})
  }

  return (
    <>
    <div className='selectmultiple__container'>
      <label htmlFor='selectMultiple'>
        <input
          type='checkbox'
          id='selectMultiple'
          name='selectMultiple'
          checked={state.selectMultiple}
          onChange={handleChange}
        />
        Select multiple values
      </label>
    </div>
    {/** after deselecting the multishizzel, return to start values */}
    {!state.selectMultiple && <Route><Redirect to={url} /></Route>}
    </>
  )
}

export default SelectMultiple;