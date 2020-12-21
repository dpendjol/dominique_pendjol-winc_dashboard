import logo from '../../logo_winc.png';
import './Header.css';

const Header = () => {
  return (
    <header className='header__container'>
      <div className='header__img-container'>
        <img className='header__img' src={logo} alt='Logo Winc Academy' />
        <h1>Winc Dashboard</h1>
        <img className='header__img' src={logo} alt='Logo Winc Academy' />
      </div>
    </header>
  )
}

export default Header