import {
  GET_LIST_AUTHOR_SUCCESS,
  GET_LIST_AUTHOR_FAILED,
  GET_AUTHOR_DETAIL_SUCCESS,
  GET_AUTHOR_DETAIL_FAILED,
} from "../action/authors-action";

export const reducer = (prevState, action) => {
  console.log("Author Reducer: ", action);
  switch (action.type) {
    case GET_LIST_AUTHOR_SUCCESS:
      return {
        ...prevState,
        authors: action.data.payload,
        getListAuthorsStatus: true,
      };
    case GET_LIST_AUTHOR_FAILED:
      return {
        ...prevState,
        getListAuthorsStatus: false,
      };
    case GET_AUTHOR_DETAIL_SUCCESS:
      return {
        ...prevState,
        authorDetail: action.data.payload,
        getAuthorDetailStatus: true,
      };
    case GET_AUTHOR_DETAIL_FAILED:
      return {
        ...prevState,
        getAuthorDetailStatus: false,
      };
  }
};
