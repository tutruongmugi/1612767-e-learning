import React, { useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text, StyleSheet } from "react-native";

import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { ThemeContext } from "../../../provider/theme-provider";

function ListLessonActionsMenuButton() {
  const { language } = useContext(ThemeContext);
  return (
    <Menu>
      <MenuTrigger>
        <Ionicons style={{ fontSize: 24 }} name="md-more" />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption style={styles.container}>
          <Text style={styles.text}>{language.BOOKMARK}</Text>
        </MenuOption>
        <MenuOption style={styles.container}>
          <Text style={styles.text}>{language.DOWNLOAD_MODULE}</Text>
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
