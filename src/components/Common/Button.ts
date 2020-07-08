import styled from 'styled-components';

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
    color: ${({ theme }) => theme.colors.bg};
    background: ${({ theme }) => theme.colors.rootBg};
    border-color: ${({ theme }) => theme.colors.rootBg};
    border-radius: 6px;
    cursor: not-allowed;
  }
  :disabled:hover {
    transition: none;
  }
`;

Button.displayName = 'Button';
export default Button;
