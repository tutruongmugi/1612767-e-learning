import React from "react";
import { View, Text } from "react-native";
import Authors from "../../../Authors/authors";

function SearchAuthors() {
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
  return (
    <View>
      <View>
        <Text>{`${authors.length} results`}</Text>
      </View>
      <Authors authors={authors} />
    </View>
  );
}

export default SearchAuthors;
