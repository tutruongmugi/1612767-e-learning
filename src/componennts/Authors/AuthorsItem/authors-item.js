import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import * as RootNavigation from "../../../routes/navigations/root-navigation";

function AuthorsItem({ item }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          RootNavigation.navigate("AuthorDetail", { item: item });
        }}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.text}>
          <Text style={{ color: "#000" }}>{item.name}</Text>
          <Text style={styles.darkText}>{item.course}</Text>
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
    //ItemSeperatorComponent
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 1,
  },
  text: {
    justifyContent: "center",
    marginLeft: 10,
  },
  darkText: {
    color: "#65676B",
  },
});
export default AuthorsItem;
