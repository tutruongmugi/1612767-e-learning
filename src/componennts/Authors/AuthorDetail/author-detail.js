import React, { useContext } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { CoursesContext } from "../../../provider/courses-provider";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";

function AuthorDetail({ route }) {
  const { courses } = useContext(CoursesContext);
  const author = route.params.item;
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
        <Image source={{ uri: author.image }} style={styles.image} />
        <Text style={styles.title}>{author.name}</Text>
      </View>
      <Text style={styles.text}>{author.about}</Text>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.text}>Courses</Text>
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
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 1,
    marginBottom: 5,
  },
  container: {
    padding: 8,
    backgroundColor: "#FFF",
  },
  headerProfile: {
    alignItems: "center",
    marginTop: 40,
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
});

export default AuthorDetail;
