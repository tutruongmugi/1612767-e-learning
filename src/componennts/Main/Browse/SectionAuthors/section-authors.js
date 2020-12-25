import React, { useContext } from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import { AuthorsContext } from "../../../../provider/authors-provider";
import SectionAuthorsItem from "../SectionAuthorsItem/section-authors-item";

function SectionAuthors({ title }) {
  const { AuthorState } = useContext(AuthorsContext);

  const renderItem = (authors) => {
    return authors.map((item) => (
      <SectionAuthorsItem key={item.id} item={item} />
    ));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {renderItem(AuthorState.authors)}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: "#F0F2F5",
    marginTop: 15,
  },

  text: {
    color: "#050505",
    marginBottom: 10,
  },
});
export default SectionAuthors;
