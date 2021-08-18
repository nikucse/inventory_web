import React from 'react';
import './App.css';
import Routes from './Routes';
import Login from './container/auth-module/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/app' component={Routes} />
        <Route exact path='/' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
