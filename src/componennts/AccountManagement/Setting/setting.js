import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { ThemeContext } from "../../../provider/theme-provider";
import * as RootNavigation from "../../../routes/navigations/root-navigation";

function Setting() {
  const authContext = useContext(AuthenticationContext);
  const { theme, toggleTheme, language, toggleLanguage } = useContext(
    ThemeContext
  );
  const OnPressedSignOut = () => {
    authContext.logout();
    RootNavigation.navigate("Login");
  };
  const OnPressedChangePassword = () => {
    RootNavigation.navigate("ChangePassword");
  };
  const OnPressedChangeTheme = () => {
    toggleTheme();
  };
  const OnPressedChangeLanguage = () => {
    toggleLanguage();
  };
  return (
    <View style={{ backgroundColor: theme.backgroundSection, height: "100%" }}>
      <TouchableOpacity onPress={OnPressedChangePassword}>
        <Text style={[styles.item, { color: theme.text }]}>
          {language.CHANGE_PASSWORD}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={OnPressedChangeTheme}>
        <Text style={[styles.item, { color: theme.text }]}>
          {language.CHANGE_THEME}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={OnPressedChangeLanguage}>
        <Text style={[styles.item, { color: theme.text }]}>
          {language.CHANGE_LANGUAGE}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={OnPressedSignOut}>
        <Text style={[styles.item, { color: theme.text }]}>
          {language.SIGN_OUT}
        </Text>
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
});

export default Setting;
