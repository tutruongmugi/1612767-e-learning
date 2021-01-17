import React, { useContext, useState, useEffect } from "react";
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
import Ionicons from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../../../provider/theme-provider";

const Tab = createMaterialTopTabNavigator();

function Search() {
  const { courseState, getListCoursesBySearchKeyword } = useContext(
    CoursesContext
  );
  const { paths } = useContext(PathsContext);
  const { AuthorState } = useContext(AuthorsContext);
  const [searchStatus, setSearchStatus] = useState(true);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const { theme, language } = useContext(ThemeContext);

  const handleSearch = () => {};
  const handleInputChange = (value) => {
    setSearchStatus(false);
    setCurrentKeyword(value);
  };
  useEffect(() => {
    getListCoursesBySearchKeyword(currentKeyword);
  }, [currentKeyword]);
  // const searchCoursesByTitle = () => {
  //   return courses.filter((course) => course.title.includes(currentKeyword));
  // };
  const searchPathsByTitle = () => {
    return paths.filter((path) => path.title.includes(currentKeyword));
  };
  const searchAuthorsByTitle = () => {
    return AuthorState.authors.filter((author) =>
      author["user.name"].includes(currentKeyword)
    );
  };
  return (
    <ScrollView>
      <SearchForm
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
      />
      {searchStatus ? (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 550,
          }}
        >
          <Ionicons
            style={{
              fontSize: 50,
              padding: 5,
            }}
            name="md-search"
          />
        </View>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name={language.ALL}
            children={() => (
              <SearchAlls
                courses={courseState.listCoursesBySearchKeyword}
                authors={searchAuthorsByTitle()}
                paths={searchPathsByTitle()}
              />
            )}
          />
          <Tab.Screen
            name={language.COURSE}
            children={() => (
              <SearchCourses courses={courseState.listCoursesBySearchKeyword} />
            )}
            // options={{ tabBarLabel: "Courses" }}
          />
          <Tab.Screen
            name={language.AUTHOR}
            children={() => <SearchAuthors authors={searchAuthorsByTitle()} />}
            // options={{ tabBarLabel: "Authors" }}
          />
          <Tab.Screen
            name="Path"
            children={() => <SearchPaths paths={searchPathsByTitle()} />}
            // options={{ tabBarLabel: "Paths" }}
          />
        </Tab.Navigator>
      )}
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
