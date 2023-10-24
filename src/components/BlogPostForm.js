import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function BlogPostForm({ onSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.inpput}
        value={title}
        onChangeText={(newValue) => setTitle(newValue)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.inpput}
        value={content}
        onChangeText={(newValue) => setContent(newValue)}
      />
      <Button
        title="Save blog form"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  inpput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    marginBottom: 10,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
