import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeContextProps } from '../types/context/theme';

const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({
  children
}:{
  children: React.ReactNode
}) {
  const [darkThemeIsActive, setDarkThemeIsActive] = useState(false);
  const htmlTag = document.querySelector('html')!;
  const dayThemeButton = document.querySelector('div.light');
  const nightThemeButton = document.querySelector('div.dark');
  
  useEffect(() => {
    if (darkThemeIsActive) {
      htmlTag.className = 'dark';
      dayThemeButton?.classList.add('hide');
      nightThemeButton?.classList.remove('hide');
    } else {
      htmlTag.className = 'light';
      dayThemeButton?.classList.remove('hide');
      nightThemeButton?.classList.add('hide');
    }
  }, [darkThemeIsActive]);

  function toggleTheme(){ 
    const changeTheme = !darkThemeIsActive;
    setDarkThemeIsActive(changeTheme);
    console.log(darkThemeIsActive)
  }

  return (
    <ThemeContext.Provider value={{
      toggleTheme
    }}>
      {children}
    </ ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  const hasContext = ctx ?? undefined;

  if (!hasContext) {
    throw new Error('Context not found');
  }
  return ctx;
}
