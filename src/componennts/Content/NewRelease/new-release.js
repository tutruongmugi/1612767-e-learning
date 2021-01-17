import React, { useContext, useEffect } from "react";
import {
  View,
  ImageBackground,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { CoursesContext } from "../../../provider/courses-provider";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { ThemeContext } from "../../../provider/theme-provider";

function NewRelease({ route }) {
  const { getTopNewCourses, courseState } = useContext(CoursesContext);
  const { theme } = useContext(ThemeContext);
  // useEffect(() => {
  //   getTopNewCourses();
  // }, []);

  const OnPressedBackButton = () => {
    RootNavigation.goBack();
  };
  return (
    <View
      style={{ flex: 1, backgroundColor: theme.background, height: "100%" }}
    >
      <Image
        source={{
          uri:
            "https://pluralsight.imgix.net/course-images/javascript-getting-started-v1.png?w=1078",
        }}
      />
      <ImageBackground
        style={{ height: 150 }}
        source={{
          uri: "https://wallpaperaccess.com/full/16221.jpg",
        }}
      >
        <Text
          style={{
            fontSize: 36,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          {route.params.title}
        </Text>
        <TouchableOpacity
          onPress={OnPressedBackButton}
          style={{
            padding: 8,
            position: "absolute",
            fontSize: 32,
            marginTop: 8,
          }}
        >
          <Image source={require("../../../../assets/icons8-back-26.png")} />
        </TouchableOpacity>
      </ImageBackground>

      <FlatList
        // data={courses.filter((course) =>
        //   newReleaseCoursesId.includes(course.id)
        // )}
        data={courseState.topNewCourses}
        renderItem={({ item }) => <ListCoursesItem item={item} />}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
}
export default NewRelease;
