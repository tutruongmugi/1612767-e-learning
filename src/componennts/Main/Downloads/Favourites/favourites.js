import React from "react";
import { View, FlatList } from "react-native";
import ListFavouriteCoursesItem from "../../../Courses/ListFavouriteCoursesItem/list-favourite-courses-item";

function Favourites({ data }) {
  return (
    <View>
      <FlatList
        // data={courses.filter((course) => favouriteCourses.includes(course.id))}
        data={data}
        renderItem={({ item }) => (
          <ListFavouriteCoursesItem key={item.id} item={item} />
        )}
        keyExtractor={(item, index) => {
          return item.id.toString();
        }}
      />
    </View>
  );
}

export default Favourites;
