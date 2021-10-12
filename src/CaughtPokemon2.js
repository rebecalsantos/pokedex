import React, { useState } from "react";
const CaughtPokemon2 = ()=> {
    const date = new Date().toLocaleDateString();
    const [caught, setCaught] = useState(["Picachu", "Aegislash", "Baltoy", "Camerupt", "Darumaka", "Eevee", "Gastrodon"]);
    const random = Math.floor(Math.random()*caught.length);
    function catchPokemon(){
       setCaught((caught)=>{
       console.log(random, caught[random]);
           return caught.random;
        });
    }
        return (
        <div>
            <p> Caught {CaughtPokemon2.length} Pokemon on {date}</p>
            <button onClick={catchPokemon}>catchPokemon</button>
            {caught.map((caught,index)=>{
                return <li key={index}>{random}</li>;
            })}
        </div>
    );
    //console.log(caught);
};
export default CaughtPokemon2;