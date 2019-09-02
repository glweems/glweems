import React, { createContext } from 'react';
import useTheme, { UseTheme } from '../hooks/useTheme';
import { Child } from '..';

function ProviderComposer({
  contexts,
  children,
}: {
  contexts: [React.ChildContextProvider<any>];
  children: Child;
}) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children,
  );
}

export const ThemeContext = createContext<UseTheme>({
  theme: {},
  toggleTheme: null,
});

export function ThemeProvider({ children }: { children: any }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
