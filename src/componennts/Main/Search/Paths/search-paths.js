import React from "react";
import { View, Text } from "react-native";
import Paths from "../../../Paths/paths";

function SearchPaths() {
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
    {
      id: 4,
      title: "React",
      duration: "12 courses",
    },
    {
      id: 5,
      title: "React-native",
      duration: "6 courses",
    },
    {
      id: 6,
      title: "Angular",
      duration: "16 courses",
    },
  ];
  return (
    <View>
      <View>
        <Text>{`${paths.length} results`}</Text>
      </View>
      <Paths paths={paths} />
    </View>
  );
}

export default SearchPaths;
