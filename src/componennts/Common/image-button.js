import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

function ImageButton({ title, onPress, style1, imageBackground }) {
  return (
    <ImageBackground
      style={style1}
      source={{
        uri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0NZMFsu98u0V1XBOdY_81j3BHHwxIWYDzlQ&usqp=CAU",
      }}
    >
      <TouchableOpacity style={styles.touch} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 100,
    margin: 5,
  },
  touch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ImageButton;
