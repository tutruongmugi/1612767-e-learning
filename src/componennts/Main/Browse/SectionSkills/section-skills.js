import React, { useContext } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { SkillsContext } from "../../../../provider/skills-provider";
import SectionSkillsItem from "../SectionSkillsItem/section-skills-item";

function SectionSkills() {
  const { skills } = useContext(SkillsContext);

  const renderListItems = (skills) => {
    return skills.map((item) => (
      <SectionSkillsItem key={item.id} item={item} />
    ));
  };

  return (
    <View style={styles.container}>
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

  text: {
    color: "#050505",
    marginBottom: 10,
    marginTop: 10,
  },
});
export default SectionSkills;
