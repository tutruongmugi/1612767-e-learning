import React, { useContext, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SearchAlls from "./Alls/search-alls";
import SearchAuthors from "./Authors/search-authors";
import SearchCourses from "./Courses/search-courses";
import SearchPaths from "./Paths/search-paths";
import SearchForm from "./SearchForm/search-form";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CoursesContext } from "../../../provider/courses-provider";
import { PathsContext } from "../../../provider/paths-provider";
import { AuthorsContext } from "../../../provider/authors-provider";

const Tab = createMaterialTopTabNavigator();

function Search() {
  const { courses } = useContext(CoursesContext);
  const { paths } = useContext(PathsContext);
  const { authors } = useContext(AuthorsContext);
  const [searchStatus, setSearchStatus] = useState(false);
  const [currentKeyword, setCurrentKeyword] = useState("");

  const handleSearch = () => {};
  const handleInputChange = (value) => {
    setCurrentKeyword(value);
  };
  const searchCoursesByTitle = () => {
    return courses.filter((course) => course.title.includes(currentKeyword));
  };
  const searchPathsByTitle = () => {
    return paths.filter((path) => path.title.includes(currentKeyword));
  };
  const searchAuthorsByTitle = () => {
    return authors.filter((author) => author.name.includes(currentKeyword));
  };
  return (
    <ScrollView>
      <SearchForm
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
      />
      <Tab.Navigator>
        <Tab.Screen
          name="Alls"
          children={() => (
            <SearchAlls
              courses={searchCoursesByTitle()}
              authors={searchAuthorsByTitle()}
              paths={searchPathsByTitle()}
            />
          )}
          options={{ tabBarLabel: "Alls" }}
        />
        <Tab.Screen
          name="Courses"
          children={() => <SearchCourses courses={searchCoursesByTitle()} />}
          options={{ tabBarLabel: "Courses" }}
        />
        <Tab.Screen
          name="Authors"
          children={() => <SearchAuthors authors={searchAuthorsByTitle()} />}
          options={{ tabBarLabel: "Authors" }}
        />
        <Tab.Screen
          name="Paths"
          children={() => <SearchPaths paths={searchPathsByTitle()} />}
          options={{ tabBarLabel: "Paths" }}
        />
      </Tab.Navigator>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  search: {
    width: 50,
    height: 50,
  },
  container: {
    backgroundColor: "#F0F2F5",
  },
});
export default Search;
