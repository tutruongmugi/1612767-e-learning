import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import { ThemeContext } from "../../../../provider/theme-provider";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";

function SectionPathsItem({ item }) {
  const { theme } = useContext(ThemeContext);
  const OnPressedPath = () => {
    RootNavigation.navigate("PathDetail", { item: item });
  };

  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: theme.backgroundSection }]}
      onPress={OnPressedPath}
    >
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.text}>
        <Text style={{ color: theme.text }}>{item.title}</Text>
        <Text style={{ color: theme.darkText }}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    margin: 10,
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
