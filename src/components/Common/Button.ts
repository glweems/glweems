import styled from 'styled-components';
import { bg, rootBg } from '../../theme';

const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  text-transform: uppercase;
  border-style: solid;
  border-width: 3px;
  border-radius: 6px;
  transition: all 0.3s ease 0s;

  :hover {
    border-radius: 50px;
    transition: all 0.4s ease 0s;
  }
  :disabled {
    color: ${bg};
    background: ${rootBg};
    border-color: ${rootBg};
    border-radius: 6px;
    cursor: not-allowed;
  }
  :disabled:hover {
    transition: none;
  }
`;

Button.displayName = 'Button';
export default Button;
