import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeContextProps } from '../types/context/theme';

const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({
  children
}:{
  children: React.ReactNode
}) {
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(false);

  const htmlTag = document.querySelector('html')!;

  let dayThemeButton = document.querySelector('div.light');
  let nightThemeButton = document.querySelector('div.dark');
  
  useEffect(() => {
    if (isDarkThemeActive) {
      htmlTag.className = 'dark';

      dayThemeButton?.classList.add('hide');
      nightThemeButton?.classList.remove('hide');
    } else {
      htmlTag.className = 'light';

      dayThemeButton?.classList.remove('hide');
      nightThemeButton?.classList.add('hide');
    }
  }, [isDarkThemeActive]);

  function toggleTheme(){ 
    let changeTheme = !isDarkThemeActive;
    setIsDarkThemeActive(changeTheme);
    console.log(isDarkThemeActive)
  }

  return (
    <ThemeContext.Provider value={{
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext);

  const hasContext = ctx ?? undefined;

  if (!hasContext) {
    throw new Error("Context not found");
  }

  return ctx;
}