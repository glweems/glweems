import * as React from 'react';
import RehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import CodeSandbox from 'simple-codesandbox';
import SEO from '../components/SEO';

type GitArray = [string, string, string, string?];

interface Frontmatter {
  date: string;
  name: string;
  title: string;
  subtitle: string;
  codesandbox: GitArray;
  tags: string[];
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

interface BlogTemplateProps {
  data: {
    markdownRemark: {
      timeToRead: number;
      htmlAst: object;
      frontmatter: Frontmatter;
    };
  };
}

const BlogTemplate = ({
  data: {
    markdownRemark: {
      timeToRead,
      htmlAst,
      frontmatter: {
        date,
        title,
        subtitle,
        codesandbox,
        tags,
        thumbnail: {
          childImageSharp: { fluid },
        },
      },
    },
  },
}: BlogTemplateProps): JSX.Element => {
  const ArticleInfo = () => (
    <>
      <div className="info">
        <small>{timeToRead} Min Read</small>
        <small>Published {date}</small>
      </div>
      {codesandbox ? (
        <CodeSandbox
          git={codesandbox}
          editorSize={45}
          codeMirror
          hideNavigation
          view="preview"
          forceRefresh
        />
      ) : (
        <Image fluid={fluid} />
      )}
    </>
  );

  const PageElements = ({ elements }: { elements: unknown }) => {
    const renderAst = new RehypeReact({
      createElement: React.createElement,
      components: {
        info: ArticleInfo,
      },
    }).Compiler(elements);
    return <>{renderAst.props.children}</>;
  };

  return (
    <>
      <SEO title={title} keywords={tags} description={subtitle} />
      <article className="markdown">
        <PageElements elements={htmlAst} />
      </article>
    </>
  );
};

export default BlogTemplate;

export const BlogPost = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      htmlAst
      timeToRead
      frontmatter {
        date
        name
        title
        subtitle
        codesandbox
        tags
        thumbnail {
          id
          childImageSharp {
            ...FluidImage
          }
        }
      }
    }
  }
`;
