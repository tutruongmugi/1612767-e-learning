import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ListCourses from "../../Courses/ListCourses/list-courses";

const Stack = createStackNavigator();

function ListCoursesStackScreen({ route }) {
  const params = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListCoursesStackScreen"
        component={(props) => <ListCourses courses={params.item} {...props} />}
        options={{
          headerTitle: params.title,
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