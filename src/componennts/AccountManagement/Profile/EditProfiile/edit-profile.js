import React, { useContext, useState, useEffect } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../../globals/styles";
import { AuthenticationContext } from "../../../../provider/authentication-provider";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";

function EditProfile() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isUpdating, setIsUpdating] = useState(true);
  const { state, updateProfile, startUpdateProfile } = useContext(
    AuthenticationContext
  );

  const handleSubmit = () => {
    updateProfile(state.token, name, avatar, phone);
    setIsUpdating(false);
  };
  useEffect(() => {
    setName(state.userInfo.name);
    setPhone(state.userInfo.phone);
    setAvatar("");
  }, []);
  useEffect(() => {
    if (state.updateProfileSuccess) {
      startUpdateProfile();
      RootNavigation.navigate("UserProfile");
    }
  }, [state.updateProfileSuccess]);
  const renderUpdateProfileStatus = (status) => {
    if (isUpdating) {
      return <View />;
    } else if (!status) {
      return <Text>Name or Phone is required!</Text>;
    } else {
      return <Text>Updating successfully!!</Text>;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Edit Your Profile</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Name..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setName(value)}
          value={name}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Phone..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setPhone(value)}
          value={phone}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Avatar..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setAvatar(value)}
        />
      </View>
      {renderUpdateProfileStatus(state.updateProfileSuccess)}
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
export default EditProfile;
