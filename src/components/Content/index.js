import { useEffect, useRef } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getListPostPrivate } from "../../redux/api";
import TableOfContent from "../TableOfContent/index.js";

const MainContent = () => {
  const dispatch = useDispatch();
  const token = sessionStorage?.getItem("user");

  const listPostPrivate = useSelector((state) => state.posts.postsPrivate);

  console.log("listPostPrivate-----------------", listPostPrivate);

  useEffect(() => {
    getListPostPrivate(token, dispatch);
  }, []);

  return (
    <>
      <div>
        {listPostPrivate[0]?.map((post) => {
          console.log("Post--------", post);

          return (
            <div className="post">
              <div
                id="second-header"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          );
        })}
        {listPostPrivate.length > 0 && <TableOfContent />}
      </div>
    </>
  );
};

export default MainContent;
