import React, { useContext } from "react";
import {
  SectionList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ThemeContext } from "../../../../provider/theme-provider";
import AuthorsItem from "../../../Authors/AuthorsItem/authors-item";
import ListCoursesItem from "../../../Courses/ListCoursesItem/list-courses-item";
import PathsItem from "../../../Paths/PathsItem/paths-item";

function SearchAll({ courses, authors, paths }) {
  const { theme, language } = useContext(ThemeContext);

  const OnPressedCoursesResults = () => {};
  const OnPressedPathsResults = () => {};
  const OnPressedAuthorsResults = () => {};

  return (
    <View style={{ backgroundColor: theme.background, height: "100%" }}>
      <FlatList
        data={courses}
        renderItem={({ item }) => <ListCoursesItem item={item} />}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={{ color: theme.text }}>{language.COURSES}</Text>
            <TouchableOpacity onPress={OnPressedCoursesResults}>
              <Text
                style={{ color: theme.text }}
              >{`${courses.length} ${language.RESULTS}`}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => item + index}
      />
      <FlatList
        data={paths}
        renderItem={({ item }) => <PathsItem item={item} />}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={{ color: theme.text }}>{language.PATHS}</Text>
            <TouchableOpacity onPress={OnPressedPathsResults}>
              <Text
                style={{ color: theme.text }}
              >{`${paths.length} ${language.RESULTS}`}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => item + index}
      />
      <FlatList
        data={authors}
        renderItem={({ item }) => <AuthorsItem item={item} />}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={{ color: theme.text }}>{language.AUTHORS}</Text>
            <TouchableOpacity onPress={OnPressedAuthorsResults}>
              <Text
                style={{ color: theme.text }}
              >{`${authors.length} ${language.RESULTS}`}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );

  // const buildItem = (item) => {
  //   return (
  //     <View>
  //       <ListCoursesItem item={item} />
  //     </View>
  //   );
  // };

  // return (
  //   <View>
  //     <SectionList
  //       sections={DATA}
  //       keyExtractor={(item, index) => item + index}
  //       ItemSeparatorComponent={FlatListItemSeparator}
  //       renderItem={({ item }) => buildItem(item)}
  //       renderSectionHeader={({ section: { title, data } }) => (
  //         <View style={{ backgroundColor: "white" }}>
  //           <Text>{title}</Text>
  //           <Text>{`${data.length} results`}</Text>
  //         </View>
  //       )}
  //     />
  //   </View>
  // );
}
const styles = StyleSheet.create({
  listItemSeparatorStyle: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#C8C8C8",
  },
  header: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 15,
  },
  container: {
    backgroundColor: "#FFF",
  },
});
export default SearchAll;
