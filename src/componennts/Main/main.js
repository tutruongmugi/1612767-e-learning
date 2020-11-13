import React from "react";
import { Alert, StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Search from "./Search/search";
import CourseDetail from "../CourseDetail/course-detail";
import Home from "./Home/home";
import Downloads from "./Downloads/downloads";
import Browse from "./Browse/browse";
import { ScreenContainer } from "react-native-screens";

const Stack = createStackNavigator();

// const SearchStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: "#f4511e" },
//         headerTintColor: "#fff",
//         headerTitleStyle: { fontWeight: "bold" },
//       }}
//       mode="modal"
//     >
//       <Stack.Screen
//         name="ListCourses"
//         component={Search}
//         options={{
//           title: "List Courses",
//           headerRight: () => (
//             <Button
//               onPress={() => Alert.alert("Settings", "This is settings screen")}
//               title="Settings"
//               color="#f4511e"
//             />
//           ),
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="CourseDetail"
//         component={CourseDetail}
//         options={{ title: "Course Detail", headerShown: false }}
//         // options={({ route }) => ({ title: route.params.item.title })}
//       />
//     </Stack.Navigator>
//   );
// };

const Tab = createBottomTabNavigator();

function Main() {
  const courses = [
    {
      id: 1,
      title: "react-native",
      author: "kuro",
      level: "Advanced",
      released: "May 2, 2020",
      duration: "30 hours",
    },
    {
      id: 2,
      title: "IOS",
      author: "yuuki",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "35 hours",
    },
    {
      id: 3,
      title: "Android",
      author: "Master",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "25 hours",
    },
    {
      id: 4,
      title: "react-native",
      author: "kuro",
      level: "Advanced",
      released: "May 2, 2020",
      duration: "30 hours",
    },
    {
      id: 5,
      title: "IOS",
      author: "yuuki",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "35 hours",
    },
    {
      id: 6,
      title: "Android",
      author: "Master",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "25 hours",
    },
  ];
  //   React.useLayoutEffect(() => {
  //     navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  //   }, [navigation, route]);
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Downloads" component={Downloads} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 24,
  },
});

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;
    switch (route.name) {
      case "Home":
        iconName = "md-home";
        break;
      case "Downloads":
        iconName = "md-download";
        break;
      case "Browse":
        iconName = "ios-apps";
        break;
      case "Search":
        iconName = "md-search";
        break;
      default:
        iconName = "help-outline";
        break;
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarLabel: route.name,
});

export default Main;
