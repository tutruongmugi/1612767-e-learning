import React, { useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { ThemeContext } from "../../../provider/theme-provider";
import * as RootNavigation from "../../../routes/navigations/root-navigation";

function PathsItem({ item }) {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundSection }]}
    >
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          RootNavigation.navigate("PathDetail", { item: item });
        }}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <View>
          <Text style={{ color: theme.text }}>{item.title}</Text>
          <Text style={{ color: theme.darkText }}>{item.duration}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // borderBottomColor: "gray",
    // borderBottomWidth: 1,
    flexDirection: "row",
    backgroundColor: "#FFF",
    margin: 10,
    borderRadius: 8,
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
