import React from "react";
import { View, Text } from "react-native";
import Authors from "../../../Authors/authors";

function SearchAuthors({ authors }) {
  return (
    <View>
      <View>
        <Text>{`${authors.length} results`}</Text>
      </View>
      <Authors authors={authors} />
    </View>
  );
}

export default SearchAuthors;
