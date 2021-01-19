import React, { useState } from "react";
import { CoursesContext } from "./courses-provider";

const FavouritesContext = React.createContext();

const FavouritesProvider = (props) => {
  const [favouriteCourses, setFavouriteCourses] = useState([1, 2, 3]);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(
    "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  ); //video url

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
  const changeVideoUrl = (newVideoUrl) => {
    setCurrentVideoUrl(newVideoUrl);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favouriteCourses,
        setFavouriteCourses,
        addFavouriteCourse,
        removeFavouriteCourse,
        currentVideoUrl,
        changeVideoUrl,
      }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
};

export { FavouritesContext, FavouritesProvider };
