import React, { useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";
import { FavouritesContext } from "../../../provider/favourites-provider";
import WebView from "react-native-webview";

const { width, height } = Dimensions.get("window");

function VideoPlayer() {
  const { currentVideoUrl } = useContext(FavouritesContext);
  return (
    <View style={{ height: 185 }}>
      <WebView
        style={{ marginTop: Platform.OS == "ios" ? 20 : 0 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: currentVideoUrl }}
      />
    </View>
    // <View style={styles.container}>
    //   <Video
    //     //source={require("../../Common/maintro.mp4")}
    //     source={{
    //       uri: currentVideoUrl,
    //     }}
    //     rate={1.0}
    //     isMuted={false}
    //     resizeMode="cover"
    //     shouldPlay={false}
    //     isLooping={false}
    //     useNativeControls
    //     style={styles.video}
    //   />
    // </View>
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
    marginTop: 20,
  },
});

export default VideoPlayer;
