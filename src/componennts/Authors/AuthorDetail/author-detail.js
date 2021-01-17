import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Image } from "react-native-elements";
import { AuthorsContext } from "../../../provider/authors-provider";
import { ThemeContext } from "../../../provider/theme-provider";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";

function AuthorDetail({ authorId }) {
  const [isLoading, SetIsLoading] = useState(true);

  const { AuthorState, getAuthorDetail, startGetAuthorDetail } = useContext(
    AuthorsContext
  );
  const { theme, language } = useContext(ThemeContext);
  useEffect(() => {
    if (!AuthorState.getAuthorDetailStatus) {
      if (isLoading) {
        getAuthorDetail(authorId);
      }
    } else {
      SetIsLoading(false);
    }

    return () => {
      startGetAuthorDetail();
    };
  }, [AuthorState.getAuthorDetailStatus]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      {isLoading ? (
        <View
          style={{ justifyContent: "center", flex: 1, flexDirection: "row" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.headerProfile}>
            <Image
              source={{ uri: AuthorState.authorDetail.avatar }}
              style={styles.image}
            />
            <Text style={[styles.title, { color: theme.text }]}>
              {AuthorState.authorDetail.name}
            </Text>
          </View>
          <Text
            style={{
              color: theme.text,
              marginBottom: 5,
              alignSelf: "center",
            }}
          >
            {AuthorState.authorDetail.intro}
          </Text>
          <View style={{ marginTop: 30, flex: 1 }}>
            <Text style={[styles.text, { color: theme.text }]}>
              {language.COURSES}
            </Text>
            <FlatList
              data={AuthorState.authorDetail.courses}
              renderItem={({ item }) => <ListCoursesItem item={item} />}
              keyExtractor={(item, index) => item + index}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 1,
    marginBottom: 5,
  },
  container: {
    padding: 8,
    flex: 1,
  },
  headerProfile: {
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    color: "#000",
    marginBottom: 5,
  },
});

export default AuthorDetail;
