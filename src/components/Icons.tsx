import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const SVG = styled(animated.svg)`
  margin-top: 5px;
  padding: 0.25em;
`;

export const Glweems = ({ height }) => {
  const { x } = useSpring({ x: 0, from: { x: 100 } });
  return (
    <SVG viewBox="0 0 595.27 100" strokeDashoffset={x} height={height}>
      <title>glweems</title>
      <path d="M47.59 21.77L11.71 45.51l-.22 1.1L38.73 74l-8.1 7.88L0 50l1.75-10 40.92-27.42zM83.15 91.25l2.62-11.49c-18.81 3.5-29.1-6-29.1-24.29 0-23.85 15.54-45.29 34.9-45.29 13.24 0 18.27 8.86 17.18 27.46L94 37.86c.22-9.63-1-13.68-5.58-13.68-9.41 0-15.86 15.64-15.86 29.21 0 11 5 15.65 16.3 12.8l3.04-13.67 14.77-.44-9.3 39zM124.72 68.6l-5.47 3.17-3.5-5.91 7.44-4.7c-.11-1.53-.22-3.06-.22-4.7C123 26.26 141.35 2 158.75 2c7.44 0 12.14 4.59 12.14 13.24 0 14-11.6 30.09-31.84 45.4 2.08 9.08 9.41 9.74 23.86 4.71l2 7.33c-21.04 11.89-35.48 10.14-40.19-4.08zm13.68-17.4C151 39.5 157 28.77 157 21.88c0-3.61-1.75-5-3.83-5-6.46-.03-14.12 13.32-14.77 34.32zM201.31 57.11l-11.38 22.32h-14c.44-10.83 2.85-34.13 6-55.25H197c-3 13.57-4.71 23-7.55 38.07h.33l11.05-23.08h8.86l2 23.08h.55c2.95-15.75 4.59-24.83 6.89-38.07h15.64c-4.26 16.74-8.75 31.18-16.73 55.25H203.6zM236.42 59.41c0-17.83 15.54-37.09 34.9-37.09 10.4 0 16.85 5.58 16.85 14.55 0 12.8-12.8 20.57-37.09 22.32.66 9.52 7.44 10.61 33 5.91l1.42 7.77c-32.77 16.52-49.08 4.59-49.08-13.46zm15.43-8.32c13.79-1 22-4.37 22-10.72 0-3.39-2.62-5.8-6.78-5.8-7.56 0-13.25 7.77-15.22 16.52zM296.6 59.41c0-17.83 15.53-37.09 34.9-37.09 10.39 0 16.85 5.58 16.85 14.55 0 12.8-12.8 20.57-37.09 22.32.65 9.52 7.44 10.61 33 5.91l1.42 7.77c-32.78 16.52-49.08 4.59-49.08-13.46zm15.4-8.32c13.79-1 22-4.37 22-10.72 0-3.39-2.62-5.8-6.78-5.8-7.54 0-13.22 7.77-15.22 16.52zM390.79 75c0-6.24 6.46-30.2 6.46-35 0-1.64-.44-2.4-2-2.4a7.8 7.8 0 00-4.49 1.75L383 79.43h-10.15l6.89-35.67c.88-4.15 1-6.23-1.42-6.23a8.11 8.11 0 00-4.92 2.08c-3.06 16.52-7.66 39.82-7.66 39.82h-14.11c5-26.15 7.44-38.73 10.17-54.92l13.46-.77-.55 5.47c4.05-4.37 8.1-6.56 11.49-6.56 3.94 0 5.91 2.4 5.8 7.88 5-5.26 10.06-7.88 14.33-7.88s6.46 2.4 6.46 7.55c0 9.3-7.77 33.26-7.77 38.29 0 1 .87 1.42 3 1.2l1.1 7.55c-13.18 4.82-18.33 4.27-18.33-2.24zM424.38 80.53l.33-13.68c19.26 1 25.6-.11 25.6-4s-5.69-8.86-10.72-14.44a169.92 169.92 0 01-17.4 9.59L419 51.2A162 162 0 00434.34 41a15.41 15.41 0 01-1.86-6.89c0-8.54 8.53-13.46 16.63-13.46 9.41 0 13.45 7.33 2.51 18.27 4.71 6.45 13.79 14.11 13.79 23.08 0 9.88-9.3 18.85-41.03 18.53zM549.32 3.94L483.9 100l-10.51-3.06L539.59 0zM547.68 72.54l35.89-23.63.22-1.21-27.36-27.24 8.1-7.88 30.74 31.84-1.86 10-40.81 27.42z" />
    </SVG>
  );
};

export const Glw = ({ height }) => {
  return (
    <SVG viewBox="0 0 356.77 100" height={height}>
      <title>glw</title>
      <path d="M47.59 21.77L11.71 45.51l-.22 1.1L38.73 74l-8.1 7.88L0 50l1.75-10 40.92-27.42zM83.15 91.25l2.62-11.49c-18.81 3.5-29.1-6-29.1-24.29 0-23.85 15.54-45.29 34.9-45.29 13.24 0 18.27 8.86 17.18 27.46L94 37.86c.22-9.63-1-13.68-5.58-13.68-9.41 0-15.86 15.64-15.86 29.21 0 11 5 15.65 16.3 12.8l3.04-13.67 14.77-.44-9.3 39zM124.72 68.6l-5.47 3.17-3.5-5.91 7.44-4.7c-.11-1.53-.22-3.06-.22-4.7C123 26.26 141.35 2 158.75 2c7.44 0 12.14 4.59 12.14 13.24 0 14-11.6 30.09-31.84 45.4 2.08 9.08 9.41 9.74 23.86 4.71l2 7.33c-21.04 11.89-35.48 10.14-40.19-4.08zm13.68-17.4C151 39.5 157 28.77 157 21.88c0-3.61-1.75-5-3.83-5-6.46-.03-14.12 13.32-14.77 34.32zM201.31 57.11l-11.38 22.32h-14c.44-10.83 2.85-34.13 6-55.25H197c-3 13.57-4.71 23-7.55 38.07h.33l11.05-23.08h8.86l2 23.08h.55c2.95-15.75 4.59-24.83 6.89-38.07h15.64c-4.26 16.74-8.75 31.18-16.73 55.25H203.6zM310.82 3.94L245.39 100l-10.5-3.06L301.08 0zM309.18 72.54l35.88-23.63.22-1.21-27.35-27.24 8.1-7.88 30.74 31.84-1.86 10-40.81 27.42z" />
    </SVG>
  );
};

export default { Glweems };