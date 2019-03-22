import Navigation from '@/navigation';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { sidebarLinks } from 'src/Data';
import Theme, { ThemeProvider } from 'src/Theme';
import { Container } from 'src/Styled';
import styled from 'styled-components';
import 'normalize-css';

const Main = styled.main`
  max-width: 100%;
  overflow: hidden;
  background: white;
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
      <ThemeProvider>
        <Navigation links={sidebarLinks} />
        {/* <Container> */}
        <Main>{children}</Main>
        {/* </Container> */}
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
