import React, { useContext } from "react";
import { TouchableOpacity, Image } from "react-native";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from "../../AccountManagement/Profile/EditProfiile/edit-profile";
import { ThemeContext } from "../../../provider/theme-provider";

const Stack = createStackNavigator();

function EditProfileStackScreen() {
  const { language } = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserProfileStackScreen"
        component={EditProfile}
        options={{
          headerTitle: language.EDIT_PROFILE,
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

export default EditProfileStackScreen;
