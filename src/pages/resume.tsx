import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Box from '../components/Common/Box'
import HtmlAst from '../components/HtmlAst'
import { ResumePageQuery } from '../queries'

const resume = (props: PageProps<ResumePageQuery>) => {
  return (
    <Box container>
      <HtmlAst elements={props.data.resume.childMarkdownRemark.htmlAst} />

      <Box color="muted">
        (this page was auto-generated from google docs with a npm module created
        by me :-)
      </Box>
    </Box>
  )
  // return <div></div>;
}

export default resume

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
`
