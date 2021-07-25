import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Login from "./container/auth-module/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
      <Route path="/app" component={Routes} />
      <Route exact path="/" component={Login} />
      </Switch>
      {/* <Footer /> */}

    </Router>
  );
}

export default App;
