import React, { useContext, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { AuthenticationContext } from "../../../../provider/authentication-provider";
import { CoursesContext } from "../../../../provider/courses-provider";
import { ThemeContext } from "../../../../provider/theme-provider";
import SearchHistoryItem from "./SearchHistoryItem/search-history-item";

function SearchHistory({ handleSearchByHistory }) {
  const { theme, language } = useContext(ThemeContext);
  const {
    courseState,
    deleteItemHistory,
    getSearchHistory,
    deleteSearchHistory,
  } = useContext(CoursesContext);
  const [listHis, setListHis] = useState(courseState.searchHistory);
  const { state } = useContext(AuthenticationContext);
  const deleteItem = (item) => {
    deleteItemHistory(item);
    getSearchHistory(state.token);
    deleteSearchHistory(state.token, item.id);
    // var index = listHis.indexOf(item);
    // const temp = listHis;

    // if (index > -1) {
    //   temp.splice(index, 1);
    //   setListHis(temp);
    //   console.log("his", listHis);
    // }
  };
  const listHistory = (histories) => {
    return histories.map((history) => (
      <SearchHistoryItem
        key={history.id}
        item={history}
        deleteItem={deleteItem}
        handleSearchByHistory={handleSearchByHistory}
      />
    ));
  };
  return (
    <View>
      <Text style={{ fontSize: 14, color: theme.text }}>Recent searches</Text>
      <View>{listHistory(listHis)}</View>
      {/* <SearchHistoryItem item={{ content: "FDFDS" }} />; */}
    </View>
  );
}
export default SearchHistory;
