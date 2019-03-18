import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Theme from 'src/Theme';
import Navigation from '@/navigation';
import 'scss/index.scss';
import { Error } from '@/error';
import { sidebarLinks } from 'src/Data';

const Main = styled.main`
  padding-top: 2rem;
  width: 100%;
  overflow: hidden;
  background: ${Theme.colors.bg};
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <Error>
        <Navigation links={sidebarLinks} />
        <Main>{children}</Main>
        {/* <StickyFooter>© {new Date().getFullYear()}, Built with</StickyFooter> */}
      </Error>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
