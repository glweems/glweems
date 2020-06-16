/* eslint-disable import/no-named-default */
import React from 'react';
import Switch from 'react-switch';
import { useTheme } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import Moon from '../assets/moon.svg';
import Sun from '../assets/sun.svg';

interface Props {
  className?: string;
}

export const ToogleThemeSwitch: React.FC<Props> = ({ className }) => {
  const { isDarkMode, toggle } = useTheme();

  return (
    <Switch
      className={className}
      onChange={toggle}
      checked={isDarkMode}
      onColor="#222"
      offColor="#333"
      checkedIcon={<Moon />}
      uncheckedIcon={<Sun />}
      boxShadow="0 0 2px 3px #B38CD9"
      activeBoxShadow="0 0 2px 3px #dfb3e6"
    />
  );
};
