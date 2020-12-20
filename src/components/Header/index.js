import logo from '../../logo_winc_2.png';

import './Header.css';

const Header = () => {
  return (
    <header className="headercontainer">
      <div className='header__imgcontainer'>
        <img src={logo} alt='Logo Winc Academy' />
      </div>
    </header>
  )
}

export default Header