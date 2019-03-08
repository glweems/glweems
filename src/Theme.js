import React from "react";
import styled from "styled-components";

export const Theme = {
  headingFont: `IBM Plex Sans, sans-serif;`,
  colors: {
    red: `#ff5851`,
    dark: `#24292e`,
    bg: `#fff`
  }
};

export const Main = styled.main`
  padding-top: 2rem;
  /* height: 100vh; */
  /* padding-bottom: 2rem; */
  /* margin-bottom: 10rem; */
  width: 100%;
  overflow: hidden;
  background: ${Theme.colors.bg};
`;

export const StickyFooter = styled.footer`
  background: ${Theme.colors.dark};
  position: fixed;
  width: 100%;
  padding: 5rem 0;
  bottom: 0;
  right: 0;
  text-align: center;
  margin-top: -3rem;
  z-index: -1;
`;

const Svg = styled.svg`
  line {
    fill: none;
    stroke: #fff;
    stroke-width: 3px;
  }
`;

export const StickyLogo = styled.span`
  position: fixed;
  top: 0;
  left: 2rem;
  padding: 0.5rem 0.7rem 0.7rem 0.7rem;
  font-weight: bolder;
  font-style: italic;
  color: ${Theme.colors.bg};
  background: ${Theme.colors.dark};
`;

export const HamburgerButton = () => (
  <Svg width="28.231" height="18.218" viewBox="0 0 28.231 18.218">
    <line x2="28.231" transform="translate(329.5 28.5)" />
    <line x2="28.104" transform="translate(329.626 20.891)" />
    <line x2="28.104" transform="translate(329.626 36.109)" />
  </Svg>
);

export default Theme;
