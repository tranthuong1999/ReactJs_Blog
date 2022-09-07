import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    content: [],
    postsPrivate: [],
    post: [],
  },
  reducers: {
    listPost: (state, action) => {
      //   console.log("state----", state);
      //   console.log("action----", action);
      state.content.push(action.payload);
    },

    listPostPrivate: (state, action) => {
      console.log("state listPostPrivate----", state);
      console.log("action listPostPrivate----", action);
      
      state.postsPrivate.push(action.payload);
    },
    postPrivate: (state, action) => {
      //   console.log("state----", state);
      //   console.log("action----", action);

      state.post.push(action.payload);
    },
  },
});

export const { listPost, listPostPrivate, postPrivate } = postSlice.actions;

export default postSlice.reducer;
