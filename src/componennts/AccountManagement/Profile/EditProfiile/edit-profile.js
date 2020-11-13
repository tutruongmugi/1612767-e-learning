import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../../globals/styles";

function EditProfile() {
  const handleNameInputChange = () => {};
  const handlePhoneInputChange = () => {};
  const handleAvatarInputChange = () => {};
  const handleSubmit = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Edit Your Profile</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Name..."}
          placeholderTextColor="#003f5c"
          onChangeText={handleNameInputChange}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Phone..."}
          placeholderTextColor="#003f5c"
          onChangeText={handlePhoneInputChange}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Avatar..."}
          placeholderTextColor="#003f5c"
          onChangeText={handleAvatarInputChange}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={handleSubmit}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default EditProfile;
