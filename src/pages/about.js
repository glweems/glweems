import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/layout'
import SEO from '@/seo'
import { Container } from 'src/Styled'

const AboutPage = props => (
  <Layout>
    <Container>
      <SEO />
      <h1>Hello, I'm Garrett.</h1>
      <h3>Web Developer in Melbourne, Florida.</h3>
    </Container>
  </Layout>
)

AboutPage.propTypes = {}

export default AboutPage
