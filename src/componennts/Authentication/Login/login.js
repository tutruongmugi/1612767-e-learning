import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../globals/styles";

function Login() {
  const handleEmailInputChange = () => {};
  const handlePasswordInputChange = () => {};
  const onPressedForgotPassword = () => {};
  const onPressedSignIn = () => {};
  const onPressedSignUp = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign In</Text>

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
      <TouchableOpacity>
        <Text style={styles.forgot} onPress={onPressedForgotPassword}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={onPressedSignIn}>
          SIGN IN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText} onPress={onPressedSignUp}>
          SIGN UP
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
