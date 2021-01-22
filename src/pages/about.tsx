import { graphql, PageProps } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React, { FC, Fragment } from 'react'
import Box from '../components/Common/Box'
import Paper from '../components/Common/Paper'
import Heatmap from '../components/Heatmap'
import HtmlAst from '../components/HtmlAst'
import { AboutMeQuery } from '../queries'

const AboutPage: FC<PageProps<AboutMeQuery>> = (
  props: PageProps<AboutMeQuery, any>
) => {
  return (
    <Fragment>
      <Box container>
        <Paper>
          <HtmlAst
            elements={props.data.file.childMarkdownRemark.htmlAst}
            components={{ a: OutboundLink }}
          />
        </Paper>
        <Heatmap />
      </Box>
    </Fragment>
  )
}
export default AboutPage
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
