import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="container">
      <ToastContainer />
      <Navigation />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
