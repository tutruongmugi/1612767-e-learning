import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

function PathsItem({ item }) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        console.log("something!");
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri:
            "https://codelearn.io/Upload/Blog/nhung-loi-thuong-gap-khi-lap-trinh-java-63725972059.7478.jpg",
        }}
      />
      <View>
        <Text>{item.title}</Text>
        <Text style={styles.darkText}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    margin: 5,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    //ItemSeperatorComponent
  },
  image: {
    width: 100,
    height: 50,
  },
  darkText: {
    color: "darkgray",
  },
});
export default PathsItem;
