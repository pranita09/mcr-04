import { createContext, useContext, useReducer, useState } from "react";
import { forumData } from "../data/data";

export const ForumContext = createContext();

const initialState = {
  forumData: forumData,
};

const reducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "UPVOTE":
      return {
        ...state,
        forumData: {
          ...state.forumData,
          posts: state.forumData.posts.map((post) =>
            post.postId === payload
              ? { ...post, upvotes: post.upvotes + 1 }
              : post
          ),
        },
      };
    case "DOWNVOTE":
      return {
        ...state,
        forumData: {
          ...state.forumData,
          posts: state.forumData.posts.map((post) =>
            post.postId === payload
              ? { ...post, downvotes: post.downvotes + 1 }
              : post
          ),
        },
      };
    case "BOOKMARK":
      return {
        ...state,
        forumData: {
          ...state.forumData,
          posts: state.forumData.posts.map((post) =>
            post.postId === payload
              ? { ...post, isBookmarked: !post.isBookmarked }
              : post
          ),
        },
      };
    default:
      return state;
  }
};

export const ForumProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const [sortBy, setSortBy] = useState("Latest");

  const sortPosts = (a, b) => {
    if (sortBy === "Latest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortBy === "Upvoted") {
      return b.upvotes - a.upvotes;
    }
    return 0;
  };

  const toggleSortBy = () => {
    setSortBy(sortBy === "Latest" ? "Upvoted" : "Latest");
  };

  return (
    <ForumContext.Provider
      value={{ state, dispatch, sortPosts, sortBy, toggleSortBy }}
    >
      {children}
    </ForumContext.Provider>
  );
};

export const useForum = () => useContext(ForumContext);
