import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CoursesContext } from "../../../provider/courses-provider";
import { FavouritesContext } from "../../../provider/favourites-provider";

function CourseActionsMenuButton({ CourseId }) {
  const [favourite, setFavourite] = useState(false);
  const { addFavouriteCourse, removeFavouriteCourse } = useContext(
    FavouritesContext
  );
  const { courses } = useContext(CoursesContext);

  useEffect(() => {
    getFavouriteById(CourseId);

    return () => {};
  }, []);

  const getFavouriteById = (CourseId) => {
    setFavourite(courses.find((course) => course.id === CourseId).favourite);
  };

  const onPressFavourite = () => {
    if (favourite) {
      removeFavouriteCourse(CourseId);
      setFavourite(!favourite);
    } else {
      addFavouriteCourse(CourseId);
      setFavourite(!favourite);
    }
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
