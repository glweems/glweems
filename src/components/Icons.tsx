/* eslint-disable react/jsx-props-no-spreading */
import { motion } from 'framer-motion';
import React from 'react';
import config from '../../.gatsby/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from './common/Box';

const icon = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
};
export interface GhostSVGProps extends BoxProps {
  size: number;
}

export function GhostSVG({ size = 75, ...props }: GhostSVGProps) {
  return (
    <Box
      as={motion.svg}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 117 117"
      variants={icon}
      css={`
        .svg-ghost-bg {
          fill: var(--color-primary);
        }
        .white-fill {
          fill: white;
        }
      `}
    >
      <polygon
        className="svg-ghost-bg"
        points="108,54 108,27 99,27 99,18 90,18 90,9 81,9 72,9 72,0 36,0 36,9 27,9 27,18 18,18 18,27 9,27 9,54
          0,54 0,117 9,117 9,108 18,108 18,99 27,99 27,108 36,108 36,117 45,117 54,117 54,99 63,99 63,117 81,117 81,108 90,108 90,99
          99,99 99,108 108,108 108,117 117,117 117,54 "
      />
      <polygon
        className="white-fill"
        points="36,27 18,27 18,36 9,36 9,63 18,63 18,72 36,72 36,63 45,63 45,36 36,36 	"
      />
      <polygon
        className="white-fill"
        points="99,36 90,36 90,27 72,27 72,36 63,36 63,63 72,63 72,72 90,72 90,63 99,63 	"
      />
      <rect x="9" y="45" width="18" height="18" />
      <rect x="63" y="45" width="18" height="18" />
    </Box>
  );
}

export function SocialIcons() {
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
            margin: ${({ theme }) => theme.space[2]};
            align-self: flex-end;
          `}
        >
          <motion.a href={account.link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              title={account.name}
              icon={account.icon}
              size="2x"
            />
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
export const linkedHeaderIcon = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>`;
