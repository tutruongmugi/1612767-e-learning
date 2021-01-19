import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../../../../provider/theme-provider";

function SearchForm({ handleSearch, currentKeyword, setCurrentKeyword }) {
  const input = React.createRef();
  // const [value, setValue] = useState(startValue);
  const { language } = useContext(ThemeContext);

  useEffect(() => {
    console.log("start:", currentKeyword);
  }, [currentKeyword]);

  return (
    <View style={styles.container}>
      <TextInput
        value={currentKeyword}
        ref={input}
        onChangeText={(value) => {
          setCurrentKeyword(value);
        }}
        placeholder={`${language.SEARCH}...`}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={() => handleSearch()}>
        <Ionicons style={styles.searchIcon} name="md-search" />
      </TouchableOpacity>
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
    paddingLeft: 8,
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
