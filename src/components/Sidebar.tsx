import { push as AppMenu } from 'react-burger-menu';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { faBars, faTimes, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import SocialMediaIcons from './SocialMedia';
import styles from '../styles/components/sidebar.module.scss';

interface NavItem {
  text: string;
  path: string;
}
interface SidebarProps {
  isMenu?: boolean;
  navItems: NavItem[];
}

const Sidebar = styled.div`
  /* height: calc(100vh-6em); */
`;

export default ({ isMenu }: SidebarProps) =>
  !isMenu || (
    <Sidebar
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      isMenu={isMenu}
      className={styles.sidebar}
      customBurgerIcon={false}
      customCrossIcon={false}
      noOverlay
    >
      <nav className={styles.nav}>
        <div>
          <Link to="/tutorials">Tutorials</Link>
        </div>

        <div>
          <Link to="/designs">Designs</Link>
        </div>
      </nav>

      <div className={styles.socialLinks}>
        <SocialMediaIcons size="sm" />
      </div>
    </Sidebar>
  );
