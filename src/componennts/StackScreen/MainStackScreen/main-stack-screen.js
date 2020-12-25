import React, { useContext } from "react";
import { TouchableOpacity, Image } from "react-native";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../../Main/main";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { AuthenticationContext } from "../../../provider/authentication-provider";

const Stack = createStackNavigator();

function MainStackScreen() {
  const { state } = useContext(AuthenticationContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainStackScreen"
        component={Main}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => RootNavigation.navigate("UserProfile")}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50 / 2,
                  overflow: "hidden",
                  borderWidth: 1,
                  margin: 5,
                }}
                // source={{
                //   uri:
                //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnawXcdwPn0r48TZ9H-e9g_RVOwgTJFY1XPg&usqp=CAU",
                // }}
                source={{
                  uri:
                    state.userInfo.avatar === ""
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnawXcdwPn0r48TZ9H-e9g_RVOwgTJFY1XPg&usqp=CAU"
                      : state.userInfo.avatar,
                }}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <Image
              style={{ marginLeft: 5, width: 50, height: 50 }}
              source={require("../../../../assets/logo.png")}
            />
          ),
          headerShown: notSearchTab(route),
          headerStyle: {
            backgroundColor: "#e91e63",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
    </Stack.Navigator>
  );
}
const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

  return routeName;
};

const notSearchTab = (route) => {
  if (getHeaderTitle(route) === "Search") {
    return false;
  }
  return true;
};

export default MainStackScreen;
