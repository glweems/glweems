import React from 'react'
import Layout from '@/layout'
import SEO from '@/seo'
import Garrett from '@/garrett'
import { Container } from 'elements'

const AboutPage = () => (
  <Layout>
    <Container>
      <SEO title='about' />
      <Garrett />
    </Container>
  </Layout>
)

export default AboutPage
