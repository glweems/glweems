import React from 'react'
import Layout from '@/layout'
import SEO from '@/seo'
// import About from '@/about'
import { Container } from 'src/Styled'
import PinnedRepos from '@/github'
import Avitar from '@/avitar'
import Theme from 'src/Theme'

const About = () => (
  <div>
    <h1>Hello, I'm Garrett Weems</h1>
    <h3>Designer / Developer out of Melbourne Florida</h3>
  </div>
)

const ContactMe = () => (
  <form name="contact" netlify>
    <p>Give me a shout</p>
    <input id="name" type="name" name="name" placeholder="name" />
    <input id="email" type="email" name="email" placeholder="email" />
    <textarea
      type="text"
      name="message"
      id="message"
      placeholder="message..."
    />
    <p>
      <button type="submit" className="submit">
        Send
      </button>
    </p>
  </form>
)

export default () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`glweems`, `garrett`, `weems`, `portfolio`, `developer`]}
    />
    <Container>
      <Avitar />
      <About />
      <PinnedRepos />
      <ContactMe />
    </Container>
  </Layout>
)
