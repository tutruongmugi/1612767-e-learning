import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SectionList,
  StyleSheet,
} from "react-native";
import ListLessonItem from "../ListLessonsItem/list-lessons-item";

function ListLessons() {
  const DATA = [
    {
      id: 1,
      title: "Courses Overview",
      duration: "1:16",
      data: [
        {
          id: 1,
          title: "Introduce",
          duration: "1:16",
        },
      ],
    },
    {
      id: 2,
      title: "Creating your first java app",
      duration: "39:11",
      data: [
        {
          id: 1,
          title: "Introduce",
          duration: "1:15",
        },
        {
          id: 2,
          title: "Creating your app with IntelliJ",
          duration: "6:11",
        },
        {
          id: 3,
          title: "IDE,JDK, and JRE",
          duration: "3:18",
        },
        {
          id: 4,
          title: "Running from the command line",
          duration: "2:15",
        },
        {
          id: 5,
          title: "Comments",
          duration: "3:24",
        },
      ],
    },
    {
      id: 3,
      title: "Variables, Data Types, and Math Operators",
      duration: "26:13",
      data: [
        {
          id: 1,
          title: "Introduce",
          duration: "1:15",
        },
        {
          id: 2,
          title: "Creating your app with IntelliJ",
          duration: "6:11",
        },
        {
          id: 3,
          title: "IDE,JDK, and JRE",
          duration: "3:18",
        },
        {
          id: 4,
          title: "Running from the command line",
          duration: "2:15",
        },
        {
          id: 5,
          title: "Comments",
          duration: "3:24",
        },
      ],
    },
  ];
  return (
    <View>
      <SectionList
        sections={DATA}
        renderItem={({ item }) => <ListLessonItem lesson={item} />}
        renderSectionHeader={({ section }) => (
          <View>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    justifyContent: "flex-start",
  },
});
export default ListLessons;
