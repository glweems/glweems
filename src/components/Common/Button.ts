import styled from 'styled-components';
import * as theme from '../../theme';

export const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  color: ${theme.text};
  text-transform: uppercase;
  background: ${theme.bg};
  border-color: ${theme.yellow};
  border-style: solid;
  border-width: 3px;
  border-radius: 6px;
  transition: all 0.3s ease 0s;

  :hover {
    border-color: ${theme.yellow};
    border-radius: 50px;
    transition: all 0.4s ease 0s;
  }
`;
