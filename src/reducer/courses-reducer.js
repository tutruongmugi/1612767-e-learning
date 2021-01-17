import {
  GET_TOP_NEW_COURSES_SUCCESS,
  GET_TOP_NEW_COURSES_FAILED,
  GET_CATEGORY_SUCCESS,
  GET_LIST_COURSES_BY_SEARCH_SUCCESS,
  GET_LIST_COURSES_BY_SEARCH_FAILED,
  GET_TOP_SELL_COURSES_SUCCESS,
  GET_TOP_SELL_COURSES_FAILED,
  GET_TOP_RATE_COURSES_SUCCESS,
  GET_TOP_RATE_COURSES_FAILED,
  GET_TOP_RECOMMEND_COURSES_SUCCESS,
  GET_TOP_RECOMMEND_COURSES_FAILED,
  GET_FAVOURITE_COURSES_SUCCESS,
  GET_FAVOURITE_COURSES_FAILED,
  LIKE_COURSE_SUCCESS,
  LIKE_COURSE_FAILED,
  GET_LIKE_STATUS,
  GET_LIST_COURSES_BY_SEARCH_KEYWORD,
  GET_COURSE_DETAIL_SUCCESS,
  GET_COURSE_DETAIL_FAILED,
  GET_COURSE_LIKE_STATUS,
  SET_COURSE_LIKE_STATUS,
  GET_FREE_COURSES_SUCCESS,
  GET_FREE_COURSES_FAILED,
  CHECK_OWN_COURSE_SUCCESS,
  CHECK_OWN_COURSE_FAILED,
  GET_PROCESS_COURSES_SUCCESS,
  GET_PROCESS_COURSES_FAILED,
} from "../action/courses-action";

export const reducer = (prevState, action) => {
  console.log("Course Reducer: ", action);
  switch (action.type) {
    case GET_TOP_NEW_COURSES_SUCCESS:
      return {
        ...prevState,
        topNewCourses: action.data.payload,
        getTopNewCoursesStatus: true,
      };
    case GET_TOP_NEW_COURSES_FAILED:
      return {
        ...prevState,
        getTopNewCoursesStatus: false,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...prevState,
        category: action.data.payload,
      };
    case GET_LIST_COURSES_BY_SEARCH_SUCCESS:
      return {
        ...prevState,
        listCoursesByCategory: action.data.payload.rows,
        getListCoursesByCategoryStatus: true,
      };
    case GET_LIST_COURSES_BY_SEARCH_FAILED:
      return {
        ...prevState,
        getListCoursesByCategoryStatus: false,
      };
    case GET_TOP_SELL_COURSES_SUCCESS:
      return {
        ...prevState,
        topSellCourses: action.data.payload,
        getTopSellCoursesStatus: true,
      };
    case GET_TOP_SELL_COURSES_FAILED:
      return {
        ...prevState,
        getTopSellCoursesStatus: false,
      };
    case GET_TOP_RATE_COURSES_SUCCESS:
      return {
        ...prevState,
        topRateCourses: action.data.payload,
        getTopRateCoursesStatus: true,
      };
    case GET_TOP_RATE_COURSES_FAILED:
      return {
        ...prevState,
        getTopRateCoursesStatus: false,
      };
    case GET_TOP_RECOMMEND_COURSES_SUCCESS:
      return {
        ...prevState,
        topRecommendCourses: action.data.payload,
        getTopRecommendCoursesStatus: true,
      };
    case GET_TOP_RECOMMEND_COURSES_FAILED:
      return {
        ...prevState,
        getTopRecommendCoursesStatus: false,
      };
    case GET_FAVOURITE_COURSES_SUCCESS:
      return {
        ...prevState,
        favouriteCourses: action.data.payload,
        getFavouriteCourseStatus: true,
      };
    case GET_FAVOURITE_COURSES_FAILED:
      return {
        ...prevState,
        getFavouriteCourseStatus: false,
      };
    case LIKE_COURSE_SUCCESS:
      return {
        ...prevState,
        changeFavouriteSucess: true,
      };
    case LIKE_COURSE_FAILED:
      return {
        ...prevState,
        changeFavouriteSucess: false,
      };
    case GET_LIKE_STATUS:
      return {
        ...prevState,
        likeStatus: action.data.likeStatus,
      };
    case GET_LIST_COURSES_BY_SEARCH_KEYWORD:
      return {
        ...prevState,
        listCoursesBySearchKeyword: action.data.payload.rows,
      };
    case GET_COURSE_DETAIL_SUCCESS:
      return {
        ...prevState,
        courseDetail: action.data.payload,
        courseDetailSuccess: true,
      };
    case GET_COURSE_DETAIL_FAILED:
      return {
        ...prevState,
        courseDetailSuccess: false,
      };
    case GET_COURSE_LIKE_STATUS:
      return {
        ...prevState,
        courseLikeStatus: action.data.likeStatus,
      };
    case SET_COURSE_LIKE_STATUS:
      return {
        ...prevState,
        courseLikeStatus: false,
      };
    case GET_FREE_COURSES_SUCCESS:
      return {
        ...prevState,
        getFreeCoursesStatus: true,
      };
    case GET_FREE_COURSES_FAILED:
      return {
        ...prevState,
        getFreeCoursesStatus: false,
      };
    case CHECK_OWN_COURSE_SUCCESS:
      return {
        ...prevState,
        checkOwnCourseStatus: action.data.payload.isUserOwnCourse,
      };
    case GET_PROCESS_COURSES_SUCCESS:
      return {
        ...prevState,
        processCourses: action.data.payload,
        getProcessCoursesStatus: true,
      };
    case GET_PROCESS_COURSES_FAILED:
      return {
        ...prevState,
        getProcessCoursesStatus: false,
      };
  }
};
