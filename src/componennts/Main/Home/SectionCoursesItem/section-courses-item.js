import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function SectionCoursesItem({ item }) {
  return (
    <View style={styles.item}>
      <Image
        source={require("../../../../../assets/1.png")}
        style={styles.image}
      />
      <View style={styles.text}>
        <Text>{item.title}</Text>
        <Text style={styles.darkText}>{item.author}</Text>
        <Text
          style={styles.darkText}
        >{`${item.level} . ${item.released} . ${item.duration}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 5,
    width: 200,
    height: 200,
    backgroundColor: "lightgray",
  },
  image: {
    height: 110,
  },
  darkText: {
    color: "darkgray",
  },

  text: {
    margin: 5,
  },
});

export default SectionCoursesItem;
