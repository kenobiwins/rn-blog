import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <TouchableOpacity onPress={addBlogPost}>
        <Text>add post click</Text>
      </TouchableOpacity>
      {state.length > 0 ? (
        <FlatList
          data={state}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteBlogPost(item.id);
                  }}
                >
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
