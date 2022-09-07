import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "./styles.css";
import { getPostPublic } from "../../redux/api";

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    getPostPublic(dispatch);
  }, []);

  const listPost = useSelector((state) => state.posts.content);

  console.log("List post pulic", listPost);

  return (
    <div className="container">
      {/* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}
      <h1 style={{ color: "red" }}> Post public </h1>
    </div>
  );
}
