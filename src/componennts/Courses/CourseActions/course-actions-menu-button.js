import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { CoursesContext } from "../../../provider/courses-provider";
import { FavouritesContext } from "../../../provider/favourites-provider";
import { ThemeContext } from "../../../provider/theme-provider";

function CourseActionsMenuButton({ CourseId }) {
  const [favourite, setFavourite] = useState(false);
  // const {
  //   favouriteCourses,
  //   addFavouriteCourse,
  //   removeFavouriteCourse,
  // } = useContext(FavouritesContext);
  const { likeCourse, startLikeCourse, courseState } = useContext(
    CoursesContext
  );
  const { state } = useContext(AuthenticationContext);
  const { language } = useContext(ThemeContext);

  useEffect(() => {
    getFavouriteById(CourseId);

    return () => {};
  }, []);
  const getFavouriteById = (CourseId) => {
    setFavourite(
      courseState.favouriteCourses.some(
        (favouriteCourse) => favouriteCourse.id === CourseId
      )
    );
  };

  const onPressFavourite = () => {
    likeCourse(state.token, CourseId);
    setFavourite(!favourite);
    startLikeCourse();
  };

  const onPressDownload = () => {};
  return (
    <Menu>
      <MenuTrigger>
        <Ionicons style={{ fontSize: 24 }} name="md-more" />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption
          style={styles.container}
          onSelect={() => onPressFavourite()}
        >
          <Ionicons name="md-heart" />
          <Text style={styles.text}>
            {favourite ? language.REMOVE_FAVOURITE : language.FAVOURITE}
          </Text>
        </MenuOption>
        <MenuOption style={styles.container}>
          <Ionicons name="ios-radio" />
          <Text style={styles.text}>{language.ADD_TO_CHANNEL}</Text>
        </MenuOption>
        <MenuOption style={styles.container} onSelect={() => onPressDownload()}>
          <Ionicons name="md-cloud-download" />
          <Text style={styles.text}>{language.DOWNLOADS}</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

export default CourseActionsMenuButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    padding: 4,
    paddingRight: 8,
    paddingVertical: 8,
    color: "#000",
  },
});
