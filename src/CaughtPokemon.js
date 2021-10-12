import React, { useState } from "react";
const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();
  const [caught, setCaught]= useState([]);
  const pokemons  = ["Picachu", "Aegislash", "Baltoy", "Camerupt", "Darumaka", "Eevee", "Gastrodon"];
  const pokemonRandom = Math.floor(Math.random() * pokemons.random);
  function catchPokemon(){
      setCaught((caught) => {
          // console.log(random, pokemons[random]);
          //return currentPokemon + 1;
         // return currentPokemon.concat("Picaxu");
          return caught.concat(pokemons[pokemonRandom]);
     });
      console.log(caught);
  }
  //
  return (
    <div>
        <p>Caught {caught.length} Pokemon on {date} </p>
        <button onClick={catchPokemon}>catchPokemon</button>
        {caught.map((caught, index) => {
            return <li key={index}>{catchPokemon}</li>;
        })}
    </div>
  );
};
export default CaughtPokemon;