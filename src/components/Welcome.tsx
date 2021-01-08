import { motion, useTransform, useViewportScroll } from 'framer-motion'
import React from 'react'
import config from '../../.gatsby/config'
import Box from './Common/Box'
import Button from './Common/Button'
import Link from './Common/Link'
import { GhostSVG } from './Icons'

export default function Welcome() {
  const { scrollYProgress } = useViewportScroll()

  const scale = useTransform(scrollYProgress, [1, 0], [0, 1])
  return (
    <Box py={8} color="text" as={motion.div} initial="full" animate="normal">
      <Box
        container
        as={motion.div}
        style={{ scale }}
        css={`
          width: inherit;
          height: inherit;
          transform-origin: bottom left;
        `}
      >
        <motion.div variants={container} initial="hidden" animate="visible">
          <Box as={motion.div} variants={container} display="flex">
            {['green', 'yellow', 'red'].map((color) => (
              <motion.div key={color} variants={item} className="ghost-wrapper">
                <GhostSVG color={color} size={50} />
              </motion.div>
            ))}
          </Box>

          <hgroup>
            <h1>
              Hello, I&apos;m{' '}
              <Box as="span" color="bg">
                Garrett Weems
              </Box>
              .
            </h1>
            <h2>{config.defaultDescription}</h2>
          </hgroup>

          <motion.div variants={item}>
            <Button as={Link} to="/resume">
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  )
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
/* const icons = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}; */
