import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../Main/Home/home";

const Stack = createStackNavigator();

function HomeStackScreen() {
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: "balm",
      }}
    />
  </Stack.Navigator>;
}

export default HomeStackScreen;
