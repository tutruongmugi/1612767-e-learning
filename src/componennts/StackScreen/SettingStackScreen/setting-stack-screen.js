import React, { useContext } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "../../AccountManagement/Setting/setting";
import { ThemeContext } from "../../../provider/theme-provider";

const Stack = createStackNavigator();

function SettingStackScreen() {
  const { language } = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingStackScreen"
        component={Setting}
        options={{
          headerTitle: language.SETTING,
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
