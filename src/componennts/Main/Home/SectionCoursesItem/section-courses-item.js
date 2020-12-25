import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";
import { Rating, Image } from "react-native-elements";
import { ThemeContextCustom } from "../../../../provider/theme-provider";

function SectionCoursesItem({ item }) {
  const onPressSectionItem = () => {
    RootNavigation.navigate("CourseDetail", { item: item });
  };
  return (
    <TouchableOpacity style={styles.item} onPress={onPressSectionItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />

      <View style={styles.text}>
        <Text style={{ color: "#050505" }}>{item.title}</Text>
        <Text style={styles.darkText}>{item["instructor.user.name"]}</Text>

        <Text
          style={styles.darkText}
        >{`${item.updatedAt} . ${item.totalHours}`}</Text>
        <View style={styles.rate}>
          <Rating imageSize={15} readonly startingValue={item.contentPoint} />
          <Text style={styles.darkText}>{` (${item.ratedNumber})`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 5,
    width: 250,
    height: 200,
    backgroundColor: "#FFF",
  },
  image: {
    height: 110,
  },
  darkText: {
    color: "#65676B",
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
