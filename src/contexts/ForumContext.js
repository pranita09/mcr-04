import { createContext, useContext, useReducer } from "react";
import { forumData } from "../data/data";

export const ForumContext = createContext();

const initialState = {
  forumData: forumData,
};

const reducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "UPVOTE":
      console.log("upvote");
      return {
        ...state,
        forumData: state.forumData.posts.map((post) =>
          post.postId === payload ? post.upvotes + 1 : post.upvotes
        ),
      };
    case "DOWNVOTE":
      return {
        ...state,
        forumData: state.forumData.posts.map((post) =>
          post.postId === payload ? post.downvotes + 1 : post.downvotes
        ),
      };
    default:
      return state;
  }
};

export const ForumProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <ForumContext.Provider value={{ state, dispatch }}>
      {children}
    </ForumContext.Provider>
  );
};

export const useForum = () => useContext(ForumContext);
