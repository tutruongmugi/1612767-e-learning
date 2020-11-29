import React from "react";
import { View, ScrollView } from "react-native";
import ImageButton from "../../Common/image-button";
import SectionCourses from "./SectionCourses/section-courses";

function Home() {
  return (
    <ScrollView>
      <SectionCourses title="Software Development" />
      <SectionCourses title="IT Operations" />
      <SectionCourses title="Data Professional" />
      <SectionCourses title="Security Professional" />
    </ScrollView>
  );
}
export default Home;
