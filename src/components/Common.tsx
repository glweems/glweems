import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Link = styled(GatsbyLink)`
  /* letter-spacing: 0.08rem; */
  padding: 0 6px 2px 6px;
  background: linear-gradient(to bottom, transparent 62%, #fff87e 0) center
    center/0% 75% no-repeat;
  cursor: pointer;
  transition: background-size 0.4s ease;
  &:hover {
    background-size: 100% 100%;
  }
  &:active {
    background-size: 80% 100%;
  }
  &-container {
    position: relative;
    z-index: 1;
    padding: 60px;
    background-color: #fff;
    box-shadow: 0 0 90px 10px rgba(95, 124, 179, 0.15);
  }
`;

export default { Link };
