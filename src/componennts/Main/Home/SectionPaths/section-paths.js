import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { PathsContext } from "../../../../provider/paths-provider";
import SectionPathsItem from "../SectionPathsItem/section-paths-item";

function SectionPaths({ title }) {
  const { paths } = useContext(PathsContext);

  const renderListItems = (paths) => {
    return paths.map((item) => <SectionPathsItem key={item.id} item={item} />);
  };
  const OnPressed = () => {};
  return (
    <View style={{ backgroundColor: "#F0F2F5" }}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity style={styles.expand} onPress={OnPressed}>
          <Text style={styles.text}>See all</Text>
          <Image
            style={styles.image}
            source={require("../../../../../assets/icon-expand.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {renderListItems(paths)}
      </ScrollView>
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
  text: {
    color: "#050505",
  },
});
