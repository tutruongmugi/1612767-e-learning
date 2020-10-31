import React from "react";
import { Card } from "react-native-elements";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import styles from "../../../globals/styles";

function UserProfile() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Profile</Text>
      <ImageBackground
        source="https://www.upsieutoc.com/images/2020/10/25/122028444_1296341757384110_8390311764696708431_o.jpg"
        style={style1.avatar}
      />
      <Card>
        <View style={{ padding: 10 }}>
          <Text style={style1.name}>Kuro Yuuki</Text>
          <Text style={style1.name}>012345678</Text>
          <Text style={style1.bio}>kuro@gmail.com</Text>
        </View>
      </Card>
    </View>
  );
}

export default UserProfile;

const style1 = StyleSheet.create({
  avatar: {
    width: "100%",
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 18,
  },
});
