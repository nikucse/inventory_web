import React from "react";
import Login from "../src/container/auth-module/Login";
// import Navbar from "./components/navbar/Navbar";
import Layout from "./container/layout/Layout";
import AddAttendance from "./components/form/AddAttendance";
import AddBill from "./components/form/AddBill";
import AddCustomer from "./components/form/AddCustomer";
import AddEmployee from "./components/form/AddEmployee";
import AddExpense from "./components/form/AddExpense";
import AddMaterial from "./components/form/AddMaterial";
import AddOrder from "./components/form/AddOrder";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reports from "./container/Reports";
import Products from "./container/Products";
import Dashboard from "../src/container/dashboard/Dashboard";
import NotFound from "./components/NotFound";
import Employees from "./container/Employees";
import AddProduct from "./components/form/AddProduct";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/reports' component={Reports} />
        <Route path='/products' component={Products} />
        <Route path='/add-product' exact component={AddProduct} />
        <Route path='/login' exact component={Login} />
        <Route path='/dashboard' exact component={Layout} />
        <Route path='/user/dashboard' exact component={Dashboard} />
        <Route path='/admin/dashboard' exact component={Dashboard} />
        <Route path='/super/dashboard' exact component={Dashboard} />
        <Route path='/material' exact component={AddMaterial} />
        <Route path='/bill' exact component={AddBill} />
        <Route path='/add-customer' exact component={AddCustomer} />
        <Route path='/add-employee' exact component={AddEmployee} />
        <Route path='/employees' exact component={Employees} />
        <Route path='/expense' exact component={AddExpense} />
        <Route path='/attendance' exact component={AddAttendance} />
        <Route path='/order' exact component={AddOrder} />
        <Route path='*' exact component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
