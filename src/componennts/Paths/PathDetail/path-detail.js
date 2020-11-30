import React, { useContext } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { CoursesContext } from "../../../provider/courses-provider";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";

function PathDetail({ route }) {
  const { courses } = useContext(CoursesContext);
  const path = route.params.item;
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
    <View style={styles.container}>
      <View style={styles.headerProfile}>
        <Image source={{ uri: path.image }} style={styles.image} />
        <View style={styles.headerText}>
          <Text style={styles.title}>{path.title}</Text>
          <Text style={styles.text}>{path.duration}</Text>
        </View>
      </View>
      <Text style={styles.text}>{path.description}</Text>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.text}>Advanced</Text>
        <FlatList
          data={courses}
          renderItem={({ item }) => <ListCoursesItem item={item} />}
          ItemSeparatorComponent={FlatListItemSeparator}
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
