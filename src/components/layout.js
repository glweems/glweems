import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { StickyLogo, Main, StickyFooter } from "../Theme";
import Navigation from "./navigation";
import "../scss/index.scss";

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
          <StickyLogo>glweems</StickyLogo>
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
