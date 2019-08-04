import React from 'react';
import styled from 'styled-components';
import SocialMediaIcons from './SocialMedia';

const StyledFooter = styled.footer`
  grid-area: Footer;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <SocialMediaIcons />
  </StyledFooter>
);

export default Footer;
