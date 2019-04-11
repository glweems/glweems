import { Container, List } from 'elements'

import Layout from '@/containers/layout'
import Link from '@/link'
import React from 'react'
import SEO from '@/seo'
import { sidebarLinks } from 'src/data'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <List>
        {sidebarLinks.map((item, i) => (
          <li key={i}>
            <Link hover to={item.to}>
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <Link to='/'>Go Home</Link>
        </li>
      </List>
    </Container>
  </Layout>
)

export default NotFoundPage
