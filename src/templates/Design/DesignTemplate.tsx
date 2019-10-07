import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../../components/SEO';
import { BehanceProject, ImageFile } from '../..';
import { Container, Text } from '../../components/Common';
import { Header, ImageGrid, Images } from './DesignStyles';

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

const DesignImages = ({ images }: { images: ImageFile[] }) => {
  function chunkArray(myArray: any[], chunk_size: number) {
    let results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }

    return results;
  }

  return (
    <Images smFlush bg>
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
        <Header inverted>
          <Text variant="title" theme={{ mode: 'light' }}>
            {name}
          </Text>
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
