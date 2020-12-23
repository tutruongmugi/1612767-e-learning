import {
  LOGIN_SUCCESSED,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGOUT,
  REGISTER_SUCCESSED,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  SEND_EMAIL_SUCCESSED,
  SEND_EMAIL_FAILED,
  SEND_EMAIL_REQUEST,
  UPDATE_PROFILE_SUCCESSED,
  UPDATE_PROFILE_FAILED,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILED,
} from "../action/authentication-action";

export const reducer = (prevState, action) => {
  console.log("Authentication Reducer: ", action);
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        isAuthenticating: true,
      };
    case LOGIN_SUCCESSED:
      return {
        ...prevState,
        isAuthenticated: true,
        isAuthenticating: false,
        token: action.data.token,
        userInfo: action.data.userInfo,
      };
    case LOGIN_FAILED:
      return {
        ...prevState,
        isAuthenticated: false,
        isAuthenticating: false,
      };
    case LOGOUT:
      return {
        ...prevState,
        isAuthenticated: false,
        isAuthenticating: false,
        token: null,
        userInfo: null,
      };
    case REGISTER_SUCCESSED:
      return {
        ...prevState,
        registerSuccess: true,
      };
    case REGISTER_FAILED:
      return {
        ...prevState,
        registerSuccess: false,
      };
    case REGISTER_REQUEST:
      return {
        ...prevState,
        registerSuccess: false,
      };
    case SEND_EMAIL_SUCCESSED:
      return {
        ...prevState,
        sendEmailSuccess: true,
      };
    case SEND_EMAIL_FAILED:
      return {
        ...prevState,
        sendEmailSuccess: false,
      };
    case SEND_EMAIL_REQUEST:
      return {
        ...prevState,
        sendEmailSuccess: false,
      };
    case UPDATE_PROFILE_SUCCESSED:
      return {
        ...prevState,
        userInfo: action.data.payload,
        updateProfileSuccess: true,
      };
    case UPDATE_PROFILE_FAILED:
      return {
        ...prevState,
        updateProfileSuccess: false,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...prevState,
        changePasswordSucess: true,
      };
    case CHANGE_PASSWORD_FAILED:
      return {
        ...prevState,
        changePasswordSucess: false,
      };
    // default:
    //   throw new Error();
  }
};
