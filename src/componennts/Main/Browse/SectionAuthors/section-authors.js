import React from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import SectionAuthorsItem from "../SectionAuthorsItem/section-authors-item";

function SectionAuthors({ title }) {
  const authors = [
    {
      id: 1,
      name: "Sayaka",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F806629%2Fdevelopment_web_people_coding_avatar_internet_programmer_icon&psig=AOvVaw1yvNITC61GhQlHfaZs-JIp&ust=1604217436968000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNir9-Gt3uwCFQAAAAAdAAAAABAD",
    },
    {
      id: 2,
      name: "Touko",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTue0QzcbncaPSxMCpLhzOab4a1Sux6xXpow&usqp=CAU",
    },
  ];

  const renderItem = (authors) => {
    return authors.map((item) => <SectionAuthorsItem item={item} />);
  };
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <ScrollView horizontal={true}>{renderItem(authors)}</ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});
export default SectionAuthors;
