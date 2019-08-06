import { useStaticQuery, graphql } from 'gatsby';
import { BehanceProject, GQLNodes, MarkdownRemark, BehanceImage } from '../declaration';

export interface IndexPageQuery {
  markdownFiles: GQLNodes<MarkdownRemark>;
  behanceCoverImages: GQLNodes<BehanceImage>;
  allBehanceProjects: GQLNodes<BehanceProject>;
  allBehanceImages: GQLNodes<BehanceImage>;
}

const useIndexPageQuery = (): IndexPageQuery =>
  useStaticQuery(graphql`
    query IndexPageQuery {
      # Behance Projects info
      allBehanceProjects(filter: { stats: { views: { gte: 20 } } }, limit: 4) {
        nodes {
          ...BehanceCard
        }
      }
      # Cover Files
      ...BehanceCoverImages
      # MarkdownFiles
      markdownFiles: allFile(
        filter: { gitRemote__NODE: { ne: null }, childMarkdownRemark: { id: { ne: null } } }
      ) {
        nodes {
          id
          ...Frontmatter
        }
      }
      # All Behance covers
      allBehanceImages: allFile(filter: { behanceProject: { ne: null }, name: { ne: "cover" } }) {
        nodes {
          id
          relativeDirectory
          behanceProject
          childImageSharp {
            ...FluidSvg
          }
        }
      }
    }
  `);

export default useIndexPageQuery;
