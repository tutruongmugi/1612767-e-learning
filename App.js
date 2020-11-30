import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import Login from "./src/componennts/Authentication/Login/login";
import Register from "./src/componennts/Authentication/Register/register";
import ForgetPassword from "./src/componennts/Authentication/ForgetPassword/forget-password";
import VerifyPassword from "./src/componennts/Authentication/VerifyPassword/verify-password";
import ChangePassword from "./src/componennts/AccountManagement/Profile/ChangePassword/change-password";
import EditProfile from "./src/componennts/AccountManagement/Profile/EditProfiile/edit-profile";
import UserProfile from "./src/componennts/AccountManagement/Profile/UserProfile/user-profile";
import Home from "./src/componennts/Main/Home/home";

import ListCourses from "./src/componennts/Courses/ListCourses/list-courses";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CourseDetail from "./src/componennts/CourseDetail/course-detail";
import Downloads from "./src/componennts/Main/Downloads/downloads";
import Browse from "./src/componennts/Main/Browse/browse";
import Search from "./src/componennts/Main/Search/search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VideoPlayer from "./src/componennts/CourseDetail/VideoPlayer/video-player";
import Ionicons from "react-native-vector-icons/Ionicons";
import Main from "./src/componennts/Main/main";
import { navigationRef } from "./src/routes/navigations/root-navigation";
import * as RootNavigation from "./src/routes/navigations/root-navigation";
import MainStackScreen from "./src/componennts/StackScreen/MainStackScreen/main-stack-screen";
import UserProfileStackScreen from "./src/componennts/StackScreen/UserProfileStackScreen/user-profle-stack-screen";
import EditProfileStackScreen from "./src/componennts/StackScreen/EditProfiileStackScreen/edit-profile-stack-screen";
import ChangePasswordStackScreen from "./src/componennts/StackScreen/ChangePasswordStackScreen/change-password-stack-screen";
import SettingStackScreen from "./src/componennts/StackScreen/SettingStackScreen/setting-stack-screen";
import ListCoursesStackScreen from "./src/componennts/StackScreen/ListCoursesStackScreen/list-courses-stack-screen";
import { MenuProvider } from "react-native-popup-menu";
import SplashScreen from "./src/componennts/SplashScreen/splash-screen";
import { AppProvider } from "./src/provider/app-provider";
import NewRelease from "./src/componennts/Content/NewRelease/new-release";
import RecommendForYou from "./src/componennts/Content/RecommendForYou/recommend-for-you";
import AuthorDetail from "./src/componennts/Authors/AuthorDetail/author-detail";
import PathDetail from "./src/componennts/Paths/PathDetail/path-detail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <MenuProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
              name="Main"
              component={MainStackScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CourseDetail"
              component={CourseDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={({ route }) => {
                headerTitle: getFocusedRouteNameFromRoute(route);
              }}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyPassword"
              component={VerifyPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePasswordStackScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfileStackScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserProfile"
              component={UserProfileStackScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setting"
              component={SettingStackScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListCourses"
              component={ListCourses}
              options={{ headerTitle: "" }}
            />
            <Stack.Screen
              name="NewRelease"
              component={NewRelease}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecommendForYou"
              component={RecommendForYou}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AuthorDetail"
              component={AuthorDetail}
              options={({ route }) => {
                headerTitle: getFocusedRouteNameFromRoute(route);
              }}
            />
            <Stack.Screen
              name="PathDetail"
              component={PathDetail}
              options={({ route }) => {
                headerTitle: getFocusedRouteNameFromRoute(route);
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MenuProvider>
    </AppProvider>
  );
}
