/* eslint-disable import/no-named-default */
import React from 'react';
import { ThemeContext as StyledThemeContext } from 'styled-components';
import { Button } from '.';
import { ThemeContext } from '../Providers';

export const ToogleThemeSwitch = () => {
  const theme = React.useContext(StyledThemeContext);
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <Button type="button" className="button" onClick={toggleTheme}>
      {theme.mode}
    </Button>
  );
};
