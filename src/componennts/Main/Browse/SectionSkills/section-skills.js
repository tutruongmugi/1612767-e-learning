import React, { useContext } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { SkillsContext } from "../../../../provider/skills-provider";
import SectionSkillsItem from "../SectionSkillsItem/section-skills-item";

function SectionSkills({ title }) {
  const { skills } = useContext(SkillsContext);

  const renderListItems = (skills) => {
    return skills.map((item) => (
      <SectionSkillsItem key={item.id} item={item} />
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {renderListItems(skills)}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: "#F0F2F5",
  },

  title: {
    color: "#050505",
  },
});
export default SectionSkills;
