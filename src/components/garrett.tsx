import Avitar from '@/avitar'
import {
  faBehance,
  faCodepen,
  faGithub,
  faMedium
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { A, Flex, H1 } from 'elements'
import * as React from 'react'
import { CardSubtitle, CardTitle } from 'styled/card'
import styled from 'styled-components'

const AboutStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  align-items: flex-start;
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
    margin-right: 0.25rem;
  }
`

const About = () => (
  <div>
    <H1 bold={true}>Hi, I'm Garrett</H1>
    <AboutStyled>
      <Avitar />
      <Flex column={true} align-items="flex-start">
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
  </div>
)

export default About
