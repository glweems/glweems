import { graphql, PageProps } from 'gatsby'
import React, { Fragment } from 'react'
import Box from '../components/Common/Box'
import Paper from '../components/Common/Paper'
import HtmlAst from '../components/HtmlAst'
import { AboutMeQuery } from '../queries'

export default function AboutPage(props: PageProps<AboutMeQuery, any>) {
  return (
    <Fragment>
      <Box container>
        <Paper>
          <HtmlAst
            elements={props.data.githubReadme.childMarkdownRemark.htmlAst}
          />
        </Paper>
      </Box>
    </Fragment>
  )
}

export const Query = graphql`
  query AboutMe {
    githubReadme(title: { eq: "glweems" }) {
      childMarkdownRemark {
        htmlAst
      }
    }
  }
`
