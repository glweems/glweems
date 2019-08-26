import { useStaticQuery, graphql } from 'gatsby';
import { flatten, replace } from 'lodash-es';
import { Nodes } from '../declaration';

interface PageMeta<t> {
  title: string;
  subtitle: string;
  date: t;
  path: string;
  tags: string[];
}

interface RawTagsQuery {
  designs: Nodes<PageMeta<number>>;
  tutorials: Nodes<{ frontmatter: PageMeta<string> }>;
}

const useTagsQuery = () => {
  const { designs, tutorials }: RawTagsQuery = useStaticQuery(graphql`
    query TagsQuery {
      designs: allBehanceProjects {
        nodes {
          title: name
          subtitle: description
          path: slug
          tags
          date: created_on
        }
      }
      tutorials: allMarkdownRemark {
        nodes {
          frontmatter {
            title
            subtitle
            path
            tags
            date
          }
        }
      }
    }
  `);

  const prettyUnixDate = (unixDate: number) => {
    const date = new Date(unixDate * 1000);
    const month = new Date(date).getMonth();
    const day = new Date(date).getDay();
    const year = new Date(date).getFullYear();
    return `${month}/${day}/${year}`;
  };

  const formatTags = (tags: string[]): string[] =>
    flatten(
      tags.map(tag =>
        tag
          .trim()
          .toLowerCase()
          .split(' '),
      ),
    );

  const formatDesigns = ({ nodes }: Nodes<PageMeta<number>>) =>
    nodes.map(({ title, subtitle, date, path, tags }) => ({
      title,
      subtitle,
      date: prettyUnixDate(date),
      path: `designs/${path}`,
      tags: formatTags(tags),
    }));

  const formatTutorials = ({ nodes }: Nodes<{ frontmatter: PageMeta<string> }>) =>
    nodes.map(({ frontmatter: { title, subtitle, date, path, tags } }) => ({
      title,
      subtitle,
      date,
      path: `tutorials/${path}`,
      tags: formatTags(tags),
    }));

  return [...formatDesigns(designs), ...formatTutorials(tutorials)];
};

export default useTagsQuery;
