import React, { useEffect, useContext, useState } from "react";
import {
  View,
  ImageBackground,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { CoursesContext } from "../../../provider/courses-provider";

function SearchByCategory({ route }) {
  const data = route.params.data;
  const [isLoading, setIsLoading] = useState(true);
  const {
    getListCoursesByCategory,
    courseState,
    startGetListCoursesByCategory,
  } = useContext(CoursesContext);
  useEffect(() => {
    if (!courseState.getListCoursesByCategoryStatus) {
      if (isLoading) {
        getListCoursesByCategory(data.id);
      }
    } else {
      setIsLoading(false);
    }
  }, [courseState.getListCoursesByCategoryStatus]);
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
    startGetListCoursesByCategory();
    RootNavigation.goBack();
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
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
        {isLoading ? (
          <View
            style={{ justifyContent: "center", flex: 1, flexDirection: "row" }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <FlatList
            // data={courses.filter((course) =>
            //   newReleaseCoursesId.includes(course.id)
            // )}
            data={courseState.listCoursesByCategory}
            renderItem={({ item }) => <ListCoursesItem item={item} />}
            ItemSeparatorComponent={FlatListItemSeparator}
            keyExtractor={(item, index) => item + index}
          />
        )}
      </View>
    </View>
  );
}
export default SearchByCategory;
