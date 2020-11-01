import React from "react";
import { View, FlatList } from "react-native";
import AuthorsItem from "./AuthorsItem/authors-item";

function Authors({ authors }) {
  return (
    <View>
      <FlatList
        data={authors}
        renderItem={({ item }) => <AuthorsItem item={item} />}
      />
    </View>
  );
}
export default Authors;
