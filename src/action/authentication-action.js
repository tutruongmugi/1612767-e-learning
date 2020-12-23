import {
  apiLogin,
  apiRegister,
  apiSendEmail,
  apiSendActiveEmail,
  apiUpdateProfile,
  apiChangePassword,
} from "../core/services/authentication-services";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESSED = "LOGIN_SUCCESSED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";
export const REGISTER_SUCCESSED = "REGISTER_SUCCESSED";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const SEND_EMAIL_SUCCESSED = "SEND_EMAIL_SUCCESSED";
export const SEND_EMAIL_FAILED = "SEND_EMAIL_FAILED";
export const SEND_EMAIL_REQUEST = "SEND_EMAIL_REQUEST";
export const UPDATE_PROFILE_SUCCESSED = "UPDATE_PROFILE_SUCCESSED";
export const UPDATE_PROFILE_FAILED = "UPDATE_PROFILE_FAILED";
export const UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILED = "CHANGE_PASSWORD_FAILED";

export const Login = (dispatch, email, password) => {
  dispatch({ type: LOGIN_REQUEST });
  apiLogin(email, password)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: LOGIN_SUCCESSED, data: response.data });
      } else {
        dispatch({ type: LOGIN_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILED });
    });
};
export const Logout = (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const Register = (dispatch, fullName, email, phone, password) => {
  apiRegister(fullName, email, phone, password)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: REGISTER_SUCCESSED });
      } else {
        dispatch({ type: REGISTER_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: REGISTER_FAILED });
    });
};

export const SendEmail = (dispatch, email) => {
  apiSendEmail(email)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: SEND_EMAIL_SUCCESSED });
      } else {
        dispatch({ type: SEND_EMAIL_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: SEND_EMAIL_FAILED });
    });
};
export const SendActiveEmail = (dispatch, email) => {
  apiSendActiveEmail(email)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: SEND_EMAIL_SUCCESSED });
      } else {
        dispatch({ type: SEND_EMAIL_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: SEND_EMAIL_FAILED });
    });
};
export const UpdateProfile = (dispatch, token, name, avatar, phone) => {
  apiUpdateProfile(token, name, avatar, phone)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: UPDATE_PROFILE_SUCCESSED, data: response.data });
      } else {
        dispatch({ type: UPDATE_PROFILE_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: UPDATE_PROFILE_FAILED });
    });
};
export const ChangePassword = (dispatch, token, id, oldPass, newPass) => {
  apiChangePassword(token, id, oldPass, newPass)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: CHANGE_PASSWORD_SUCCESS });
      } else {
        dispatch({ type: CHANGE_PASSWORD_FAILED });
      }
    })
    .catch((error) => {
      console.log("FDSFDS");
      dispatch({ type: CHANGE_PASSWORD_FAILED });
    });
};
