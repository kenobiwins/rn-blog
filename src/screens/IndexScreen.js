import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <TouchableOpacity onPress={addBlogPost}>
        <Text>click</Text>
      </TouchableOpacity>
      {state.length > 0 ? (
        <FlatList
          data={state}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return <Text>{item.title}</Text>;
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
