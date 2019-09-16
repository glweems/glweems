/* eslint-disable import/no-named-default */
import React from 'react';
import { ThemeContext } from 'styled-components';
import { Button } from '.';

export const ToogleThemeSwitch = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <Button type="button" className="button" onClick={toggleTheme}>
      {theme.mode}
    </Button>
  );
};
