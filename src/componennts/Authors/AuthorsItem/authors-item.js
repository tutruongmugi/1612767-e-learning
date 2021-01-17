import React, { useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { ThemeContext } from "../../../provider/theme-provider";
import * as RootNavigation from "../../../routes/navigations/root-navigation";

function AuthorsItem({ item }) {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundSection }]}
    >
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          RootNavigation.navigate("AuthorDetail", { authorId: item.id });
        }}
      >
        <Image source={{ uri: item["user.avatar"] }} style={styles.image} />
        <View style={styles.text}>
          <Text style={{ color: theme.text }}>{item["user.name"]}</Text>
          <Text style={{ color: theme.darkText }}>{`${
            item.skills.length + 1
          } Courses `}</Text>
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
