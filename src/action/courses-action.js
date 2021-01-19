import {
  apiGetTopNewCourses,
  apiGetCategory,
  apiGetListCoursesBySearch,
  apiGetTopSellCourses,
  apiGetTopRateCourses,
  apiGetTopRecommendCourses,
  apiGetFavouriteCourses,
  apiLikeCourse,
  apiGetLikeStatus,
  apiGetCourseDetail,
  apiGetCourseLikeStatus,
  apiGetFreeCourses,
  apiCheckOwnCourse,
  apiGetProcessCourses,
  apiPostRatingCourse,
  apiGetSearchHistory,
  apiDeleteSearchHistory,
  apiGetListCoursesBySearchKeyword,
} from "../core/services/course-middlewares";

export const GET_COURSES_ERROR = "GET_COURSES_ERROR";
export const GET_TOP_NEW_COURSES_SUCCESS = "GET_TOP_NEW_COURSES_SUCCESS";
export const GET_TOP_NEW_COURSES_FAILED = "ET_TOP_NEW_COURSES_FAILED";
export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS";
export const GET_CATEGORY_FAILED = "GET_CATEGORY_FAILED";
export const GET_LIST_COURSES_BY_SEARCH_SUCCESS =
  "GET_LIST_COURSES_BY_SEARCH_SUCCESS";
export const GET_LIST_COURSES_BY_SEARCH_FAILED =
  "GET_LIST_COURSES_BY_SEARCH_FAILED";
export const GET_TOP_SELL_COURSES_SUCCESS = "GET_TOP_SELL_COURSES_SUCCESS";
export const GET_TOP_SELL_COURSES_FAILED = "GET_TOP_SELL_COURSES_FAILED";
export const GET_TOP_RATE_COURSES_SUCCESS = "GET_TOP_RATE_COURSES_SUCCESS";
export const GET_TOP_RATE_COURSES_FAILED = "GET_TOP_RATE_COURSES_FAILED";
export const GET_TOP_RECOMMEND_COURSES_SUCCESS =
  "GET_TOP_RECOMMEND_COURSES_SUCCESS";
export const GET_TOP_RECOMMEND_COURSES_FAILED =
  "GET_TOP_RECOMMEND_COURSES_FAILED";
export const GET_FAVOURITE_COURSES_SUCCESS = "GET_FAVOURITE_COURSES_SUCCESS";
export const GET_FAVOURITE_COURSES_FAILED = "GET_FAVOURITE_COURSES_FAILED";
export const LIKE_COURSE_SUCCESS = "LIKE_COURSE_SUCCESS";
export const LIKE_COURSE_FAILED = "LIKE_COURSE_FAILED";
export const GET_LIKE_STATUS = "GET_LIKE_STATUS";
export const GET_LIST_COURSES_BY_SEARCH_KEYWORD =
  "GET_LIST_COURSES_BY_SEARCH_KEYWORD";
export const GET_COURSE_DETAIL_SUCCESS = "GET_COURSE_DETAIL_SUCCESS";
export const GET_COURSE_DETAIL_FAILED = "GET_COURSE_DETAIL_FAILED";
export const GET_COURSE_LIKE_STATUS = "GET_COURSE_LIKE_STATUS";
export const SET_COURSE_LIKE_STATUS = "SET_COURSE_LIKE_STATUS";
export const GET_FREE_COURSES_SUCCESS = "GET_FREE_COURSES_SUCCESS";
export const GET_FREE_COURSES_FAILED = "GET_FREE_COURSES_FAILED";
export const CHECK_OWN_COURSE_SUCCESS = "CHECK_OWN_COURSE_SUCCESS";
export const CHECK_OWN_COURSE_FAILED = "CHECK_OWN_COURSE_FAILED";
export const GET_PROCESS_COURSES_SUCCESS = "GET_PROCESS_COURSES_SUCCESS";
export const GET_PROCESS_COURSES_FAILED = "GET_PROCESS_COURSES_FAILED";
export const POST_RATING_COURSE_SUCCESS = "POST_RATING_COURSE_SUCCESS";
export const POST_RATING_COURSE_FAILED = "POST_RATING_COURSE_FAILED";
export const GET_SEARCH_HISTORY_SUCCESS = "GET_SEARCH_HISTORY_SUCCESS";
export const GET_SEARCH_HISTORY_FAILED = "GET_SEARCH_HISTORY_FAILED";
export const DELETE_SEARCH_HISTORY_SUCCESS = "DELETE_SEARCH_HISTORY_SUCCESS";
export const DELETE_SEARCH_HISTORY_FAILED = "DELETE_SEARCH_HISTORY_FAILED";
export const GET_LIST_COURSES_BY_SEARCH_KEYWORD_FAILED =
  "GET_LIST_COURSES_BY_SEARCH_KEYWORD_FAILED";

