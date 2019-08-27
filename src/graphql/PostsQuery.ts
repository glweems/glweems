import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { Nodes } from '../declaration';

interface MarkdownRemark {
  id: string;
  excerpt: string;
  frontmatter: {
    date: string;
    path: string;
    title: string;
    subtitle: string;
    codesandbox: [string, string, string, string?];
    tags: string[];
    thumbnail: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
  fields: {
    page: string;
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
            title
            path
            date
            subtitle
            codesandbox
            tags
            thumbnail {
              childImageSharp {
                ...FluidImage
              }
            }
          }
          fields {
            page
          }
        }
      }
    }
  `);

  return allMarkdownRemark.nodes.map(node => ({
    id: node.id,
    title: node.frontmatter.title,
    subtitle: node.excerpt,
    tags: node.frontmatter.tags,
    path: node.fields.page,
    thumbnail: node.frontmatter.thumbnail.childImageSharp,
  }));
};

export default usePostsQuery;
