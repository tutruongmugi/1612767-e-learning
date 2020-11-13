import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function SectionPathsItem({ item }) {
  const OnPressedPath = () => {};

  return (
    <TouchableOpacity style={styles.item} onPress={OnPressedPath}>
      <Image
        source={require("../../../../../assets/1.png")}
        style={styles.image}
      />
      <View style={styles.text}>
        <Text>{item.title}</Text>
        <Text style={styles.darkText}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
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

export default SectionPathsItem;
