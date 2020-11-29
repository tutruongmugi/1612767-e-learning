import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";
import { Rating, Image } from "react-native-elements";

function SectionCoursesItem({ item }) {
  const onPressSectionItem = () => {
    RootNavigation.navigate("CourseDetail", { item: item });
  };
  return (
    <TouchableOpacity style={styles.item} onPress={onPressSectionItem}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.text}>
        <Text style={{ color: "#050505" }}>{item.title}</Text>
        <Text style={styles.darkText}>{item.author}</Text>
        <Text
          style={styles.darkText}
        >{`${item.level} . ${item.released} . ${item.duration}`}</Text>
        <View style={styles.rate}>
          <Rating imageSize={15} readonly startingValue={item.rate} />
          <Text style={styles.darkText}>{` (${item.rateCount})`}</Text>
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
