import React from "react";
import { View, StyleSheet, Text } from "react-native";

function SectionSkillsItem({ item }) {
  return (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
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
