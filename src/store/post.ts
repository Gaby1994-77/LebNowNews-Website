import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Post {
  id: number;
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
    removePost: (state, action: PayloadAction<number>) => {
      state.selectedPosts = state.selectedPosts.filter(
        (post) => post.id !== action.payload
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

export default postSlice.reducer;
