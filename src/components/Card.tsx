import * as React from 'react';
import { navigate } from 'gatsby';
import styles from '../styles/components/card.module.scss';

interface Card {
  title: string;
  img: string;
  link?: string;
  children?: React.ReactChildren | React.ReactNode;
}
const Card = ({ title, img, link, children }: Card) => {
  const go = () => (link ? navigate(link) : null);

  return (
    <div role="presentation" onClick={go} className={styles.card}>
      <h6 className={styles.title}>{title}</h6>
      {!img || (
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${img})` }}
        />
      )}
      {children}
    </div>
  );
};

export default Card;
