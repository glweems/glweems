import React, { createContext } from 'react';
import { DefaultTheme } from 'styled-components';
import useTheme from '../hooks/useTheme';
import useNav from '../hooks/useNav';
import { Child } from '..';
import { makeTheme } from '../utils/theme';
import useHeader from '../hooks/useHeader';

interface PCP {
  contexts: any[];
  children: Child;
}
const ProviderComposer = ({ contexts, children }: PCP): JSX.Element =>
  contexts.reduceRight((kids, parent) => {
    return React.cloneElement(parent, {
      children: kids,
    });
  }, children);

type ThemeContext = {
  theme: DefaultTheme;
  toggleTheme: () => void | any;
};

export const ThemeContext = createContext<ThemeContext>({
  theme: makeTheme('light'),
  toggleTheme: () => null,
});

export const ThemeProvider = ({ children }: any) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

type NavContext = {
  isNavOpen: boolean | null;
  setNav: React.Dispatch<React.SetStateAction<boolean>> | null;
  toggleNav: () => void | null;
};

export const NavContext = createContext<NavContext>({
  isNavOpen: null,
  setNav: () => null,
  toggleNav: () => null,
});

export const NavProvider = ({ children }: any) => {
  const { isNavOpen, setNav, toggleNav } = useNav();
  return (
    <NavContext.Provider value={{ isNavOpen, setNav, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
};

type HeaderContext = {
  Header: null | Child;
  setHeader: () => React.Dispatch<React.SetStateAction<null>>;
  noHeader: () => React.Dispatch<React.SetStateAction<null>>;
};

export const HeaderContext = createContext<HeaderContext>({
  Header: null,
  setHeader: () => null,
  noHeader: () => null,
});

export const HeaderProvider = ({ children }: any) => {
  const { Header, setHeader, noHeader } = useHeader();
  return (
    <HeaderContext.Provider value={{ Header, setHeader, noHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default ({ children }: any) => (
  <ProviderComposer
    contexts={[
      <ThemeProvider key="theme-provider" />,
      <NavProvider key="nav-provider" />,
      <HeaderProvider key="header-provider" />,
    ]}
  >
    {children}
  </ProviderComposer>
);
