import { Container } from 'elements'
import Garrett from '@/garrett'
import Layout from '@/layout'
import React from 'react'
import SEO from '@/seo'

const AboutPage = () => (
  <Layout>
    <Container>
      <SEO title='about' />
      <Garrett />
    </Container>
  </Layout>
)

export default AboutPage
