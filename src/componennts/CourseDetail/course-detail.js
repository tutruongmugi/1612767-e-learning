import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import ListLessons from "./ListLessons/list-lessons";
import ListLessonItem from "./ListLessonsItem/list-lessons-item";
import VideoPlayer from "./VideoPlayer/video-player";
import * as RootNavigation from "../../routes/navigations/root-navigation";
import { Rating } from "react-native-elements";

function CourseDetail({ route }) {
  let item = route.params.item;

  // const [lessons, setLessons] = useState([
  //   {
  //     title: "Course Overview",
  //     lesson: [
  //       {
  //         id: 1,
  //         title: "Course Overview",
  //         duration: "1:53",
  //         isWatching: false,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Creating Your First App",
  //     lesson: [
  //       {
  //         id: 1,
  //         title: "Introduction",
  //         duration: "6:16",
  //         isWatching: false,
  //       },
  //       {
  //         id: 2,
  //         title: "Creating Your App with IntelliJ",
  //         duration: "8:13",
  //         isWatching: false,
  //       },
  //       {
  //         id: 3,
  //         title: "JDE,JDK,and JRE",
  //         duration: "6:27",
  //         isWatching: false,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Variables, Data Types, and Math Operators",
  //     lesson: [
  //       {
  //         id: 1,
  //         title: "Introduction",
  //         duration: "2:43",
  //         isWatching: false,
  //       },
  //       {
  //         id: 2,
  //         title: "Variables",
  //         duration: "1:12",
  //         isWatching: false,
  //       },
  //       {
  //         id: 3,
  //         title: "Primitive Types Are Stored By Value",
  //         duration: "10:13",
  //         isWatching: false,
  //       },
  //     ],
  //   },
  // ]);

  const OnPressedBackButton = () => {
    RootNavigation.goBack();
  };
  const OnPressedReadMore = () => {};

  return (
    <View>
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
            <Text style={styles.title}>{item.title}</Text>
            <View>
              <Text>{item.author}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>{`${item.level} . ${item.released} . ${item.duration}  `}</Text>
              <Rating imageSize={15} readonly startingValue={item.rate} />
              <Text>{` (${item.rateCount})`}</Text>
            </View>
          </View>
          <View style={styles.extionsion}>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={require("../../../assets/icon-bookmark.png")}
                />
              </TouchableOpacity>
              <Text>Bookmark</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={require("../../../assets/icon-channel.png")}
                />
              </TouchableOpacity>
              <Text>Add to channel</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={require("../../../assets/icon-download.png")}
                />
              </TouchableOpacity>
              <Text>Downloaded</Text>
            </View>
          </View>
          <View>
            <Text style={styles.description}>
              The wind carries hope, and the winds of time create faith from
              that hope. Turning the massive windmills, and lightly sounding the
              wind chimes, Listen closely, and you will hear the wind tell tales
              full of freedom and meaning...The wind carries hope, and the winds
              of time create faith from that hope. Turning the massive
              windmills, and lightly sounding the wind chimes, Listen closely,
              and you will hear the wind tell tales full of freedom and
              meaning...
            </Text>
            <TouchableOpacity
              style={styles.readMore}
              onPress={OnPressedReadMore}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  marginRight: 50,
                }}
              >
                Read More
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <ListLessons />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    justifyContent: "flex-start",
  },
  extionsion: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  description: {
    textAlign: "justify",
    color: "#345c74",
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
    borderRadius: 50 / 2,
  },
  backButton: {
    flex: 1,
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 10,
  },
  title: {
    fontWeight: "bold",
  },
});

export default CourseDetail;
