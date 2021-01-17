import React, { useContext } from "react";
import { TouchableOpacity, Image } from "react-native";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import ChangePassword from "../../AccountManagement/Profile/ChangePassword/change-password";
import { ThemeContext } from "../../../provider/theme-provider";

const Stack = createStackNavigator();

function ChangePasswordStackScreen() {
  const { language } = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChangePasswordStackScreen"
        component={ChangePassword}
        options={{
          headerTitle: language.CHANGE_PASSWORD,
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

export default ChangePasswordStackScreen;
