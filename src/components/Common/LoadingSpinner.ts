import styled from 'styled-components';
import { purple, yellow } from '../../theme';
import { space, SpaceProps } from 'styled-system';

export type LoadingSpinnerProps = SpaceProps;

const LoadingSpinner = styled.div<LoadingSpinnerProps>`
  --spinner-color: ${(props) =>
    props.theme.mode === 'dark' ? purple : yellow};

  position: relative;
  background: linear-gradient(45deg, transparent 49%, var(--spinner-color) 50%, var(--spinner-color) 50%, transparent 51%, transparent), linear-gradient(-45deg, transparent 49%, var(--spinner-color) 50%, var(--spinner-color) 50%, transparent 51%, transparent);
  background-position: 0% 0%;
  background-size: 16px 16px;
  border: 1px var(--spinner-color) solid;
  border-radius: 4px;
  /* -webkit-animation: spTexture 1s infinite linear; */
  animation: spTexture 1s infinite linear;
}

@keyframes spTexture {
  from {
    background-position: 0px 0px;
  }
  to {
    background-position: -16px 0px;
  }

  ${space};
`;

export default LoadingSpinner;
