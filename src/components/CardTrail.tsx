import React, { useState, useEffect } from 'react';
import { animated, useTrail } from 'react-spring';
import { Cards } from './Card';

interface Props {
  cards: JSX.Element[];
  delay?: number;
}

const CardTrail = ({ delay = 0, cards }: Props) => {
  const [toggle, set] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      set(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const trail = useTrail(cards.length, {
    config: { mass: 5, tension: 3000, friction: 200 },
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 100,
    from: { opacity: 0, x: 100 },
  });

  return (
    <div className="Cards">
      {trail.map(({ x, ...rest }, i) => (
        <animated.div
          key={`card-trail-${cards[i].props.title}`}
          style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
        >
          {cards[i]}
        </animated.div>
      ))}
    </div>
  );
};

export default CardTrail;
