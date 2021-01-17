import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";
import { CoursesContext } from "../../../../provider/courses-provider";
import { ThemeContext } from "../../../../provider/theme-provider";

function Sectioncourses({ courses, title, loaded }) {
  const renderListItems = (courses) => {
    return courses.map((item) => (
      <SectionCoursesItem key={item.id} item={item} />
    ));
  };
  const OnPressed = () => {
    RootNavigation.navigate("ListCourses", { item: courses, title: title });
  };
  const { theme, language } = useContext(ThemeContext);
  // const { courses } = useContext(CoursesContext);
  return (
    <View style={{ backgroundColor: theme.background }}>
      <View style={styles.headerContainer}>
        <Text style={{ color: theme.text, fontSize: 16 }}>{title}</Text>
        <TouchableOpacity style={styles.expand} onPress={OnPressed}>
          <Text style={{ color: theme.darkText }}>{language.SEE_ALL}</Text>
          <Image
            style={styles.image}
            source={require("../../../../../assets/icon-expand.png")}
          />
        </TouchableOpacity>
      </View>
      {!loaded ? (
        <View
          style={{ justifyContent: "center", flex: 1, flexDirection: "row" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {renderListItems(courses)}
        </ScrollView>
      )}
    </View>
  );
}
export default Sectioncourses;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    margin: 5,
    flexDirection: "row",
    marginTop: 10,
  },
  image: {
    width: 10,
    height: 10,
    margin: 5,
  },
  expand: {
    flexDirection: "row",
  },
});
