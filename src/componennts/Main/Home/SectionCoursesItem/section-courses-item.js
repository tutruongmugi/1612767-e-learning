import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";
import { Rating, Image } from "react-native-elements";
import { ThemeContext } from "../../../../provider/theme-provider";

function SectionCoursesItem({ item }) {
  const onPressSectionItem = () => {
    RootNavigation.navigate("CourseDetail", { item: item });
  };
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: theme.backgroundSection }]}
      onPress={onPressSectionItem}
    >
      <Image
        source={{
          uri: item.imageUrl == null ? item.courseImage : item.imageUrl,
        }}
        style={styles.image}
      />

      <View style={styles.text}>
        <Text style={{ color: theme.text }}>
          {item.title == null ? item.courseTitle : item.title}
        </Text>
        <Text style={{ color: theme.darkText }}>
          {item["instructor.user.name"] == null
            ? item.instructorName
            : item["instructor.user.name"]}
        </Text>

        <Text style={{ color: theme.darkText }}>
          {item.updatedAt == null
            ? item.latestLearnTime.slice(0, 10)
            : item.totalHours == null
            ? null
            : item.updatedAt.slice(0, 10) +
              " . " +
              Math.round(item.totalHours * 100000) / 100000}
        </Text>
        <View style={styles.rate}>
          {item.ratedNumber == null ? (
            <Text
              style={{ color: theme.darkText }}
            >{`Total lesson: ${item.total}`}</Text>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <Rating
                imageSize={17}
                readonly
                startingValue={item.contentPoint}
              />
              <Text
                style={{ color: theme.darkText }}
              >{` (${item.ratedNumber})`}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    width: 250,
    height: 200,
    backgroundColor: "#FFF",
    marginTop: 5,
  },
  image: {
    height: 110,
  },

  text: {
    margin: 5,
  },
  rate: {
    marginTop: 5,
    alignItems: "flex-start",
    flexDirection: "row",
  },
});

export default SectionCoursesItem;
