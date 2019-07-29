import * as React from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../styles/components/card.module.scss';

interface Card {
  title: string;
  img?: object;
  link?: string;
  children?: ChildNode | ChildNode | Element;
}
const Card = ({ title, img, link, children }: Card) => {
  const go = () => (link ? navigate(link) : null);

  return (
    <div role="presentation" onClick={go} className={styles.card}>
      <h6 className={styles.title}>{title}</h6>
      {!img || <Img fluid={img} />}
      {children}
    </div>
  );
};

export default Card;
