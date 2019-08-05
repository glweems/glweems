import { useStaticQuery, graphql } from 'gatsby';

export interface IndexPageQuery {
  markdownFiles: GQLNodes<MarkdownRemark>;
  behanceCoverImages: GQLNodes<BehanceImage>;

  github: {
    viewer: {
      pinnedItems: GQLNodes<GithubRepository>;
    };
  };
  allBehanceProjects: GQLNodes<BehanceProject>;
}

const useIndexPageQuery = (): IndexPageQuery =>
  useStaticQuery(graphql`
    query IndexPageQuery {
      allBehanceProjects(filter: { stats: { views: { gte: 20 } } }, limit: 4) {
        nodes {
          ...BehanceCard
        }
      }
      ...BehanceCoverImages
      markdownFiles: allFile(
        filter: { gitRemote__NODE: { ne: null }, childMarkdownRemark: { id: { ne: null } } }
      ) {
        nodes {
          id
          ...Frontmatter
        }
      }
    }
  `);

export default useIndexPageQuery;
