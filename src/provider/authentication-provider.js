import React, { useReducer } from "react";
import { View } from "react-native";
import { reducer } from "../reducer/authentication-reducer";
import {
  Login,
  Logout,
  Register,
  SendEmail,
  SendActiveEmail,
  UpdateProfile,
  ChangePassword,
} from "../action/authentication-action";

const AuthenticationContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  userInfo: null,
  token: null,
  registerSuccess: false,
  sendEmailSuccess: false,
  updateProfileSuccess: false,
  changePasswordSucess: false,
};
const AuthenticationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const logout = () => {
    Logout(dispatch);
  };
  const login = (email, password) => {
    Login(dispatch, email, password);
  };
  const register = (fullName, email, phone, password) => {
    Register(dispatch, fullName, email, phone, password);
  };
  const startRegister = () => {
    dispatch({ type: "REGISTER_REQUEST" });
  };
  const sendEmail = (email) => {
    SendEmail(dispatch, email);
  };
  const startSendEmail = () => {
    dispatch({ type: "SEND_EMAIL_REQUEST" });
  };
  const sendActiveEmail = (email) => {
    SendActiveEmail(dispatch, email);
  };
  const updateProfile = (token, name, avatar, phone) => {
    UpdateProfile(dispatch, token, name, avatar, phone);
  };
  const startUpdateProfile = () => {
    dispatch({ type: "UPDATE_PROFILE_FAILED" });
  };
  const changePassword = (token, id, oldPass, newPass) => {
    ChangePassword(dispatch, token, id, oldPass, newPass);
  };
  const startChangePassword = () => {
    dispatch({ type: "CHANGE_PASSWORD_FAILED" });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        state,
        login,
        logout,
        register,
        startRegister,
        sendEmail,
        startSendEmail,
        sendActiveEmail,
        updateProfile,
        startUpdateProfile,
        changePassword,
        startChangePassword,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationProvider, AuthenticationContext };
