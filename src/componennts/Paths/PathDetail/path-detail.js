import React, { useContext } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { CoursesContext } from "../../../provider/courses-provider";
import { ThemeContext } from "../../../provider/theme-provider";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";

function PathDetail({ path }) {
  const { courses } = useContext(CoursesContext);
  const { theme } = useContext(ThemeContext);
  // const path = route.params.item;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.headerProfile}>
        <Image source={{ uri: path.image }} style={styles.image} />
        <View style={styles.headerText}>
          <Text style={[styles.title, { color: theme.text }]}>
            {path.title}
          </Text>
          <Text style={[styles.text, { color: theme.text }]}>
            {path.duration}
          </Text>
        </View>
      </View>
      <Text style={[styles.text, { color: theme.text }]}>
        {path.description}
      </Text>
      <View style={{ marginTop: 30, flex: 1 }}>
        <Text style={[styles.title, { color: theme.text }]}>Advanced</Text>
        <FlatList
          data={courses}
          renderItem={({ item }) => <ListCoursesItem item={item} />}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  container: {
    padding: 8,
    backgroundColor: "#FFF",
    flex: 1,
  },
  headerProfile: {
    flexDirection: "row",
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    color: "#000",
    marginBottom: 5,
  },
  headerText: {
    justifyContent: "center",
  },
});

export default PathDetail;
