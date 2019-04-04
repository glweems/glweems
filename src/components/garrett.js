import React from 'react'
import { CardTitle, CardSubtitle } from 'src/styled/card'
import Avitar from '@/avitar'
import styled from 'styled-components'
import { A, H1, Flex } from 'elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faMedium,
  faBehance,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'

const AboutStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  img {
    border-radius: 5px;
  }
  svg {
    margin-right: 0.25rem;
  }
`

const About = () => (
  <AboutStyled>
    <Avitar />
    <Flex column align-items="flex-start">
      <H1 bold>Hi, I'm Garrett</H1>
      <CardTitle>Designer / Developer Based in Melbourne, FL.</CardTitle>
      <CardSubtitle>gwgraphicdesign@gmail.com</CardSubtitle>
      <Flex>
        <A href="https://github.com/glweems">
          <FontAwesomeIcon icon={faGithub} />
        </A>
        <A href="https://medium.com/glweems">
          <FontAwesomeIcon icon={faMedium} />
        </A>
        <A href="https://behance.net/glweems">
          <FontAwesomeIcon icon={faBehance} />
        </A>
        <A href="https://codepen.io/glweems">
          <FontAwesomeIcon icon={faCodepen} />
        </A>
      </Flex>
    </Flex>
  </AboutStyled>
)

export default About
