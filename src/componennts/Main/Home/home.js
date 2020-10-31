import React from "react";
import { View, ScrollView } from "react-native";
import ImageButton from "../../Common/image-button";
import SectionCourses from "./SectionCourses/section-courses";
import SectionPaths from "./SectionPaths/section-paths";

function Home() {
  return (
    <ScrollView>
      <ImageButton title="NEW RELEASES"></ImageButton>
      <SectionCourses title="Continue learning" />
      <SectionPaths title="Path" />
      <SectionCourses title="Channel" />
      <SectionCourses title="Bookmarks" />
    </ScrollView>
  );
}
export default Home;
