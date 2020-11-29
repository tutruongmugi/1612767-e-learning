import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Image } from "react-native-elements";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";

function SectionAuthorsItem({ item }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          RootNavigation.navigate("AuthorDetail", { item: item });
        }}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 1,
  },
  text: {
    color: "#050505",
    flexWrap: "wrap",
  },
});
export default SectionAuthorsItem;
