import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./HomeComponent.js";
import { Player } from "./Player.js";


export const AppRoutesComponent = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/player" element={<Player/>}></Route>
      </Routes>
    </div>
  );
};
