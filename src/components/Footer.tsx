import React from 'react';
import styled from 'styled-components';
import { Link } from './Common';
import { accounts } from '../utils/data';
import { media, rhythm, borderColor, rootBg } from '../theme';

const { github, linkedin, medium, instagram, behance } = accounts;

const FooterStyles = styled.footer`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr;
  gap: ${rhythm(0.5)};
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-top: ${rhythm(1)};
  padding: ${rhythm(1)};
  background: ${rootBg};
  border-top: 2px solid ${borderColor};
  ${media.greaterThan('sm')`
    grid-template-columns: repeat(5, auto);
  `};
`;

const Footer = () => (
  <FooterStyles>
    <div>
      <Link to={github.link}>{github.name}</Link>
    </div>
    <Link to={linkedin.link}>{linkedin.name}</Link>
    <Link to={medium.link}>{medium.name}</Link>
    <Link to={instagram.link}>{instagram.name}</Link>
    <Link to={behance.link}>{behance.name}</Link>
  </FooterStyles>
);

export default Footer;
