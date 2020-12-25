import React from "react";
import { TouchableOpacity, Image } from "react-native";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import AuthorDetail from "../../Authors/AuthorDetail/author-detail";

const Stack = createStackNavigator();

function AuthorDetailStackScreen({ route }) {
  const params = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthorDetailStackScreen"
        component={(props) => (
          <AuthorDetail authorId={params.authorId} {...props} />
        )}
        options={{
          headerTitle: "Author",
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

export default AuthorDetailStackScreen;
