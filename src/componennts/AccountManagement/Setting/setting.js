import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as RootNavigation from "../../../routes/navigations/root-navigation";

function Setting() {
  const OnPressedSignOut = () => {
    RootNavigation.navigate("Login");
  };
  const OnPressedChangePassword = () => {
    RootNavigation.navigate("ChangePassword");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={OnPressedChangePassword}>
        <Text style={styles.item}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.item}>Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={OnPressedSignOut}>
        <Text style={styles.item}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: "#000",
  },
  container: {
    backgroundColor: "#fff",
  },
});

export default Setting;
