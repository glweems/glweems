import styled from 'styled-components';
import { Link } from 'gatsby';
import { secondaryTheme } from '../../theme';

const Tag = styled(Link)`
  ${secondaryTheme};
  display: block;
  padding: 5px 10px;
  color: inherit;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 22px;
  text-decoration: none;
  border-radius: 3px;
`;

Tag.displayName = 'Tag';
export default Tag;
