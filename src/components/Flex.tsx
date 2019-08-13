import styled from 'styled-components';

interface Props {
  direction?: 'row' | 'column';
  children: any;
}

const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.direction};
`;

export default Flex;
