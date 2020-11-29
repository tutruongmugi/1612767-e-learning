import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
function PathsItem({ item }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          console.log("something!");
        }}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <View>
          <Text style={{ color: "#000" }}>{item.title}</Text>
          <Text style={styles.darkText}>{item.duration}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
  item: {
    margin: 5,
    flexDirection: "row",
    width: "95%",
  },
  image: {
    width: 100,
    height: 50,
  },
  darkText: {
    color: "#65676B",
  },
});
export default PathsItem;
