import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import CreatePost from "./components/CreatePost";

import Content from "./components/Content";
import Detail from "./components/Detail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/content">
            <Content />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
          <Route path="/detail-post">
            <Detail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
