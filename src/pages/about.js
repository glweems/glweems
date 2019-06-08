import ContactForm from 'forms/contact'
import { Container } from 'elements'
import Garrett from '@/garrett'
import Layout from '@/containers/layout'
import React from 'react'
import SEO from '@/seo'

const AboutPage = () => (
  <Layout>
    <Container>
      <SEO title="about" />
      <Garrett />
      <ContactForm />
    </Container>
  </Layout>
)

export default AboutPage
