import React, { useState, useContext, useEffect } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../globals/styles";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { ThemeContext } from "../../../provider/theme-provider";
import * as RootNavigation from "../../../routes/navigations/root-navigation";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(true);
  const authContext = useContext(AuthenticationContext);
  const { theme, language } = useContext(ThemeContext);

  useEffect(() => {
    if (authContext.state.sendEmailSuccess) {
      setEmail("");
      setIsSending(true);
      authContext.startSendEmail();
      RootNavigation.navigate("Login");
    }
  }, [authContext.state.sendEmailSuccess]);

  const handleSubmit = () => {
    if (validateField()) {
      authContext.sendEmail(email);
      setIsSending(false);
    }
  };
  const handleCancel = () => {
    RootNavigation.goBack();
  };
  const renderSendEmailStatus = (status) => {
    if (isSending) {
      return <View />;
    } else if (!status) {
      return <Text>Email wasn't registered!</Text>;
    } else {
      return <Text>Email was sent successful!!</Text>;
    }
  };
  const validateField = () => {
    if (email === "") {
      alert("Email is required!");
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
        {language.RESET_YOUR_PASSWORD}
      </Text>
      <Text style={[styles.caption, { color: theme.darkText }]}>
        {language.RESET_PASSWORD_NOTIFY}
      </Text>
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
      {renderSendEmailStatus(authContext.state.sendEmailSuccess)}
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={[styles.loginText, { color: theme.text }]}>
          {language.SUBMIT}
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

export default ForgetPassword;
