import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../globals/styles";

function Register() {
  const handleNameInputChange = () => {};
  const handleEmailInputChange = () => {};
  const handlePasswordInputChange = () => {};
  const handlePasswordConfirmInputChange = () => {};
  const onPressedForgotPassword = () => {};
  const onPressedSignIn = () => {};
  const onPressedSignUp = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Create Account</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Name..."}
          placeholderTextColor="#003f5c"
          onChangeText={handleNameInputChange}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Email..."}
          placeholderTextColor="#003f5c"
          onChangeText={handleEmailInputChange}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
          placeholder={"Password..."}
          placeholderTextColor="#003f5c"
          onChangeText={handlePasswordInputChange}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
          placeholder={"Password..."}
          placeholderTextColor="#003f5c"
          onChangeText={handlePasswordConfirmInputChange}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.loginText} onPress={onPressedSignUp}>
          CREATE
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Register;
