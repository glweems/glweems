import React from 'react';
import mql from '@microlink/mql';

const getImg = async () => {
  const { status, data, response } = await mql('https://news.ycombinator.com', {
    screenshot: true,
    embed: 'screenshot.url',
  });

  console.log(status, data);
};
const Repos = () => {
  return <div>helloooo</div>;
};

export default Repos;
