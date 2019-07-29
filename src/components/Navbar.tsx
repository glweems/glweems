import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import styles from '../styles/components/navbar.module.scss';

const Navbar = ({ toggleMenu }: any) => (
  <header>
    <nav className={styles.navbar}>
      <Link to="/">glweems</Link>
      <button type="button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  </header>
);

export default Navbar;
