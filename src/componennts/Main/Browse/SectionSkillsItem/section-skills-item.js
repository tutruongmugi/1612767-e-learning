import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function SectionSkillsItem({ item }) {
  const OnPressed = () => {};
  return (
    <TouchableOpacity style={styles.item} onPress={OnPressed}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginRight: 5,
    backgroundColor: "gray",
    borderRadius: 8,
  },
});

export default SectionSkillsItem;
