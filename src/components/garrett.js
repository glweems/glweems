import { Subtitle, Title } from 'styled/card'

import Avitar from '@/avitar'
import { Flex } from 'elements'
import Link from '@/link'
import React from 'react'
import { socialMediaAccounts } from 'src/data'
import styled from 'styled-components'

const AboutStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 10rem auto;
  align-items: space-between;
  justify-items: space-between;
  gap: 2rem;
  padding-bottom: 1rem;
  padding: 0 0.5rem;
  h1 {
    grid-column: 1/-1;
  }
  a {
    font-size: 1.5rem;
  }
  img {
    border-radius: 5px;
    max-width: 200px;
  }
  svg {
    margin-right: 2rem;
  }
  * {
    margin-bottom: 0.25rem;
  }
  ${Subtitle} {
    margin-bottom: 1rem;
  }
`

const SocialMediaComponents = ({ accounts }) =>
  accounts.map((acc, i) => (
    <Link key={i} href={acc.link}>
      <acc.SvgIcon />
    </Link>
  ))

const About = () => (
  <AboutStyled>
    <h1>Hi, I'm Garrett</h1>
    <Avitar />
    <Flex w100 column>
      <Title>Designer / Developer Based in Melbourne, FL.</Title>
      <Subtitle>gwgraphicdesign@gmail.com</Subtitle>
      <Flex>
        <SocialMediaComponents accounts={socialMediaAccounts} />
      </Flex>
    </Flex>
  </AboutStyled>
)

export default About
