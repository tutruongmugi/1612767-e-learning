import React, { useState } from "react";
import { CoursesContext } from "./courses-provider";

const FavouritesContext = React.createContext();

const FavouritesProvider = (props) => {
  const [favouriteCourses, setFavouriteCourses] = useState([1, 2, 3]);

  const addFavouriteCourse = (courseId) => {
    console.log("addFavouriteCourse", courseId);
    setFavouriteCourses(favouriteCourses.concat(courseId));
  };

  const removeFavouriteCourse = (courseId) => {
    console.log("removeFavouriteCourse", courseId);
    setFavouriteCourses(
      favouriteCourses.filter((favouritecourse) => favouritecourse !== courseId)
    );
  };

  return (
    <FavouritesContext.Provider
      value={{
        favouriteCourses,
        setFavouriteCourses,
        addFavouriteCourse,
        removeFavouriteCourse,
      }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
};

export { FavouritesContext, FavouritesProvider };
