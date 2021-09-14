import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from '../src/container/auth-module/Login';
import AddAttendance from './container/attendance/AddAttendance';
import AddBill from './container/bill/AddBill';
import Bills from './container/bill/Bills';
import AddClient from './container/client/AddClient';
import Reports from './container/Reports';
import Products from './container/product/Products';
import NotFound from './components/NotFound';
import Employees from './container/employee/Employees';
import AddEmployee from './container/employee/AddEmployee';
import AddProduct from './container/product/AddProduct';
import Clients from './container/client/Clients';
import AddExpense from './container/expense/AddExpense';
import AddMaterial from './container/material/AddMaterial';
import AddOrder from './container/order/AddOrder';
import Orders from './container/order/Orders';
import Expenses from './container/expense/Expenses';
import AddPurchasingProduct from './container/purchase-product/AddPurchasingProduct';
import GetPurchasingProduct from './container/purchase-product/GetPurchasingProduct';
import Register from './container/auth-module/Register';
import Dashboard from './container/dashboard/Dashboard';
import PrivateRoute from './container/core/PrivateRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/app/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/app/register' component={Register} />
        <PrivateRoute path='/app/add-product' exact component={AddProduct} />
        <PrivateRoute
          path='/app/edit-product/:id'
          exact
          component={AddProduct}
        />
        <PrivateRoute path='/app/reports' component={Reports} />
        <PrivateRoute path='/app/products' component={Products} />
        <PrivateRoute path='/app/login' exact component={Login} />
        <PrivateRoute path='/app/material' exact component={AddMaterial} />
        <PrivateRoute path='/app/add-bill' exact component={AddBill} />
        <PrivateRoute path='/app/bills' exact component={Bills} />
        <PrivateRoute path='/app/clients' exact component={Clients} />
        <PrivateRoute path='/app/add-client' exact component={AddClient} />

        <PrivateRoute path='/app/add-employee' exact component={AddEmployee} />
        <PrivateRoute path='/app/employees' exact component={Employees} />
        <PrivateRoute path='/app/add-expense' exact component={AddExpense} />
        <PrivateRoute path='/app/expenses' exact component={Expenses} />
        <PrivateRoute path='/app/attendance' exact component={AddAttendance} />
        <PrivateRoute path='/app/order' exact component={AddOrder} />
        <PrivateRoute path='/app/orders' exact component={Orders} />
        <PrivateRoute
          path='/app/add-purchasing-product'
          exact
          component={AddPurchasingProduct}
        />
        <PrivateRoute
          path='/app/edit-purchasing-product/:id'
          exact
          component={AddPurchasingProduct}
        />
        <PrivateRoute
          path='/app/purchasing-product-list'
          exact
          component={GetPurchasingProduct}
        />
        <Route path='*' exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
