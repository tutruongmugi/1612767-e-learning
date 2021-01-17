import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from "../../../../globals/styles";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";
import SectionSkills from "../../../Main/Browse/SectionSkills/section-skills";
import { AuthenticationContext } from "../../../../provider/authentication-provider";
import { Image } from "react-native-elements";
import { ThemeContext } from "../../../../provider/theme-provider";

function UserProfile() {
  const OnPressedEditProfile = () => {
    RootNavigation.navigate("EditProfile");
  };
  const { state } = useContext(AuthenticationContext);
  const { theme, language } = useContext(ThemeContext);
  console.log("component profile: ", state);
  return (
    <View style={{ backgroundColor: theme.background, height: "100%" }}>
      <View style={[style1.info, { backgroundColor: theme.backgroundSection }]}>
        <Image
          style={style1.image}
          source={{
            uri:
              state.userInfo.avatar === ""
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnawXcdwPn0r48TZ9H-e9g_RVOwgTJFY1XPg&usqp=CAU"
                : state.userInfo.avatar,
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            padding: 10,
            fontWeight: "bold",
          }}
          onPress={OnPressedEditProfile}
        >
          <Text
            style={{
              color: theme.text,
              fontWeight: "bold",
            }}
          >
            {language.EDIT}
          </Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 20, fontSize: 24, color: theme.text }}>
          {state.userInfo.name}
        </Text>
        <Text style={{ marginTop: 10, fontSize: 16, color: theme.text }}>
          {state.userInfo.phone}
        </Text>
        <Text style={{ marginTop: 10, fontSize: 16, color: theme.text }}>
          {state.userInfo.email}
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: theme.backgroundSection,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 16, color: theme.text }}>
          {language.SKILLS}
        </Text>
        <Text
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            padding: 10,
            fontWeight: "bold",
            color: theme.text,
          }}
        >
          {language.EDIT}
        </Text>
        <SectionSkills />
      </View>
    </View>
  );
}

export default UserProfile;

const style1 = StyleSheet.create({
  info: {
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 1,
    marginBottom: 5,
  },
  darkText: {
    color: "#65676B",
  },
});
