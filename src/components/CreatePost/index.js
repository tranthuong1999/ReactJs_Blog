import React, { useEffect, useState } from "react";
import "./styles.css";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const BASE_URL = "http://127.0.0.1:3001";

export default function Post(props) {
  const currentPostUpdate = props?.location?.state;

  // console.log("currentPostUpdate", currentPostUpdate?.private);

  const id = currentPostUpdate?.id;
  const dispatch = useDispatch();
  const [content, setContent] = useState(currentPostUpdate?.content || "");

  const [title, setTitle] = useState(currentPostUpdate?.title || "");
  const [titleErr, setTitleErr] = useState("");
  const [contentErr, setContentErr] = useState("");
  const [value, setValue] = useState("true");

  const token = localStorage.getItem("user");
  const history = useHistory();

  const handleAddPost = (event) => {
    event.preventDefault();
    if (title.length === 0) {
      setTitleErr("Please enter title");
    }
    if (content.length === 0) {
      setContentErr("Please enter content");
    }

    console.log("Title content", title.length, content.length);

    if (title.length > 0 && content.length > 0) {
      axios.post(
        `${BASE_URL}/api/posts`,
        {
          title: title,
          content: content,
          category_id: 1,
          isPrivate: value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Create Post Successfully");
      history.push("/post");
    }
  };

  const handleUpdatePost = (event) => {
    event.preventDefault();
    if (title.length === 0) {
      setTitleErr("Please enter title");
    }
    if (content.length === 0) {
      setContentErr("Please enter content");
    }
    if (title.length > 0 && content.length > 0) {
      axios.patch(
        `${BASE_URL}/api/posts/${id}`,
        {
          title: title,
          content: content,
          category_id: 1,
          isPrivate: value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Updated Post Successfully");
      history.push("/post");
    }
  };

  const handleChange = (content) => {
    if (content.length > 0) {
      setContentErr("");
    }
    setContent(content);
  };

  const handleChangeTitle = (event) => {
    event.preventDefault();
    console.log("title", event.target.value.length);
    if (event.target.value.length > 0) {
      setTitleErr("");
    }
    setTitle(event.target.value);
  };

  const handleChangeState = (event) => {
    console.log("handleChangeState", event.target.value);
    setValue(event.target.value);
  };

  return (
    <form>
      <label>Title</label>
      <input
        value={title}
        onChange={handleChangeTitle}
        style={{ width: "87vh", border: "1px solid black" }}
      />
      <p> {titleErr}</p>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChangeState}
        >
          <div className="radio-post">
            <FormControlLabel
              value="true"
              control={<Radio />}
              label="Private"
            />
            <FormControlLabel
              value="false"
              control={<Radio />}
              label="Public"
            />
          </div>
        </RadioGroup>
      </FormControl>

      <label>Content</label>
      <Editor
        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
        value={content}
        init={{
          height: 200,
          menubar: false,
        }}
        onEditorChange={handleChange}
      />
      <p> {contentErr}</p>
      <br />
      {currentPostUpdate ? (
        <Button
          type="submit"
          className="btn-update-post"
          onClick={handleUpdatePost}
        >
          {" "}
          Update Post
        </Button>
      ) : (
        <Button type="submit" className="btn-add-post" onClick={handleAddPost}>
          {" "}
          Add Post
        </Button>
      )}
    </form>
  );
}
