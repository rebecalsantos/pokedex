import React from "react";
const Logo = (props) => {
// function logWhenClicked(){
 //   console.log(props.name);
 //   console.log("hi there");
 // const appName = "Rebeca's Pokedex";
   return (
    <header>
      <h1>"Welcome to the {props.appName}"</h1>
      {/*<img onClick={logWhenClicked} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />*/}
      <img onClick={props.handleClick} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />
    </header>
  );
 };
 export default Logo;