export const GetTopNewCourses = (dispatch, limit, page) => {
  apiGetTopNewCourses(limit, page)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_TOP_NEW_COURSES_SUCCESS, data: response.data });
      } else {
        dispatch({ type: GET_TOP_NEW_COURSES_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_TOP_NEW_COURSES_FAILED });
    });
};
export const GetCategory = (dispatch) => {
  apiGetCategory()
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_CATEGORY_SUCCESS, data: response.data });
      } else {
        dispatch({ type: GET_CATEGORY_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_CATEGORY_FAILED });
    });
};
export const GetListCoursesByCategory = (
  dispatch,
  keyword,
  limit,
  offset,
  idCategory
) => {
  apiGetListCoursesBySearch(keyword, limit, offset, idCategory)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_LIST_COURSES_BY_SEARCH_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({ type: GET_LIST_COURSES_BY_SEARCH_FAILED });
      }
    })
    .catch((error) => {
      GET_LIST_COURSES_BY_SEARCH_FAILED;
    });
};
export const GetTopSellCourses = (dispatch, limit, page) => {
  apiGetTopSellCourses(limit, page)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_TOP_SELL_COURSES_SUCCESS, data: response.data });
      } else {
        dispatch({ type: GET_TOP_SELL_COURSES_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_TOP_SELL_COURSES_FAILED });
    });
};
export const GetTopRateCourses = (dispatch, limit, page) => {
  apiGetTopRateCourses(limit, page)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_TOP_RATE_COURSES_SUCCESS, data: response.data });
      } else {
        dispatch({ type: GET_TOP_RATE_COURSES_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_TOP_RATE_COURSES_FAILED });
    });
};
export const GetTopRecommendCourses = (dispatch, id, limit, offset) => {
  apiGetTopRecommendCourses(id, limit, offset)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_TOP_RECOMMEND_COURSES_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({ type: GET_TOP_RECOMMEND_COURSES_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_TOP_RECOMMEND_COURSES_FAILED });
    });
};
export const GetFavouriteCourses = (dispatch, token) => {
  apiGetFavouriteCourses(token)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_FAVOURITE_COURSES_SUCCESS, data: response.data });
      } else {
        dispatch({ type: GET_FAVOURITE_COURSES_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_FAVOURITE_COURSES_FAILED });
    });
};
export const LikeCourse = (dispatch, token, courseId) => {
  apiLikeCourse(token, courseId)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: LIKE_COURSE_SUCCESS });
      } else {
        dispatch({ type: LIKE_COURSE_FAILED });
      }
    })
    .catch((error) => {});
};
export const GetLikeStatus = (dispatch, token, courseId) => {
  apiGetLikeStatus(token, courseId)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_LIKE_STATUS, data: response.data });
      }
    })
    .catch((error) => {});
};
export const GetListCoursesBySearchKeyword = (
  dispatch,
  token,
  keyword,
  limit,
  offset
) => {
  apiGetListCoursesBySearchKeyword(token, keyword, limit, offset)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_LIST_COURSES_BY_SEARCH_KEYWORD,
          data: response.data,
        });
      } else {
        dispatch({ type: GET_LIST_COURSES_BY_SEARCH_KEYWORD_FAILED });
      }
    })
    .catch((error) => {});
};
export const GetCourseDetail = (dispatch, token, courseId) => {
  apiGetCourseDetail(token, courseId)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_COURSE_DETAIL_SUCCESS, data: response.data });
      } else {
        dispatch({ type: GET_COURSE_DETAIL_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_COURSE_DETAIL_FAILED });
    });
};
export const GetCourseLikeStatus = (dispatch, token, courseId) => {
  apiGetCourseLikeStatus(token, courseId)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_COURSE_LIKE_STATUS, data: response.data });
      } else {
        dispatch({ type: SET_COURSE_LIKE_STATUS });
      }
    })
    .catch((error) => {});
};
export const GetFreeCourses = (dispatch, token, courseId) => {
  apiGetFreeCourses(token, courseId)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_FREE_COURSES_SUCCESS });
      } else {
        dispatch({ type: GET_FREE_COURSES_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_FREE_COURSES_FAILED });
    });
};
export const CheckOwnCourse = (dispatch, token, courseId) => {
  apiCheckOwnCourse(token, courseId)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: CHECK_OWN_COURSE_SUCCESS, data: response.data });
      }
    })
    .catch((error) => {});
};
export const GetProcessCourses = (dispatch, token) => {
  apiGetProcessCourses(token)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_PROCESS_COURSES_SUCCESS, data: response.data });
      } else {
        dispatch({ type: GET_TOP_NEW_COURSES_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_TOP_NEW_COURSES_FAILED });
    });
};

export const PostRatingCourse = (
  dispatch,
  token,
  courseId,
  formalityPoint,
  contentPoint,
  presentationPoint,
  content
) => {
  apiPostRatingCourse(
    token,
    courseId,
    formalityPoint,
    contentPoint,
    presentationPoint,
    content
  )
    .then((response) => {
      console.log("okokokok", response);
      if (response.status === 200) {
        dispatch({ type: POST_RATING_COURSE_SUCCESS, data: response.data });
      } else {
        dispatch({ type: POST_RATING_COURSE_FAILED });
      }
    })
    .catch((error) => {
      console.log("meno");
      console.log(error.message);
      dispatch({ type: POST_RATING_COURSE_FAILED });
    });
};
export const GetSearchHistory = (dispatch, token) => {
  apiGetSearchHistory(token)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_SEARCH_HISTORY_SUCCESS, data: response.data });
      } else {
        dispatch({ type: GET_SEARCH_HISTORY_FAILED });
      }
    })
    .catch((e) => {
      console.log(e.message);
    });
};
export const DeleteSearchHistory = (dispatch, token, id) => {
  apiDeleteSearchHistory(token, id)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: DELETE_SEARCH_HISTORY_SUCCESS });
      } else {
        dispatch({ type: DELETE_SEARCH_HISTORY_FAILED });
      }
    })
    .catch((e) => {
      console.log(e.message);
    });
};
