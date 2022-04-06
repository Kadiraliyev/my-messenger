import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={s.navbar}>
      <div className={s.nav_item}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.nav_item}>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>
      {/* <div>
        <a href="#1" className = { navData => navData.isActive ? s.active : s.item}>News</a>
      </div>
      <div>
        <a href="#1" className = { navData => navData.isActive ? s.active : s.item}>Settings</a>
      </div> */}
    </nav>
  );
}

export default Navbar;
