import React, { useReducer } from "react";
import { reducer } from "../reducer/courses-reducer";
import {
  GetTopNewCourses,
  GetCategory,
  GetListCoursesByCategory,
  GetTopSellCourses,
  GetTopRateCourses,
  GetTopRecommendCourses,
  GetFavouriteCourses,
  LikeCourse,
  GetLikeStatus,
  GetListCoursesBySearchKeyword,
  GetCourseDetail,
  GetCourseLikeStatus,
  GetFreeCourses,
  CheckOwnCourse,
  GetProcessCourses,
  PostRatingCourse,
  GetSearchHistory,
  DeleteSearchHistory,
} from "../action/courses-action";

const CoursesContext = React.createContext();
const initialState = {
  topNewCourses: [],
  getTopNewCoursesStatus: false,
  category: [],
  listCoursesByCategory: [],
  getListCoursesByCategoryStatus: false,
  topSellCourses: [],
  getTopSellCoursesStatus: false,
  topRateCourses: [],
  getTopRateCoursesStatus: false,
  topRecommendCourses: [],
  getTopRecommendCoursesStatus: false,
  favouriteCourses: [],
  getFavouriteCourseStatus: false,
  changeFavouriteSucess: false,
  likeStatus: false,
  listCoursesBySearchKeyword: [],
  listCoursesBySearchKeywordStatus: false,
  courseDetail: {},
  courseDetailSuccess: false,
  courseLikeStatus: false,
  getFreeCoursesStatus: false,
  checkOwnCourseStatus: false,
  processCourses: [],
  getProcessCoursesStatus: false,
  DownloadedCourses: [],
  ratingStatus: false,
  searchHistory: [],
  getSearchHistoryStatus: false,
  deleteSearchHistoryStatus: false,
};

const CoursesProvider = (props) => {
  const [courseState, dispatch] = useReducer(reducer, initialState);
  const getTopNewCourses = () => {
    GetTopNewCourses(dispatch, 50, 1);
  };
  const getCategory = () => {
    GetCategory(dispatch);
  };
  const getListCoursesByCategory = (idCategory) => {
    GetListCoursesByCategory(dispatch, "", 30, 1, [idCategory]);
  };
  const startGetListCoursesByCategory = () => {
    dispatch({ type: "GET_LIST_COURSES_BY_SEARCH_FAILED" });
  };
  const getTopSellCourses = () => {
    GetTopSellCourses(dispatch, 10, 1);
  };
  const getTopRateCourses = () => {
    GetTopRateCourses(dispatch, 10, 1);
  };
  const getTopRecommendCourses = (id) => {
    GetTopRecommendCourses(dispatch, id, 10, 1);
  };
  const getFavouriteCourses = (token) => {
    GetFavouriteCourses(dispatch, token);
  };
  const startGetFavouriteCourses = () => {
    dispatch({ type: "GET_FAVOURITE_COURSES_FAILED" });
  };
  const likeCourse = (token, courseId) => {
    LikeCourse(dispatch, token, courseId);
  };
  const startLikeCourse = () => {
    dispatch({ type: "LIKE_COURSE_FAILED" });
  };
  const getLikeStatus = (token, courseId) => {
    GetLikeStatus(dispatch, token, courseId);
  };
  const getListCoursesBySearchKeyword = (token, keyword) => {
    GetListCoursesBySearchKeyword(dispatch, token, keyword, 20, 0);
  };
  const getCourseDetail = (token, courseId) => {
    GetCourseDetail(dispatch, token, courseId);
  };
  const startGetCourseDetail = () => {
    dispatch({ type: "GET_COURSE_DETAIL_FAILED" });
  };
  const getCourseLikeStatus = (token, courseId) => {
    GetCourseLikeStatus(dispatch, token, courseId);
  };
  const setCourseLikeStatus = () => {
    dispatch({ type: "SET_COURSE_LIKE_STATUS" });
  };
  const getFreeCourses = (token, courseId) => {
    GetFreeCourses(dispatch, token, courseId);
  };
  const startGetFreeCourses = () => {
    dispatch({ type: "GET_FREE_COURSES_FAILED" });
  };
  const checkOwnCourse = (token, courseId) => {
    CheckOwnCourse(dispatch, token, courseId);
  };
  const getProcessCoursesFunc = (token) => {
    GetProcessCourses(dispatch, token);
  };
  const postRatingCourse = (
    token,
    courseId,
    formalityPoint,
    contentPoint,
    presentationPoint,
    content
  ) => {
    PostRatingCourse(
      dispatch,
      token,
      courseId,
      formalityPoint,
      contentPoint,
      presentationPoint,
      content
    );
  };
  const getSearchHistory = (token) => {
    GetSearchHistory(dispatch, token);
  };
  const deleteSearchHistory = (token, id) => {
    DeleteSearchHistory(dispatch, token, id);
  };
  const deleteItemHistory = (value) => {
    var index = courseState.searchHistory.indexOf(value);
    if (index > -1) {
      courseState.searchHistory.splice(index, 1);
    }

    console.log("new:", courseState.searchHistory);
  };
  const resetListCoursesBySearchKeywordStatus = () => {
    dispatch({ type: "GET_LIST_COURSES_BY_SEARCH_KEYWORD_FAILED" });
  };

  return (
    <CoursesContext.Provider
      value={{
        courseState,
        getTopNewCourses,
        getCategory,
        getListCoursesByCategory,
        startGetListCoursesByCategory,
        getTopSellCourses,
        getTopRateCourses,
        getTopRecommendCourses,
        getFavouriteCourses,
        startGetFavouriteCourses,
        likeCourse,
        startLikeCourse,
        getLikeStatus,
        getListCoursesBySearchKeyword,
        getCourseDetail,
        startGetCourseDetail,
        getCourseLikeStatus,
        setCourseLikeStatus,
        getFreeCourses,
        checkOwnCourse,
        startGetFreeCourses,
        getProcessCoursesFunc,
        postRatingCourse,
        getSearchHistory,
        deleteSearchHistory,
        deleteItemHistory,
        resetListCoursesBySearchKeywordStatus,
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export { CoursesProvider, CoursesContext };
