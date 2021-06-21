import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../src/container/dashboard/Dashboard";
import Login from "../src/container/auth-module/Login";
import Navbar from "./components/navbar/Navbar";
import Layout from "./container/layout/Layout";
import AddProduct from "./components/form/AddProduct";
import AddAttendance from "./components/form/AddAttendance";
import AddBill from "./components/form/AddBill";
import AddCustomer from "./components/form/AddCustomer";
import AddEmployee from "./components/form/AddEmployee";
import AddExpense from "./components/form/AddExpense";
import AddMaterial from "./components/form/AddMaterial";
import AddOrder from "./components/form/AddOrder";
import ProductTable from "./components/table/ProductTable";

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
        <Route path='/product' exact component={AddProduct} />
        <Route path='/product/list' exact component={ProductTable} />
        <Route path='/material' exact component={AddMaterial} />
        <Route path='/bill' exact component={AddBill} />
        <Route path='/customer' exact component={AddCustomer} />
        <Route path='/employee' exact component={AddEmployee} />
        <Route path='/expense' exact component={AddExpense} />
        <Route path='/order' exact component={AddOrder} />
        <Route path='/attendance' exact component={AddAttendance} />
        <Route path='/order' exact component={AddOrder} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
