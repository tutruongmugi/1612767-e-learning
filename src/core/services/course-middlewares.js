import axios from "axios";
import { apiUrl } from "./authentication-services";

export const apiGetTopNewCourses = (limit, page) => {
  return axios.post(apiUrl + "/course/top-new", {
    limit: limit,
    page: page,
  });
};
export const apiGetCategory = () => {
  return axios.get(apiUrl + "/category/all");
};
export const apiGetListCoursesBySearch = (
  keyword,
  limit,
  offset,
  idCategory
) => {
  return axios.post(apiUrl + "/course/search", {
    keyword: keyword,
    limit: limit,
    offset: offset,
    opt: {
      category: idCategory,
    },
  });
};
export const apiGetTopSellCourses = (limit, page) => {
  return axios.post(apiUrl + "/course/top-sell", {
    limit: limit,
    page: page,
  });
};
export const apiGetTopRateCourses = (limit, page) => {
  return axios.post(apiUrl + "/course/top-rate", {
    limit: limit,
    page: page,
  });
};
export const apiGetTopRecommendCourses = (id, limit, offset) => {
  return axios.get(
    apiUrl + "/user/recommend-course/" + id + "/" + limit + "/" + offset
  );
};
export const apiGetFavouriteCourses = (token) => {
  return axios.get(apiUrl + "/user/get-favorite-courses", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const apiLikeCourse = (token, courseId) => {
  return axios.post(
    apiUrl + "/user/like-course",
    {
      courseId: courseId,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
export const apiGetLikeStatus = (token, courseId) => {
  return axios.get(apiUrl + "/user/get-course-like-status/" + courseId, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const apiGetCourseDetail = (token, courseId) => {
  return axios.get(apiUrl + "/course/get-course-detail/" + courseId + "/null", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const apiGetCourseLikeStatus = (token, courseId) => {
  return axios.get(apiUrl + "/user/get-course-like-status/" + courseId, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const apiGetFreeCourses = (token, courseId) => {
  return axios.post(
    apiUrl + "/payment/get-free-courses",
    {
      courseId: courseId,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
export const apiCheckOwnCourse = (token, courseId) => {
  return axios.get(apiUrl + "/user/check-own-course/" + courseId, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const apiGetProcessCourses = (token) => {
  return axios.get(apiUrl + "/user/get-process-courses", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
