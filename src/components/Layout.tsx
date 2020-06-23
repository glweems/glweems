import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import * as React from 'react';
import { SocialIcon } from '../components/Common';
import { GhostSVG } from '../components/Icons';
import { accounts } from '../utils/data';
import Box from './Common/Box';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';

function SideMenu() {
  return (
    <div
      css={`
        background-color: var(--color-primary);
        height: 100%;
        min-height: 100vh;
      `}
    >
      <Box display="flex" flexDirection="column" paddingX={4} paddingY={6}>
        <GhostSVG />
        <Link to="/">Garrett Weems</Link>
        <p>I'm a full-stack web developer.</p>
        <p>I specialize in javascript / react.js web developement.</p>

        <nav
          css={`
            display: flex;
            flex-direction: column;
          `}
        >
          <Link to="/">Blog</Link>
          <Link to="/designs">Designs</Link>
          <Link to="/projects">Projects</Link>
        </nav>

        <Box>
          <SocialIcons />
        </Box>
      </Box>
    </div>
  );
}

function SocialIcons() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 1,
            when: 'beforeChildren',
            staggerChildren: 0.1
          }
        }
      }}
      css={`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      `}
    >
      {Object.entries(accounts).map(([key, account]) => (
        <motion.div
          key={key}
          variants={{
            hidden: { x: -100, opacity: 0, scale: 0 },
            visible: { x: 0, opacity: 1, scale: 1 }
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          css={`
            align-self: flex-end;
          `}
        >
          <motion.a href={account.link} target="_blank" rel="noreferrer">
            <FaIcon icon={account.icon} size="2x" />
          </motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Layout({ children }) {
  return (
    <Box
      css={`
        display: grid;
        grid-template-columns: 1fr 2fr;
        max-width: ${(props) => props.theme.breakpoints[2]};
        margin: 0 auto;
      `}
    >
      <div
        css={`
          height: 100vh;
          position: sticky;
          top: 0;
          left: 0;
        `}
      >
        <SideMenu />
      </div>

      {children}
    </Box>
  );
}
