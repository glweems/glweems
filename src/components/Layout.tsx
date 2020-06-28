import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import config from '../../.gatsby/config';
import Box from './Common/Box';
import { GhostSVG } from './Icons';
import ToggleThemeSwitch from './ToggleThemeSwitch';
import Container from './Common/Container';
import SEO from './SEO';

function SideMenu() {
  return (
    <Fragment>
      <SEO />
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
          <ToggleThemeSwitch />
        </Box>
      </Box>
    </Fragment>
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
            staggerChildren: 0.1,
          },
        },
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
            visible: { x: 0, opacity: 1, scale: 1 },
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
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

export default function Layout({ children }) {
  return (
    <Container>
      <GridContainer>
        <div className="menu">
          <SideMenu />
        </div>

        <main className="content">{children}</main>
      </GridContainer>
    </Container>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'menu'
    'content';
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 0em 2em;

  .content {
    grid-area: content;
    padding: 0 ${({ theme }) => theme.space[3]}px;
  }
  .menu {
    grid-area: menu;
  }

  ${media.greaterThan('medium')`
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'menu content content';

  `}
`;
