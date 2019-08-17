import { useStaticQuery, graphql } from 'gatsby';
import { Nodes, MarkdownRemark } from '../declaration';

export interface TutorialsQuery {
  allFile: Nodes<MarkdownRemark>;
}

const useTutorialsQuery = () => {
  const { allFile }: TutorialsQuery = useStaticQuery(graphql`
    query TutorialsQuery {
      allFile(
        filter: { gitRemote__NODE: { ne: null }, childMarkdownRemark: { id: { ne: null } } }
      ) {
        nodes {
          id
          ...Frontmatter
        }
      }
    }
  `);

  return allFile.nodes.map(node => ({
    ...node,
    ...node.childMarkdownRemark,
    title: node.childMarkdownRemark.frontmatter.title,
    subtitle: node.childMarkdownRemark.excerpt,
    tags: node.childMarkdownRemark.frontmatter.tags,
    path: `tutorials/${node.childMarkdownRemark.frontmatter.path}`,
    thumbnail: node.childMarkdownRemark.frontmatter.thumbnail,
  }));
};

export default useTutorialsQuery;
