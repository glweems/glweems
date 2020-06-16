import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash';

export default function useSiteTags() {
  const { blogTags, designTags, sideProjectTags } = useStaticQuery(graphql`
    query AllSiteTags {
      blogTags: allMarkdownRemark(limit: 2000, sort: { fields: frontmatter___tags }) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          qty: totalCount
        }
      }
      designTags: allDesignsYaml(limit: 2000, sort: { fields: tags, order: ASC }) {
        group(field: tags) {
          tag: fieldValue
          qty: totalCount
        }
      }
      sideProjectTags: allSideprojectsYaml(limit: 2000, sort: { order: ASC, fields: tags }) {
        group(field: tags) {
          tag: fieldValue
          qty: totalCount
        }
      }
    }
  `);

  const tags = [...blogTags.group, ...designTags.group, ...sideProjectTags.group].reduce((acc, d) => {
    const found = acc.find((a: { tag: string; qty: number }) => a.tag === d.tag);

    if (found) {
      found.tag = _.kebabCase(found.tag);
    }
    acc.push({ tag: _.kebabCase(d.tag), qty: d.qty });

    return acc;
  }, []);

  return { tags, qty: tags.length };
}
