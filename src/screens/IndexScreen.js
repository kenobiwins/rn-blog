import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

   const listener = navigation.addListener('didFocus', () => {
      getBlogPosts()
   })
    
    return () => {
      listener.remove();
    }
  }, []);

  return (
    <View>
      <Text>Index Screen</Text>
      {state.length > 0 ? (
        <FlatList
          data={state}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
                <View style={styles.row}>
                  <Text style={styles.title}>
                    {item.title} - {item.id}
                  </Text>
                  <Text style={styles.title}>{item.content}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      deleteBlogPost(item.id);
                    }}
                  >
                    <Feather style={styles.icon} name="trash" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      ) : null}
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
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
