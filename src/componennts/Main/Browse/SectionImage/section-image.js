import React from "react";
import { View, ScrollView, FlatList, StyleSheet } from "react-native";
import ImageButton from "../../../Common/image-button";

function SectionImage() {
  const images = [
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 2,
      title: "CONFERENCES",
    },
    {
      id: 3,
      title: "CONFERENCES",
    },
    {
      id: 4,
      title: "CONFERENCES",
    },
    {
      id: 4,
      title: "CONFERENCES",
    },
    {
      id: 5,
      title: "CONFERENCES",
    },
    {
      id: 6,
      title: "CONFERENCES",
    },
    {
      id: 7,
      title: "CONFERENCES",
    },
    {
      id: 8,
      title: "CONFERENCES",
    },
    {
      id: 9,
      title: "CONFERENCES",
    },
    {
      id: 10,
      title: "CONFERENCES",
    },
    {
      id: 11,
      title: "CONFERENCES",
    },
    {
      id: 12,
      title: "CONFERENCES",
    },
    {
      id: 13,
      title: "CONFERENCES",
    },
    {
      id: 14,
      title: "CONFERENCES",
    },
    {
      id: 15,
      title: "CONFERENCES",
    },
  ];

  return (
    <ScrollView>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <ImageButton key={item.id} title={item.title} />
        )}
        keyExtractor={(item, index) => item + index}
        numColumns={images.length / 2}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default SectionImage;
