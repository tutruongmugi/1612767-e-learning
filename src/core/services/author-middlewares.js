import axios from "axios";
import { apiUrl } from "./authentication-services";

export const apiGetListAuthor = () => {
  return axios.get(apiUrl + "/instructor");
};
export const apiGetAuthorDetail = (authorId) => {
  return axios.get(apiUrl + "/instructor/detail/" + authorId);
};
