import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Context } from "../context/BlogContext";

export default function CreateScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

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
        title="Add new post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
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
