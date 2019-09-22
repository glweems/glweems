import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import { BehanceProject, ImageFile } from '../..';
import { Container } from '../../components/Common';
import { navbarHeight, media, gridGap, rhythm, bg } from '../../theme';

interface DesignTemplate {
  data: {
    currentProject: BehanceProject;
    allFile: {
      nodes: ImageFile[];
      totalCount: number;
    };
  };
}

interface ImageGridProps {
  evenNum: boolean;
  miniGallery: boolean;
  fullGallery: boolean;
}

const Header = styled.div`
  position: fixed;
  top: ${navbarHeight};
  left: 0;
  width: 100%;
  padding: ${rhythm(1)} 0;
`;

const ImageGrid = styled.div`
  display: grid;
  width: 100%;
  background: ${bg};
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

const Images = styled.div`
  z-index: 100;
  margin-top: 10em;
  background: pink;
`;

const DesignImages = ({ images }: { images: ImageFile[] }) => {
  function chunkArray(myArray: any[], chunk_size: number) {
    let results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }

    return results;
  }

  return (
    <Images>
      {chunkArray(images, 4).map(chunk => (
        <ImageGrid>
          {chunk.map(({ childImageSharp, id }) => (
            <Img
              key={`design-${id}`}
              className="design-img"
              fluid={childImageSharp.fluid}
            />
          ))}
        </ImageGrid>
      ))}
    </Images>
  );
};

export default function DesignTemplate({ data }: DesignTemplate) {
  const { currentProject, allFile } = data;
  const { name, tags, description } = currentProject;
  return [
    <SEO
      key={`seo-design-${name}`}
      title={name}
      keywords={tags}
      description={description}
    />,
    <section key={`content-design-${name}-1`}>
      <Container>
        <Header>
          <h1>{name}</h1>
          <h2>{description}</h2>
        </Header>
      </Container>
    </section>,
    <DesignImages key="design-grid" images={allFile.nodes} />,
  ];
}

export const designQuery = graphql`
  query SingleDesign($slug: String!) {
    currentProject: behanceProjects(slug: { regex: $slug }) {
      ...BehanceCard
      tools {
        title
      }
    }
    allFile(
      filter: { relativeDirectory: { regex: $slug }, name: { ne: "cover" } }
    ) {
      nodes {
        id
        name
        childImageSharp {
          ...FluidImage
        }
      }
      totalCount
    }
  }
`;
