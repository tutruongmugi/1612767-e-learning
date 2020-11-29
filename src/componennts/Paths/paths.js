import React from "react";
import { View, FlatList } from "react-native";
import PathsItem from "./PathsItem/paths-item";

function Paths({ paths }) {
  return (
    <View>
      <FlatList
        data={paths}
        renderItem={({ item }) => <PathsItem key={item.id} item={item} />}
        keyExtractor={(item, index) => {
          return item.id.toString();
        }}
      />
    </View>
  );
}

export default Paths;
