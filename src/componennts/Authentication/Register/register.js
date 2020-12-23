import React, { useState, useEffect, useContext } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "../../../globals/styles";
import { AuthenticationContext } from "../../../provider/authentication-provider";
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
    authContext.register(fullName, email, phone, password);
    setIsRegistering(false);
  };

  // const validate = ()=>{
  //   if(!email.includes('@')){
  //     setError("Incorrect Email");
  //     return false;
  //   }
  //   if(email.length==0||phone.length==0||fullName.length==0){
  //     setError('This information is required');
  //     return false;
  //   }
  //   if(password.length<8||rePassword.length<8){
  //     setError('Password at least 8 char');
  //     return false;
  //   }
  //   return true;
  // }
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
    <View style={styles.container}>
      <Text style={styles.logo}>Create Account</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Name..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setFullName(value)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Email..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
          placeholder={"Password..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Phone..."}
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setPhone(value)}
        />
      </View>
      {renderRegisterStatus(authContext.state.registerSuccess)}

      <TouchableOpacity style={styles.loginBtn} onPress={onPressedSignUp}>
        <Text style={styles.loginText}>CREATE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCancel}>
        <Text style={styles.loginText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Register;
