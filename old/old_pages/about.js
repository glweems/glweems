import ContactForm from 'forms/contact'
import { Container } from 'elements'
import React from 'react'
import Garrett from '@/garrett'
import SEO from '@/seo'

const AboutPage = () => (
  <>
    <Container>
      <SEO title="About" />
      <Garrett />
      <ContactForm />
    </Container>
  </>
)

export default AboutPage
