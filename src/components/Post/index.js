import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import "./styles.css";
import { getListPostPrivate, getPostPrivate } from "../../redux/api";

export default function Post() {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("user");
  const history = useHistory();

  useEffect(() => {
    getListPostPrivate(token, dispatch);
  }, []);

  const listPostPrivate = useSelector((state) => state.posts.postsPrivate);

  const handleDetailPost = (id) => {
    console.log("Detail click-------", id);

    getPostPrivate(token, dispatch, id);

    history.push("/detail-post");
  };

  return (
    <div>
      {listPostPrivate[0]?.map((post, index) => {
        console.log("Post--------", post);
        console.log("Index Post--------", post.id);

        return (
          <div className="post" key={index}>
            <h1> {post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <Button
              className="btn-detatil"
              onClick={() => handleDetailPost(post.id)}
            >
              {" "}
              Detail{" "}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
