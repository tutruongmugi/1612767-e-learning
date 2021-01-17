import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F2F5",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#050505",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#Fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 10,
  },
  inputText: {
    height: 50,
    color: "#65676B",
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
    fontSize: 20,
    letterSpacing: 0.4,
    color: "#65676B",
    marginBottom: 20,
    width: "80%",
    padding: 10,
  },
});

export default styles;
