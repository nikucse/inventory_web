import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../src/container/dashboard/Dashboard";
import Login from "../src/container/Login";
// import Register from "./pages/Register";
// import Login from "./pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
