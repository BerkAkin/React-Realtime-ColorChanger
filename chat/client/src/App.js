import Palette from "./components/Palette";
import {initSocket} from './socketApi'
import React from "react";
import {useEffect} from "react";
import './App.css'

function App() {

  useEffect(()=>{
    initSocket();
  },[]);

  return (
    <div className="App">
      <Palette/>
    </div>
  );
}

export default App;
