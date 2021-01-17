import React, { useContext } from "react";
import { TouchableOpacity, Image } from "react-native";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import UserProfile from "../../AccountManagement/Profile/UserProfile/user-profile";
import { ThemeContext } from "../../../provider/theme-provider";

const Stack = createStackNavigator();

function UserProfileStackScreen() {
  const OnPressed = () => {
    RootNavigation.navigate("Setting");
  };
  const { language } = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserProfileStackScreen"
        component={UserProfile}
        options={{
          headerTitle: language.PROFILE,
          headerStyle: {
            backgroundColor: "#e91e63",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <TouchableOpacity onPress={OnPressed}>
              <Image
                style={{ marginLeft: 5, width: 25, height: 25, marginRight: 5 }}
                source={require("../../../../assets/icon-setting.png")}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default UserProfileStackScreen;
