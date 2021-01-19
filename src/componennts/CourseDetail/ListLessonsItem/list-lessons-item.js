import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { FavouritesContext } from "../../../provider/favourites-provider";
import { ThemeContext } from "../../../provider/theme-provider";

function ListLessonItem({ lesson, OnChangeVideoUrl }) {
  const { theme } = useContext(ThemeContext);
  const [status, setStatus] = useState(false);
  // const { currentVideoUrl, changeVideoUrl } = useContext(FavouritesContext);
  // const onPressChangeVideo = () => {
  //   changeVideoUrl("");
  //   changeVideoUrl(lesson.videoUrl);
  //   console.log("lala:", currentVideoUrl);

  // };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => OnChangeVideoUrl(lesson.videoUrl)}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            width: 15,
            height: 15,
            borderRadius: 15 / 2,
            backgroundColor: status ? theme.Text : theme.backgroundSection,
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
