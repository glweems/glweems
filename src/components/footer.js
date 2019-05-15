import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Subscribe from '@/subscribe'

const StyledFooter = styled.footer`
  width: 100%;
  background: ${props => props.theme.text};
  color: ${props => props.theme.bg};
  text-align: center;
`

const Footer = () => (
  <StyledFooter>
    <ul>
      <li>glweems</li>
      <li>glweems</li>
    </ul>
    <Subscribe />
  </StyledFooter>
)

export default Footer
