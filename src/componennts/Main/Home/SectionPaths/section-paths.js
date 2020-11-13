import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import SectionPathsItem from "../SectionPathsItem/section-paths-item";

function SectionPaths({ title }) {
  const paths = [
    {
      id: 1,
      title: "React",
      duration: "12 courses",
    },
    {
      id: 2,
      title: "React-native",
      duration: "6 courses",
    },
    {
      id: 3,
      title: "Angular",
      duration: "16 courses",
    },
  ];

  const renderListItems = (paths) => {
    return paths.map((item) => <SectionPathsItem item={item} />);
  };
  const OnPressed = () => {};
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text>{title}</Text>
        <TouchableOpacity style={styles.expand} onPress={OnPressed}>
          <Text>See all</Text>
          <Image
            style={styles.image}
            source={require("../../../../../assets/icon-expand.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>{renderListItems(paths)}</ScrollView>
    </View>
  );
}

export default SectionPaths;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    margin: 5,
    flexDirection: "row",
  },
  image: {
    width: 10,
    height: 10,
    margin: 5,
  },
  expand: {
    flexDirection: "row",
  },
});
