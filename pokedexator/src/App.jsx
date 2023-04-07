import './App.css'
import PokemonCard from './components/pokemonCard'
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
//---------------------------------

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  PokemonCard.propType = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string
    }).isRequired,
  }

  const handleNextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <div>
      <h1>{pokemonList[pokemonIndex].name}</h1>
      <img src={pokemonList[pokemonIndex].imgSrc} alt={pokemonList[pokemonIndex].name} />
      <div>
        {pokemonIndex > 0 && <button onClick={handlePrevClick}>Précédent</button>}
        {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNextClick}>Suivant</button>}
      </div>
    </div>
  );
}

export default App;
