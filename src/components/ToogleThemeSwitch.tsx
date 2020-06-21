/* eslint-disable import/no-named-default */
import React from 'react';
import { useTheme } from 'styled-components';
import { Moon, Sun } from './Icons';
interface Props {
  className?: string;
}

export const ToogleThemeSwitch: React.FC<Props> = ({ className }) => {
  const { isDarkMode, toggle } = useTheme();

  return (
    <button style={{ background: 'none' }} onClick={toggle}>
      {isDarkMode ? <Moon /> : <Sun />}
    </button>
  );
};
