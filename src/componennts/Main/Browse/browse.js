import React, { useContext, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import ImageButton from "../../Common/image-button";
import SectionPaths from "../Home/SectionPaths/section-paths";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionImage from "./SectionImage/section-image";
import SectionSkills from "./SectionSkills/section-skills";
import * as RootNavigation from "../../../routes/navigations/root-navigation";
import { CoursesContext } from "../../../provider/courses-provider";

function Browse() {
  const { courseState, getCategory } = useContext(CoursesContext);
  // useEffect(() => {
  //   getCategory();
  // }, []);
  const onNewReleasePressed = () => {
    RootNavigation.navigate("NewRelease", { title: "NEW RELEASES" });
  };
  const onRecommendForYou = () => {
    RootNavigation.navigate("RecommendForYou", { title: "RECOMMEND FOR YOU" });
  };
  return (
    <ScrollView style={{ backgroundColor: "#F0F2F5" }}>
      <ImageButton
        title="NEW RELEASES"
        onPress={onNewReleasePressed}
        style1={{ height: 100, margin: 5 }}
      />
      <ImageButton
        title="RECOMMEND FOR YOU"
        onPress={onRecommendForYou}
        style1={{ height: 100, margin: 5 }}
      />
      <SectionImage data={courseState.category} />
      <Text
        style={{
          color: "#050505",
          marginBottom: 10,
          marginTop: 10,
          margin: 5,
        }}
      >
        Popular skills
      </Text>
      <SectionSkills />
      <SectionPaths title="Paths" />
      <SectionAuthors title="Top Authors" />
    </ScrollView>
  );
}
export default Browse;
