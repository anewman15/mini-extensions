import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = () => {
  return (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/login" component={Login}></Route>
  </Switch>
  );
};

export default Routes;
