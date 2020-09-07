import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DasboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';


export const RouterApp = () => {
  const {user} = useContext(AuthContext);


  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          {/* If I prtected this route I protect all routes insde component */}
          <PrivateRoute 
            path="/" 
            component={DasboardRoutes}
            isAuthenticated={user.logged}
             />
        </Switch>
      </div>
    </Router>
  );
};
