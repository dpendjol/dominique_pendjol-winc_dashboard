import React from 'react';
import ListItem from './ListItem';
import SelectMultiple from '../SelectMultiple/SelectMultiple';

import './List.css';

const ListItems = ({ listValues }) => {

  const listOfItems = (
    listValues.sort().map(item => {
      return (<ListItem key={item} value={item}/>)
    })
  );

  return (
    <div className='list__container'>
      <fieldset className='list__set'>
        <legend>Which data needs to be displayed</legend>
        <SelectMultiple />
        <ul className='list__items'>
          {listOfItems}
        </ul>
      </fieldset>
    </div>
  )
}

export default ListItems;