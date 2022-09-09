import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";

export default function NavBar() {
  const history = useHistory();

  const user = localStorage?.getItem("user");

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
            </Typography>
            {user ? (
              <>
                <Button color="inherit" onClick={() => history.push("/post")}>
                  Post
                </Button>
                <span></span>
                <Button
                  color="inherit"
                  onClick={() => history.push("/create-post")}
                >
                  Create Post
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => history.push("/login")}>
                  Login
                </Button>
                <span></span>
                <Button
                  color="inherit"
                  onClick={() => history.push("/register")}
                >
                  Register
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
