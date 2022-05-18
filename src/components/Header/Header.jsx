import { NavLink } from 'react-router-dom';
import logo from '../../img/react-logo.png';
import s from './Header.module.css';

function Header(props) {
  return (
    <header className={s.header}>
      <img src={logo} alt='react-logo' width={120} />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <span style={{ color: '#fff' }}>{props.login}</span>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
