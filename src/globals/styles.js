import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#000000",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 10,
  },
  inputText: {
    height: 50,
    color: "#000000",
  },
  forgot: {
    color: "#000000",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#FFBD2F",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "#000000",
  },
  caption: {
    fontSize: 30,
    letterSpacing: 0.4,
    color: "#a6a6a6",
    marginBottom: 20,
    width: "80%",
    padding: 10,
  },
});

export default styles;
