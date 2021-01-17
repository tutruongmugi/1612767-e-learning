import React, { useContext, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import ImageButton from "../../Common/image-button";
import SectionPaths from "../Home/SectionPaths/section-paths";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionImage from "./SectionImage/section-image";
import SectionSkills from "./SectionSkills/section-skills";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { CoursesContext } from "../../../provider/courses-provider";
import { ThemeContext } from "../../../provider/theme-provider";

function Browse() {
  const { courseState, getCategory } = useContext(CoursesContext);
  const { theme, language } = useContext(ThemeContext);
  // useEffect(() => {
  //   getCategory();
  // }, []);
  const onNewReleasePressed = () => {
    RootNavigation.navigate("NewRelease", { title: language.NEW_RELEASES });
  };
  const onRecommendForYou = () => {
    RootNavigation.navigate("RecommendForYou", {
      title: language.RECOMMEND_FOR_YOU,
    });
  };
  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      <ImageButton
        title={language.NEW_RELEASES}
        onPress={onNewReleasePressed}
        style1={{ height: 100, margin: 10 }}
      />
      <ImageButton
        title={language.RECOMMEND_FOR_YOU}
        onPress={onRecommendForYou}
        style1={{ height: 100, margin: 10 }}
      />
      <SectionImage data={courseState.category} />
      {/* <Text
        style={{
          color: "#050505",
          marginBottom: 10,
          marginTop: 10,
          margin: 5,
        }}
      >
        Popular skills
      </Text>
      <SectionSkills /> */}
      <SectionPaths title={language.PATHS} />
      <SectionAuthors title={language.TOP_AUTHORS} />
    </ScrollView>
  );
}
export default Browse;
