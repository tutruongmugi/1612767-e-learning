import React from "react";
import { View, StyleSheet } from "react-native";
import SearchAll from "./Alls/search-all";
import SearchAuthors from "./Authors/search-authors";
import SearchCourses from "./Courses/search-courses";
import SearchPaths from "./Paths/search-paths";
import SearchForm from "./SearchForm/search-form";

function Search() {
  return (
    <View>
      <SearchForm />
      <SearchAll />
    </View>
  );
}
const styles = StyleSheet.create({
  search: {
    width: 50,
    height: 50,
  },
});
export default Search;
