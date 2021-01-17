import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../../../../provider/theme-provider";

function SearchForm({ handleSearch, handleInputChange }) {
  const input = React.createRef();
  const [value, setValue] = useState("");
  const { language } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.searchIcon}
        name="md-search"
        onPress={handleSearch}
      />
      <TextInput
        value={value}
        ref={input}
        onChangeText={(value) => {
          setValue(value);
          handleInputChange(value);
        }}
        placeholder={`${language.SEARCH}...`}
        style={styles.textInput}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 5,
    marginTop: 20,
    borderRadius: 8,
    borderColor: "#111",
    borderWidth: 1,
  },
  textInput: {
    flex: 1,
    // borderWidth: 1,
    color: "#111",
  },
  searchIcon: {
    fontSize: 20,
    padding: 5,
  },
});
export default SearchForm;
