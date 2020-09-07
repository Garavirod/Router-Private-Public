import React from "react";
import { Navbar } from "../components/ui/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroeScreen } from "../components/heroe/HeroeScreen";
import { DCScreen } from "../components/dc/DCScreen";
import { SearchScreen } from "../components/search/SearchScreen";

export const DasboardRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DCScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroeScreen} />
          <Route exact path="/search-hero" component={SearchScreen} />
          <Redirect to="/"/> 
        </Switch>
      </div>
    </>
  );
};
