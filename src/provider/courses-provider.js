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
  courseDetail: {},
  courseDetailSuccess: false,
  courseLikeStatus: false,
  getFreeCoursesStatus: false,
  checkOwnCourseStatus: false,
  processCourses: [],
  getProcessCoursesStatus: false,
};

const CoursesProvider = (props) => {
  const [courseState, dispatch] = useReducer(reducer, initialState);
  const getTopNewCourses = () => {
    GetTopNewCourses(dispatch, 10, 1);
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
  const getListCoursesBySearchKeyword = (keyword) => {
    GetListCoursesBySearchKeyword(dispatch, keyword, 30, 1, []);
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
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export { CoursesProvider, CoursesContext };
