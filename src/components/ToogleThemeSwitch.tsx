/* eslint-disable import/no-named-default */
import React from 'react';
import Switch from 'react-switch';
import { useTheme } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { Moon, Sun } from './Icons';
interface Props {
  className?: string;
}

export const ToogleThemeSwitch: React.FC<Props> = ({ className }) => {
  const { isDarkMode, toggle } = useTheme();

  return <button>{isDarkMode ? <Moon /> : <Sun />}</button>;
};
