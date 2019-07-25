import React, { useState, JSXElementConstructor, ReactFragment } from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import media from 'styled-media-query';
import { link } from 'fs';

interface NavLink {
  text: string;
  path: string;
}

const Navbar = styled.nav`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${({ columns }: { columns: number }) =>
    `repeat(${columns + 2}, 1fr)`};
  button {
    display: none;
    /* position: fixed; */
  }
  /* SMALL */
  ${media.lessThan('small')`
    background: pink;
    button {
      display: unset;

    }
    a:nth-child(n+2) {
      display: none;
    }
    justify-items: space-between;
  `}
  width: 100%;
  background: ${props => props.theme.colors.light};
`; // NAVBAR

/* const NavItems: ReactFragment = ({ items }: { items: NavLink[] }) =>
  items.map(({ text, path }) => (
    <Link key={text} to={path} className="grid-link">
      {text}
    </Link>
  )) */

export default ({ links }: { links: NavLink[] }) => {
  const [dropdown, setDropdown] = useState(true);

  return (
    <>
      <Navbar columns={links.length}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <button type="button">click</button>
        </div>
        {links.map(({ text, path }) => (
          <Link key={text} to={path} className="grid-link">
            {text}
          </Link>
        ))}
      </Navbar>
      {/* DROPDOWN */}
    </>
  );
};

export const NavQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
