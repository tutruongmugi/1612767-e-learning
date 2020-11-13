import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "../../AccountManagement/Setting/setting";

const Stack = createStackNavigator();

function SettingStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingStackScreen"
        component={Setting}
        options={{
          headerTitle: "Setting",
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
export default SettingStackScreen;
