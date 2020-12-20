import MenuContent from './MenuContent';
import './Menu.css';

const Menu = (props) => {
  return (
    <div className='menu'>
      <h2>Menu</h2>
      <MenuContent />
      {props.children}
    </div>
  )
}

export default Menu;