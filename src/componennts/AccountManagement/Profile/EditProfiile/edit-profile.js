import React, { useContext, useState, useEffect } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../../globals/styles";
import { AuthenticationContext } from "../../../../provider/authentication-provider";
import { ThemeContext } from "../../../../provider/theme-provider";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";

function EditProfile() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isUpdating, setIsUpdating] = useState(true);
  const { state, updateProfile, startUpdateProfile } = useContext(
    AuthenticationContext
  );
  const { theme, language } = useContext(ThemeContext);
  const handleSubmit = () => {
    updateProfile(state.token, name, avatar, phone);
    setIsUpdating(false);
  };
  useEffect(() => {
    setName(state.userInfo.name);
    setPhone(state.userInfo.phone);
    setAvatar(state.userInfo.avatar);
  }, []);
  useEffect(() => {
    if (state.updateProfileSuccess) {
      startUpdateProfile();
      RootNavigation.navigate("UserProfile");
    }
  }, [state.updateProfileSuccess]);
  const renderUpdateProfileStatus = (status) => {
    if (isUpdating) {
      return <View />;
    } else if (!status) {
      return <Text>Updating successfully!!</Text>;
    } else {
      return <Text>Updating successfully!!</Text>;
    }
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.logo, { color: theme.text }]}>
        {language.EDIT_YOUR_PROFILE}
      </Text>
      <View
        style={[styles.inputView, { backgroundColor: theme.backgroundSection }]}
      >
        <TextInput
          placeholder={"Name..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setName(value)}
          value={name}
          style={{ color: theme.text }}
        />
      </View>
      <View
        style={[styles.inputView, { backgroundColor: theme.backgroundSection }]}
      >
        <TextInput
          placeholder={"Phone..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setPhone(value)}
          value={phone}
          style={{ color: theme.text }}
        />
      </View>
      <View
        style={[styles.inputView, { backgroundColor: theme.backgroundSection }]}
      >
        <TextInput
          placeholder={"Avatar..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setAvatar(value)}
          value={avatar}
          style={{ color: theme.text }}
        />
      </View>
      {renderUpdateProfileStatus(state.updateProfileSuccess)}
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={[styles.loginText, { color: theme.text }]}>
          {language.SUBMIT}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default EditProfile;
