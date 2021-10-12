import React, { useState } from "react";
const CaughtPokemon0 = () => {
  const date = new Date().toLocaleDateString();
  const [caught, setCaught]= useState([]);
  function catchPokemon(){
      setCaught((currentPokemon) => {
         return currentPokemon + 1;
         // return currentPokemon.concat("Picaxu");
       });
      console.log(caught);
  }
  return (
    <div>
        <p>Caught {catchPokemon.currentPokemon} Pokemon on {date} </p>
        <button onClick={catchPokemon}>catchPokemon</button>
        {caught.map((caught, index) => {
            return <li key={index}>{catchPokemon}</li>;
        })}
    </div>
  );
};
export default CaughtPokemon0;