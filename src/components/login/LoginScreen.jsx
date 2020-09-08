import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({history}) => {

  // Using the context
  const {dispatch} = useContext(AuthContext);

  const handleLogin = ()=>{
    dispatch({
      type:types.login,
      payload:{
        name: 'Rodrigo G. A.'
      }
    });
    // Using history props
    history.replace("/"); //No lo guarda en el history
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>
      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Log In
      </button>
    </div>
  );
};
