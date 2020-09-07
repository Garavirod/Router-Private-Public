import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
 
export const PrivateRoute = ({
    isAuthenticated,
    component:Component,
    ...rest //Just in args , it is the rest of arguments

}) =>{

    
    return(
        <Route 
            {...rest} 
            // This component has all atributes like history and others props
            component={(props) => (
                    // Renderizng the component wuch was pass if user is auth..
                    (isAuthenticated) ?
                    <Component {...props}/> : //...props in where we use it
                    (<Redirect to="/login"/>)
                )
            }
        />
    );
};

// Component's props

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}