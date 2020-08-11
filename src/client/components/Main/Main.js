import React from "react";
import StateContextProvider from "../../context/StateContext";
import { getPokeData } from "../../utils/helpers";
import Detail from "../Detail";
import Card from "../Card";
import Header from "../Header";
import "./style.css";

const Main = ({ pokeList }) => {
  const PokemonList = () => (
    <div className="grid-container">
      {Object.keys(pokeList).map((key) => {
        const pokemon = pokeList[key];
        return <Card key={`pkm_${pokemon.id}`} pokemon={pokemon} />;
      })}
    </div>
  );

  return (
    <StateContextProvider>
      <Header />
      <PokemonList />
      <Detail />
    </StateContextProvider>
  );
};

Main.requestPokeData = () => {
  return getPokeData();
};

export default Main;
