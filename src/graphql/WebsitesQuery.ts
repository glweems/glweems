import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { Nodes, ImageFile } from '../declaration';

interface Website {
  name: string;
  slug: string;
  description: string;
  url: string;
  repo: string;
  tags: string[];
}

interface WebsitesQuery {
  allWebsite: Nodes<Website>;
  allFile: Nodes<ImageFile>;
}

interface WebsiteData extends Website {
  screenshot?: { childImageSharp: { fluid: FluidObject } } | FluidObject[];
}

const useWebsitesQuery = (): WebsiteData[] => {
  const { allWebsite, allFile }: WebsitesQuery = useStaticQuery(graphql`
    query WebsitesQuery {
      allWebsite {
        nodes {
          name
          slug
          description
          url
          repo
          tags
        }
      }
      allFile(filter: { name: { in: ["cheatdaycheesecakes", "prepress", "coin-market"] } }) {
        nodes {
          id
          name
          childImageSharp {
            ...FluidImage
          }
        }
      }
    }
  `);
  const findScreenshot = (slug: string): ImageFile | any =>
    allFile.nodes.find(file => file.name.includes(slug));

  return allWebsite.nodes.map(website => ({
    ...website,
    screenshot: findScreenshot(website.slug),
  }));
};

export default useWebsitesQuery;
