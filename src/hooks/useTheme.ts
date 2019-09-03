import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { makeTheme } from '../utils/theme';

export interface UseTheme {
  theme: DefaultTheme;
  toggleTheme: (theme: DefaultTheme) => void;
}

// type themeCookie = 'light' | 'dark' | undefined | string;
export default (): UseTheme => {
  const [theme, setTheme] = useState(makeTheme('light'));

  const toggleTheme = () => {
    if (theme.mode === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme(makeTheme('dark'));
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme(makeTheme('light'));
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(makeTheme(localTheme));
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme(makeTheme('light'));
    }
  }, []);

  return { theme, toggleTheme };
};
