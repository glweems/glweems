import { useEffect, useState } from 'react';

export default () => {
  const [mode, setMode] = useState('dark');

  const toggleTheme = () => {
    if (mode === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setMode('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setMode('light');
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
