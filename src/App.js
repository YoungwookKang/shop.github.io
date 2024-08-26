import './App.css';

import React, {useEffect} from "react";
import {AppRoutesComponent} from "./AppRoutes";

function App() {
  // let obj = {name: 'kim'}
  // localStorage.setItem('data', JSON.stringify(obj))
  // let callBack = localStorage.getItem('data');
  // console.log(JSON.parse(callBack).name);
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));

  }, []);
  return (
    <div className="App">
      <AppRoutesComponent></AppRoutesComponent>
    </div>
  );
}

export default App;
