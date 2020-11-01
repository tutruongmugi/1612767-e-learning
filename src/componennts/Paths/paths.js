import React from "react";
import { View, FlatList } from "react-native";
import PathsItem from "./PathsItem/paths-item";

function Paths({ paths }) {
  return (
    <View>
      <FlatList
        data={paths}
        renderItem={({ item }) => <PathsItem item={item} />}
      />
    </View>
  );
}

export default Paths;
