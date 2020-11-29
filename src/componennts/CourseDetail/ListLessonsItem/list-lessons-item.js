import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native-elements";

function ListLessonItem({ lesson }) {
  const handleCheckBoxClick = () => {};

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri:
            "https://pluralsight.imgix.net/course-images/javascript-getting-started-v1.png?w=1078",
        }}
      />
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={styles.text}>{lesson.title}</Text>
          <Text style={styles.duration}>{lesson.duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 5,
  },
  text: {},
  checkBox: {
    alignSelf: "center",
  },
  duration: {
    justifyContent: "flex-end",
  },
});

export default ListLessonItem;
