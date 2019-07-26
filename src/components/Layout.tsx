import React, { useState, createContext } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SEO from './SEO';

const LayoutContext = createContext();

interface Props {
  children: React.ReactChildren;
}

export default function Layout({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <SEO />
      <LayoutContext.Provider isOpen={[isOpen, setIsOpen]}>
        <Sidebar
          isOpen={isOpen}
          navItems={[
            { text: `About`, path: `/about` },
            { text: `Tutorials`, path: `/tutorials` },
            { text: `Design`, path: `/designs` },
            { text: `Repos`, path: `/repos` },
          ]}
        />

        <div id="outer-container" className={isOpen ? 'noScroll' : ''}>
          <div id="page-wrap">
            <Navbar toggleMenu={toggleMenu} />

            <main>{children}</main>

            <footer>{/* TODO */}</footer>
          </div>
        </div>
      </LayoutContext.Provider>
    </>
  );
}
