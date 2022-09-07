import React, { useEffect, useState } from "react";
import "./styles.css";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const BASE_URL = "http://127.0.0.1:3001";

export default function Post() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const token = sessionStorage.getItem("user");

  const handleAddPost = (data) => {
    console.log("Content--------", content);

    axios.post(
      `${BASE_URL}/api/posts`,
      {
        title: data.title,
        content: content,
        category_id: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert("Create Post Successfully");
    history.push("/post");
  };

  const handleChange = (content) => {
    setContent(content);
  };

  return (
    <form onSubmit={handleSubmit(handleAddPost)}>
      <label>Title</label>
      <input
        style={{ width: "87vh", border: "1px solid black" }}
        {...register("title", {
          required: true,
        })}
      />
      {errors?.title?.type === "required" && <p>Please enter title</p>}
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
      <br />
      <input
        type="submit"
        value="Submit"
        style={{
          backgroundColor: "#0c74db",
          marginTop: "10px",
          fontSize: "10px",
          width: "87vh",
        }}
      />
    </form>
  );
}
