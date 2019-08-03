import React from 'react';
import styled from 'styled-components';
import SocialMediaIcons from './SocialMedia';

const StyledFooter = styled.footer`
  grid-area: Footer;
`;

const Footer = () => (
  <StyledFooter>
    <SocialMediaIcons horizontal />
  </StyledFooter>
);

export default Footer;
