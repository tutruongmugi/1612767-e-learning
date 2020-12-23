import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native-elements";

function ListLessonItem({ lesson }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            width: 15,
            height: 15,
            borderRadius: 15 / 2,
            backgroundColor: "#111",
            marginRight: 5,
            marginTop: 3,
            marginLeft: 10,
          }}
          source={require("../../../../assets/icons8-filled-circle-24.png")}
        />
        <Text style={styles.text}>{lesson.name}</Text>
      </View>
      <Text style={styles.duration}>{`${lesson.hours} Hours`}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    marginTop: 5,
  },
  text: {},
  checkBox: {
    alignSelf: "center",
  },
  duration: {
    marginRight: 5,
  },
});

export default ListLessonItem;
