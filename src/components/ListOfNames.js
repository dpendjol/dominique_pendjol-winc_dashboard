import React from 'react';
import ListItem from './ListItem';
import {Link} from 'react-router-dom'

const ListOfNames = ({listOfNames}) => {
    const listOfItems = (
        listOfNames.sort().map(item => {
            return <ListItem key={item} value={item} />
        })
    )

    return (
        <ul className="studentList">
            <Link to="/"><li value="">Home</li></Link>
            {listOfItems}
        </ul>
    )
}

export default ListOfNames;