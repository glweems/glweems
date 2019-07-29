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
      <div>
        <h6>Designer / Developer Based in Melbourne, FL.</h6>
        <a href="mailto:gwgraphicdesign@gmail.com" target="__blank__">
          gwgraphicdesign@gmail.com
        </a>
      </div>
      <SocialMediaIcons noText horizontal size="lg" />
    </div>
  );
};

export default About;
