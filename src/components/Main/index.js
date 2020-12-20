import React from 'react';
import './Main.css';

const Main = (props) => {
  return (
    <main className='main'>
      {props.childeren}
    </main>
  )
}

export default Main;