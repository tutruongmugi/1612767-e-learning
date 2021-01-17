import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import ListLessons from "./ListLessons/list-lessons";
import ListLessonItem from "./ListLessonsItem/list-lessons-item";
import VideoPlayer from "./VideoPlayer/video-player";
import * as RootNavigation from "../../routes/navigations/root-navigation";
import { Rating } from "react-native-elements";
import SectionCoursesItem from "../Main/Home/SectionCoursesItem/section-courses-item";
import { CoursesContext } from "../../provider/courses-provider";
import { AuthenticationContext } from "../../provider/authentication-provider";
import { ThemeContext } from "../../provider/theme-provider";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ListRatingItem from "./ListRatingItem/list-rating-item";

const Tab = createMaterialTopTabNavigator();

function CourseDetail({ route }) {
  let item = route.params.item;
  const [isloading, setIsloading] = useState(true);
  const [isloadingfavourite, setIsloadingfavourite] = useState(true);
  const [favourite, setFavourite] = useState(false);
  // const [isBought,setIsBought]=useState(false);
  const {
    courseState,
    getCourseDetail,
    startGetCourseDetail,
    getCourseLikeStatus,
    likeCourse,
    startLikeCourse,
    setCourseLikeStatus,
    getFreeCourses,
    startGetFreeCourses,
    checkOwnCourse,
  } = useContext(CoursesContext);
  const { state } = useContext(AuthenticationContext);
  const { theme, language } = useContext(ThemeContext);
  useEffect(() => {
    if (!courseState.courseDetailSuccess) {
      if (isloading) {
        getCourseDetail(state.token, item.id);
      }
    } else {
      setIsloading(false);
    }
  }, [courseState.courseDetailSuccess]);
  useEffect(() => {
    if (!courseState.courseLikeStatus) {
      if (isloadingfavourite) {
        getCourseLikeStatus(state.token, item.id);
      }
    } else {
      setIsloadingfavourite(false);
      setFavourite(courseState.courseLikeStatus);
      console.log("La the nhi", courseState.courseLikeStatus);
    }
  }, [courseState.courseLikeStatus]);

  useEffect(() => {
    checkOwnCourse(state.token, item.id);
  }, [courseState.getFreeCoursesStatus]);

  const OnPressedBackButton = () => {
    startGetCourseDetail();
    setCourseLikeStatus();
    startGetFreeCourses();
    RootNavigation.goBack();
  };
  const onPressAddToChannel = () => {
    getFreeCourses(state.token, item.id);
  };

  const RenderMapText = (text, listText) => {
    return (
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 10,
            color: theme.text,
          }}
        >
          {text}
        </Text>
        {listText === null ? (
          <View />
        ) : (
          <View>
            {listText.map((item, index) => (
              <Text style={{ color: theme.text }} key={index}>
                {item}
              </Text>
            ))}
          </View>
        )}
      </View>
    );
  };
  const renderListItems = (courses) => {
    return courses.map((item) => (
      <SectionCoursesItem key={item.id} item={item} />
    ));
  };
  const onPressFavourite = () => {
    likeCourse(state.token, item.id);
    startLikeCourse();
    setFavourite(!favourite);
  };
  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      {isloading ? (
        <View
          style={{ justifyContent: "center", flex: 1, flexDirection: "row" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <VideoPlayer promoVidUrl={courseState.courseDetail.promoVidUrl} />
          <SafeAreaView style={styles.backButton}>
            <TouchableOpacity onPress={OnPressedBackButton}>
              <Image
                style={styles.image}
                source={require("../../../assets/icon-x.png")}
              />
            </TouchableOpacity>
          </SafeAreaView>
          <Tab.Navigator>
            <Tab.Screen
              name={language.OVERVIEW}
              children={() => (
                <ScrollView>
                  <View style={styles.container}>
                    <View style={styles.text}>
                      <Text style={[styles.title, { color: theme.text }]}>
                        {courseState.courseDetail.title}
                      </Text>
                      <View>
                        <Text style={{ fontSize: 16, color: theme.text }}>
                          {courseState.courseDetail.instructor.name}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          color: "#65676B",
                          marginTop: 15,
                        }}
                      >
                        <Rating
                          imageSize={15}
                          readonly
                          startingValue={courseState.courseDetail.contentPoint}
                        />
                        <Text
                          style={{ color: theme.darkText }}
                        >{` (${courseState.courseDetail.ratedNumber})`}</Text>
                      </View>
                      <Text style={{ marginTop: 5, color: theme.text }}>{`${
                        language.CREATED_AT
                      }  ${courseState.courseDetail.createdAt.slice(
                        0,
                        10
                      )}`}</Text>
                      <Text style={{ marginTop: 5, color: theme.text }}>{`${
                        language.UPDATED_AT
                      }  ${courseState.courseDetail.updatedAt.slice(
                        0,
                        10
                      )}`}</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          color: "#65676B",
                          marginTop: 5,
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: theme.backgroundSection,
                            borderRadius: 8,
                            marginRight: 5,
                          }}
                        >
                          <Text
                            style={{ color: theme.text }}
                          >{`${courseState.courseDetail.price}$`}</Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: theme.backgroundSection,
                            borderRadius: 8,
                            marginRight: 5,
                          }}
                        >
                          <Text
                            style={{ color: theme.text }}
                          >{`${courseState.courseDetail.videoNumber} videos`}</Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: theme.backgroundSection,
                            borderRadius: 8,
                            marginRight: 5,
                          }}
                        >
                          <Text style={{ color: theme.text }}>{`${
                            Math.round(
                              courseState.courseDetail.totalHours * 100000
                            ) / 100000
                          } Hours`}</Text>
                        </View>
                      </View>
                      {RenderMapText(
                        language.REQUIREMENT,
                        courseState.courseDetail.requirement
                      )}
                      {RenderMapText(
                        language.WHAT_YOU_WILL_LEARN,
                        courseState.courseDetail.learnWhat
                      )}
                    </View>
                    <View style={styles.extionsion}>
                      <View
                        style={{
                          alignItems: "center",
                        }}
                      >
                        <TouchableOpacity onPress={() => onPressFavourite()}>
                          {!favourite ? (
                            <Image
                              style={styles.image}
                              source={require("../../../assets/heart.png")}
                            />
                          ) : (
                            <Image
                              style={styles.image}
                              source={require("../../../assets/hearted.png")}
                            />
                          )}
                        </TouchableOpacity>
                        <Text style={styles.iconChannel}>
                          {language.ADD_TO_FAVOURITES}
                        </Text>
                      </View>
                      <View style={{ alignItems: "center" }}>
                        <TouchableOpacity onPress={() => onPressAddToChannel()}>
                          <Image
                            style={styles.image}
                            source={require("../../../assets/icon-channel.png")}
                          />
                        </TouchableOpacity>
                        <Text style={styles.iconChannel}>
                          {courseState.checkOwnCourseStatus
                            ? language.BOUGHT
                            : language.ADD_TO_CHANNEL}
                        </Text>
                      </View>
                      <View style={{ alignItems: "center" }}>
                        <TouchableOpacity>
                          <Image
                            style={styles.image}
                            source={require("../../../assets/icon-download.png")}
                          />
                        </TouchableOpacity>
                        <Text style={styles.iconChannel}>
                          {language.DOWNLOADS}
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        marginTop: 10,
                        color: theme.text,
                      }}
                    >
                      {language.RELATED_COURSES}
                    </Text>
                    <ScrollView
                      showsHorizontalScrollIndicator={false}
                      horizontal={true}
                    >
                      {renderListItems(
                        courseState.courseDetail.coursesLikeCategory
                      )}
                    </ScrollView>
                  </View>
                </ScrollView>
              )}
            />
            <Tab.Screen
              name={language.CONTENTS}
              children={() => (
                <ScrollView>
                  <View style={styles.container}>
                    <View
                      style={{
                        flex: 1,
                        marginTop: 10,
                      }}
                    >
                      <ListLessons section={courseState.courseDetail.section} />
                    </View>
                  </View>
                </ScrollView>
              )}
            />
            <Tab.Screen
              name={language.RATING}
              children={() => (
                <ScrollView>
                  <View style={styles.container}>
                    <FlatList
                      data={[
                        { id: 1, name: "lml", comment: "pla bla", rate: 3 },
                        {
                          id: 2,
                          name: "kuro",
                          comment: "van la bla alh",
                          rate: 5,
                        },
                      ]}
                      renderItem={({ item }) => (
                        <ListRatingItem key={item.id} item={item} />
                      )}
                      keyExtractor={(item, index) => {
                        return item.id.toString();
                      }}
                    />
                  </View>
                </ScrollView>
              )}
            />
          </Tab.Navigator>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  text: {
    justifyContent: "flex-start",
  },
  extionsion: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  description: {
    textAlign: "justify",
    color: "#65676B",
  },
  readMore: {
    flexDirection: "row",
    paddingVertical: 5,
    backgroundColor: "#f58084",
    marginHorizontal: 40,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 30,
  },
  image: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  backButton: {
    flex: 1,
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 10,
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    color: "#050505",
    fontSize: 28,
  },
  iconChannel: {
    color: "#050505",
  },
});

export default CourseDetail;
