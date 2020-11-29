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

function NewRelease({ route }) {
  const { courses } = useContext(CoursesContext);
  const FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };
  const OnPressedBackButton = () => {
    RootNavigation.goBack();
  };
  return (
    <View>
      <Image
        source={{
          uri:
            "https://pluralsight.imgix.net/course-images/javascript-getting-started-v1.png?w=1078",
        }}
      />
      <ImageBackground
        style={{ height: 150 }}
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0NZMFsu98u0V1XBOdY_81j3BHHwxIWYDzlQ&usqp=CAU",
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
        data={courses}
        renderItem={({ item }) => <ListCoursesItem item={item} />}
        ItemSeparatorComponent={FlatListItemSeparator}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
}
export default NewRelease;
