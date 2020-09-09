import  React from 'react';
import PropTypes from 'prop-types';
import {Routes, Redirect, Route} from 'react-router-dom';

export const CustomRoute = ({
    isAuth,
    typeRoute,
    component:Component,
    ...rest
}) =>{
     

    // Saving the last path
    localStorage.setItem('lastPath', rest.location.pathname);

    console.log(typeRoute);
    return(
        <Route {...rest}
            component={ (props) =>(
                (typeRoute !== 'PRIVATE')
                ? 
                    (<Component {...props}/>)
                :
                    (isAuth) ? (<Component {...props} />) : (<Redirect to="/login"/>)
            )}    
        />
    )
};

CustomRoute.propTypes = {
    isAuth:PropTypes.bool.isRequired,
    typeRoute:PropTypes.string.isRequired,
    component: PropTypes.func.isRequired
};

