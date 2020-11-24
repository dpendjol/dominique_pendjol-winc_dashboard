import React from 'react';
import ListItem from './ListItem';

const ListOfNames = ({listOfNames}) => {
    const listOfItems = (
        listOfNames.sort().map(item => {
            return <ListItem key={item} value={item} />
        })
    )

    return (
        <ul>
            {listOfItems}
        </ul>
    )
}

export default ListOfNames;