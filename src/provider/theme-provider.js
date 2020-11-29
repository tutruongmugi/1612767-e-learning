import React, { useState } from "react";

const ThemeContextCustom = React.createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (theme === themes.light) setTheme(themes.dark);
    else setTheme(themes.light);
  };
  return (
    <ThemeContextCustom.Provider value={{ theme, setTheme }}>
      {props.Children}
    </ThemeContextCustom.Provider>
  );
};
export const themes = {
  light: {
    foreground: "#000",
    background: "#eee",
  },
  dark: {
    foreground: "#fff",
    background: "#222",
  },
};

export { ThemeContextCustom as ThemeContext, ThemeProvider };

//error
