import React from "react";
import { View, FlatList, Text } from "react-native";
import ListCourses from "../../../Courses/ListCourses/list-courses";
import ListCoursesItem from "../../../Courses/ListCoursesItem/list-courses-item";

function SearchCourses({ courses }) {
  const FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };
  return (
    <View>
      <View>
        <Text>{`${courses.length} results`}</Text>
      </View>
      {/* <ListCourses courses={courses} /> */}
      <FlatList
        data={courses}
        renderItem={({ item }) => <ListCoursesItem item={item} />}
        ItemSeparatorComponent={FlatListItemSeparator}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
}

export default SearchCourses;
