import React, { useContext, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { CoursesContext } from "../../../provider/courses-provider";
import ImageButton from "../../Common/image-button";
import SectionCourses from "./SectionCourses/section-courses";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { AuthorsContext } from "../../../provider/authors-provider";

function Home() {
  const {
    courseState,
    getTopNewCourses,
    getTopSellCourses,
    getTopRateCourses,
    getTopRecommendCourses,
    getCategory,
    getFavouriteCourses,
  } = useContext(CoursesContext);
  const { state } = useContext(AuthenticationContext);
  const { getListAuthor } = useContext(AuthorsContext);
  useEffect(() => {
    getTopNewCourses();
    getTopSellCourses();
    getTopRateCourses();
    getTopRecommendCourses(state.userInfo.id);
    getCategory();
    getListAuthor();
    getFavouriteCourses(state.token);
  }, []);
  return (
    <ScrollView>
      <SectionCourses
        title="Top New Courses"
        courses={courseState.topNewCourses}
        loaded={courseState.getTopNewCoursesStatus}
      />
      <SectionCourses
        title="Recommend For You"
        courses={courseState.topRecommendCourses}
        loaded={courseState.getTopRecommendCoursesStatus}
      />
      <SectionCourses
        title="Top Sell Courses"
        courses={courseState.topSellCourses}
        loaded={courseState.getTopSellCoursesStatus}
      />
      <SectionCourses
        title="Top Rate Courses"
        courses={courseState.topRateCourses}
        loaded={courseState.getTopRateCoursesStatus}
      />
    </ScrollView>
  );
}
export default Home;
