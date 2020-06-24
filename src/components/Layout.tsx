import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import { useTheme } from 'styled-components';
import media from 'styled-media-query';
import config from '../../.gatsby/config';
import { GhostSVG } from '../components/Icons';
import Box from './Common/Box';

function SideMenu() {
  return (
    <div
      css={`
        height: 100%;
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
            align-items: flex-start;
            align-content: flex-start;
          `}
        >
          {config.links.map((link) => (
            <Link key={link.name} to={link.path}>
              <motion.div
                css={`
                  margin-bottom: ${(props) => props.theme.space[2]}px;
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.name}
              </motion.div>
            </Link>
          ))}
        </nav>

        <Box>
          <SocialIcons />
          <ToggleSwitch />
        </Box>
      </Box>
    </div>
  );
}

function SocialIcons() {
  return (
    <motion.ul
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
        display: flex;
        flex-flow: row wrap;
        flex-grow: 0;
        flex-shrink: 0;
        list-style: none;
        padding: 0;
        margin: 0.625rem -0.1875rem;
        width: 8.75rem;
      `}
    >
      {Object.entries(config.accounts).map(([key, account]) => (
        <motion.li
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
            margin: ${({ theme }) => theme.space[2]}px;
            align-self: flex-end;
          `}
        >
          <motion.a href={account.link} target="_blank" rel="noreferrer">
            <FaIcon title={account.name} icon={account.icon} size="2x" />
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function ToggleSwitch() {
  const { toggle } = useTheme();

  return (
    <motion.button onClick={toggle}>
      <svg
        className="bi bi-circle-half"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
      </svg>
    </motion.button>
  );
}

export default function Layout({ children }) {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        ${media.greaterThan('medium')`
          flex-direction: row;

          #main-menu {
            flex-basis: 25em;
            position: sticky;
            height: 100vh;
            top: 0;
            left: 0;
            }
        `};
      `}
    >
      <div
        id="main-menu"
        css={`
          width: 33em;
        `}
      >
        <SideMenu />
      </div>

      <main>{children}</main>
    </div>
  );
}
