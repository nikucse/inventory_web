import React, { Fragment } from "react";
import Login from "../src/container/auth-module/Login";
import Layout from "./container/layout/Layout";
import AddAttendance from "./container/attendance/AddAttendance";
import AddBill from "./container/bill-upload/AddBill";
import AddCustomer from "./components/customer/AddCustomer";
import AddExpense from "./components/form/AddExpense";
import AddMaterial from "./components/form/AddMaterial";
import AddOrder from "./components/form/AddOrder";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reports from "./container/Reports";
import Products from "./container/product/Products";
import Dashboard from "../src/container/dashboard/Dashboard";
import NotFound from "./components/NotFound";
import Employees from "./container/employee/Employees";
import AddEmployee from "./container/employee/AddEmployee";
import AddProduct from "./container/product/AddProduct";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/app/dashboard' component={Layout} />
        <Route  path='/app/add-product' exact component={AddProduct} />
        <Route path='/app/reports' component={Reports} />
        <Route path='/app/products' component={Products} />
        <Route path='/app/login' exact component={Login} />
        <Route path='/app/user/dashboard' exact component={Dashboard} />
        <Route path='/app/admin/dashboard' exact component={Dashboard} />
        <Route path='/app/super/dashboard' exact component={Dashboard} />
        <Route path='/app/material' exact component={AddMaterial} />
        <Route path='/app/bill' exact component={AddBill} />
        <Route path='/app/add-customer' exact component={AddCustomer} />
        <Route path='/app/add-employee' exact component={AddEmployee} />
        <Route path='/app/employees' exact component={Employees} />
        <Route path='/app/expense' exact component={AddExpense} />
        <Route path='/app/attendance' exact component={AddAttendance} />
        <Route path='/app/order' exact component={AddOrder} />
        <Route path='*' exact component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
