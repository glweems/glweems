import React, { createContext } from 'react';
import useTheme from '../hooks/useTheme';
import useNav from '../hooks/useNav';
import { Child } from '..';
import { makeTheme } from '../utils/theme';

const ProviderComposer = ({
  contexts,
  children,
}: {
  contexts: any[];
  children: Child;
}): JSX.Element =>
  contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children,
  );

export const ThemeContext = createContext({
  theme: makeTheme('light'),
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const NavContext = createContext({});

export const NavProvider = ({ children }: any) => {
  const { isNavOpen, setNav, toggleNav } = useNav();
  return (
    <NavContext.Provider value={{ isNavOpen, setNav, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default ({ children }: any) => (
  <div>
    <ProviderComposer contexts={[<ThemeProvider />, <NavProvider />]}>
      {children}
    </ProviderComposer>
  </div>
);
