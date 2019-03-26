import About from '@/about'
import SEO from '@/seo'
import Hello from '@/hello'
import Layout from '@/layout'
import PinnedRepos from '@/github'
import { Container } from 'src/Styled'
import React from 'react'

export default () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`glweems`, `garrett`, `weems`, `portfolio`, `developer`]}
    />
    <Container>
      <Hello />
      <About />
      <PinnedRepos />
    </Container>
  </Layout>
)
