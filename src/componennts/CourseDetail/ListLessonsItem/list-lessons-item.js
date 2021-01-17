import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { ThemeContext } from "../../../provider/theme-provider";

function ListLessonItem({ lesson }) {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            width: 15,
            height: 15,
            borderRadius: 15 / 2,
            backgroundColor: theme.backgroundSection,
            marginRight: 5,
            marginTop: 3,
            marginLeft: 10,
          }}
          source={require("../../../../assets/icons8-filled-circle-24.png")}
        />
        <Text style={{ color: theme.text }}>{lesson.name}</Text>
      </View>
      <Text
        style={[styles.duration, { color: theme.darkText }]}
      >{`${lesson.hours} Hours`}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  checkBox: {
    alignSelf: "center",
  },
  duration: {
    marginRight: 5,
  },
});

export default ListLessonItem;
