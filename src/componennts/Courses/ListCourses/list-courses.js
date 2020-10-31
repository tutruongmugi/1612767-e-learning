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

function ListCourses() {
  const courses = [
    {
      title: "mobile",
      data: [
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
      ],
    },
    {
      title: "Web",
      data: [
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
      ],
    },
  ];

  const searchView = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: "gray" }}
          placeholder="Search text..."
        />
        <Button
          onPress={() => {
            console.log("search");
          }}
          title="Search"
          styles={{ width: 60, height: 40 }}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={courses}
        renderItem={({ item }) => <ListCoursesItem item={item} />}
        ListHeaderComponent={() => searchView()}
      />
      <SectionList
        sections={courses}
        renderItem={({ item }) => <ListCoursesItem item={item} />}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: "white" }}>
            <Text>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default ListCourses;
