/* eslint-disable import/no-named-default */
import { motion } from 'framer-motion';
import React from 'react';
import { useTheme } from 'styled-components';

export default function ToggleThemeSwitch() {
  const { toggle, mode, isDarkMode } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      css={`
        svg {
          fill: var(--color-text);
          scale: 1.25;
        }
      `}
    >
      <motion.svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
        />
      </motion.svg>{' '}
      <span>{mode} mode</span>
    </motion.button>
  );
}

ToggleThemeSwitch.displayName = 'ToggleThemeSwitch';
