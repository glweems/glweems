import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Box from '../components/Common/Box';
import Container from '../components/Common/Container';
import HtmlAst from '../components/HtmlAst';
import { ResumePageQuery } from '../queries';

const resume = (props: PageProps<ResumePageQuery>) => {
  return (
    <Container>
      <HtmlAst elements={props.data.resume.childMarkdownRemark.htmlAst} />

      <Box color="muted">
        (this page was auto-generated from google docs with a npm module created
        by me :-)
      </Box>
    </Container>
  );
  // return <div></div>;
};

export default resume;

export const Query = graphql`
  query ResumePage {
    resume {
      title
      date
      childMarkdownRemark {
        id
        htmlAst
        frontmatter {
          id
          title
          date
        }

        rawMarkdownBody
      }
    }
  }
`;
