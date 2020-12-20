import React, { useContext } from 'react';
import { State, SetState } from '../../App'

import { useLocation, useRouteMatch, Redirect, Route } from 'react-router-dom';

const SelectMultiple = (props) => {
  const state = useContext(State);
  const setState = useContext(SetState);
  const location = useLocation();
  const match = useRouteMatch();
  
  //Get the name selected by the user
  const studentName = location.pathname.split('/').reverse()[0];
  const url = match.path;
  
  const handleChange = (e) => {
    const objecten = e.target.checked ? 
    // Set the arrray when we select a 
      {[e.target.name]: !state.[e.target.name], students: [studentName]}
    :
      {[e.target.name]: !state.[e.target.name], students: []}
    setState({ ...state, ...objecten})
  }

  return (
    <>
    <div className='settings__content'>
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