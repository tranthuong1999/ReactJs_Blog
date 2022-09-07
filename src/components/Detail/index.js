import React from "react";

import { useDispatch, useSelector } from "react-redux";
import TableOfContent from "../TableOfContent/index.js";

function Detail() {
  const postPrivate = useSelector((state) => state.posts.post);

  console.log("Post private-------------", postPrivate);

  return (
    <>
      <div>
        Detail Post
        {/* {postPrivate?.map((post) => {
          console.log("Post--------", post);

          return (
            <div className="post">
              <div
                id="second-header"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          );
        })} */}
        {postPrivate.length > 0 && <TableOfContent />}
      </div>
    </>
  );
}

export default Detail;
