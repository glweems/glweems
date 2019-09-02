import React, { createContext } from 'react';
import useTheme from '../hooks/useTheme';

function ProviderComposer({ contexts, children }: any) {
  return contexts.reduceRight(
    (kids: any, parent: any) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children,
  );
}

export const ThemeContext = createContext([{}, () => {}]);

export function ThemeProvider({ children }: any) {
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ContextProvider({ children }: any) {
  return (
    <ProviderComposer contexts={[<ThemeProvider />]}>
      {children}
    </ProviderComposer>
  );
}
