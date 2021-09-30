import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { AuthenticatedRoute, AuthenticationRoute } from './authentication';

const Routes = ({ user }: any) => {
  return (
  <Switch>
    <AuthenticatedRoute exact path="/" user={user} component={Home}></AuthenticatedRoute>
    <AuthenticationRoute exact path="/login" user={user} component={Login}></AuthenticationRoute>
  </Switch>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
})

export default connect(mapStateToProps)(Routes);
