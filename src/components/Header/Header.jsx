import logo from '../../img/react-logo.png';
import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <img src={logo} alt="react-logo" width={120} />
    </header>
  );
}

export default Header;
