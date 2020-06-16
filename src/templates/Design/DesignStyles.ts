import styled from 'styled-components';
import { navbarHeight, media, gridGap, rhythm } from '../../theme';
import { Container } from '../../components/Common';

export const Header = styled(Container)`
  position: fixed;
  top: ${navbarHeight};
  left: 0;
  z-index: -1;
  width: 100%;
  padding: ${rhythm(1)} 0;
`;

export const ImageGrid = styled.div`
  display: grid;
  width: 100%;

  ${media.greaterThan('sm')`
    grid-template-rows: repeat(4, 5vw);
    grid-template-columns: repeat(8, 1fr);
    gap: ${gridGap(1)};
    margin-bottom: ${gridGap(1)};
    .design-img:first-child {
      grid-row: 1/3;
      grid-column: 1/3;
    }
    .design-img:nth-child(2) {
      grid-row: 1/3;
      grid-column: 3/5;
    }
    .design-img:nth-child(3) {
      grid-row: 1/6;
      grid-column: 5/9;
    }
    .design-img:nth-child(4) {
      grid-row: 3/6;
      grid-column: 1/5;
    }
  `}
`;

export const Images = styled(Container)`
  z-index: 100;
  width: 100%;
  margin-top: 10em;
  padding: ${rhythm(1)} 0;
`;
