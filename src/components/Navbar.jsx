import { NavLink } from 'react-router-dom';
import styles from '../modules/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}

          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}

          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}

          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}

          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
