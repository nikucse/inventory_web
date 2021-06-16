import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../src/container/dashboard/Dashboard";
import Login from "../src/container/auth-module/Login";
import Navbar from "./components/navbar/Navbar";
import Layout from "./container/layout/Layout";
// import Register from "./pages/Register";
// import Login from "./pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/layout' exact component={Layout} />
        <Route path='/navbar' exact component={Navbar} />
        <Route path='/user/dashboard' exact component={Dashboard} />
        <Route path='/admin/dashboard' exact component={Dashboard} />
        <Route path='/super/dashboard' exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
