import { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);

  return <BlogPostForm onSubmit={(title,content) => {
    addBlogPost(title, content, () => {
      navigation.navigate('Index')
    })
  }} />;
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
