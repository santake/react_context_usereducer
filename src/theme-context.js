import React, {createContext} from 'react';


export const themes = {
  light: {
    foreground: "#000000",
    background: "#ffff00"
  },
  dark: {
    foreground: "#ffffff",
    background: "#443399"
  },
};


const ThemeContext = createContext(themes.light);


export default ThemeContext;