import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { CoursesContext } from "../../../provider/courses-provider";
import ListFavouriteCoursesItem from "../../Courses/ListFavouriteCoursesItem/list-favourite-courses-item";

function Downloads() {
  const OnPressedButtonMore = () => {};

  const [isloading, setIsloading] = useState(true);
  const {
    courseState,
    getFavouriteCourses,
    startGetFavouriteCourses,
  } = useContext(CoursesContext);
  const { state } = useContext(AuthenticationContext);
  useEffect(() => {
    getFavouriteCourses(state.token);
  }, [courseState.changeFavouriteSucess]);
  useEffect(() => {
    if (courseState.getFavouriteCourseStatus == true) {
      setIsloading(false);
      startGetFavouriteCourses();
    }
  }, [courseState.getFavouriteCourseStatus]);
  return (
    <View style={{ flex: 1 }}>
      {isloading ? (
        <View
          style={{ justifyContent: "center", flex: 1, flexDirection: "row" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={{ backgroundColor: "#F0F2F5" }}>
          <FlatList
            // data={courses.filter((course) => favouriteCourses.includes(course.id))}
            data={courseState.favouriteCourses}
            renderItem={({ item }) => (
              <ListFavouriteCoursesItem key={item.id} item={item} />
            )}
            keyExtractor={(item, index) => {
              return item.id.toString();
            }}
          />
        </View>
      )}
    </View>
  );
}

export default Downloads;
