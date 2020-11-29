import React from "react";
import { View, FlatList } from "react-native";
import AuthorsItem from "./AuthorsItem/authors-item";

function Authors({ authors }) {
  return (
    <View>
      <FlatList
        data={authors}
        renderItem={({ item }) => <AuthorsItem key={item.id} item={item} />}
        keyExtractor={(item, index) => {
          return item.id.toString();
        }}
      />
    </View>
  );
}
export default Authors;
