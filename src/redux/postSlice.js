import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    content: [],
    postsPrivate: [],
    post: null,
  },
  reducers: {
    listPostPublic: (state, action) => {
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
      // console.log("state postPrivate----", state);
      // console.log("action postPrivate----", action);
      // cons
      console.log("action postPrivate----", action.payload);

      state.post = action.payload;
    },
  },
});

export const { listPostPublic, listPostPrivate, postPrivate } =
  postSlice.actions;

export default postSlice.reducer;
