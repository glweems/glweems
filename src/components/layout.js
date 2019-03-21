import Navigation from '@/navigation';
import { Container } from 'reactstrap';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { sidebarLinks } from 'src/Data';
import Theme, { ThemeProvider } from 'src/Theme';
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 5rem;
  width: 100%;
  overflow: hidden;
  background: ${Theme.colors.light};
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
        <Container fluid>
          <Navigation links={sidebarLinks} />
          <Main>{children}</Main>
        </Container>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
