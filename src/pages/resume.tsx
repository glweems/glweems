import { graphql, PageProps } from 'gatsby'
import React, { FC } from 'react'
import Box from '../components/Common/Box'
import Paper from '../components/Common/Paper'
import HtmlAst from '../components/HtmlAst'
import { ResumePageQuery } from '../queries'

const ResumePage: FC<PageProps<ResumePageQuery>> = (props) => (
  <Box container>
    <Paper>
      <HtmlAst elements={props.data.resume.childMarkdownRemark.htmlAst} />

      <Box color="muted">
        his page was auto-generated from google docs with a npm module created
        by me: -)
      </Box>
    </Paper>
  </Box>
)

export default ResumePage

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
