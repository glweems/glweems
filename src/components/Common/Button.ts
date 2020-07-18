import { css } from '@styled-system/css';
import { transparentize } from 'polished';
import styled from 'styled-components';

type ButtonVariant = 'primary';
export type ButtonProps = {
  variant?: ButtonVariant;
};

const Button = styled.button<ButtonProps>`
  padding: 8px 10px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: none;
  background: transparent;
  background-color: ${({ theme }) => transparentize(0.95, theme.colors.text)};
  border: none;
  border: ${({ theme }) =>
    `${theme.borders[1]} ${transparentize(0.85, theme.colors.text)}`};
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  fill: ${({ theme }) => theme.colors.text};
  text-anchor: middle;

  ${(props) =>
    props &&
    props?.variant === 'primary' &&
    css({
      bg: 'blue',
      color: 'light',
    })};
`;

Button.displayName = 'Button';
export default Button;
