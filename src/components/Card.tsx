import * as React from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../utils/theme';
import Tags from './Tags';

interface Card {
  title: string;
  subtitle: string;
  img: object;
  link?: string;
  tags: string[];
}

const Header = styled.h4`
  color: ${props => props.theme.yellow};
  margin: 0;
`;
const Subtitle = styled.small`
  color: ${props => props.theme.muted};
  margin: 0;
  padding: 0;
`;

const Image = styled(Img)`
  border-radius: 0.25em;
`;

const Footer = styled.div`
  color: ${props => props.theme.green};
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const StyledCard = styled.div`
  display: grid;
  gap: 0 1rem;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas: 'Header Image' 'Subtitle Image' 'Footer Image';
  cursor: pointer;
  background: ${({ theme }) => theme.bg};

  ${Header} {
    grid-area: Header;
  }

  ${Subtitle} {
    grid-area: Subtitle;
  }

  ${Footer} {
    grid-area: Footer;
  }

  ${Image} {
    grid-area: Image;
  }

  ${media.greaterThan('sm')`
  grid-template-columns: 1fr;
  grid-template-rows: auto 10em  auto  auto;
   grid-template-areas: 'Header' 'Image' 'Subtitle' 'Footer';
  `};
`;

const Card = ({ title, subtitle, img, link, tags }: Card) => {
  const go = () => (link ? navigate(link) : null);

  return (
    <StyledCard onClick={go}>
      <Header>{title}</Header>
      <Subtitle>{subtitle}</Subtitle>
      <Footer>{<Tags items={tags} />}</Footer>
      <Image {...img} />
    </StyledCard>
  );
};

export const Cards = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  ${media.greaterThan('sm')`
    grid-template-columns: repeat(2, 1fr);
`}
  ${media.greaterThan('lg')`
    grid-template-columns: repeat(3, 1fr);
`}
`;

export default Card;
