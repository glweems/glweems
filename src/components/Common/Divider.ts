import styled from 'styled-components';
import { rhythm } from '../../utils/typography';

const Divider = styled.hr`
  width: 100%;
  height: 2px;
  margin: ${rhythm(1)} 0;
`;

Divider.displayName = 'Divider';
export default Divider;
