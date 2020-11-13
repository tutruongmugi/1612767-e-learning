import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SearchAlls from "./Alls/search-alls";
import SearchAuthors from "./Authors/search-authors";
import SearchCourses from "./Courses/search-courses";
import SearchPaths from "./Paths/search-paths";
import SearchForm from "./SearchForm/search-form";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function Search() {
  return (
    <ScrollView>
      <SearchForm />
      <Tab.Navigator>
        <Tab.Screen
          name="Alls"
          component={SearchAlls}
          options={{ tabBarLabel: "Alls" }}
        />
        <Tab.Screen
          name="Courses"
          component={SearchCourses}
          options={{ tabBarLabel: "Courses" }}
        />
        <Tab.Screen
          name="Authors"
          component={SearchAuthors}
          options={{ tabBarLabel: "Authors" }}
        />
        <Tab.Screen
          name="Paths"
          component={SearchPaths}
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
});
export default Search;
