import React, { useReducer, useEffect } from "react";
import { RouterApp } from "./routers/AppRouter";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";

export const HeroesApp = () => {

  // This function verifies local storage and is used by one Reducer
  const init = ()=>{
    return JSON.parse(localStorage.getItem('user')) || {logged:false};
  };

  // init pass infromation to initialState '{}' thys way Reduce can works iwth that infromation
  const [user, dispatch] = useReducer(authReducer,{},init);


    // Creating an effect
    useEffect(()=>{
      localStorage.setItem('user',JSON.stringify(user))
    },[user]);

  return (
    /* 
      For using user's data and modify infromation, it is necessary
      distribute reudecer's tools,through Provider's value
      this way each child inside will be able to use it.
    */
    <AuthContext.Provider value={{user, dispatch }}>
      <RouterApp/>
    </AuthContext.Provider>
  );
};
