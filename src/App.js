import React from "react";
import  Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
//import CaughtPokemon2 from "./CaughtPokemon2";
//import ReactDOM from "react-dom";
//import CaughtPokemon0 from "./CaughtPokemon0";



function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  function logWhenClicked(){
   // console.log(props.name);
    console.log("hi there");
  }
  return (
  <div>
    <Logo appName="Pokedex" handleClick={logWhenClicked}/>
    <BestPokemon name={abilities}/>
    <CaughtPokemon />
  </div>
  );
}
export default App;