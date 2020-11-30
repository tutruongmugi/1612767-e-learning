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
    text: "#050505",
    backgroundSection: "#FFF",
    darkText: "#65676B",
    background: "#F0F2F5",
  },
  dark: {
    text: "#fff",
    backgroundSection: "#DDD",
    darkText: "#AAA",
    background: "#181818",
  },
};

export { ThemeContextCustom, ThemeProvider };

//error
