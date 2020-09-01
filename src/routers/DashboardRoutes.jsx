import React from "react";
import { Navbar } from "../components/ui/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroeScreen } from "../components/heroe/HeroeScreen";
import { DCScreen } from "../components/dc/DCScreen";

export const DasboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DCScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroeScreen} />
          <Redirect path="/marvel"/> 
        </Switch>
      </div>
    </>
  );
};
