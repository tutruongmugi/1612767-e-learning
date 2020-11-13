import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
} from "react-native";

function ListLessonItem({ lesson }) {
  const handleCheckBoxClick = () => {};

  return (
    <TouchableOpacity style={styles.container}>
      <CheckBox
        value={lesson.isWatching}
        onValueChange={handleCheckBoxClick}
        style={styles.checkBox}
      />
      <Text style={styles.text}>{lesson.title}</Text>
      <Text style={styles.duration}>{lesson.duration}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 5,
  },
  text: {
    margin: 5,
  },
  checkBox: {
    alignSelf: "center",
  },
  duration: {
    justifyContent: "flex-end",
  },
});

export default ListLessonItem;
