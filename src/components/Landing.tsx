import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import theme from 'styled-theming'
import { darken } from 'polished'
import { Ghost } from './Icons'
import { SocialIcon, Container, Button, Link } from './Common'
import { accounts } from '../utils/data'
import { rhythm } from '../utils/typography'
import { blue, base, yellow, purple, red, navbarHeight } from '../theme'

const wrapperBg = theme('mode', { light: yellow, dark: purple })
const garrettWeems = theme('mode', { light: blue, dark: red })

const Wrapper = styled(Container)`
  height: calc(100vh - ${navbarHeight});
  color: ${base.dark};
  background: ${wrapperBg};

  h2 {
    opacity: 0.5;
  }

  .gatsby-image-wrapper {
    margin: ${rhythm(1)} 0;
  }

  span {
    color: ${garrettWeems};
  }

  .icons {
    margin-bottom: ${rhythm(1)};
    > a {
      margin-right: ${rhythm(1)};
      color: black !important;
      border: none;

      * {
        color: black !important;
      }

      :hover {
        background: none;
      }
    }
  }

  button {
    margin-bottom: ${rhythm(1)};
    color: ${base.light};
    background: ${blue};
    border-color: ${darken(0.05, blue)};
  }
`

const AnimatedWrapper = animated(Wrapper)

const Landing = (): React.ReactElement => {
  const animation = useSpring({
    from: { transform: 'translate3d(0, 0, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 }
  })

  return (
    <AnimatedWrapper style={animation}>
      <Ghost />
      <div>
        <h1>
          Hello, I&apos;m <span>Garrett Weems</span>.
        </h1>
        <h2>I&apos;m a full-stack web developer.</h2>
        <p>I specialize in javascript / react.js web developement.</p>
        <Link to="https://docs.google.com/document/d/14e2XLcPLXcNLetW7QvosoBAU5N6ONE-uU1c4VyMjsCA/edit#heading=h.ahxu4umdkayn">
          <Button>Resume</Button>
        </Link>
      </div>
      <animated.div className="icons">
        <SocialIcon size="2x" account={accounts.github} />
        <SocialIcon size="2x" account={accounts.linkedin} />
        <SocialIcon size="2x" account={accounts.medium} />
        <SocialIcon size="2x" account={accounts.instagram} />
        <SocialIcon size="2x" account={accounts.behance} />
      </animated.div>
    </AnimatedWrapper>
  )
}

export default Landing
