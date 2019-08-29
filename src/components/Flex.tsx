import styled from 'styled-components';
import { Child } from '..';

interface Props {
  direction?: 'row' | 'column';
  children: Child;
}

const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.direction};
`;

export default Flex;
