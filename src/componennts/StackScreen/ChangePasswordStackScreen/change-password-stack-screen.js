import React from "react";
import { TouchableOpacity, Image } from "react-native";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import ChangePassword from "../../AccountManagement/Profile/ChangePassword/change-password";

const Stack = createStackNavigator();

function ChangePasswordStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChangePasswordStackScreen"
        component={ChangePassword}
        options={{
          headerTitle: "Change Password",
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
