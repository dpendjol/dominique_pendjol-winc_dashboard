import { NavLink } from 'react-router-dom';

const MenuContent = () => {
    return (
        <ul className='menu__content'>
            
          <NavLink exact 
          activeClassName="selected" 
          className="link" 
          to="/">
            <li className="link-text">
            Home
            </li>
          </NavLink>
        
          <NavLink 
          activeClassName="selected" 
          className="link" 
          to="/tableview">
            <li className="link-text">
            Tabelview
            </li>
          </NavLink>

          <NavLink 
          activeClassName="selected" 
          className="link" 
          to="/dboverview">
            <li className="link-text">
            Gemiddelde cijfers
            </li>
          </NavLink>
        
          <NavLink 
          activeClassName="selected" 
          className="link" 
          to="/perstudent">
            <li className="link-text">
            Cijfers per student
            </li>
          </NavLink>
        
          <NavLink 
          activeClassName="selected" 
          className="link" 
          to="/perassignment">
            <li className="link-text">
            Cijfers per opdracht
            </li>
          </NavLink>
        </ul>
    )
}

export default MenuContent;