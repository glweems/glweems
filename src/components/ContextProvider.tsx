import useDarkMode from 'use-dark-mode';
import React, { createContext } from 'react';
import { DefaultTheme } from 'styled-components';
import useTheme from '../hooks/useTheme';
import useNav from '../hooks/useNav';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import { GlobalStyle } from '../theme';

interface PCP {
  contexts: any[];
  children: React.ReactNode;
}
const ProviderComposer = ({ contexts, children }: PCP): JSX.Element =>
  contexts.reduceRight((kids, parent) => {
    return React.cloneElement(parent, {
      children: kids
    });
  }, children);

type NavContext = {
  isNavOpen: boolean | null;
  setNav: React.Dispatch<React.SetStateAction<boolean>> | null;
  toggleNav: () => void | null;
};

export const NavContext = createContext<NavContext>({
  isNavOpen: null,
  setNav: () => null,
  toggleNav: () => null
});

export const NavProvider = ({ children }: any) => {
  const { isNavOpen, setNav, toggleNav } = useNav();
  return <NavContext.Provider value={{ isNavOpen, setNav, toggleNav }}>{children}</NavContext.Provider>;
};

interface Props {
  element: React.ReactNode | React.ReactFragment;
  props?: any;
}

export const wrapRootElement: React.FC<Props> = ({ element }) => {
  return (
    <ProviderComposer contexts={[<StylesProvider key="theme" />, <NavProvider key="nav" />]}>
      <>{element}</>
    </ProviderComposer>
  );
};

const StylesProvider: React.FC = ({ children }) => {
  const { value, toggle, enable, disable } = useDarkMode();
  const mode = value ? 'dark' : 'light';

  return (
    <StyledThemeProvider theme={{ isDarkMode: value, isLightMode: !value, mode, toggle, enable, disable }}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyledThemeProvider>
  );
};

export const wrapPageElement: React.FC<Props> = ({ element, props }) => {
  return (
    <StylesProvider>
      <Layout {...props}>{element}</Layout>
    </StylesProvider>
  );
};
