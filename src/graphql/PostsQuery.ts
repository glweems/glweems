import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { Nodes } from '../declaration';

interface MarkdownRemark {
  id: string;
  excerpt: string;
  frontmatter: {
    id: number;
    path: string;
    title: string;
    tags: string[];
    next: string;
    thumbnail: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

interface PostsQuery {
  allMarkdownRemark: Nodes<MarkdownRemark>;
}

const usePostsQuery = () => {
  const { allMarkdownRemark }: PostsQuery = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark {
        nodes {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            id
            title
            path
            date
            tags
            thumbnail {
              childImageSharp {
                ...FluidImage
              }
            }
          }
        }
      }
    }
  `);

  return allMarkdownRemark.nodes;
};

export default usePostsQuery;
