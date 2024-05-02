import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Post {
  _id: string;
  article_id: string;
  title: string;
  link: string;
  content: string;
  image_url?: string;
}

interface PostState {
  selectedPosts: Post[];
}

const initialState: PostState = {
  selectedPosts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    saveSelectedPost: (state, action: PayloadAction<Post>) => {
      state.selectedPosts.push(action.payload);
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.selectedPosts = state.selectedPosts.filter(
        (post) => post.article_id !== action.payload
      );
    },
    clearSelectedPosts: (state) => {
      state.selectedPosts = [];
    },
  },
});

export const { saveSelectedPost, removePost, clearSelectedPosts } =
  postSlice.actions;

export const selectSelectedPosts = (state: RootState) =>
  state.post.selectedPosts;

export const isPostSaved = (state: RootState, postId: string) => {
  return state.post.selectedPosts.some((post) => post._id === postId);
};

export default postSlice.reducer;
