import * as React from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../styles/components/card.module.scss';

interface Card {
  title: string;
  img?: {
    fixed?: object;
    fluid?: object;
  };
  link?: string;
  children?: any;
}
const Card = ({ title, img, link, children }: Card) => {
  const go = () => (link ? navigate(link) : null);

  return (
    <div className={styles.card}>
      <h6 className={styles.title}>{title}</h6>
      <div role="presentation" onClick={go} className={styles.body}>
        {!img || <Img className={styles.img} {...img} />}
      </div>
      <>{children}</>
    </div>
  );
};

export default Card;
