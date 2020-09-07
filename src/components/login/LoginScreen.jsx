import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = (props) => {
  const {history} = props;

  // Using the context
  const {dispatch} = useContext(AuthContext);

  const handleLogin = ()=>{
    // history.push("/");
    dispatch({
      type:types.login,
      payload:{
        name: 'Rodrigo'
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
