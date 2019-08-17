import React from 'react';
import { Container } from 'reactstrap';
import Tutorials from '../components/Tutorials';
import CardTrail from '../components/CardTrail';

export const TutorialsPage = () => (
  <div className="container">
    <h1>Code Tutorials</h1>
    <CardTrail cards={Tutorials({})} />
  </div>
);

export default TutorialsPage;
