import React from "react";
import { View, Text } from "react-native";
import Paths from "../../../Paths/paths";

function SearchPaths({ paths }) {
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
