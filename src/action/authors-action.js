import {
  apiGetListAuthor,
  apiGetAuthorDetail,
} from "../core/services/author-middlewares";

export const GET_LIST_AUTHOR_SUCCESS = "GET_LIST_AUTHOR_SUCCESS";
export const GET_LIST_AUTHOR_FAILED = "GET_LIST_AUTHOR_FAILED";
export const GET_AUTHOR_DETAIL_SUCCESS = "GET_AUTHOR_DETAIL_SUCCESS";
export const GET_AUTHOR_DETAIL_FAILED = "GET_AUTHOR_DETAIL_FAILED";

export const GetListAuthor = (dispatch) => {
  apiGetListAuthor()
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_LIST_AUTHOR_SUCCESS, data: response.data });
      } else {
        dispatch({ type: GET_LIST_AUTHOR_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_LIST_AUTHOR_FAILED });
    });
};
export const GetAuthorDetail = (dispatch, authorId) => {
  apiGetAuthorDetail(authorId)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_AUTHOR_DETAIL_SUCCESS, data: response.data });
      } else {
        dispatch({ type: GET_AUTHOR_DETAIL_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_AUTHOR_DETAIL_FAILED });
    });
};
