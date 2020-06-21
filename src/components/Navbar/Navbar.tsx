import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link, ToogleThemeSwitch } from '../Common';
import { Navigation, Links } from './NavbarStyles';
import { Ghost } from '../Icons';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
const Navbar: React.FC = () => {
  const { file } = useStaticQuery(graphql`
    query NavbarGhostQuery {
      file(relativePath: { eq: "ghost.png" }) {
        childImageSharp {
          fixed(height: 25) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Navigation>
      <Link to="/" className="logo">
        <Img fixed={file?.childImageSharp?.fixed} alt="red-pacman-ghost" draggable={false} />
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
