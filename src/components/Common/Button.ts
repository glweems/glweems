import styled from 'styled-components';
import { transparentize } from 'polished';
import { variant, VariantArgs } from 'styled-system';
import { GlweemsTheme } from '../../theme';

export type ButtonProps = VariantArgs<GlweemsTheme, 'buttons'>;

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
  text-anchor: middle
    ${variant({
      scale: 'buttons',
      variants: {
        primary: {
          color: 'white',
          bg: 'primary',
        },
        secondary: {
          color: 'white',
          bg: 'secondary',
        },
      },
    })};
`;

Button.displayName = 'Button';
export default Button;
