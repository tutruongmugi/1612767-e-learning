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

function SearchAll() {
  const courses = [
    {
      id: 1,
      title: "react-native",
      author: "kuro",
      level: "Advanced",
      released: "May 2, 2020",
      duration: "30 hours",
    },
    {
      id: 2,
      title: "IOS",
      author: "yuuki",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "35 hours",
    },
    {
      id: 3,
      title: "Android",
      author: "Master",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "25 hours",
    },
    {
      id: 4,
      title: "react-native",
      author: "kuro",
      level: "Advanced",
      released: "May 2, 2020",
      duration: "30 hours",
    },
    {
      id: 5,
      title: "IOS",
      author: "yuuki",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "35 hours",
    },
    {
      id: 6,
      title: "Android",
      author: "Master",
      level: "Beginner",
      released: "May 5, 2020",
      duration: "25 hours",
    },
  ];

  const paths = [
    {
      id: 1,
      title: "React",
      duration: "12 courses",
    },
    {
      id: 2,
      title: "React-native",
      duration: "6 courses",
    },
    {
      id: 3,
      title: "Angular",
      duration: "16 courses",
    },
    {
      id: 4,
      title: "React",
      duration: "12 courses",
    },
    {
      id: 5,
      title: "React-native",
      duration: "6 courses",
    },
    {
      id: 6,
      title: "Angular",
      duration: "16 courses",
    },
  ];

  const authors = [
    {
      id: 1,
      name: "viktor",
      course: "37 courses",
    },
    {
      id: 2,
      name: "james",
      course: "32 courses",
    },
    {
      id: 3,
      name: "lake",
      course: "23 courses",
    },
    {
      id: 4,
      name: "varin",
      course: "12 courses",
    },
    {
      id: 5,
      name: "yash",
      course: "14 courses",
    },
    {
      id: 6,
      name: "draz",
      course: "53 courses",
    },
    {
      id: 7,
      name: "elise",
      course: "23 courses",
    },
  ];
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
    backgroundColor: "white",
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 15,
  },
});
export default SearchAll;
