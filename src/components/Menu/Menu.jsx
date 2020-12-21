import MenuContent from './MenuContent.jsx';

import './Menu.css';

const Menu = (props) => {
  return (
    <div className='menu__container'>
      <h3>Menu</h3>
      <>
        <MenuContent>
          {props.children}
        </MenuContent>
      </>
    </div>
  )
}

export default Menu;