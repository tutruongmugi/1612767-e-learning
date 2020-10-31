import React from "react";
import { View, FlatList, Text } from "react-native";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";

function Downloads() {
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
  ];
  return (
    <View>
      <View>
        <Text>Downloads</Text>
      </View>
      <FlatList
        data={courses}
        renderItem={({ item }) => <ListCoursesItem item={item} />}
      />
    </View>
  );
}

export default Downloads;
