import React, { useState, useEffect, useContext } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../globals/styles";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { ThemeContext } from "../../../provider/theme-provider";
import * as RootNavigation from "../../../routes/navigations/root-navigation";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null);
  const [isRegistering, setIsRegistering] = useState(true);
  const authContext = useContext(AuthenticationContext);
  const { theme, language } = useContext(ThemeContext);

  useEffect(() => {
    if (authContext.state.registerSuccess) {
      authContext.sendActiveEmail(email);
      authContext.startSendEmail();
      setEmail("");
      setPassword("");
      setFullName("");
      setPhone("");
      setIsRegistering(true);
      authContext.startRegister();
      RootNavigation.navigate("Login");
    }
    return () => {};
  }, [authContext.state.registerSuccess]);

  const onPressedSignUp = () => {
    // if(validate()){
    //   setError('');
    //   console.log("Register successful");
    // }
    if (validateField()) {
      authContext.register(fullName, email, phone, password);
      setIsRegistering(false);
    }
  };

  const validateField = () => {
    if (email.length == 0 || phone.length == 0 || fullName.length == 0) {
      alert("please fill all the information");
      return false;
    }
    if (!email.includes("@")) {
      alert("Incorrect Email");
      return false;
    }
    if (password.length < 8) {
      alert("Password at least 8 char");
      return false;
    }
    return true;
  };
  const renderRegisterStatus = (status) => {
    if (isRegistering) {
      return <View />;
    } else if (!status) {
      return <Text>Email or Phone was used!</Text>;
    } else {
      return (
        <Text>
          Your account was created, please verify your email address!!
        </Text>
      );
    }
  };
  const handleCancel = () => {
    RootNavigation.goBack();
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.logo, { color: theme.text }]}>
        {language.CREATE_ACCOUNT}
      </Text>
      <View
        style={[styles.inputView, { backgroundColor: theme.backgroundSection }]}
      >
        <TextInput
          placeholder={language.NAME}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setFullName(value)}
          style={{ color: theme.text }}
        />
      </View>
      <View
        style={[styles.inputView, { backgroundColor: theme.backgroundSection }]}
      >
        <TextInput
          placeholder={"Email..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setEmail(value)}
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
          onChangeText={(value) => setPassword(value)}
          style={{ color: theme.text }}
        />
      </View>
      <View
        style={[styles.inputView, { backgroundColor: theme.backgroundSection }]}
      >
        <TextInput
          placeholder={language.PHONE}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setPhone(value)}
          style={{ color: theme.text }}
        />
      </View>
      {renderRegisterStatus(authContext.state.registerSuccess)}

      <TouchableOpacity style={styles.loginBtn} onPress={onPressedSignUp}>
        <Text style={[styles.loginText, { color: theme.text }]}>
          {language.SIGN_UP}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCancel}>
        <Text style={[styles.loginText, { color: theme.text }]}>
          {language.CANCEL}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Register;
