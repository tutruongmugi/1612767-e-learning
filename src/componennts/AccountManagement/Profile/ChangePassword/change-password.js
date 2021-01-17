import React, { useState, useEffect, useContext } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../../globals/styles";
import { AuthenticationContext } from "../../../../provider/authentication-provider";
import { ThemeContext } from "../../../../provider/theme-provider";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";

function ChangePassword() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [isChangingPass, setIsChangingPass] = useState(true);
  const { state, changePassword, startChangePassword } = useContext(
    AuthenticationContext
  );
  const { theme, language } = useContext(ThemeContext);
  const handleSubmit = () => {
    if (validateField()) {
      changePassword(state.token, state.userInfo.id, oldPass, newPass);
      setIsChangingPass(false);
    }
  };
  useEffect(() => {
    if (state.changePasswordSucess) {
      setOldPass("");
      setNewPass("");
      setConfirmNewPass("");
      startChangePassword();
      RootNavigation.navigate("Setting");
    }
  }, [state.changePasswordSucess]);
  const renderChangePassStatus = (status) => {
    if (isChangingPass) {
      return <View />;
    } else if (!status) {
      return <Text>old password is incorrect</Text>;
    } else {
      return <Text>Change Password successfully!!</Text>;
    }
  };
  const validateField = () => {
    if (
      oldPass.length == 0 ||
      newPass.length == 0 ||
      confirmNewPass.length == 0
    ) {
      alert("please fill all the information");
      return false;
    }
    if (oldPass.length < 8 || newPass.length < 8) {
      alert("Password at least 8 char");
      return false;
    }
    if (newPass !== confirmNewPass) {
      alert("Confirm Password doesn't match new Password");
      return false;
    }
    return true;
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.logo, { color: theme.text }]}>
        {language.CHANGE_YOUR_PASSWORD}
      </Text>
      <View
        style={[styles.inputView, { backgroundColor: theme.backgroundSection }]}
      >
        <TextInput
          secureTextEntry={true}
          placeholder={language.CURRENT_PASSWORD}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setOldPass(value)}
          style={{ color: theme.text }}
        />
      </View>
      <View
        style={[styles.inputView, { backgroundColor: theme.backgroundSection }]}
      >
        <TextInput
          secureTextEntry={true}
          placeholder={language.NEW_PASSWORD}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setNewPass(value)}
          style={{ color: theme.text }}
        />
      </View>
      <View
        style={[styles.inputView, { backgroundColor: theme.backgroundSection }]}
      >
        <TextInput
          secureTextEntry={true}
          placeholder={language.CONFIRM_NEW_PASSWORD}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setConfirmNewPass(value)}
          style={{ color: theme.text }}
        />
      </View>
      {renderChangePassStatus(state.changePasswordSucess)}
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={[styles.loginText, { color: theme.text }]}>
          {language.SUBMIT}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default ChangePassword;
