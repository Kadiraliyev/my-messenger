import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={s.navbar}>
      <div className={s.nav_item}>
        <NavLink
          to='/profile'
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.nav_item}>
        <NavLink
          to='/dialogs'
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.nav_item}>
        <NavLink
          to='/users'
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
