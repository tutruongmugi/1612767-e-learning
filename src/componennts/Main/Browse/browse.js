import React from "react";
import { View, ScrollView } from "react-native";
import ImageButton from "../../Common/image-button";
import SectionPaths from "../Home/SectionPaths/section-paths";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionImage from "./SectionImage/section-image";
import SectionSkills from "./SectionSkills/section-skills";
import * as RootNavigation from "../../../routes/navigations/root-navigation";

function Browse() {
  const onNewReleasePressed = () => {
    RootNavigation.navigate("NewRelease", { title: "NEW RELEASES" });
  };
  const onRecommendForYou = () => {
    RootNavigation.navigate("RecommendForYou", { title: "RECOMMEND FOR YOU" });
  };
  return (
    <ScrollView style={{ backgroundColor: "#F0F2F5" }}>
      <ImageButton title="NEW RELEASES" onPress={onNewReleasePressed} />
      <ImageButton title="RECOMMEND FOR YOU" onPress={onRecommendForYou} />
      <SectionImage />
      <SectionSkills title="Popular skills" />
      <SectionPaths title="Paths" />
      <SectionAuthors title="Top Authors" />
    </ScrollView>
  );
}
export default Browse;
