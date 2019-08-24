import * as React from 'react';
import RehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import CodeSandbox from '../../../simple-codesandbox/dist/index';
import SEO from '../components/SEO';

type GitArray = [string, string, string, string?];

interface Frontmatter {
  date: string;
  path: string;
  title: string;
  subtitle: string;
  codesandbox: GitArray;
  tags: string[];
}

interface BlogTemplateProps {
  data: {
    markdownRemark: {
      htmlAst: object;
      frontmatter: Frontmatter;
    };
    file: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

const Header = styled.header`
  /* h1 {
    color: ${props => props.theme.colors.dark};
  } */
`;

const Article = styled.div`
  display: grid;
  grid-template-columns: auto 720px auto;
  grid-template-rows: auto 1fr;
  grid-template-areas: '. header .' '. article .';

  ${Header} {
    grid-area: header;
  }

  * {
    grid-column: article;
  }
`;

const BlogTemplate = ({
  data: {
    markdownRemark: {
      htmlAst,
      frontmatter: { date, path, title, subtitle, codesandbox, tags },
    },
    file: {
      childImageSharp: { fluid: thumbnail },
    },
  },
}: BlogTemplateProps): JSX.Element => {
  const PageElements = ({ elements }: { elements: unknown }) => {
    const renderAst = new RehypeReact({
      createElement: React.createElement,
      components: {},
    }).Compiler(elements);
    return <>{renderAst.props.children}</>;
  };

  return (
    <>
      <SEO title={title} keywords={tags} />

      <Article>
        <Header>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          {codesandbox ? (
            <CodeSandbox
              git={codesandbox}
              editorSize={40}
              codeMirror
              hideNavigation
              view="preview"
            />
          ) : (
            <Image fluid={thumbnail} />
          )}
        </Header>
        <PageElements elements={htmlAst} />
      </Article>
    </>
  );
};

export default BlogTemplate;

export const BlogPost = graphql`
  query MyQuery($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        date
        path
        title
        subtitle
        codesandbox
        thumbnail {
          id
        }
        tags
      }
      htmlAst
    }
    file(name: { in: ["tbn", $slug] }) {
      childImageSharp {
        ...FluidImage
      }
    }
  }
`;
