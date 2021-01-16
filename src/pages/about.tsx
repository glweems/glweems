import { graphql, PageProps } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React, { Fragment } from 'react'
import Box from '../components/Common/Box'
import Paper from '../components/Common/Paper'
import Heatmap from '../components/Heatmap'
import HtmlAst from '../components/HtmlAst'
import { AboutMeQuery } from '../queries'

export default function AboutPage(props: PageProps<AboutMeQuery, any>) {
  return (
    <Fragment>
      <Box container>
        <Paper>
          <HtmlAst
            elements={props.data.file.childMarkdownRemark.htmlAst}
            components={{ a: OutboundLink }}
          />
          <Heatmap />
        </Paper>
      </Box>
    </Fragment>
  )
}

export const Query = graphql`
  query AboutMe {
    file(name: { eq: "README" }) {
      id
      absolutePath
      childMarkdownRemark {
        htmlAst
      }
    }
    selfy: file(name: { eq: "selfy" }) {
      name
      publicURL
    }
    githubReadme(title: { eq: "glweems" }) {
      childMarkdownRemark {
        htmlAst
      }
    }
  }
`
