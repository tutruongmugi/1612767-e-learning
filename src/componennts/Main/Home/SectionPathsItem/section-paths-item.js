import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";

function SectionPathsItem({ item }) {
  const OnPressedPath = () => {
    RootNavigation.navigate("PathDetail", { item: item });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={OnPressedPath}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.text}>
        <Text style={{ color: "#050505" }}>{item.title}</Text>
        <Text style={styles.darkText}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    margin: 5,
    width: 200,
    height: 170,
    backgroundColor: "#fff",
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
});

export default SectionPathsItem;
