import React from "react";
import { Card } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "../../../../globals/styles";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";
import SectionSkills from "../../../Main/Browse/SectionSkills/section-skills";

function UserProfile() {
  const OnPressedSignOut = () => {
    RootNavigation.navigate("Login");
  };
  const OnPressedChangePassword = () => {
    RootNavigation.navigate("ChangePassword");
  };
  const OnPressedEditProfile = () => {
    RootNavigation.navigate("EditProfile");
  };
  return (
    <View style={style1.container}>
      <ScrollView>
        <View style={style1.profileTitle}>
          <Image
            style={style1.image}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnawXcdwPn0r48TZ9H-e9g_RVOwgTJFY1XPg&usqp=CAU",
            }}
          />

          <TouchableOpacity>
            <Text onPress={OnPressedEditProfile}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={style1.name}>Kuro Yuuki</Text>
          <View>
            <Text style={style1.name}>012345678</Text>
          </View>
          <Text style={style1.bio}>kuro@gmail.com</Text>
          <Text style={style1.bio}>Light</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Text style={styles.forgot} onPress={OnPressedChangePassword}>
              Change Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text onPress={OnPressedSignOut}>SIGN OUT</Text>
          </TouchableOpacity>
        </View>
        <View>
          <SectionSkills title={"Interest"} />
        </View>
      </ScrollView>
    </View>
  );
}

export default UserProfile;

const style1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",

    alignItems: "center",
  },
  profileTitle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
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
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 2,
  },
});
