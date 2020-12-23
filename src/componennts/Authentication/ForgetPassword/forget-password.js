import React, { useState, useContext, useEffect } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../globals/styles";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import * as RootNavigation from "../../../routes/navigations/root-navigation";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(true);
  const authContext = useContext(AuthenticationContext);

  useEffect(() => {
    if (authContext.state.sendEmailSuccess) {
      setEmail("");
      setIsSending(true);
      authContext.startSendEmail();
      RootNavigation.navigate("Login");
    }
  }, [authContext.state.sendEmailSuccess]);

  const handleSubmit = () => {
    authContext.sendEmail(email);
    setIsSending(false);
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
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      {renderSendEmailStatus(authContext.state.sendEmailSuccess)}
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCancel}>
        <Text style={styles.loginText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgetPassword;
