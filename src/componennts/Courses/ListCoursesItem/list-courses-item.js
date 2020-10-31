import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

function ListCoursesItem({ item }) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        console.log("something!");
      }}
    >
      <Image
        style={styles.image}
        source={require("../../../../assets/2.png")}
      />
      <View>
        <Text>{item.title}</Text>
        <Text style={styles.darkText}>{item.author}</Text>
        <Text
          style={styles.darkText}
        >{`${item.level} . ${item.released} . ${item.duration}`}</Text>
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
export default ListCoursesItem;
