import { push as AppMenu } from 'react-burger-menu';
import { Link } from 'gatsby';
import React from 'react';
import SocialMediaIcons from './SocialMedia';
import styles from '../styles/components/sidebar.module.scss';

interface NavItem {
  text: string;
  path: string;
}
interface SidebarProps {
  isOpen?: boolean;
  navItems: NavItem[];
}

const Sidebar = ({ isOpen }: SidebarProps) => (
  <AppMenu
    pageWrapId="page-wrap"
    outerContainerId="outer-container"
    isOpen={isOpen}
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
  </AppMenu>
);

export default Sidebar;
