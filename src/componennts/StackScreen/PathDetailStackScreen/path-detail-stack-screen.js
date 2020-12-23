import React from "react";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import PathDetail from "../../Paths/PathDetail/path-detail";

const Stack = createStackNavigator();

function PathDetailStackScreen({ route }) {
  const params = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PathDetailStackScreen"
        component={(props) => <PathDetail path={params.item} {...props} />}
        options={{
          headerTitle: "Path Detail",
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

export default PathDetailStackScreen;
