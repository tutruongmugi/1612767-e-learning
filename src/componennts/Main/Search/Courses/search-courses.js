import React from "react";
import { View, FlatList, Text } from "react-native";
import ListCourses from "../../../Courses/ListCourses/list-courses";
import ListCoursesItem from "../../../Courses/ListCoursesItem/list-courses-item";

function SearchCourses() {
  const courses = [
    {
      id: 1,
      title: "react-native",
      author: "kuro",
      level: "Advanced",
      released: "May 2, 2020",
      duration: "30 hours",
    },
    {
      id: 2,
      title: "IOS",
      author: "yuuki",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "35 hours",
    },
    {
      id: 3,
      title: "Android",
      author: "Master",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "25 hours",
    },
    {
      id: 4,
      title: "react-native",
      author: "kuro",
      level: "Advanced",
      released: "May 2, 2020",
      duration: "30 hours",
    },
    {
      id: 5,
      title: "IOS",
      author: "yuuki",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "35 hours",
    },
    {
      id: 6,
      title: "Android",
      author: "Master",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "25 hours",
    },
  ];
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
        <Text>Skill Levels</Text>
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
