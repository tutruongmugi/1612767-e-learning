export const login = (email, password) => {
  if (email.toLowerCase() === "admin") {
    if (password === "123456") {
      return {
        status: 200,
        user: { email: email, token: "abc", fullName: "Kuro" },
      };
    } else {
      return { status: 404, errorString: "Email or Password was incorrect" };
    }
  }
  return { status: 404, errorString: "email is not existed" };
};
