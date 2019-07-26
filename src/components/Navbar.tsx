import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components/navbar.module.scss';

const Navbar = ({ toggleMenu, toggleMap }: any) => (
  <nav className={styles.navbar}>
    <button type="button" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} />
    </button>

    <h1>Garrett Weems</h1>
  </nav>
);

export default Navbar;
