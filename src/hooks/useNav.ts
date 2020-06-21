import * as React from 'react';

const useNav = () => {
  const [isNavOpen, setNav] = React.useState(false);
  const toggleNav = () => setNav((state) => !state);

  return { isNavOpen, setNav, toggleNav };
};

export default useNav;
