import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  background: ${props => props.theme.text};
  color: ${props => props.theme.bg};
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <ul>
      <li>glweems</li>
      <li>glweems</li>
    </ul>
  </StyledFooter>
);

export default Footer;
