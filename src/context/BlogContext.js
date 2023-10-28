import jsonServer from "../api/jsonServer";
import CreateDataContext from "./CreateDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    // case "add_blogpost":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 999999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];
    case "delete_blogpost":
      return state.filter((item) => item.id !== action.payload);
    case "edit_blogpost":
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  // return (title, content, callback) => {
  //   dispatch({ type: "add_blogpost", payload: { title, content } });
  //   if (callback) {
  //     callback();
  //   }
  // };
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });

    if (callback) {
      callback();
    }
  };
};
const editBlogPost = (dispatch) => {
  // return ({ id, title, content }, callback) => {
  //   dispatch({ type: "edit_blogpost", payload: { id, title, content } });
  //   if (callback) {
  //     callback();
  //   }
  // };

  return async ({ id, title, content }, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  // return (id) => {
  // dispatch({ type: "delete_blogpost", payload: id });
  // };

  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
