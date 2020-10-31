import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
function SectionAuthorsItem({ item }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../../../../../assets/2.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text>{item.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginRight: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 1,
  },
});
export default SectionAuthorsItem;
