import React from "react";
import { TouchableOpacity, Image } from "react-native";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from "../../AccountManagement/Profile/EditProfiile/edit-profile";

const Stack = createStackNavigator();

function EditProfileStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserProfileStackScreen"
        component={EditProfile}
        options={{
          headerTitle: "Edit Profile",
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
