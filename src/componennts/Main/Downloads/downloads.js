import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { CoursesContext } from "../../../provider/courses-provider";
import { ThemeContext } from "../../../provider/theme-provider";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Favourites from "./Favourites/favourites";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createMaterialTopTabNavigator();

function Downloads() {
  const [isloading, setIsloading] = useState(true);
  const {
    courseState,
    getFavouriteCourses,
    startGetFavouriteCourses,
    // getProcessCoursesFunc,
  } = useContext(CoursesContext);
  const { state } = useContext(AuthenticationContext);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    getFavouriteCourses(state.token);
  }, [courseState.changeFavouriteSucess]);
  // useEffect(() => {
  //   getProcessCoursesFunc(state.token);
  // }, [courseState.getFreeCoursesStatus]);
  useEffect(() => {
    if (courseState.getFavouriteCourseStatus == true) {
      setIsloading(false);
      startGetFavouriteCourses();
    }
  }, [courseState.getFavouriteCourseStatus]);
  const getMyObject = async () => {
    try {
      const downloadCourses = await AsyncStorage.getItem("@MyApp_7");
      courseState.DownloadedCourses = JSON.parse(downloadCourses);
      console.log("Tessss", courseState.DownloadedCourses);
    } catch (e) {}
  };
  useEffect(() => {
    getMyObject();
  }, []);
  return (
    <View
      style={{ flex: 1, backgroundColor: theme.background, height: "100%" }}
    >
      {isloading ? (
        <View
          style={{ justifyContent: "center", flex: 1, flexDirection: "row" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="Download"
            children={() => <Favourites data={courseState.DownloadedCourses} />}
          />
          <Tab.Screen
            name="Favourites"
            children={() => <Favourites data={courseState.favouriteCourses} />}
          />
          <Tab.Screen
            name="My Courses"
            children={() => <Favourites data={courseState.processCourses} />}
          />
        </Tab.Navigator>
      )}
    </View>
  );
}

export default Downloads;
