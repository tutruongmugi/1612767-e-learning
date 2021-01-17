import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Image } from "react-native-elements";
import { ThemeContext } from "../../../../provider/theme-provider";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";

function SectionAuthorsItem({ item }) {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          RootNavigation.navigate("AuthorDetail", { authorId: item.id });
        }}
      >
        <Image source={{ uri: item["user.avatar"] }} style={styles.image} />
      </TouchableOpacity>
      <Text style={[styles.text, { color: theme.text }]}>
        {item["user.name"]}
      </Text>
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
    width: 60,
    textAlign: "center",
  },
});
export default SectionAuthorsItem;
