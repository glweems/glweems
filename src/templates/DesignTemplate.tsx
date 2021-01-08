import { motion } from 'framer-motion'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Box from '../components/Common/Box'
import SEO from '../components/SEO'
import ShareButtons from '../components/ShareButtons'
import Tags from '../components/Tags'
import { DesignsTemplateQuery } from '../queries'
import IntersectionObserver from '../ui/IntersectionObserver'
import { ScaleBox } from '../ui/ScaleBox'

export default function DesignTemplate({
  data,
}: PageProps<DesignsTemplateQuery>) {
  const { design } = data
  return (
    <React.Fragment>
      <SEO
        title={design.name}
        article
        keywords={design.tags}
        description={design.description}
        image={design.fields.thumbnail.publicURL}
      />

      <Box container>
        <h1>{design.name}</h1>
        <p>{design.description}</p>

        <Tags tags={design.tags} />
        <ShareButtons url={design.url} title={design.name} tags={design.tags} />

        {design.images.map((image, imgIndex) => (
          <IntersectionObserver key={`${design.name}--${imgIndex}`}>
            <ScaleBox>
              <Img
                fluid={image?.childImageSharp?.fluid}
                draggable={false}
                fadeIn
              />
            </ScaleBox>
          </IntersectionObserver>
        ))}

        {design.images.map((image, index) => (
          <motion.div key={`${data.design.name}-image-${index}`}></motion.div>
        ))}
      </Box>
    </React.Fragment>
  )
}

export const Query = graphql`
  query DesignsTemplate($slug: String!) {
    design: designsYaml(slug: { regex: $slug }) {
      id
      slug
      name
      description
      tags
      url
      fields {
        thumbnail {
          publicURL
        }
      }
      images {
        childImageSharp {
          ...FluidImage
        }
      }
      tools {
        title
      }
    }
  }
`
