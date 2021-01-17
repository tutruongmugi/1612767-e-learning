import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../../../provider/theme-provider";

function SectionSkillsItem({ item }) {
  const OnPressed = () => {};
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.backgroundSection }]}
      onPress={OnPressed}
    >
      <Text style={{ color: theme.text }}>{item.title}</Text>
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
