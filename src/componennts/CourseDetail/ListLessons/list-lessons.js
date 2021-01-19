import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import ListLessonItem from "../ListLessonsItem/list-lessons-item";
import ListLessonActionsMenuButton from "../ListLessonActionsMenuButton/list-lesson-actions-menu-button";
import { ThemeContext } from "../../../provider/theme-provider";

function ListLessons({ section, OnChangeVideoUrl }) {
  const { theme } = useContext(ThemeContext);
  console.log("test lessons:", section);
  const renderSectionItem = (sectionItem, index) => {
    return (
      <View key={sectionItem.id} style={{ marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 5,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 75,
                height: 50,
                backgroundColor: "#65676B",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: theme.text }}>{index + 1}</Text>
            </View>
            <View
              style={{
                padding: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={[styles.text, { color: theme.text }]}>
                  {sectionItem.name}
                </Text>
                <Text
                  style={[styles.duration, { color: theme.darkText }]}
                >{`${sectionItem.sumHours} Hours`}</Text>
              </View>
            </View>
          </View>
          <View style={{ marginRight: 10 }}>
            <ListLessonActionsMenuButton style={{ fontSize: 30 }} />
          </View>
        </View>

        {sectionItem.lesson.map((item) => (
          <ListLessonItem
            key={item.id}
            lesson={item}
            OnChangeVideoUrl={OnChangeVideoUrl}
          />
        ))}
      </View>
    );
  };
  return (
    <View>
      <ScrollView>
        {section.map((sectionItem, index) => {
          return renderSectionItem(sectionItem, index);
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    justifyContent: "flex-start",
    fontWeight: "bold",
  },
});
export default ListLessons;
