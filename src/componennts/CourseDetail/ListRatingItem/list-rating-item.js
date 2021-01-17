import React, { useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Rating, Image } from "react-native-elements";
import { ThemeContext } from "../../../provider/theme-provider";
function ListRatingItem({ item }) {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundSection }]}
    >
      <TouchableOpacity
        style={styles.item}
        // onPress={() => {
        //   RootNavigation.navigate("AuthorDetail", { authorId: item.id });
        // }}
      >
        <Image source={{ uri: null }} style={styles.image} />
        <View style={styles.text}>
          <Text style={{ color: theme.text }}>{item.name}</Text>
          <Text style={{ color: theme.darkText }}>{item.comment}</Text>
          <Rating imageSize={17} readonly startingValue={item.rate} />
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
    marginLeft: 10,
  },
  darkText: {
    color: "#65676B",
  },
});
export default ListRatingItem;
