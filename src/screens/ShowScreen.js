import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";

export default function ShowScreen({ navigation }) {
  const id = navigation.getParam("id");

  const { state } = React.useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
