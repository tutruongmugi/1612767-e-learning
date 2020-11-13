import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../../globals/styles";

function ChangePassword() {
  const handleOldPasswordInputChange = () => {};
  const handleNewPasswordInputChange = () => {};
  const handleConfirmPasswordInputChange = () => {};
  const handleSubmit = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Change Your Password</Text>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
          placeholder={"Old Password..."}
          placeholderTextColor="#003f5c"
          onChangeText={handleOldPasswordInputChange}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
          placeholder={"New Password..."}
          placeholderTextColor="#003f5c"
          onChangeText={handleNewPasswordInputChange}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
          placeholder={"Confirm Password..."}
          placeholderTextColor="#003f5c"
          onChangeText={handleConfirmPasswordInputChange}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={handleSubmit}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default ChangePassword;
