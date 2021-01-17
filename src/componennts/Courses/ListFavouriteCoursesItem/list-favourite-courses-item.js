import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as RootNavigation from "../../../routes/navigations/root-navigation";

import { Rating, Image } from "react-native-elements";
import CourseActionsMenuButton from "../CourseActions/course-actions-menu-button";
import { ThemeContext } from "../../../provider/theme-provider";

function ListFavouriteCoursesItem({ item }) {
  const onPressListItem = () => {
    RootNavigation.navigate("CourseDetail", { item: item });
  };
  const OnPressedButtonMore = () => {};
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.backgroundSection,
          margin: 10,
          borderRadius: 8,
          marginTop: 5,
        },
      ]}
    >
      <TouchableOpacity style={styles.item} onPress={onPressListItem}>
        <Image source={{ uri: item.courseImage }} style={styles.image} />
        <View style={styles.text}>
          <Text style={{ color: theme.text }}>{item.courseTitle}</Text>
          {/* <Text style={styles.darkText}>{item.author}</Text> */}
          <Text
            style={{ color: theme.darkText }}
          >{`${item.coursePrice}$`}</Text>
          <View style={styles.rate}>
            <Rating
              imageSize={15}
              readonly
              startingValue={item.courseContentPoint}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <CourseActionsMenuButton CourseId={item.id} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 5,
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
  rate: {
    marginTop: 5,
    marginBottom: 5,
    alignItems: "flex-start",
    flexDirection: "row",
  },
});
export default ListFavouriteCoursesItem;