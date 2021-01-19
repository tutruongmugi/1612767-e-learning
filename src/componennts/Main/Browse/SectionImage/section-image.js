import React from "react";
import { View, ScrollView, FlatList, StyleSheet } from "react-native";
import ImageButton from "../../../Common/image-button";
import * as RootNavigation from "../../../../routes/navigations/root-navigation";

function SectionImage({ data }) {
  var n = Math.round(data.length / 2);
  console.log("category:", data);
  return (
    <ScrollView horizontal={true}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ImageButton
            key={item.id}
            title={item.name}
            onPress={() => {
              RootNavigation.navigate("SearchByCategory", {
                title: item.name,
                data: item,
              });
            }}
            style1={{ height: 50, margin: 10, width: 180 }}
          />
        )}
        keyExtractor={(item, index) => item + index}
        numColumns={n}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        key={n}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default SectionImage;
