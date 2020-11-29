import React, { useState, useEffect, useContext } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../globals/styles";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { login } from "../../../core/services/authentication-services";
import { AuthenticationContext } from "../../../provider/authentication-provider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status && status.status == 200) {
      RootNavigation.navigate("Main");
    }
  }, [status]);

  const handleEmailInputChange = (text) => {
    setEmail(text);
  };
  const handlePasswordInputChange = (text) => {
    setPassword(text);
  };
  const onPressedForgotPassword = () => {
    RootNavigation.navigate("ForgetPassword");
  };
  const onPressedSignIn = () => {
    console.log(`${email}=${password}`);
    setStatus(login(email, password));
    setAuthentication(login(email, password));
  };
  const onPressedSignUp = () => {
    RootNavigation.navigate("Register");
  };

  const renderLoginStatus = (status) => {
    if (!status) {
      return <View />;
    } else if (status.status === 200) {
      return <Text>Login successful</Text>;
    } else {
      return <Text>{status.errorString}</Text>;
    }
  };
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign In</Text>

      <View style={styles.inputView}>
        <TextInput
          placeholder={"Email..."}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => handleEmailInputChange(text)}
          defaultValue={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
          placeholder={"Password..."}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => handlePasswordInputChange(text)}
          defaultValue={password}
        />
      </View>
      {renderLoginStatus(status)}
      <TouchableOpacity onPress={onPressedForgotPassword}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          console.log(`${email}=${password}`);
          setStatus(login(email, password));
          setAuthentication(login(email, password));
        }}
      >
        <Text style={styles.loginText}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressedSignUp}>
        <Text style={styles.loginText} onPress={onPressedSignUp}>
          SIGN UP
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
