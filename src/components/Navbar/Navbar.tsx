import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import * as React from 'react';
import { Link, ToogleThemeSwitch } from '../Common';
import { Links, Navigation } from './NavbarStyles';
import { NavbarGhostQuery } from '../../types/generated';

const Navbar: React.FC = () => {
  const { file } = useStaticQuery<NavbarGhostQuery>(graphql`
    query NavbarGhost {
      file(relativePath: { eq: "ghost.png" }) {
        childImageSharp {
          fixed(height: 25) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Navigation>
      <Link to="/" className="logo">
        <Img fixed={file.childImageSharp.fixed as FixedObject} alt="red-pacman-ghost" draggable={false} />
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
};

export default Navbar;
