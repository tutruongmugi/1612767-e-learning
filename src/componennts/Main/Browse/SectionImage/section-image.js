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
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
    {
      id: 1,
      title: "CONFERENCES",
    },
  ];

  return (
    <ScrollView>
      <FlatList
        data={images}
        renderItem={({ item }) => <ImageButton title={item.title} />}
        numColumns={images.length / 2}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default SectionImage;
