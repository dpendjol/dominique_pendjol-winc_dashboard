import { NavLink } from 'react-router-dom';

const MenuContent = (props) => {
    return (
      <>
        <ul className='menu__content'>
            
          <NavLink exact 
          activeClassName='selected' 
          className='menu__link' 
          to='/'>
            <li className='menu__text'>
            Home
            </li>
          </NavLink>
        
          <NavLink 
          activeClassName='selected' 
          className='menu__link' 
          to='/tableview'>
            <li className='menu__text'>
            Table view
            </li>
          </NavLink>
        
          <NavLink 
          activeClassName='selected' 
          className='menu__link' 
          to='/perstudent'>
            <li className='menu__text'>
            Grades per student
            </li>
          </NavLink>
        
          <NavLink 
          activeClassName='selected' 
          className='menu__link' 
          to='/perassignment'>
            <li className='menu__text'>
            Grades per assignment
            </li>
          </NavLink>
          {props.children}
        </ul>
        
        </>
    )
}

export default MenuContent;