import React from 'react';
import GithubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

export default function Heatmap() {
  return (
    <GithubCalendar username="glweems" years={[2019]}>
      <ReactTooltip delayShow={35} html />
    </GithubCalendar>
  );
}
