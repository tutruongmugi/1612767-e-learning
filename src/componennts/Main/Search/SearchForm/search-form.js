import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { Card } from "react-native-paper";

function SearchForm() {
  const input = React.createRef();
  const [value, setValue] = useState("");
  const handleSearch = () => {
    setValue("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        ref={input}
        onChangeText={(value) => {
          setValue(value);
        }}
        placeholder="Search"
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.searchIcon} onPress={handleSearch}>
        <Text>search</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
  },
  searchIcon: {
    width: 60,
    height: 40,
  },
});
export default SearchForm;
