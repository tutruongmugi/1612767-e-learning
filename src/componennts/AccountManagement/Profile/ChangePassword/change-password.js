import React, { useState, useEffect, useContext } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../../globals/styles";
import { AuthenticationContext } from "../../../../provider/authentication-provider";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";

function ChangePassword() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [isChangingPass, setIsChangingPass] = useState(true);
  const { state, changePassword, startChangePassword } = useContext(
    AuthenticationContext
  );
  const handleSubmit = () => {
    changePassword(state.token, state.userInfo.id, oldPass, newPass);
    setIsChangingPass(false);
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
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Change Your Password</Text>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
          placeholder={"Old Password..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setOldPass(value)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
          placeholder={"New Password..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setNewPass(value)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
          placeholder={"Confirm New Password..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setConfirmNewPass(value)}
        />
      </View>
      {renderChangePassStatus(state.changePasswordSucess)}
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ChangePassword;
