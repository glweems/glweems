/* eslint-disable import/no-named-default */
import React from 'react';
import styled, { ThemeContext as StyledThemeContext } from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import { ThemeContext } from '../Providers';
import { yellow, bg, text, darkYellow } from '../../theme';

const Toggle = styled(Button)`
  color: ${text};
  background: ${bg};
  border-color: ${yellow};
  :hover {
    border-color: ${darkYellow};
  }
`;

export const ToogleThemeSwitch = () => {
  const { mode } = React.useContext(StyledThemeContext);
  const { toggleTheme } = React.useContext(ThemeContext);

  const toggleIcon = mode === 'dark' ? faMoon : faSun;

  return (
    <Toggle type="button" className="button" onClick={toggleTheme}>
      <FaIcon icon={toggleIcon} />
    </Toggle>
  );
};
