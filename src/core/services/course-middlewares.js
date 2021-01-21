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
export const apiPostRatingCourse = (
  token,
  courseId,
  formalityPoint,
  contentPoint,
  presentationPoint,
  content
) => {
  return axios.post(
    "http://api.dev.letstudy.org/course/rating-course",
    {
      courseId: courseId,
      formalityPoint: formalityPoint,
      contentPoint: contentPoint,
      presentationPoint: presentationPoint,
      content: content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const apiGetSearchHistory = (token) => {
  return axios.get(apiUrl + "/course/search-history", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const apiDeleteSearchHistory = (token, id) => {
  return axios.delete(
    `​http://api.dev.letstudy.org/course​/delete-search-history​/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const apiGetListCoursesBySearchKeyword = (
  token,
  keyword,
  limit,
  offset
) => {
  return axios.post(apiUrl + "/course/searchV2", {
    token: token,
    keyword: keyword,
    limit: limit,
    offset: offset,
    opt: {
      sort: {
        attribute: "createdAt",
        rule: "DESC",
      },
    },
  });
};