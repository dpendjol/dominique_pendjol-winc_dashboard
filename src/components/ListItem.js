import React from 'react';
import { Link } from 'react-router-dom'

const ListItem = ({value}) => {
    const link = '/' + value;
    return (
        <Link to={link}>
            <li>{value}</li>
        </Link>
    )
}

export default ListItem;