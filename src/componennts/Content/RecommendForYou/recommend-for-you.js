import React, { useContext } from "react";
import {
  View,
  ImageBackground,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { CoursesContext } from "../../../provider/courses-provider";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { ThemeContext } from "../../../provider/theme-provider";

function RecommendForYou({ route }) {
  const { courseState } = useContext(CoursesContext);
  const { theme } = useContext(ThemeContext);

  const OnPressedBackButton = () => {
    RootNavigation.goBack();
  };
  return (
    <View
      style={{ flex: 1, backgroundColor: theme.background, height: "100%" }}
    >
      <ImageBackground
        style={{ height: 150 }}
        source={{
          uri: "https://wallpaperaccess.com/full/889209.png",
        }}
      >
        <Text
          style={{
            fontSize: 36,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          {route.params.title}
        </Text>
        <TouchableOpacity
          onPress={OnPressedBackButton}
          style={{
            padding: 8,
            position: "absolute",
            fontSize: 32,
            marginTop: 8,
          }}
        >
          <Image source={require("../../../../assets/icons8-back-26.png")} />
        </TouchableOpacity>
      </ImageBackground>
      <FlatList
        data={courseState.topRecommendCourses}
        renderItem={({ item }) => <ListCoursesItem item={item} />}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
}
export default RecommendForYou;