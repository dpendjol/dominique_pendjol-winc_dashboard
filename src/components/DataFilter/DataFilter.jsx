import React from 'react';
import { useGlobalContext } from '../AppContext/AppContext';

const DataFilter = ({students, assignments}) => {
  const {state, setState} = useGlobalContext();

  const handleChange = (e) => {
    const {name, value, type} = e.target;

    console.log(type)
    if (type === 'select-one') {
      setState({...state, [name]: value})
    } else if (type === 'checkbox') {
      setState({...state, [name]: !state[name]})
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