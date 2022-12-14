import {
  loginStart,
  loginSuccess,
  loginFail,
  registerStart,
  registerSuccess,
  registerFail,
} from "./authSlice";

import {
  listPostPublic,
  listPostPrivate,
  postPrivate,
  deleteOnePost,
} from "./postSlice";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:3001";

export const loginUser = async (user, dispatch, history) => {
  dispatch(loginStart());
  try {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log("data respone", data);
    localStorage.setItem("user", data.data.accessToken);
    dispatch(loginSuccess(data.data));
    history.push("/post");
  } catch (err) {
    dispatch(loginFail());
    alert("Login failed");
  }
};

export const registerUser = async (user, dispatch, history) => {
  dispatch(registerStart());
  try {
    const res = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    dispatch(registerSuccess(data.data));
    history.push("/login");
    alert("Register success");
  } catch (err) {
    dispatch(registerFail());
    alert("Register failed");
  }
};

export const getPostPublic = async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/api/posts`);
    const data = await res.json();
    dispatch(listPostPublic(data.data));
  } catch (err) {
    console.log("Error ---", err);
  }
};

export const getListPostPrivate = async (token, dispatch) => {
  axios
    .get(`${BASE_URL}/api/posts/private-posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(listPostPrivate(res.data.data));
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getPostPrivate = async (token, dispatch, id) => {
  axios
    .get(`${BASE_URL}/api/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(postPrivate(res.data.data));
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deletePostPrivate = async (id, token, dispatch) => {
  axios
    .delete(`${BASE_URL}/api/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log("Delete Success---------");
      dispatch(deleteOnePost(id));
    })
    .catch((error) => {
      console.error(error);
    });
};
