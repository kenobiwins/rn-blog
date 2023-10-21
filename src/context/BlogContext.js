import CreateDataContext from "./CreateDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        { id: Math.floor(Math.random() * 999999), title: `Blog post #${state.length + 1}` },
      ];
    case "delete_blogpost":
      return state.filter((item) => item.id !== action.payload);
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
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
