import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { theme, GlobalStyle } from '../src/utils/theme';
import { ThemeProvider } from 'styled-components';
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {story()}
    </>
  </ThemeProvider>
));
