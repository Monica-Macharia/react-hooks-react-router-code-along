import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import About from "./components/About.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Messages from "./components/Messages.js";
import Signup from "./components/Signup.js";
import NavBar from "./components/NavBar.js";




function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
  {/* <NavBar/> */}
  <App/>
  
    </BrowserRouter>,
 document.getElementById("root"));
