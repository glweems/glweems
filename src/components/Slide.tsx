import React, { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

interface Props {
  delay?: number;
  children: Element | Element[] | React.ReactElement | React.ReactFragment | string;
  className?: string;
}

const Slide = ({ children, className, delay = 2000 }: Props) => {
  const [show, set] = useState(false);

  const animations = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? `translateX(0)` : `translateX(-100%)`,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      set(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <animated.div className={className} style={animations}>
      {children}
    </animated.div>
  );
};

export default Slide;
