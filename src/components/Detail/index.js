import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import TableOfContent from "../TableOfContent/index.js";

import { getPostPrivate } from "../../redux/api";

import "./style.css";

import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();

  const postPrivate = useSelector((state) => state.posts.post);

  console.log("postPrivatepostPrivate-------", postPrivate);

  const token = localStorage.getItem("user");
  const dispatch = useDispatch();

  useEffect(() => {
    getPostPrivate(token, dispatch, id);
  }, []);

  return (
    <div className="container-detail">
      <div className="detail-post">
        <div
          id="second-header"
          dangerouslySetInnerHTML={{ __html: postPrivate?.content }}
        />
      </div>
      {/* {postPrivate && <TableOfContent />} */}
    </div>
  );
}

export default Detail;
