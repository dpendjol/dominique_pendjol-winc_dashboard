import React from 'react';
import { useContext } from 'react';
import { State, SetState } from '../../App';

import './DataFilter.css';

const DataFilter = ({students, assignments}) => {
  const state = useContext(State);
  const setState = useContext(SetState);

  const handleChange = (e) => {
    console.log(e.target.type)
    if (e.target.type === 'select-one') {
      setState({...state, [e.target.name]: e.target.value})
    } else if (e.target.type === 'checkbox') {
      setState({...state, [e.target.name]: !state[e.target.name]})
    };
  };

  return (
    <>
    <fieldset className='filterName'>
    <legend>Filter by name</legend>
     <label htmlFor='filterByName'>
        <input 
          type='checkbox'
          id='filterByName'
          name='filterByName'
          checked={state.filterByName}
          onChange={handleChange}
          />
          Enable
      </label>
      <select name='filterName' onChange={handleChange}>
        <option key='selectvalue' value=''>-- SELECT A VALUE --</option>
        {students.map(student => {
          return <option key={student} value={student}>{student}</option>
        })}
      </select>
    </fieldset>
    <fieldset className='filterAssignment'>
    <legend>Filter by assignment</legend>
      <label htmlFor='filterByAssignment'>
        <input 
          type='checkbox'
          id='filterByAssignment'
          name='filterByAssignment'
          checked={state.filterByAssignment}
          onChange={handleChange}
          />
          Enable
      </label>
      <select name='filterAssignment' onChange={handleChange}>
        <option key='selectvalue' value=''>-- SELECT A VALUE --</option>
        {assignments.map(assignment => {
          return <option key={assignment} value={assignment}>{assignment}</option>
        })}
      </select>
    </fieldset>
    </>
  )
}

export default DataFilter;