import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DasboardRoutes } from './DashboardRoutes';


export const RouterApp = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DasboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
