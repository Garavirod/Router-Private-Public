import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import {  DasboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './CustomRoute2';
import { AuthContext } from '../auth/AuthContext';


export const RouterApp = () => {
  // Using the context
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <Router>
      <div>
        <Switch>
          <Route 
            exact 
            path="/login" 
            component={LoginScreen}
             />
          {/* If I prtected this route I protect all routes insde component */}
          <PrivateRoute 
            path="/" 
            isAuthenticated={user.logged}
            component={DasboardRoutes}
                     
          />
        </Switch>
      </div>
    </Router>
  );
};
