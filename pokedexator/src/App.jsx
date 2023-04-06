import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/pokemonCard'
import React from "react";


function App() {
  const pokemonList = [
    { name: "Pikachu", image: "https://www.pokebip.com/pokedex-images/ecarlate-violet/300/25.png?v=ev2" },
    { name: "Charizard", image: "https://www.pokebip.com/pokedex-images/ecarlate-violet/300/6.png?v=ev2" },
    { name: "Squirtle", image: "https://www.pokebip.com/pokedex-images/300/7.png?v=ev2" }
  ];

  return (
    <div>
      {pokemonList.map(pokemon => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
}


export default App;
