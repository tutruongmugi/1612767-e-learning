import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from "../../../../globals/styles";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";
import SectionSkills from "../../../Main/Browse/SectionSkills/section-skills";
import { AuthenticationContext } from "../../../../provider/authentication-provider";
import { Image } from "react-native-elements";

function UserProfile() {
  const OnPressedEditProfile = () => {
    console.log(authentication.user);
    RootNavigation.navigate("EditProfile");
  };
  const { authentication } = useContext(AuthenticationContext);

  return (
    <View style={style1.container}>
      <View style={style1.info}>
        <Image
          style={style1.image}
          source={{
            uri: "https://genshin.honeyhunterworld.com/img/char/keqing.png",
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
          <Text>EDIT</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 20, fontSize: 24 }}>
          {authentication.user.fullName}
        </Text>
        <Text style={{ marginTop: 10, fontSize: 16 }}>0357004545</Text>
        <Text style={{ marginTop: 10, fontSize: 16 }}>
          {authentication.user.email}
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: "#FFF",
        }}
      >
        <Text style={{ fontSize: 16 }}>Skills</Text>
        <Text
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            padding: 10,
            fontWeight: "bold",
          }}
        >
          EDIT
        </Text>
        <SectionSkills />
      </View>
    </View>
  );
}

export default UserProfile;

const style1 = StyleSheet.create({
  container: {
    backgroundColor: "#F0F2F5",
  },
  info: {
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
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
