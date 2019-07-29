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
    customBurgerIcon={false}
    customCrossIcon={false}
    noOverlay
    right
    className={styles.sidebar}
  >
    <nav className={styles.nav}>
      <div>
        <Link to="/blog">Blog</Link>
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
