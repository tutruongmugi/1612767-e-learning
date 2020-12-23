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

  useEffect(() => {
    getFavouriteById(CourseId);

    return () => {};
  }, []);
  useEffect(() => {
    if (courseState.changeFavouriteSucess) {
      setFavourite(!favourite);
    }
  }, [courseState.changeFavouriteSucess]);
  const getFavouriteById = (CourseId) => {
    setFavourite(
      courseState.favouriteCourses.some(
        (favouriteCourse) => favouriteCourse.id === CourseId
      )
    );
  };

  const onPressFavourite = () => {
    likeCourse(state.token, CourseId);
    startLikeCourse();
  };
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
            {favourite ? "Remove Favourite" : "Favourite"}
          </Text>
        </MenuOption>
        <MenuOption style={styles.container}>
          <Ionicons name="ios-radio" />
          <Text style={styles.text}>Add To Channel</Text>
        </MenuOption>
        <MenuOption style={styles.container}>
          <Ionicons name="md-cloud-download" />
          <Text style={styles.text}>Download</Text>
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
