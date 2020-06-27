/* eslint-disable import/no-named-default */
import React from 'react';
import { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

export default function ToggleThemeSwitch() {
  const { toggle, isDarkMode } = useTheme();

  return (
    <motion.button onClick={toggle} style={{ font: 'icon', padding: '0.25rem 0.5rem 0.125rem 0.5rem' }}>
      <motion.svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
      </motion.svg>
    </motion.button>
  );
}
