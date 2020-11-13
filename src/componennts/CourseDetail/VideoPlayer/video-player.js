import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";

const { width, height } = Dimensions.get("window");

function VideoPlayer() {
  return (
    <View style={styles.container}>
      <Video
        source={require("../../Common/maintro.mp4")}
        rate={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: width,
    height: height / 3,
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default VideoPlayer;
