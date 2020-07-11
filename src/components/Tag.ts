import styled from 'styled-components';

const Tag = styled.span`
  display: block;
  padding: ${({ theme }) => `${theme.space[0]} ${theme.space[1]}`};
  color: inherit;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-family: ${({ theme }) => theme.fonts.sans};
  line-height: 22px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: ${({ theme }) => theme.radii[1]};
`;

Tag.displayName = 'Tag';

export default Tag;
