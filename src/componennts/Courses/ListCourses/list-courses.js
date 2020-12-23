import React from "react";
import {
  View,
  FlatList,
  TextInput,
  Button,
  SectionList,
  Text,
} from "react-native";
import ListCoursesItem from "../ListCoursesItem/list-courses-item";
import * as RootNavigation from "../../../routes/navigations/root-navigation";

function ListCourses({ courses }) {
  // const searchView = () => {
  //   return (
  //     <View style={{ flexDirection: "row" }}>
  //       <TextInput
  //         style={{ flex: 1, borderWidth: 1, borderColor: "gray" }}
  //         placeholder="Search text..."
  //       />
  //       <Button
  //         onPress={() => {
  //           console.log("search");
  //         }}
  //         title="Search"
  //         styles={{ width: 60, height: 40 }}
  //       />
  //     </View>
  //   );
  // };
  console.log("TEXT: ", courses);
  return (
    <View style={{ flex: 1 }}>
      {/* <Text
        style={{ fontSize: 20, color: "#000", padding: 4, fontWeight: "bold" }}
      >
        {params.title}
      </Text> */}
      <FlatList
        data={courses}
        renderItem={({ item }) => <ListCoursesItem item={item} />}
        // ListHeaderComponent={() => searchView()}
        keyExtractor={(item, index) => item + index}
      />
      {/* <SectionList
        sections={courses}
        renderItem={({ item }) => <ListCoursesItem item={item} />}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: "white" }}>
            <Text>{section.title}</Text>
          </View>
        )}
      /> */}
    </View>
  );
}

export default ListCourses;
