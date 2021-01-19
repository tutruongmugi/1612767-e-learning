import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ThemeContext } from "../../../../../provider/theme-provider";
import { CoursesContext } from "../../../../../provider/courses-provider";

function SearchHistoryItem({ item, deleteItem, handleSearchByHistory }) {
  const { theme, language } = useContext(ThemeContext);
  // const { deleteItemHistory } = useContext(CoursesContext);

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{ paddingTop: 15 }}
        onPress={() => deleteItem(item)}
      >
        <Icon
          style={{ fontSize: 25, paddingRight: 10 }}
          name="delete-outline"
          size={10}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: "row", paddingTop: 15 }}
        onPress={() => handleSearchByHistory(item)}
      >
        <Icon
          style={{ fontSize: 25, paddingRight: 10 }}
          name="history"
          size={10}
        />
        <Text style={{ color: theme.text, fontSize: 16 }}>{item.content}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default SearchHistoryItem;
