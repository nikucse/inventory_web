import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./layouts/Home";
import Admin from "./layouts/Admin";
// import Register from "./user/Register";
// import Login from "./user/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/user/dashboard' exact component={Home} />
        <Route path='/admin/dashboard' exact component={Admin} />
        {/* <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
