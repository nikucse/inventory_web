import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/Home';
import Reports from './container/Reports';
import Products from './container/Products';

import Dashboard from "../src/container/dashboard/Dashboard";
import Login from "../src/container/auth-module/Login";
// import Navbar from "./components/navbar/Navbar";
import Layout from "./container/layout/Layout";
import AddProduct from "./components/form/AddProduct";
import AddAttendance from "./components/form/AddAttendance";
import AddBill from "./components/form/AddBill";
import AddCustomer from "./components/form/AddCustomer";
import AddEmployee from "./components/form/AddEmployee";
import AddExpense from "./components/form/AddExpense";
import AddMaterial from "./components/form/AddMaterial";
import AddOrder from "./components/form/AddOrder";
import Footer from "./components/footer/Footer";
import Header from './components/navbar/Header';
import reactDom from 'react-dom';


function App() {
  return (
    <div>
      {/* <Header /> */}

      <Router>
      <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />

          <Route path='/' exact component={Login} />
          <Route path='/dashboard' exact component={Layout} />
          {/* <Route path='/navbar' exact component={avbar} /> */}
          <Route path='/user/dashboard' exact component={Dashboard} />
          <Route path='/admin/dashboard' exact component={Dashboard} />
          <Route path='/super/dashboard' exact component={Dashboard} />
          <Route path='/product' exact component={AddProduct} />
          <Route path='/material' exact component={AddMaterial} />
          <Route path='/bill' exact component={AddBill} />
          <Route path='/customer' exact component={AddCustomer} />
          <Route path='/employee' exact component={AddEmployee} />
          <Route path='/expense' exact component={AddExpense} />
          <Route path='/attendance' exact component={AddAttendance} />
          <Route path='/order' exact component={AddOrder} />
        </Switch>
      </Router>



      <Footer />
    </div>

  );
}

export default App;
