import React from "react";
import { View, Text, ScrollView } from "react-native";
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
  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <ScrollView horizontal={true}>{renderListItems(paths)}</ScrollView>
    </View>
  );
}

export default SectionPaths;
