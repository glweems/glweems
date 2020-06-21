import { useStaticQuery, graphql } from 'gatsby';
import { IndexPageQuery } from '../types/generated';
const useIndexPageQuery = () => {
  const data = useStaticQuery<IndexPageQuery>(graphql`
    query IndexPage {
      allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
        posts: nodes {
          ...BlogPost
        }
      }
    }
  `);
  return data.allMarkdownRemark.posts;
};

export default useIndexPageQuery;
