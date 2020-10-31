import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../globals/styles";

function VerifyPassword() {
  const handleCodeInputChange = () => {};
  const handleSubmit = () => {};
  const handleCancel = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Verify Your Password</Text>
      <Text style={styles.caption}>
        We will send you a code to verify your account.
      </Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Code..."}
          placeholderTextColor="#003f5c"
          onChangeText={handleCodeInputChange}
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

export default VerifyPassword;
