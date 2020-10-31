import React from "react";
import { View, Text, ScrollView } from "react-native";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";

function Sectioncourses({ title }) {
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

  const renderListItems = (courses) => {
    return courses.map((item) => <SectionCoursesItem item={item} />);
  };

  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <ScrollView horizontal={true}>{renderListItems(courses)}</ScrollView>
    </View>
  );
}
export default Sectioncourses;
