import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Theme, StickyFooter } from "../Theme";
import { StickyLogo } from "../components/small-components";
import Navigation from "./navigation";
import "../scss/index.scss";

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
    render={data => (
      <>
        <Navigation />
        <Main>
          <StickyLogo />
          {children}
        </Main>
        <StickyFooter>© {new Date().getFullYear()}, Built with</StickyFooter>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
