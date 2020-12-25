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
} from "react-native";
import ListLessons from "./ListLessons/list-lessons";
import ListLessonItem from "./ListLessonsItem/list-lessons-item";
import VideoPlayer from "./VideoPlayer/video-player";
import * as RootNavigation from "../../routes/navigations/root-navigation";
import { Rating } from "react-native-elements";
import SectionCoursesItem from "../Main/Home/SectionCoursesItem/section-courses-item";
import { CoursesContext } from "../../provider/courses-provider";
import { AuthenticationContext } from "../../provider/authentication-provider";

function CourseDetail({ route }) {
  let item = route.params.item;
  const [isloading, setIsloading] = useState(true);
  const [isloadingfavourite, setIsloadingfavourite] = useState(true);
  const [favourite, setFavourite] = useState(false);
  const {
    courseState,
    getCourseDetail,
    startGetCourseDetail,
    getCourseLikeStatus,
    likeCourse,
    startLikeCourse,
    setCourseLikeStatus,
  } = useContext(CoursesContext);
  const { state } = useContext(AuthenticationContext);
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

  const OnPressedBackButton = () => {
    startGetCourseDetail();
    setCourseLikeStatus();
    RootNavigation.goBack();
  };

  const RenderMapText = (text, listText) => {
    return (
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
          {text}
        </Text>
        {listText === null ? (
          <View />
        ) : (
          <View>
            {listText.map((item, index) => (
              <Text key={index}>{item}</Text>
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
    <View style={{ flex: 1 }}>
      {isloading ? (
        <View
          style={{ justifyContent: "center", flex: 1, flexDirection: "row" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <VideoPlayer />
          <SafeAreaView style={styles.backButton}>
            <TouchableOpacity onPress={OnPressedBackButton}>
              <Image
                style={styles.image}
                source={require("../../../assets/icon-x.png")}
              />
            </TouchableOpacity>
          </SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.text}>
                <Text style={styles.title}>
                  {courseState.courseDetail.title}
                </Text>
                <View>
                  <Text style={{ fontSize: 16, color: "#050505" }}>
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
                  <Text>{` (${courseState.courseDetail.ratedNumber})`}</Text>
                </View>
                <Text
                  style={{ marginTop: 5 }}
                >{`Created At  ${courseState.courseDetail.createdAt}`}</Text>
                <Text
                  style={{ marginTop: 5 }}
                >{`Updated At  ${courseState.courseDetail.updatedAt}`}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    color: "#65676B",
                    marginTop: 5,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 8,
                      marginRight: 5,
                    }}
                  >
                    <Text>{`${courseState.courseDetail.price}$`}</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 8,
                      marginRight: 5,
                    }}
                  >
                    <Text>{`${courseState.courseDetail.videoNumber} videos`}</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 8,
                      marginRight: 5,
                    }}
                  >
                    <Text>{`${courseState.courseDetail.totalHours} Hours`}</Text>
                  </View>
                </View>
                {RenderMapText(
                  "Requirement",
                  courseState.courseDetail.requirement
                )}
                {RenderMapText(
                  "What you will learn",
                  courseState.courseDetail.learnWhat
                )}
              </View>
              <View style={styles.extionsion}>
                <View style={{ alignItems: "center" }}>
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
                  <Text style={styles.iconChannel}>Add to favourites</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity>
                    <Image
                      style={styles.image}
                      source={require("../../../assets/icon-channel.png")}
                    />
                  </TouchableOpacity>
                  <Text style={styles.iconChannel}>Add to channel</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity>
                    <Image
                      style={styles.image}
                      source={require("../../../assets/icon-download.png")}
                    />
                  </TouchableOpacity>
                  <Text style={styles.iconChannel}>Downloaded</Text>
                </View>
              </View>

              <View style={{ flex: 1, marginTop: 10, backgroundColor: "#FFF" }}>
                <ListLessons section={courseState.courseDetail.section} />
              </View>
              <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
                Related Courses
              </Text>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
                {renderListItems(courseState.courseDetail.coursesLikeCategory)}
              </ScrollView>
            </View>
          </ScrollView>
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
