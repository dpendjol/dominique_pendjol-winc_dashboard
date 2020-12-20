import React from 'react';
import ListItem from './ListItem';
import SelectMultiple from '../SelectMultiple';

const ListItems = ({ listValues }) => {

  const listOfItems = (
    listValues.sort().map(item => {
      return (<ListItem key={item} value={item}/>)
    })
  );

  return (
    <fieldset className='list'>
      <legend>Which data needs to be displayed</legend>
      <SelectMultiple />
      <ul className='sublist'>
        {listOfItems}
      </ul>
    </fieldset>
  )
}

export default ListItems;