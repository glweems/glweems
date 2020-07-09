import { motion } from 'framer-motion';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { transparentize } from 'polished';

export default function ToggleThemeSwitch() {
  const { toggle, mode, isDarkMode } = useTheme();

  const buttonTitle = `Activate ${isDarkMode ? 'light' : 'dark'} mode`;
  return (
    <ToggleButton aria-label={buttonTitle} title={buttonTitle} onClick={toggle}>
      <motion.svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fillRule="evenodd"
          d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
          animate={mode}
          variants={{
            light: { rotate: 0 },
            dark: { rotate: 180 },
          }}
        />
      </motion.svg>
    </ToggleButton>
  );
}

const ToggleButton = styled(motion.button)`
  width: 3em;
  text-align: center;
  background-color: ${({ theme }) => transparentize(0.95, theme.colors.text)};
  border-color: ${({ theme }) => transparentize(0.85, theme.colors.text)};
  border-style: solid;
  border-width: 1px;
  fill: ${({ theme }) => theme.colors.text};
`;

ToggleThemeSwitch.displayName = 'ToggleThemeSwitch';
