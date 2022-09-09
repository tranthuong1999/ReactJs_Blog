import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import Content from "./components/Content";
import Detail from "./components/Detail";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <NavBar />
        </Switch>
        <Switch>
          <ProtectedRoute exact path="/post" component={Post} />
          <ProtectedRoute exact path="/content" component={Content} />
          <ProtectedRoute exact path="/create-post" component={CreatePost} />
          {/* <ProtectedRoute exact path="/detail-post/:id" component={Detail} /> */}
          <Route path="/detail-post/:id">
            <Detail />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
