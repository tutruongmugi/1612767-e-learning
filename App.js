import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/componennts/Authentication/Login/login";
import Register from "./src/componennts/Authentication/Register/register";
import ForgetPassword from "./src/componennts/Authentication/ForgetPassword/forget-password";
import VerifyPassword from "./src/componennts/Authentication/verify-password";
import ChangePassword from "./src/componennts/AccountManagement/Profile/change-password";
import EditProfile from "./src/componennts/AccountManagement/Profile/edit-profile";
import UserProfile from "./src/componennts/AccountManagement/Profile/user-profile";
import Home from "./src/componennts/Main/Home/home";

import ListCourses from "./src/componennts/Courses/ListCourses/list-courses";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CourseDetail from "./src/componennts/CourseDetail/course-detail";
import Downloads from "./src/componennts/Main/Downloads/downloads";
import Browse from "./src/componennts/Main/Browse/browse";
import Search from "./src/componennts/Main/Search/search";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListCourses" component={Search} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 24,
  },
});
