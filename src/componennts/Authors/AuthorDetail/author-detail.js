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
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";

function AuthorDetail({ authorId }) {
  const [isLoading, SetIsLoading] = useState(true);

  const { AuthorState, getAuthorDetail, startGetAuthorDetail } = useContext(
    AuthorsContext
  );
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

  const FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };
  return (
    <View style={{ flex: 1 }}>
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
            <Text style={styles.title}>{AuthorState.authorDetail.name}</Text>
          </View>
          <Text
            style={{
              color: "#000",
              marginBottom: 5,
              alignSelf: "center",
            }}
          >
            {AuthorState.authorDetail.intro}
          </Text>
          <View style={{ marginTop: 30, flex: 1 }}>
            <Text style={styles.text}>Courses</Text>
            <FlatList
              data={AuthorState.authorDetail.courses}
              renderItem={({ item }) => <ListCoursesItem item={item} />}
              ItemSeparatorComponent={FlatListItemSeparator}
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
    backgroundColor: "#FFF",
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
