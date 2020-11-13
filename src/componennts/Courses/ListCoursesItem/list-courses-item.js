import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as RootNavigation from "../../../routes/navigations/root-navigation";

import { Rating } from "react-native-elements";

function ListCoursesItem({ item }) {
  const onPressListItem = () => {
    RootNavigation.navigate("CourseDetail", { item: item });
  };
  const OnPressedButtonMore = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={onPressListItem}>
        <Image
          style={styles.image}
          source={require("../../../../assets/2.png")}
        />
        <View style={styles.text}>
          <Text>{item.title}</Text>
          <Text style={styles.darkText}>{item.author}</Text>
          <Text
            style={styles.darkText}
          >{`${item.level} . ${item.released} . ${item.duration}`}</Text>
          <View style={styles.rate}>
            <Rating imageSize={15} readonly startingValue={item.rate} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={OnPressedButtonMore}>
        <Image
          style={styles.icon}
          source={require("../../../../assets/icon-more.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  item: {
    margin: 5,
    flexDirection: "row",
    width: "95%",
    //ItemSeperatorComponent
  },
  image: {
    width: 100,
    height: 70,
  },
  text: {
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  darkText: {
    color: "darkgray",
  },
  rate: {
    marginTop: 5,
    marginBottom: 5,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  icon: {
    width: 15,
    margin: 10,
    height: "20%",
  },
});
export default ListCoursesItem;
