import React, { useState, useEffect, useContext } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../globals/styles";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { ThemeContext } from "../../../provider/theme-provider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogging, setIsLogging] = useState(true);
  const authContext = useContext(AuthenticationContext);
  const [error, setError] = useState("");
  const { theme, language } = useContext(ThemeContext);
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

  const validateField = () => {
    if (email === "") {
      alert("Email is required!");
      return false;
    }
    if (password === "") {
      alert("Password is required!");
      return false;
    }
    if (!email.includes("@")) {
      alert("Incorrect Email!");
      return false;
    }
    return true;
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.logo, { color: theme.text }]}>
        {language.SIGN_IN}
      </Text>

      <View
        style={[styles.inputView, { backgroundColor: theme.backgroundSection }]}
      >
        <TextInput
          placeholder={language.EMAIL}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => handleEmailInputChange(text)}
          defaultValue={email}
          style={{ color: theme.text }}
        />
      </View>
      <View
        style={[styles.inputView, { backgroundColor: theme.backgroundSection }]}
      >
        <TextInput
          secureTextEntry={true}
          placeholder={language.PASSWORD}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => handlePasswordInputChange(text)}
          defaultValue={password}
          style={{ color: theme.text }}
        />
      </View>
      {renderLoginStatus(authContext.state.isAuthenticated)}
      <TouchableOpacity onPress={onPressedForgotPassword}>
        <Text style={[styles.forgot, { color: theme.text }]}>
          {language.FORGOT_PASSWORD}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          console.log(`${email}=${password}`);
          if (validateField()) {
            authContext.login(email, password);
            setIsLogging(false);
          }
        }}
      >
        <Text style={[styles.loginText, { color: theme.text }]}>
          {language.SIGN_IN}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressedSignUp} onPress={onPressedSignUp}>
        <Text style={[styles.loginText, { color: theme.text }]}>
          {language.SIGN_UP}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
