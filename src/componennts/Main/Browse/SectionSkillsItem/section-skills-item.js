import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function SectionSkillsItem({ item }) {
  const OnPressed = () => {};
  return (
    <TouchableOpacity style={styles.container} onPress={OnPressed}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginRight: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
  },

  skill: {
    color: "#050505",
  },
});

export default SectionSkillsItem;
