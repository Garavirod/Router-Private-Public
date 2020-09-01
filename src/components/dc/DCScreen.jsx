import React from "react";
import { HeroeList } from "../heroe/HeroeList";

export const DCScreen = () => {
  return (
    <div>
      <h1>DC Heroes</h1>
      <HeroeList publisher="DC Comics"/>
    </div>
  );
};
