import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";

function Sectioncourses({ title }) {
  const courses = [
    {
      id: 1,
      title: "react-native",
      author: "kuro",
      level: "Advanced",
      released: "May 2, 2020",
      duration: "30 hours",
      rate: 4.5,
      rateCount: 1399,
    },
    {
      id: 2,
      title: "IOS",
      author: "yuuki",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "35 hours",
      rate: 3,
      rateCount: 509,
    },
    {
      id: 3,
      title: "Android",
      author: "Master",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "25 hours",
      rate: 4,
      rateCount: 213,
    },
  ];

  const renderListItems = (courses) => {
    return courses.map((item) => <SectionCoursesItem item={item} />);
  };
  const OnPressed = () => {
    RootNavigation.navigate("ListCourses", { item: courses });
  };
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text>{title}</Text>
        <TouchableOpacity style={styles.expand} onPress={OnPressed}>
          <Text>See all</Text>
          <Image
            style={styles.image}
            source={require("../../../../../assets/icon-expand.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>{renderListItems(courses)}</ScrollView>
    </View>
  );
}
export default Sectioncourses;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    margin: 5,
    flexDirection: "row",
  },
  image: {
    width: 10,
    height: 10,
    margin: 5,
  },
  expand: {
    flexDirection: "row",
  },
});
