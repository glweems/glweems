import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Theme from 'src/Theme';
import Navigation from '@/navigation';
import 'scss/index.scss';
import { Error } from '@/error';

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
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Navigation />
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
