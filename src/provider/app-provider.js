import React, { useState } from "react";
import { AuthenticationProvider } from "./authentication-provider";
import { AuthorsProvider } from "./authors-provider";
import { CoursesProvider } from "./courses-provider";
import { FavouritesProvider } from "./favourites-provider";
import { PathsProvider } from "./paths-provider";
import { SkillsProvider } from "./skills-provider";
import { ThemeProvider } from "./theme-provider";

const AppContext = React.createContext();

const AppProvider = (props) => {
  return (
    <AppContext.Provider>
      <AuthenticationProvider>
        <CoursesProvider>
          <FavouritesProvider>
            <SkillsProvider>
              <AuthorsProvider>
                <PathsProvider>{props.children}</PathsProvider>
              </AuthorsProvider>
            </SkillsProvider>
          </FavouritesProvider>
        </CoursesProvider>
      </AuthenticationProvider>
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
