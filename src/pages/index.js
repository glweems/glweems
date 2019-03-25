import About from '@/about'
import { Hello, Layout, SEO } from 'my-components'
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
