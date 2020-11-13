import React from "react";
import { View, ScrollView } from "react-native";
import ImageButton from "../../Common/image-button";
import SectionPaths from "../Home/SectionPaths/section-paths";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionImage from "./SectionImage/section-image";
import SectionSkills from "./SectionSkills/section-skills";

function Browse() {
  return (
    <ScrollView>
      <ImageButton title="NEW RELEASES" />
      <ImageButton title="RECOMMEND FOR YOU" />
      <SectionImage />
      <SectionSkills title="Popular skills" />
      <SectionPaths title="Paths" />
      <SectionAuthors title="Top Authors" />
    </ScrollView>
  );
}
export default Browse;
