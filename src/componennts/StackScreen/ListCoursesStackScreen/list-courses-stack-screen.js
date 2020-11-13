import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "../../AccountManagement/Setting/setting";
import ListCourses from "../../Courses/ListCourses/list-courses";

const Stack = createStackNavigator();

function ListCoursesStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListCoursesStackScreen"
        component={ListCourses}
        options={{
          headerTitle: "New",
          headerStyle: {
            backgroundColor: "#e91e63",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}
export default ListCoursesStackScreen;
