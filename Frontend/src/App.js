import React, { useState } from "react";
import Login from "./auth/Login";
import MainPage from "./comps/MainPage";
import Register from "./auth/Register";
import { ToastContainer, toast } from "react-toastify";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={MainPage} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
