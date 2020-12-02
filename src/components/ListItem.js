import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ToggleBars, ToggleBarsUpdate } from '../App';

const ListItem = ({value}) => {
    const state = useContext(ToggleBars)
    const updateState = useContext(ToggleBarsUpdate)

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
        updateState({...state, students: myArray});
    }

    const link = '/' + value;

    return (
        <li>
        <label htmlFor={value}>
        <input 
            type='checkbox'
            id={value}
            name={value}
            checked={state.students.includes(value)}
            onChange={handleChange}
            />
            <NavLink activeClassName="current" to={link}>
                {value}
            </NavLink>
        </label>
        </li>
        
    )
}

export default ListItem;