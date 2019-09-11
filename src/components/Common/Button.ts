import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

const buttonBase = css`
  display: inline-block;
  padding: 5px 10px;
  color: ${props => props.theme.colors.text};
  text-transform: uppercase;
  background: ${props => props.theme.colors.bg};
  border: 3px solid ${props => transparentize(0.9, props.theme.colors.text)};
  border-radius: 6px;
  transition: all 0.3s ease 0s;

  :hover {
    border-color: ${props => props.theme.colors.yellow};
    border-radius: 50px;
    transition: all 0.4s ease 0s;
  }
`;

export const Button = styled.button`
  ${buttonBase}
  ${({ theme }) => theme && css``}
`;
