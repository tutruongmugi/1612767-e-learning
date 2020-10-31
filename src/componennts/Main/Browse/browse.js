import React from "react";
import { View } from "react-native";
import ImageButton from "../../Common/image-button";
import SectionPaths from "../Home/SectionPaths/section-paths";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionImage from "./SectionImage/section-image";
import SectionSkills from "./SectionSkills/section-skills";

function Browse() {
  return (
    <View>
      <ImageButton title="NEW RELEASES" />
      <ImageButton title="RECOMMEND FOR YOU" />
      <SectionSkills title="Popular skills" />
      <SectionImage />
      <SectionPaths title="Paths" />
      <SectionAuthors title="Top Authors" />
    </View>
  );
}
export default Browse;
