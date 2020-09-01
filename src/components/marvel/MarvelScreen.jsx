import React from "react";
import { HeroeList } from "../heroe/HeroeList";

export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel heroes</h1>
      <HeroeList publisher="Marvel Comics"/>
    </div>
  );
};
