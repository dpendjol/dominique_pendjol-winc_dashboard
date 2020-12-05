import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ToggleBars, ToggleBarsUpdate } from '../App';

const ListItem = ({value, multiple, url}) => {
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

    const link = `/${url}/${value}`;

    return (
        <li>
        <label htmlFor={value}>
        {multiple ?
        <>
        <input 
            type='checkbox'
            id={value}
            name={value}
            checked={state.students.includes(value)}
            onChange={handleChange}
            />
            {value}
        </>
        :
            <NavLink activeClassName="current" to={link}>
                {value}
            </NavLink>
        }
        </label>
        </li>
        
    )
}

export default ListItem;