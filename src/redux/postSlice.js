import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    postPublic: [],
    postsPrivate: [],
    post: null,
  },
  reducers: {
    listPostPublic: (state, action) => {
      state.postPublic = [...action.payload];
    },

    listPostPrivate: (state, action) => {
      state.postsPrivate = [...action.payload];
    },
    postPrivate: (state, action) => {
      state.post = action.payload;
    },
    deleteOnePost: (state, action) => {
      console.log("action deleteOnePost", action);
      state.postsPrivate = state.postsPrivate.filter(
        (post) => post.id !== action.payload
      );
    },
  },
});

export const { listPostPublic, listPostPrivate, postPrivate, deleteOnePost } =
  postSlice.actions;

export default postSlice.reducer;
