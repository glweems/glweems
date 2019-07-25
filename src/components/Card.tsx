import React from 'react';
import styles from '../styles/components/card.module.scss';

interface Card {
  title: string;
  img: string;
  link: string;
}
const Card = ({ title, img, link }: Card) => (
  <div className={styles.card}>
    <h6 className={styles.title}>{title}</h6>
    <div className={styles.img} style={{ backgroundImage: `url(${img})` }} />
  </div>
);

export default Card;
