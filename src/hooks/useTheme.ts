import { useEffect, useState } from 'react';

export default () => {
  const [mode, setMode]: ['light' | 'dark', Function] = useState('dark');

  const toggleTheme = () => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'light');
      setMode('light');
    } else {
      window.localStorage.setItem('theme', 'dark');
      setMode('dark');
    }
  };

  useEffect(() => {
    const localTheme: any = window.localStorage.getItem('theme');

    if (localTheme) {
      setMode(localTheme);
    } else {
      window.localStorage.setItem('theme', 'light');
      setMode('light');
    }
  }, []);

  return { theme: { mode }, toggleTheme };
};
