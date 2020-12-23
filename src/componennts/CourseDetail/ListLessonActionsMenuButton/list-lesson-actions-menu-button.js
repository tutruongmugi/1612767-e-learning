import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text, StyleSheet } from "react-native";

import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";

function ListLessonActionsMenuButton() {
  return (
    <Menu>
      <MenuTrigger>
        <Ionicons style={{ fontSize: 24 }} name="md-more" />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption style={styles.container}>
          <Text style={styles.text}>Bookmark</Text>
        </MenuOption>
        <MenuOption style={styles.container}>
          <Text style={styles.text}>Download Module</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}
export default ListLessonActionsMenuButton;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    padding: 4,
    paddingRight: 8,
    paddingVertical: 8,
    color: "#000",
  },
});
