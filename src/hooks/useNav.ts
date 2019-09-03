import React, { useState } from 'react';

export interface UseNav {
  isNavOpen: boolean;
  setNav: (to: boolean) => void;
  toggleNav: () => void;
}
const useNav = (): UseNav => {
  const [isNavOpen, setNav] = useState(false);
  const toggleNav = () => setNav(state => !state);

  return { isNavOpen, setNav, toggleNav };
};

export default useNav;
