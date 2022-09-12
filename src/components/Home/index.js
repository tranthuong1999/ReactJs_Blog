import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import "./styles.css";
import { getPostPublic, getListPostPrivate } from "../../redux/api";

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const token = localStorage.getItem("user");

  useEffect(() => {
    getPostPublic(dispatch);
  }, []);

  const listPostPublic = useSelector((state) => state.posts.postPublic);

  console.log("List post pulic", listPostPublic);

  const handleDetailPostPublic = (id) => {
    history.push(`/detail-post/${id}`);
  };

  return (
    <div className="container">
      {listPostPublic?.map((postPublic, index) => {
        console.log("Post public", postPublic);

        return (
          <div className="post">
            <h1> {postPublic.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: postPublic?.content }}
              className="content"
            />
            <div className="button">
              <Button
                className="btn-detail"
                onClick={() => handleDetailPostPublic(postPublic.id)}
              >
                {" "}
                Detail{" "}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
