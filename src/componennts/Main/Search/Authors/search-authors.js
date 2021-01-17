import React, { useContext } from "react";
import { View, Text } from "react-native";
import Authors from "../../../Authors/authors";
import { ThemeContext } from "../../../../provider/theme-provider";

function SearchAuthors({ authors }) {
  const { theme, language } = useContext(ThemeContext);
  return (
    <View style={{ backgroundColor: theme.background, height: "100%" }}>
      <View style={{ margin: 5, marginTop: 15, marginBottom: 10 }}>
        <Text
          style={{ color: theme.text }}
        >{`${authors.length} ${language.RESULTS}`}</Text>
      </View>
      <Authors authors={authors} />
    </View>
  );
}

export default SearchAuthors;
