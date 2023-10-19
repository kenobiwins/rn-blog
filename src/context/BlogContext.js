import CreateDataContext from "./CreateDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog post #${state.length + 1}` }];

    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};
const editBlogPost = () => {};
const deleteBlogPost = () => {};

export const { Context, Provider } = CreateDataContext(blogReducer, { addBlogPost }, []);
