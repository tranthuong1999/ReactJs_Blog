import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import "./styles.css";
import { deletePostPrivate, getListPostPrivate } from "../../redux/api";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function Post() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("user");

  console.log("token token post -------", token);

  const history = useHistory();

  useEffect(() => {
    getListPostPrivate(token, dispatch);
  }, []);

  const handleDetailPost = (id) => {
    console.log("Detail click-------", id);
    history.push(`/detail-post/${id}`);
  };

  const handleDeletePost = (id) => {
    deletePostPrivate(id, token);

    // getListPostPrivate(token, dispatch);

    setOpen(false);
    alert("Delete success");
  };

  const handleEditPost = (post) => {
    history.push("/create-post", post);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const listPostPrivate = useSelector((state) => state.posts.postsPrivate);
  console.log("listPostPrivate listPostPrivate-----------", listPostPrivate);

  return (
    <div className="container">
      {listPostPrivate[0]?.map((post, index) => {
        return (
          <div className="post" key={index}>
            <h1> {post.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="content"
            />
            <div className="button">
              <Button
                className="btn-detail"
                onClick={() => handleDetailPost(post.id)}
              >
                {" "}
                Detail{" "}
              </Button>
              <div>
                <Button
                  variant="outlined"
                  onClick={handleClickOpen}
                  style={{ backgroundColor: "red" }}
                >
                  Delete
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  PaperComponent={PaperComponent}
                  aria-labelledby="draggable-dialog-title"
                >
                  <DialogTitle
                    style={{ cursor: "move" }}
                    id="draggable-dialog-title"
                  >
                    Subscribe
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Bạn có chắc chắn muốn xóa bài: {post.title}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      autoFocus
                      onClick={handleClose}
                      style={{ backgroundColor: "red" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => handleDeletePost(post.id)}
                      style={{ backgroundColor: "green" }}
                    >
                      Aggree
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              <Button
                className="btn-edit-post"
                onClick={() => handleEditPost(post)}
              >
                {" "}
                Edit
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
