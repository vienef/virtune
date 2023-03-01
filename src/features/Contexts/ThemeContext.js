import { createContext, useContext, useState } from 'react';
import { updateVariable } from '../../utilities/theme';

const ThemeContext = createContext('dark');
const ThemeSetContext = createContext(null);

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function useThemeSetContext() {
  return useContext(ThemeSetContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  function switchTheme() { setTheme(t => t === 'dark' ? 'light' : 'dark'); }

  updateVariable(theme);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSetContext.Provider value={switchTheme}>
        {children}
      </ThemeSetContext.Provider>
    </ThemeContext.Provider>
  );
}
