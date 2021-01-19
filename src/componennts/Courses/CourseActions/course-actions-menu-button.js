import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { CoursesContext } from "../../../provider/courses-provider";
import { ThemeContext } from "../../../provider/theme-provider";
import AsyncStorage from "@react-native-async-storage/async-storage";

function CourseActionsMenuButton({ CourseId }) {
  const [favourite, setFavourite] = useState(false);
  const [channel, setChannel] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  // const {
  //   favouriteCourses,
  //   addFavouriteCourse,
  //   removeFavouriteCourse,
  // } = useContext(FavouritesContext);
  const {
    likeCourse,
    startLikeCourse,
    courseState,
    startGetCourseDetail,
    getCourseDetail,
    getFreeCourses,
    startGetFreeCourses,
  } = useContext(CoursesContext);
  const { state } = useContext(AuthenticationContext);
  const { language } = useContext(ThemeContext);

  useEffect(() => {
    getFavouriteById(CourseId);
    getChannelStatusById(CourseId);
    return () => {};
  }, []);
  const getChannelStatusById = (CourseId) => {
    setChannel(
      courseState.processCourses.some(
        (processCourse) => processCourse.id === CourseId
      )
    );
  };
  const getFavouriteById = (CourseId) => {
    setFavourite(
      courseState.favouriteCourses.some(
        (favouriteCourse) => favouriteCourse.id === CourseId
      )
    );
  };

  const onPressFavourite = () => {
    likeCourse(state.token, CourseId);
    setFavourite(!favourite);
    startLikeCourse();
  };
  useEffect(() => {
    if (courseState.courseDetailSuccess && downloadStatus) {
      mergeUsers();
      setDownloadStatus(false);
      setIsDownloaded(true);
      startGetCourseDetail();
    }
  }, [courseState.courseDetailSuccess]);
  const onPressDownload = () => {
    setDownloadStatus(true);
    getCourseDetail(state.token, CourseId);
  };

  const mergeUsers = async () => {
    try {
      // const object=
      //save first user

      // const downloadCourses = await AsyncStorage.getItem("@MyApp");
      // courseState.DownloadedCourses = JSON.parse(downloadCourses);

      // console.log("new state", courseState.DownloadedCourses);
      // let existed = false;
      // if (!courseState.DownloadedCourses.length === 0) {
      //   existed = courseState.DownloadedCourses.some(
      //     (item) => item.id == courseState.courseDetail.id
      //   );
      // }
      // if (existed == null) {
      //   console.log("null me roi");
      // }

      courseState.DownloadedCourses.push(courseState.courseDetail);
      await AsyncStorage.setItem(
        "@MyApp_7",
        JSON.stringify(courseState.DownloadedCourses)
      );

      // merge USER_2 into saved USER_1
      // await AsyncStorage.mergeItem("@MyApp_user", JSON.stringify(USER_2));

      // read merged item

      // console.log result:
      // {
      //   name: 'Sarah',
      //   age: 21,
      //   traits: {
      //     eyes: 'green',
      //     hair: 'black'
      //   }
      // }
    } catch (e) {}
  };
  const onPressAddToChannel = () => {
    // getFreeCourses(state.token, CourseId);
    // setChannel(channel);
    // startGetFreeCourses();
  };
  return (
    <Menu>
      <MenuTrigger>
        <Ionicons style={{ fontSize: 24 }} name="md-more" />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption
          style={styles.container}
          onSelect={() => onPressFavourite()}
        >
          <Ionicons name="md-heart" />
          <Text style={styles.text}>
            {favourite ? language.REMOVE_FAVOURITE : language.FAVOURITE}
          </Text>
        </MenuOption>
        <MenuOption
          style={styles.container}
          onSelect={() => onPressAddToChannel()}
        >
          <Ionicons name="ios-radio" />
          <Text style={styles.text}>
            {channel ? language.REMOVE_FROM_CHANNEL : language.ADD_TO_CHANNEL}
          </Text>
        </MenuOption>
        <MenuOption
          style={styles.container}
          disabled={isDownloaded}
          onSelect={() => onPressDownload()}
        >
          <Ionicons name="md-cloud-download" />
          <Text style={styles.text}>{language.DOWNLOADS}</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

export default CourseActionsMenuButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    padding: 4,
    paddingRight: 8,
    paddingVertical: 8,
    color: "#000",
  },
});
