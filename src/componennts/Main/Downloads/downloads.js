import React, { useContext, useEffect } from "react";
import { View, FlatList } from "react-native";
import { CoursesContext } from "../../../provider/courses-provider";
import { FavouritesContext } from "../../../provider/favourites-provider";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";

function Downloads() {
  const OnPressedButtonMore = () => {};

  const { favouriteCourses, addFavouriteCourse } = useContext(
    FavouritesContext
  );

  const { courses } = useContext(CoursesContext);
  useEffect(() => {
    courses.map((course) => {
      if (course.favourite === true) {
        addFavouriteCourse(course.id);
      }
    });
  }, []);

  return (
    <View style={{ backgroundColor: "#F0F2F5" }}>
      <FlatList
        data={courses.filter((course) => favouriteCourses.includes(course.id))}
        renderItem={({ item }) => <ListCoursesItem key={item.id} item={item} />}
        keyExtractor={(item, index) => {
          return item.id.toString();
        }}
      />
    </View>
  );
}

export default Downloads;
