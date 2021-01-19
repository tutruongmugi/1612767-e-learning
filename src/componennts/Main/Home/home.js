import React, { useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import { CoursesContext } from "../../../provider/courses-provider";
import ImageButton from "../../Common/image-button";
import SectionCourses from "./SectionCourses/section-courses";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { AuthorsContext } from "../../../provider/authors-provider";
import { ThemeContext } from "../../../provider/theme-provider";

function Home() {
  const {
    courseState,
    getTopNewCourses,
    getTopSellCourses,
    getTopRateCourses,
    getTopRecommendCourses,
    getCategory,
    getFavouriteCourses,
    getProcessCoursesFunc,
    getSearchHistory,
  } = useContext(CoursesContext);
  const { state } = useContext(AuthenticationContext);
  const { getListAuthor } = useContext(AuthorsContext);
  const { language } = useContext(ThemeContext);

  useEffect(() => {
    getTopNewCourses();
    getTopSellCourses();
    getTopRateCourses();
    getTopRecommendCourses(state.userInfo.id);
    getCategory();
    getListAuthor();
    getFavouriteCourses(state.token);
    getProcessCoursesFunc(state.token);
    getSearchHistory(state.token);
  }, []);
  // create a function that saves your data asyncronously
  // const _storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem("name", "John");
  //   } catch (error) {
  //     // Error saving data
  //   }
  // };

  return (
    <ScrollView>
      <SectionCourses
        title={language.TOP_NEW_COURSES}
        courses={courseState.topNewCourses}
        loaded={courseState.getTopNewCoursesStatus}
      />
      <SectionCourses
        title={language.PROCESS_COURSES}
        courses={courseState.processCourses}
        loaded={courseState.getProcessCoursesStatus}
      />
      <SectionCourses
        title={language.RECOMMEND_FOR_YOU}
        courses={courseState.topRecommendCourses}
        loaded={courseState.getTopRecommendCoursesStatus}
      />
      <SectionCourses
        title={language.TOP_SELL_COURSES}
        courses={courseState.topSellCourses}
        loaded={courseState.getTopSellCoursesStatus}
      />
      <SectionCourses
        title={language.TOP_RATE_COURSES}
        courses={courseState.topRateCourses}
        loaded={courseState.getTopRateCoursesStatus}
      />
    </ScrollView>
  );
}
export default Home;
