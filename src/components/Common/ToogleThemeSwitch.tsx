/* eslint-disable import/no-named-default */
import React from 'react';
import { ThemeContext as StyledThemeContext } from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Button } from '.';
import { ThemeContext } from '../Providers';

export const ToogleThemeSwitch = () => {
  const { mode } = React.useContext(StyledThemeContext);
  const { toggleTheme } = React.useContext(ThemeContext);

  const toggleIcon = mode === 'dark' ? faMoon : faSun;

  return (
    <Button type="button" className="button" onClick={toggleTheme}>
      <FaIcon icon={toggleIcon} />
    </Button>
  );
};
