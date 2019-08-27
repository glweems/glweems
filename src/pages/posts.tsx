import React from 'react';
import Posts from '../components/Posts';
import CardTrail from '../components/CardTrail';

export const TutorialsPage = () => (
  <div className="container">
    <h1>Blog Posts</h1>
    <CardTrail cards={Posts({})} />
  </div>
);

export default TutorialsPage;
