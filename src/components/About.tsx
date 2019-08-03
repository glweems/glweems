/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Avitar from './Avitar';
import styles from '../styles/components/about.module.scss';
import SocialMediaIcons from './SocialMedia';

const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <h1>Hi, I'm Garrett</h1>
      </div>
      <div className={styles.avitar}>
        <Avitar />
      </div>
      <h6>Designer / Developer Based in Melbourne, FL.</h6>
      {/* <SocialMediaIcons noText horizontal marginRight="2em" size="lg" /> */}
    </div>
  );
};

export default About;
