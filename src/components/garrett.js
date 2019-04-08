import React from 'react'
import { Title, CardSubtitle } from 'src/styled/card'
import Avitar from '@/avitar'
import styled from 'styled-components'
import { H1, Flex, IconLink } from 'styled/elements'
import { socialMediaAccounts } from 'src/data'

console.log('TCL: socialMediaAccounts', socialMediaAccounts)

const AboutStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 2.5fr;
  align-items: space-between;
  gap: 1rem;
  padding-bottom: 1rem;
  div {
    width: 100%;
  }
  a {
    font-size: 1.5rem;
  }
  img {
    border-radius: 5px;
  }
  svg {
    margin-right: 2rem;
  }
`

const SocialMediaComponents = ({ accounts }) =>
  accounts.map((acc, i) => (
    <IconLink key={i} href={acc.link}>
      <acc.SvgIcon />
    </IconLink>
  ))

const About = () => (
  <AboutStyled>
    <Avitar />
    <Flex w100 column evenly>
      <H1 bold>Hi, I'm Garrett</H1>
      <Title>Designer / Developer Based in Melbourne, FL.</Title>
      <CardSubtitle>gwgraphicdesign@gmail.com</CardSubtitle>
      <Flex>
        <SocialMediaComponents accounts={socialMediaAccounts} />
      </Flex>
    </Flex>
  </AboutStyled>
)

export default About
