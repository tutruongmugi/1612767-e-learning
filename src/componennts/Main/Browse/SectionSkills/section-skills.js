import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import SectionSkillsItem from "../SectionSkillsItem/section-skills-item";

function SectionSkills({ title }) {
  const skills = [
    { id: 1, title: "Angular", isChecked: false },
    { id: 2, title: "JavaScript", isChecked: true },
    { id: 3, title: "C#", isChecked: false },
  ];

  const renderListItems = (skills) => {
    return skills.map((item) => <SectionSkillsItem item={item} />);
  };

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <ScrollView horizontal={true}>{renderListItems(skills)}</ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});
export default SectionSkills;
