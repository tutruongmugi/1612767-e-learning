import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../../../../provider/theme-provider";
import Paths from "../../../Paths/paths";

function SearchPaths({ paths }) {
  const { theme, language } = useContext(ThemeContext);
  return (
    <View style={{ backgroundColor: theme.background, height: "100%" }}>
      <View style={{ margin: 5, marginTop: 15, marginBottom: 10 }}>
        <Text
          style={{ color: theme.text }}
        >{`${paths.length} ${language.RESULTS}`}</Text>
      </View>
      <Paths paths={paths} />
    </View>
  );
}

export default SearchPaths;
