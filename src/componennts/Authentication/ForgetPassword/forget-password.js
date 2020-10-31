import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../globals/styles";

function ForgetPassword() {
  const handleEmailInputChange = () => {};
  const handleSubmit = () => {};
  const handleCancel = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Reset Your Password</Text>
      <Text style={styles.caption}>
        We will send you an email to reset your password.
      </Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Email..."}
          placeholderTextColor="#003f5c"
          onChangeText={handleEmailInputChange}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={handleSubmit}>
          Submit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText} onPress={handleCancel}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgetPassword;
