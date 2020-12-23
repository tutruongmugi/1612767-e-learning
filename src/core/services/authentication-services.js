import axios from "axios";

export const apiUrl = "http://api.dev.letstudy.org";

export const apiLogin = (email, password) => {
  return axios.post(apiUrl + "/user/login", {
    email: email,
    password: password,
  });
};
export const apiRegister = (fullName, email, phone, password) => {
  return axios.post(apiUrl + "/user/register", {
    username: fullName,
    email: email,
    phone: phone,
    password: password,
  });
};
export const apiSendEmail = (email) => {
  return axios.post(apiUrl + "/user/forget-pass/send-email", {
    email: email,
  });
};
export const apiSendActiveEmail = (email) => {
  return axios.post(apiUrl + "/user/send-active-email", {
    email: email,
  });
};
export const apiUpdateProfile = (token, name, avatar, phone) => {
  return axios.put(
    apiUrl + "/user/update-profile",
    {
      name: name,
      avatar: avatar,
      phone: phone,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
export const apiChangePassword = (token, id, oldPass, newPass) => {
  return axios.post(
    apiUrl + "/user/change-password",
    {
      id: id,
      oldPass: oldPass,
      newPass: newPass,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
