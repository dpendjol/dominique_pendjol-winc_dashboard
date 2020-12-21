import React from 'react';

import './Main.css';

const Main = (props) => {
  return (
    <main className='main__container'>
      {props.children}
    </main>
  )
}

export default Main;