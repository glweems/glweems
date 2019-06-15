import ContactForm from 'forms/contact'
import { Container } from 'elements'
import Garrett from '@/garrett'
import React from 'react'
import SEO from '@/seo'

const AboutPage = () => (
  <>
    <Container>
      <SEO title="about" />
      <Garrett />
      <ContactForm />
    </Container>
  </>
)

export default AboutPage
