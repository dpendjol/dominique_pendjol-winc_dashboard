import React from 'react';
import { NavLink } from 'react-router-dom'

const ListItem = ({value}) => {
    const link = '/' + value;
    return (
        <NavLink activeClassName="current" to={link}>
            <li>{value}</li>
        </NavLink>
    )
}

export default ListItem;