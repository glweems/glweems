import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link, ToogleThemeSwitch } from '../Common';
import { Navigation, Links } from './NavbarStyles';

const Navbar: React.FC = () => (
  <Navigation>
    <Link to="/" className="logo">
      <FontAwesomeIcon icon={faHome} size="lg" />
    </Link>
    <Links>
      <Link to="/blog" className="nav-item">
        Blog
      </Link>
      <Link to="/designs" className="nav-item">
        Designs
      </Link>
      <Link to="/about" className="nav-item">
        About
      </Link>
    </Links>
    <ToogleThemeSwitch />
  </Navigation>
);

export default Navbar;
