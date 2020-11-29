import React from "react";
import {
  SectionList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AuthorsItem from "../../../Authors/AuthorsItem/authors-item";
import ListCoursesItem from "../../../Courses/ListCoursesItem/list-courses-item";
import PathsItem from "../../../Paths/PathsItem/paths-item";

function SearchAll({ courses, authors, paths }) {
  const FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={styles.listItemSeparatorStyle} />
    );
  };

  const OnPressedCoursesResults = () => {};
  const OnPressedPathsResults = () => {};
  const OnPressedAuthorsResults = () => {};

  return (
    <View>
      <FlatList
        data={courses}
        renderItem={({ item }) => <ListCoursesItem item={item} />}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text>Courses</Text>
            <TouchableOpacity onPress={OnPressedCoursesResults}>
              <Text>{`${courses.length} results`}</Text>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={FlatListItemSeparator}
        keyExtractor={(item, index) => item + index}
      />
      <FlatList
        data={paths}
        renderItem={({ item }) => <PathsItem item={item} />}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text>Paths</Text>
            <TouchableOpacity onPress={OnPressedPathsResults}>
              <Text>{`${paths.length} results`}</Text>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={FlatListItemSeparator}
        keyExtractor={(item, index) => item + index}
      />
      <FlatList
        data={authors}
        renderItem={({ item }) => <AuthorsItem item={item} />}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text>Authors</Text>
            <TouchableOpacity onPress={OnPressedAuthorsResults}>
              <Text>{`${authors.length} results`}</Text>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={FlatListItemSeparator}
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
