import { createContext } from "react";

export type ThemeContextType = {
    currentTheme: string,
    changeCurrentTheme: (newTheme: 'light' | 'dark') => void
}

const defaultValue = {
    currentTheme: 'light',
    changeCurrentTheme: (newTheme: 'light' | 'dark') => {},
  }

export const ThemeContext = createContext<ThemeContextType>(defaultValue);
