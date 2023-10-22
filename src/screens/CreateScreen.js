import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function CreateScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.inpput} value={title} onChange={(newValue) => setTitle(newValue)} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.inpput}
        value={content}
        onChange={(newValue) => setContent(newValue)}
      />
      <Button title="Add new post"/>
    </View>
  );
}

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
