import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

function AuthorsItem({ item }) {
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnawXcdwPn0r48TZ9H-e9g_RVOwgTJFY1XPg&usqp=CAU",
        }}
      />
      <View style={styles.text}>
        <Text>{item.name}</Text>
        <Text style={styles.darkText}>{item.course}</Text>
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
    color: "darkgray",
  },
});
export default AuthorsItem;
