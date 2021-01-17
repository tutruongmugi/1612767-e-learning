import React, { useContext } from "react";
import { View, FlatList, Text } from "react-native";
import { ThemeContext } from "../../../../provider/theme-provider";
import ListCourses from "../../../Courses/ListCourses/list-courses";
import ListCoursesItem from "../../../Courses/ListCoursesItem/list-courses-item";

function SearchCourses({ courses }) {
  const { theme, language } = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: theme.background, height: "100%" }}>
      <View style={{ margin: 5, marginTop: 15, marginBottom: 10 }}>
        <Text
          style={{ color: theme.text }}
        >{`${courses.length} ${language.RESULTS}`}</Text>
      </View>
      {/* <ListCourses courses={courses} /> */}
      <FlatList
        data={courses}
        renderItem={({ item }) => <ListCoursesItem item={item} />}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
}

export default SearchCourses;
