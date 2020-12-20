import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { State, SetState } from '../../App';

import { useRouteMatch } from 'react-router-dom';

import './List.css';

const ListItem = ({ value }) => {
  const url = useRouteMatch().path;
  const link = `${url}/${value}`;

  const state = useContext(State);
  const setState = useContext(SetState);

  const handleChange = (e) => {
    let myArray = state.students;
    if (e.target.checked) {
      myArray = [...myArray, e.target.name]
    } else {
      myArray = myArray.filter(item => {
        if (item === e.target.name) {
          return false;
        }
        return true;
      })
    }
    setState({ ...state, students: myArray });
  }

  return (
    <>
      <label htmlFor={value}>
        {state.selectMultiple ?
          <li className="input-item">
            <input
              type='checkbox'
              id={value}
              name={value}
              checked={state.students.includes(value)}
              onChange={handleChange}
            />
            {value}
          </li>
          :
          <NavLink activeClassName="selected" className="link" to={link}>
          <li className="link-text">
            {value}
          </li>
          </NavLink>
        }
      </label>
    </>

  )
}

export default ListItem;