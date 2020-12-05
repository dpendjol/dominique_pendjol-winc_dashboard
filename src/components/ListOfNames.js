import React from 'react';
import ListItem from './ListItem';

const ListOfNames = ({listOfNames, multiple, url}) => {
    const listOfItems = (
        listOfNames.sort().map(item => {
            return <ListItem key={item} value={item} multiple={multiple} url={url} />
        })
    )

    return (
        <ul className="studentList">
            {listOfItems}
        </ul>
    )
}

export default ListOfNames;