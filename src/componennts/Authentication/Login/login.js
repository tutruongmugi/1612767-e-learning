import React, { useState, useEffect, useContext } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../globals/styles";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { AuthenticationContext } from "../../../provider/authentication-provider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogging, setIsLogging] = useState(true);
  const authContext = useContext(AuthenticationContext);
  useEffect(() => {
    if (authContext.state.isAuthenticated) {
      setEmail("");
      setPassword("");
      setIsLogging(true);
      RootNavigation.navigate("Main", { userInfo: authContext.state.userInfo });
    }
  }, [authContext.state.isAuthenticated]);

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
    if (isLogging) {
      return <View />;
    } else if (!status) {
      return <Text>Email or Password was incorrecct!</Text>;
    } else {
      return <Text>Login successful!!</Text>;
    }
  };
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
      {renderLoginStatus(authContext.state.isAuthenticated)}
      <TouchableOpacity onPress={onPressedForgotPassword}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          console.log(`${email}=${password}`);
          authContext.login(email, password);
          setIsLogging(false);
        }}
      >
        <Text style={styles.loginText}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressedSignUp} onPress={onPressedSignUp}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
