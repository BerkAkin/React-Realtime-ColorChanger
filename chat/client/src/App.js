import Palette from "./components/Palette";
import {initSocket, subscribe} from './socketApi'
import {React, useState} from "react";
import {useEffect} from "react";
import './App.css'

function App() {
  const [activeColor,setActiveColor] = useState('#282c34');


  useEffect(()=>{
    initSocket();
    subscribe((color)=>{
      setActiveColor(color)
    });
  },[]);

  return (
    <div className="App" style={{backgroundColor:activeColor}}>
      <Palette/>
    </div>
  );
}

export default App;
