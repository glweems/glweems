import { useEffect, useState } from 'react';
import { makeTheme } from '../utils/theme';

export default () => {
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
    let localTheme: 'light' | 'dark' | null | string;

    localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(makeTheme(localTheme));
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme(makeTheme('light'));
    }
  }, []);

  return [theme, toggleTheme];
};
